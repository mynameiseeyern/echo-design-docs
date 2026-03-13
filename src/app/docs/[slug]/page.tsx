"use client"

import { useParams } from "next/navigation"
import { notFound } from "next/navigation"
import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { getDocContent, type DocContent } from "@/lib/docs-content"
import { TableOfContents, type TOCItem } from "@/components/table-of-contents"

export default function DocPage() {
  const params = useParams()
  const slug = params.slug as string
  const content = getDocContent(slug)
  const contentRef = useRef<HTMLDivElement>(null)

  const [tocItems, setTocItems] = useState<TOCItem[]>([])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!contentRef.current) return

      const items: TOCItem[] = []

      // For React component pages: ContentSection renders <section id="..."><h2>Title</h2>
      // For HTML pages: headings are raw <h2> inside the content div
      // Strategy: find all section[id] and standalone h2[id] inside the content area only

      const container = contentRef.current

      // First, collect all <section id="..."> from ContentSection components
      const sections = container.querySelectorAll("section[id]")
      sections.forEach((section) => {
        const id = section.id
        // Skip sections without a meaningful ID
        if (!id || id.startsWith("radix-")) return

        // Get the heading text from the first h2 or h3 inside
        const heading = section.querySelector("h2, h3")
        if (heading) {
          items.push({
            id,
            title: heading.textContent || "",
            level: heading.tagName === "H3" ? 3 : 2,
          })
        }
      })

      // If no sections found (HTML content pages), fall back to h2 elements
      if (items.length === 0) {
        const headings = container.querySelectorAll("h2")
        headings.forEach((heading, index) => {
          if (!heading.id) {
            heading.id = `section-${index}`
          }
          items.push({
            id: heading.id,
            title: heading.textContent || "",
            level: 2,
          })
        })
      }

      setTocItems(items)
    }, 300)
    return () => clearTimeout(timer)
  }, [slug])

  if (!content) {
    notFound()
  }

  return (
    <div className="flex gap-8">
      <motion.div
        key={slug}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex-1 min-w-0 space-y-8"
      >
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-2">
            {content.title}
          </h1>
          <p className="text-lg text-muted-foreground">
            {content.description}
          </p>
        </div>

        <div ref={contentRef}>
          {content.component ? (
            <div className="space-y-12">{content.component}</div>
          ) : (
            <div dangerouslySetInnerHTML={{ __html: content.html }} />
          )}
        </div>
      </motion.div>

      {tocItems.length > 0 && <TableOfContents items={tocItems} />}
    </div>
  )
}
