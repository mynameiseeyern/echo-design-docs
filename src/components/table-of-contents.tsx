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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
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
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (items.length === 0) {
    return null
  }

  return (
    <aside className="hidden xl:block w-48 sticky top-20 max-h-[calc(100vh-80px)] overflow-y-auto">
      <div className="px-4 py-6 space-y-4">
        <h3 className="font-semibold text-sm text-foreground">Contents</h3>
        <nav className="space-y-2 text-sm">
          {items.map((item) => {
            const isActive = activeId === item.id
            const isLevel3 = item.level === 3

            return (
              <motion.button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={cn(
                  "block text-left w-full rounded-md px-3 py-1.5 transition-all relative",
                  isLevel3 && "ml-4",
                  isActive
                    ? "text-primary font-medium bg-primary/5"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
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
              </motion.button>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
