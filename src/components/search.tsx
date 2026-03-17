"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { useRouter } from "next/navigation"
import { Search, FileText, Palette, LayoutGrid, Sparkles, BookOpen } from "lucide-react"
import { searchIndex, type SearchItem } from "@/lib/search-data"
import { cn } from "@/lib/utils"

const categoryIcons: Record<string, React.ReactNode> = {
  "Getting Started": <BookOpen className="h-3.5 w-3.5 text-muted-foreground" />,
  "Foundations": <Palette className="h-3.5 w-3.5 text-muted-foreground" />,
  "Components": <LayoutGrid className="h-3.5 w-3.5 text-muted-foreground" />,
  "Patterns": <Sparkles className="h-3.5 w-3.5 text-muted-foreground" />,
  "Resources": <FileText className="h-3.5 w-3.5 text-muted-foreground" />,
}

function filterResults(query: string): SearchItem[] {
  if (!query.trim()) return []
  const q = query.toLowerCase()
  return searchIndex.filter(
    (item) =>
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q)
  )
}

function groupByCategory(items: SearchItem[]): Record<string, SearchItem[]> {
  const groups: Record<string, SearchItem[]> = {}
  for (const item of items) {
    if (!groups[item.category]) groups[item.category] = []
    groups[item.category].push(item)
  }
  return groups
}

export function SearchInput() {
  const [query, setQuery] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const results = filterResults(query)
  const grouped = groupByCategory(results)
  const flatResults = results // for keyboard nav indexing

  const close = useCallback(() => {
    setIsOpen(false)
    setQuery("")
    setActiveIndex(-1)
    inputRef.current?.blur()
  }, [])

  const navigateTo = useCallback(
    (href: string) => {
      close()
      router.push(href)
    },
    [close, router]
  )

  // Global Cmd+K / Ctrl+K shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(e.target as Node)
      ) {
        close()
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, close])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      close()
      return
    }

    if (e.key === "ArrowDown") {
      e.preventDefault()
      setActiveIndex((prev) => (prev < flatResults.length - 1 ? prev + 1 : 0))
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : flatResults.length - 1))
    } else if (e.key === "Enter" && activeIndex >= 0 && flatResults[activeIndex]) {
      e.preventDefault()
      navigateTo(flatResults[activeIndex].href)
    }
  }

  // Scroll active item into view
  useEffect(() => {
    if (activeIndex >= 0 && dropdownRef.current) {
      const items = dropdownRef.current.querySelectorAll("[data-search-item]")
      items[activeIndex]?.scrollIntoView({ block: "nearest" })
    }
  }, [activeIndex])

  return (
    <div className="relative">
      {/* Search input trigger */}
      <div className="flex items-center gap-2 bg-muted rounded-md px-3 py-2 text-sm text-muted-foreground">
        <Search className="h-4 w-4 shrink-0" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setIsOpen(true)
            setActiveIndex(-1)
          }}
          onFocus={() => {
            if (query.trim()) setIsOpen(true)
          }}
          onKeyDown={handleKeyDown}
          className="bg-transparent border-0 outline-none w-40 placeholder-muted-foreground"
        />
        <kbd className="hidden lg:inline-flex items-center gap-0.5 rounded border bg-background px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
          <span className="text-xs">⌘</span>K
        </kbd>
      </div>

      {/* Dropdown results */}
      {isOpen && query.trim() && (
        <div
          ref={dropdownRef}
          className="absolute top-full right-0 mt-2 w-80 sm:w-96 max-h-[min(400px,60vh)] overflow-y-auto rounded-lg border bg-popover shadow-lg z-50"
        >
          {flatResults.length === 0 ? (
            <div className="px-4 py-8 text-center text-sm text-muted-foreground">
              No results for &ldquo;{query}&rdquo;
            </div>
          ) : (
            <div className="py-2">
              {Object.entries(grouped).map(([category, items]) => (
                <div key={category}>
                  <div className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-muted-foreground">
                    {categoryIcons[category]}
                    <span>{category}</span>
                  </div>
                  {items.map((item) => {
                    const globalIdx = flatResults.indexOf(item)
                    return (
                      <button
                        key={item.href}
                        data-search-item
                        onClick={() => navigateTo(item.href)}
                        onMouseEnter={() => setActiveIndex(globalIdx)}
                        className={cn(
                          "w-full text-left px-3 py-2 flex flex-col gap-0.5 transition-colors",
                          globalIdx === activeIndex
                            ? "bg-accent text-accent-foreground"
                            : "hover:bg-accent/50"
                        )}
                      >
                        <span className="text-sm font-medium">{item.title}</span>
                        <span className="text-xs text-muted-foreground line-clamp-1">
                          {item.description}
                        </span>
                      </button>
                    )
                  })}
                </div>
              ))}
              <div className="px-3 py-2 text-[11px] text-muted-foreground border-t mt-1">
                {flatResults.length} result{flatResults.length !== 1 ? "s" : ""} · ↑↓ navigate · ↵ open · esc close
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

/** Compact search button for mobile — opens the same input in a top sheet */
export function MobileSearchTrigger() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [activeIndex, setActiveIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const results = filterResults(query)
  const grouped = groupByCategory(results)

  const close = useCallback(() => {
    setIsOpen(false)
    setQuery("")
    setActiveIndex(-1)
  }, [])

  const navigateTo = useCallback(
    (href: string) => {
      close()
      router.push(href)
    },
    [close, router]
  )

  // Focus input when opening
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  // Close on escape
  useEffect(() => {
    if (!isOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
    }
    document.addEventListener("keydown", handleKey)
    return () => document.removeEventListener("keydown", handleKey)
  }, [isOpen, close])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault()
      setActiveIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0))
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1))
    } else if (e.key === "Enter" && activeIndex >= 0 && results[activeIndex]) {
      e.preventDefault()
      navigateTo(results[activeIndex].href)
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
        aria-label="Search"
      >
        <Search className="h-5 w-5" />
      </button>

      {/* Full-screen mobile search overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-sm md:hidden">
          <div className="flex flex-col h-full">
            {/* Search header */}
            <div className="flex items-center gap-3 px-4 py-3 border-b">
              <Search className="h-5 w-5 text-muted-foreground shrink-0" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search documentation..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value)
                  setActiveIndex(-1)
                }}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent border-0 outline-none text-base placeholder-muted-foreground"
              />
              <button
                onClick={close}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Cancel
              </button>
            </div>

            {/* Results */}
            <div className="flex-1 overflow-y-auto">
              {query.trim() && results.length === 0 && (
                <div className="px-4 py-12 text-center text-sm text-muted-foreground">
                  No results for &ldquo;{query}&rdquo;
                </div>
              )}

              {!query.trim() && (
                <div className="px-4 py-12 text-center text-sm text-muted-foreground">
                  Start typing to search...
                </div>
              )}

              {query.trim() && results.length > 0 && (
                <div className="py-2">
                  {Object.entries(grouped).map(([category, items]) => (
                    <div key={category}>
                      <div className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-muted-foreground">
                        {categoryIcons[category]}
                        <span>{category}</span>
                      </div>
                      {items.map((item) => {
                        const globalIdx = results.indexOf(item)
                        return (
                          <button
                            key={item.href}
                            onClick={() => navigateTo(item.href)}
                            className={cn(
                              "w-full text-left px-4 py-3 flex flex-col gap-0.5 transition-colors",
                              globalIdx === activeIndex
                                ? "bg-accent text-accent-foreground"
                                : "hover:bg-accent/50"
                            )}
                          >
                            <span className="text-sm font-medium">{item.title}</span>
                            <span className="text-xs text-muted-foreground line-clamp-1">
                              {item.description}
                            </span>
                          </button>
                        )
                      })}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
