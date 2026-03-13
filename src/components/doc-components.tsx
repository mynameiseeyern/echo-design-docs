"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Copy, Check } from "lucide-react"
import { cn } from "@/lib/utils"

/* ============================================
   Content Section with anchor ID
   ============================================ */
export function ContentSection({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="space-y-4 scroll-mt-24">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      {children}
    </section>
  )
}

/* ============================================
   Example Block with Preview and Code
   ============================================ */
interface ExampleBlockProps {
  title?: string
  description?: string
  preview: React.ReactNode
  code: string
}

export function ExampleBlock({
  title,
  description,
  preview,
  code,
}: ExampleBlockProps) {
  const [isCodeOpen, setIsCodeOpen] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <div className="border rounded-lg overflow-hidden bg-card">
      {/* Header */}
      {(title || description) && (
        <div className="border-b px-6 py-4 bg-muted/30">
          {title && <h3 className="font-semibold text-sm mb-1">{title}</h3>}
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      )}

      {/* Preview */}
      <div className="px-6 py-8 flex items-center justify-center min-h-64 bg-background">
        <div className="flex items-center justify-center">{preview}</div>
      </div>

      {/* Code Toggle and Display */}
      <div className="border-t bg-card">
        <button
          onClick={() => setIsCodeOpen(!isCodeOpen)}
          className="w-full px-6 py-3 flex items-center justify-between text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:bg-muted/50"
        >
          <span>Code</span>
          <motion.div
            animate={{ rotate: isCodeOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </button>

        <AnimatePresence>
          {isCodeOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="border-t bg-muted/30 overflow-hidden"
            >
              <div className="px-6 py-4 space-y-3">
                {/* Copy Button */}
                <button
                  onClick={copyCode}
                  className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                >
                  {isCopied ? (
                    <>
                      <Check className="h-3 w-3" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" />
                      Copy code
                    </>
                  )}
                </button>

                {/* Code Block */}
                <pre className="bg-background rounded-lg p-4 overflow-x-auto text-xs leading-relaxed">
                  <code className="text-muted-foreground font-mono">
                    {code}
                  </code>
                </pre>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

/* ============================================
   Do's and Don'ts with side-by-side layout
   ============================================ */
interface DosDotsItem {
  description: string
  preview?: React.ReactNode
}

interface DosDontsProps {
  dos: DosDotsItem[]
  donts: DosDotsItem[]
}

export function DosDonts({ dos, donts }: DosDontsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Do's Column */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 pb-4 border-b">
          <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-950 flex items-center justify-center">
            <span className="text-green-600 dark:text-green-400 font-bold text-sm">✓</span>
          </div>
          <h3 className="font-semibold text-sm text-green-700 dark:text-green-400">
            Do
          </h3>
        </div>
        <div className="space-y-4">
          {dos.map((item, i) => (
            <div key={i} className="space-y-2">
              {item.preview && (
                <div className="border rounded-lg p-4 bg-card">{item.preview}</div>
              )}
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Don'ts Column */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 pb-4 border-b">
          <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-950 flex items-center justify-center">
            <span className="text-red-600 dark:text-red-400 font-bold text-sm">✕</span>
          </div>
          <h3 className="font-semibold text-sm text-red-700 dark:text-red-400">
            Don't
          </h3>
        </div>
        <div className="space-y-4">
          {donts.map((item, i) => (
            <div key={i} className="space-y-2">
              {item.preview && (
                <div className="border rounded-lg p-4 bg-card opacity-60">
                  {item.preview}
                </div>
              )}
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ============================================
   Component Page Tabs
   ============================================ */
interface ComponentPageTabsProps {
  activeTab: string
  slug: string
}

export function ComponentPageTabs({ activeTab, slug }: ComponentPageTabsProps) {
  const tabs = ["Examples", "Usage", "Code"]

  return (
    <div className="border-b flex gap-8">
      {tabs.map((tab) => {
        const tabSlug = tab.toLowerCase()
        const isActive = activeTab === tabSlug || (activeTab === "" && tab === "Examples")

        return (
          <a
            key={tab}
            href={`/docs/${slug}${tabSlug !== "examples" ? `?tab=${tabSlug}` : ""}`}
            className={cn(
              "px-1 py-3 text-sm font-medium border-b-2 transition-colors relative",
              isActive
                ? "border-primary text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            {tab}
          </a>
        )
      })}
    </div>
  )
}

/* ============================================
   Props Table
   ============================================ */
interface PropDef {
  name: string
  type: string
  default?: string
  description: string
}

interface ComponentProps {
  name: string
  props: PropDef[]
}

interface PropsTableProps {
  props?: PropDef[] | ComponentProps[]
}
export function PropsTable({ props = [] }: PropsTableProps) {
  if (!props || props.length === 0) return null
  
  // Check if this is an array of ComponentProps (has 'props' property on first item)
  const isComponentFormat = Array.isArray(props) && props.length > 0 && 'props' in (props[0] as any)
  
  if (isComponentFormat) {
    // Render multiple component tables
    return (
      <div className="space-y-6">
        {(props as ComponentProps[]).map((component) => (
          <div key={component.name}>
            <h4 className="text-lg font-semibold mb-3">{component.name}</h4>
            <div className="overflow-x-auto border rounded-lg">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="px-6 py-3 text-left font-semibold">Property</th>
                    <th className="px-6 py-3 text-left font-semibold">Type</th>
                    <th className="px-6 py-3 text-left font-semibold">Default</th>
                    <th className="px-6 py-3 text-left font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {component.props.map((prop) => (
                    <tr key={prop.name} className="border-b hover:bg-muted/30 transition-colors">
                      <td className="px-6 py-4">
                        <code className="bg-muted px-2 py-1 rounded text-xs font-mono text-primary">
                          {prop.name}
                        </code>
                      </td>
                      <td className="px-6 py-4">
                        <code className="text-xs font-mono text-muted-foreground">
                          {prop.type}
                        </code>
                      </td>
                      <td className="px-6 py-4">
                        {prop.default ? (
                          <code className="text-xs font-mono text-muted-foreground">
                            {prop.default}
                          </code>
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        {prop.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    )
  }
  
  // Render single table for PropDef[] format
  return (
    <div className="overflow-x-auto border rounded-lg">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b bg-muted/50">
            <th className="px-6 py-3 text-left font-semibold">Property</th>
            <th className="px-6 py-3 text-left font-semibold">Type</th>
            <th className="px-6 py-3 text-left font-semibold">Default</th>
            <th className="px-6 py-3 text-left font-semibold">Description</th>
          </tr>
        </thead>
        <tbody>
          {(props as PropDef[]).map((prop) => (
            <tr key={prop.name} className="border-b hover:bg-muted/30 transition-colors">
              <td className="px-6 py-4">
                <code className="bg-muted px-2 py-1 rounded text-xs font-mono text-primary">
                  {prop.name}
                </code>
              </td>
              <td className="px-6 py-4">
                <code className="text-xs font-mono text-muted-foreground">
                  {prop.type}
                </code>
              </td>
              <td className="px-6 py-4">
                {prop.default ? (
                  <code className="text-xs font-mono text-muted-foreground">
                    {prop.default}
                  </code>
                ) : (
                  <span className="text-muted-foreground">-</span>
                )}
              </td>
              <td className="px-6 py-4 text-muted-foreground">
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/* ============================================
   Legacy Components (kept for compatibility)
   ============================================ */

export function DocSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      {children}
    </section>
  )
}

export function Preview({ children }: { children: React.ReactNode }) {
  return (
    <div className="border rounded-lg p-8 bg-card">
      {children}
    </div>
  )
}

export function Anatomy({ items }: { items: Record<string, string> }) {
  return (
    <div className="space-y-2">
      {Object.entries(items).map(([part, desc]) => (
        <div key={part} className="flex gap-4">
          <div className="font-mono text-sm font-semibold text-primary min-w-32 shrink-0">
            {part}
          </div>
          <div className="text-sm text-muted-foreground">{desc}</div>
        </div>
      ))}
    </div>
  )
}

export function VariantsTable({ items }: { items: Record<string, string> }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {Object.entries(items).map(([name, desc]) => (
        <div key={name} className="border rounded-lg p-3 bg-card">
          <p className="text-sm">
            <span className="font-semibold text-primary">{name}</span> — {desc}
          </p>
        </div>
      ))}
    </div>
  )
}

export function A11yList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-sm text-muted-foreground">
      {items.map((item, i) => (
        <li key={i}>• {item}</li>
      ))}
    </ul>
  )
}

export function CodeExample({ code }: { code: string }) {
  return (
    <pre className="bg-muted rounded-lg p-4 overflow-x-auto text-sm">
      <code>{code}</code>
    </pre>
  )
}

export function ComponentBadges({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
        >
          {item}
        </span>
      ))}
    </div>
  )
}
