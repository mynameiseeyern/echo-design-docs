"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export interface TOCItem {
  id: string
  title: string
  level: number
}

interface TableOfContentsProps {
  items: TOCItem[]
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    if (items.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first intersecting entry
        const visible = entries.find((e) => e.isIntersecting)
        if (visible) {
          setActiveId(visible.target.id)
        }
      },
      { rootMargin: "-100px 0px -66%" }
    )

    items.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [items])

  const handleClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      // Get the element's position and scroll with offset for sticky header (56px + 24px padding)
      const top = element.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: "smooth" })
      setActiveId(id)
    }
  }

  if (items.length === 0) {
    return null
  }

  return (
    <aside className="hidden xl:block w-48 shrink-0">
      <div className="sticky top-20 max-h-[calc(100vh-80px)] overflow-y-auto px-4 py-6 space-y-4">
        <h3 className="font-semibold text-sm text-foreground">Contents</h3>
        <nav className="space-y-1 text-sm">
          {items.map((item) => {
            const isActive = activeId === item.id
            const isLevel3 = item.level === 3

            return (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={cn(
                  "block text-left w-full rounded-md px-3 py-1.5 transition-colors relative text-[13px] leading-snug",
                  isLevel3 && "ml-3",
                  isActive
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="toc-highlight"
                    className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary rounded-r"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="block pl-1">{item.title}</span>
              </button>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
