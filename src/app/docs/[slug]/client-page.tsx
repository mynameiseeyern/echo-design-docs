"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { DocContent } from "@/lib/docs-content"
import { TableOfContents, type TOCItem } from "@/components/table-of-contents"

interface ClientDocPageProps {
  slug: string
  content: DocContent
}

export function ClientDocPage({ content }: ClientDocPageProps) {
  const [tocItems, setTocItems] = useState<TOCItem[]>([])

  useEffect(() => {
    // Extract headings from the document
    const timer = setTimeout(() => {
      extractHeadings()
    }, 100)

    return () => clearTimeout(timer)
  }, [content])

  const extractHeadings = () => {
    const headings = document.querySelectorAll("h2, h3")
    const items: TOCItem[] = []

    headings.forEach((heading, index) => {
      if (!heading.id) {
        heading.id = `heading-${index}`
      }
      const level = parseInt(heading.tagName[1])
      items.push({
        id: heading.id,
        title: heading.textContent || "",
        level,
      })
    })

    setTocItems(items)
  }

  return (
    <div className="flex gap-8">
      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex-1 space-y-8"
      >
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-2">
            {content.title}
          </h1>
          <p className="text-lg text-muted-foreground">
            {content.description}
          </p>
        </div>

        {content.component ? (
          <div className="space-y-12">
            {content.component}
          </div>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: content.html }} />
        )}
      </motion.div>

      {/* Table of Contents */}
      {tocItems.length > 0 && <TableOfContents items={tocItems} />}
    </div>
  )
}
