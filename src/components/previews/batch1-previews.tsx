"use client"
import { useState, useRef } from "react"

// Accordion Preview
export function AccordionPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const items = [
    {
      title: "Is it accessible?",
      content: "Yes. It adheres to the WAI-ARIA design pattern."
    },
    {
      title: "Is it styled?",
      content: "Yes. It comes with default styles that you can customize."
    },
    {
      title: "Is it animated?",
      content: "Yes. It's animated by default, but you can disable it if you prefer."
    }
  ]

  return (
    <div className="w-full max-w-md space-y-0">
      {items.map((item, index) => (
        <div key={index} className="border border-border">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex w-full items-center justify-between px-4 py-3 hover:bg-muted transition-colors"
          >
            <span className="font-medium text-sm">{item.title}</span>
            <svg
              className={`h-4 w-4 transition-transform duration-200 ${
                openIndex === index ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
          <div
            className="overflow-hidden transition-all duration-200"
            style={{
              maxHeight: openIndex === index ? "200px" : "0px"
            }}
          >
            <div className="px-4 py-3 text-sm text-muted-foreground bg-muted/50 border-t border-border">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

// Alert Preview
export function AlertPreview() {
  const [dismissed, setDismissed] = useState(false)

  const alerts = [
    {
      type: "info",
      icon: "ℹ",
      title: "Heads up!",
      description: "You can add components and dependencies to your app using the cli."
    },
    {
      type: "warning",
      icon: "⚠",
      title: "Warning",
      description: "This action cannot be undone. Please be careful."
    },
    {
      type: "destructive",
      icon: "✕",
      title: "Error",
      description: "Your session has expired. Please log in again."
    }
  ]

  const colorMap = {
    info: "bg-blue-50 border-blue-200 text-blue-900",
    warning: "bg-yellow-50 border-yellow-200 text-yellow-900",
    destructive: "bg-red-50 border-red-200 text-red-900"
  }

  return (
    <div className="w-full space-y-3">
      {alerts.map((alert, index) => (
        <div
          key={index}
          className={`border rounded-md p-4 ${colorMap[alert.type as keyof typeof colorMap]}`}
        >
          <div className="flex gap-3">
            <div className="text-lg flex-shrink-0">{alert.icon}</div>
            <div className="flex-1">
              <h5 className="font-semibold text-sm">{alert.title}</h5>
              <p className="text-sm opacity-90">{alert.description}</p>
            </div>
          </div>
        </div>
      ))}

      {!dismissed && (
        <div className="border border-green-200 rounded-md p-4 bg-green-50 text-green-900 flex gap-3">
          <div className="text-lg flex-shrink-0">✓</div>
          <div className="flex-1">
            <h5 className="font-semibold text-sm">Success!</h5>
            <p className="text-sm opacity-90">Your changes have been saved successfully.</p>
          </div>
          <button
            onClick={() => setDismissed(true)}
            className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  )
}

// Avatar Preview
export function AvatarPreview() {
  const avatarSizes = [
    { size: "sm", initials: "AB", color: "bg-purple-500" },
    { size: "md", initials: "CD", color: "bg-blue-500" },
    { size: "lg", initials: "EF", color: "bg-pink-500" }
  ]

  const sizeMap = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-12 h-12 text-base"
  }

  return (
    <div className="space-y-6">
      {/* Individual avatars */}
      <div className="flex gap-4">
        {avatarSizes.map((avatar, index) => (
          <div
            key={index}
            className={`${sizeMap[avatar.size as keyof typeof sizeMap]} ${avatar.color} rounded-full flex items-center justify-center font-semibold text-white`}
          >
            {avatar.initials}
          </div>
        ))}
      </div>

      {/* Fallback state */}
      <div className="flex gap-2 items-center">
        <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground font-semibold">
          ?
        </div>
        <span className="text-sm text-muted-foreground">Fallback avatar</span>
      </div>

      {/* Avatar group with overlap */}
      <div>
        <p className="text-sm text-muted-foreground mb-2">Avatar Group</p>
        <div className="flex -space-x-2">
          {[
            { initials: "AB", color: "bg-purple-500" },
            { initials: "CD", color: "bg-blue-500" },
            { initials: "EF", color: "bg-pink-500" },
            { initials: "GH", color: "bg-green-500" }
          ].map((avatar, index) => (
            <div
              key={index}
              className={`w-10 h-10 ${avatar.color} rounded-full flex items-center justify-center font-semibold text-white text-sm border-2 border-white`}
            >
              {avatar.initials}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Button Group Preview
export function ButtonGroupPreview() {
  const [activeGroup1, setActiveGroup1] = useState<string | null>(null)
  const [activeGroup2, setActiveGroup2] = useState("left")

  return (
    <div className="space-y-6">
      {/* Basic button group */}
      <div>
        <p className="text-sm text-muted-foreground mb-2">Button Group</p>
        <div className="flex border border-border rounded-md overflow-hidden">
          <button className="flex-1 px-4 py-2 border-r border-border hover:bg-muted transition-colors text-sm font-medium">
            Left
          </button>
          <button className="flex-1 px-4 py-2 border-r border-border hover:bg-muted transition-colors text-sm font-medium">
            Center
          </button>
          <button className="flex-1 px-4 py-2 hover:bg-muted transition-colors text-sm font-medium">
            Right
          </button>
        </div>
      </div>

      {/* Toggle button group */}
      <div>
        <p className="text-sm text-muted-foreground mb-2">Toggle Group</p>
        <div className="flex border border-border rounded-md overflow-hidden">
          {["left", "center", "right"].map((option) => (
            <button
              key={option}
              onClick={() => setActiveGroup2(option)}
              className={`flex-1 px-4 py-2 text-sm font-medium transition-colors ${
                option !== "right" ? "border-r border-border" : ""
              } ${
                activeGroup2 === option
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              }`}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </button>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-2">Active: {activeGroup2}</p>
      </div>
    </div>
  )
}

// Carousel Preview
export function CarouselPreview() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    { id: 1, title: "Slide 1", color: "bg-purple-500" },
    { id: 2, title: "Slide 2", color: "bg-blue-500" },
    { id: 3, title: "Slide 3", color: "bg-pink-500" },
    { id: 4, title: "Slide 4", color: "bg-green-500" },
    { id: 5, title: "Slide 5", color: "bg-orange-500" }
  ]

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <div className="w-full">
      {/* Carousel */}
      <div className="relative w-full h-48 bg-muted rounded-md overflow-hidden">
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`w-full h-full flex-shrink-0 ${slide.color} flex items-center justify-center transition-transform duration-300 absolute inset-0`}
              style={{
                transform: `translateX(${(index - currentSlide) * 100}%)`
              }}
            >
              <div className="text-white text-2xl font-bold">{slide.title}</div>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors z-10"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors z-10"
        >
          ›
        </button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? "bg-primary" : "bg-border"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

// Chart Preview
export function ChartPreview() {
  const [animateIn, setAnimateIn] = useState(false)
  const [hoveredBar, setHoveredBar] = useState<number | null>(null)

  const data = [
    { label: "Jan", value: 65 },
    { label: "Feb", value: 59 },
    { label: "Mar", value: 80 },
    { label: "Apr", value: 45 },
    { label: "May", value: 90 }
  ]

  const maxValue = Math.max(...data.map((d) => d.value))

  // Animate on mount
  if (!animateIn) {
    setTimeout(() => setAnimateIn(true), 100)
  }

  return (
    <div className="w-full h-64 flex flex-col">
      <div className="flex-1 flex items-end justify-around px-4 gap-4">
        {data.map((item, index) => {
          const heightPercent = (item.value / maxValue) * 100
          return (
            <div
              key={index}
              className="flex-1 flex flex-col items-center gap-2"
              onMouseEnter={() => setHoveredBar(index)}
              onMouseLeave={() => setHoveredBar(null)}
            >
              {hoveredBar === index && (
                <div className="text-sm font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                  {item.value}
                </div>
              )}
              <div className="w-full bg-primary/20 rounded-t-md relative group">
                <div
                  className="w-full bg-gradient-to-t from-purple-600 to-purple-400 rounded-t-md transition-all duration-500"
                  style={{
                    height: animateIn ? `${heightPercent}%` : "0%"
                  }}
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-purple-500/20 transition-opacity rounded-t-md" />
              </div>
              <span className="text-xs text-muted-foreground mt-2">
                {item.label}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// Collapsible Preview
export function CollapsiblePreview() {
  const [isOpen1, setIsOpen1] = useState(true)
  const [isOpen2, setIsOpen2] = useState(false)

  const CollapsibleItem = ({
    title,
    content,
    isOpen,
    onToggle
  }: {
    title: string
    content: string
    isOpen: boolean
    onToggle: () => void
  }) => (
    <div className="border border-border rounded-md overflow-hidden">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between px-4 py-3 hover:bg-muted transition-colors"
      >
        <span className="font-medium text-sm">{title}</span>
        <svg
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </button>
      <div
        className="overflow-hidden transition-all duration-200"
        style={{
          maxHeight: isOpen ? "200px" : "0px"
        }}
      >
        <div className="px-4 py-3 text-sm text-muted-foreground bg-muted/50 border-t border-border">
          {content}
        </div>
      </div>
    </div>
  )

  return (
    <div className="space-y-3">
      <CollapsibleItem
        title="@peduarte starred 3 repositories"
        content="Radical React is a library for building UIs with React and Tailwind CSS. It's built with TypeScript and comes with full type safety."
        isOpen={isOpen1}
        onToggle={() => setIsOpen1(!isOpen1)}
      />
      <CollapsibleItem
        title="@radix-ui released v0.1.0"
        content="This release includes major improvements to accessibility, performance, and the developer experience."
        isOpen={isOpen2}
        onToggle={() => setIsOpen2(!isOpen2)}
      />
    </div>
  )
}

// Context Menu Preview
export function ContextMenuPreview() {
  const [menuPosition, setMenuPosition] = useState<{
    x: number
    y: number
  } | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault()
    const rect = containerRef.current?.getBoundingClientRect()
    if (rect) {
      setMenuPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      })
    }
  }

  const closeMenu = () => setMenuPosition(null)

  const menuItems = [
    { label: "Copy", icon: "📋" },
    { label: "Paste", icon: "📌" },
    { label: "Delete", icon: "🗑️" },
    { label: "Rename", icon: "✏️" }
  ]

  return (
    <div
      ref={containerRef}
      onContextMenu={handleContextMenu}
      onClick={closeMenu}
      className="relative w-full h-32 border-2 border-dashed border-border rounded-md flex items-center justify-center bg-muted/20 cursor-context-menu"
    >
      <span className="text-muted-foreground">Right-click here</span>

      {menuPosition && (
        <div
          ref={menuRef}
          className="absolute bg-popover border border-border rounded-md shadow-lg z-50"
          style={{
            left: `${menuPosition.x}px`,
            top: `${menuPosition.y}px`
          }}
        >
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation()
                closeMenu()
              }}
              className="w-full px-4 py-2 text-sm text-left hover:bg-muted transition-colors flex items-center gap-2"
            >
              <span>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

// Data Table Preview
export function DataTablePreview() {
  const [sortColumn, setSortColumn] = useState<string | null>(null)
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 3

  const initialData = [
    { id: 1, task: "Design system setup", status: "Completed" },
    { id: 2, task: "Component library", status: "In Progress" },
    { id: 3, task: "Documentation", status: "Pending" },
    { id: 4, task: "Testing suite", status: "In Progress" },
    { id: 5, task: "Deployment", status: "Pending" }
  ]

  let filteredData = initialData.filter((item) =>
    item.task.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (sortColumn) {
    filteredData.sort((a, b) => {
      const aVal = a[sortColumn as keyof typeof a]
      const bVal = b[sortColumn as keyof typeof b]
      const comparison = String(aVal).localeCompare(String(bVal))
      return sortDirection === "asc" ? comparison : -comparison
    })
  }

  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  const paginatedData = filteredData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  )

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }
    setCurrentPage(0)
  }

  const statusColors = {
    "In Progress": "bg-blue-100 text-blue-800",
    Completed: "bg-green-100 text-green-800",
    Pending: "bg-yellow-100 text-yellow-800"
  }

  return (
    <div className="space-y-4 w-full">
      {/* Search */}
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value)
          setCurrentPage(0)
        }}
        className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm"
      />

      {/* Table */}
      <div className="border border-border rounded-md overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted border-b border-border">
            <tr>
              <th
                onClick={() => handleSort("task")}
                className="px-4 py-3 text-left font-semibold cursor-pointer hover:bg-muted/80 transition-colors"
              >
                <div className="flex items-center gap-2">
                  Task
                  {sortColumn === "task" && (
                    <span className="text-primary">
                      {sortDirection === "asc" ? "↑" : "↓"}
                    </span>
                  )}
                </div>
              </th>
              <th
                onClick={() => handleSort("status")}
                className="px-4 py-3 text-left font-semibold cursor-pointer hover:bg-muted/80 transition-colors"
              >
                <div className="flex items-center gap-2">
                  Status
                  {sortColumn === "status" && (
                    <span className="text-primary">
                      {sortDirection === "asc" ? "↑" : "↓"}
                    </span>
                  )}
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row) => (
              <tr
                key={row.id}
                className="border-b border-border hover:bg-muted/50 transition-colors"
              >
                <td className="px-4 py-3">{row.task}</td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                      statusColors[row.status as keyof typeof statusColors]
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>
          {filteredData.length === 0
            ? "No results"
            : `${currentPage * itemsPerPage + 1}-${Math.min(
                (currentPage + 1) * itemsPerPage,
                filteredData.length
              )} of ${filteredData.length}`}
        </span>
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
            disabled={currentPage === 0}
            className="px-3 py-1 border border-border rounded-md hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
            disabled={currentPage >= totalPages - 1}
            className="px-3 py-1 border border-border rounded-md hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
