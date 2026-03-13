"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"

interface NavItem {
  title: string
  href: string
}

interface NavSection {
  title: string
  items: NavItem[]
}

const navSections: NavSection[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs/introduction" },
      { title: "Principles", href: "/docs/principles" },
      { title: "Getting Started", href: "/docs/getting-started" },
    ],
  },
  {
    title: "Foundations",
    items: [
      { title: "Typography", href: "/docs/typography" },
      { title: "Colors", href: "/docs/colors" },
      { title: "Spacing", href: "/docs/spacing" },
      { title: "Icons", href: "/docs/icons" },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Accordion", href: "/docs/accordion" },
      { title: "Alert", href: "/docs/alert" },
      { title: "Avatar", href: "/docs/avatar" },
      { title: "Badge", href: "/docs/badge" },
      { title: "Button", href: "/docs/button" },
      { title: "Button Group", href: "/docs/button-group" },
      { title: "Card", href: "/docs/card" },
      { title: "Carousel", href: "/docs/carousel" },
      { title: "Chart", href: "/docs/chart" },
      { title: "Checkbox", href: "/docs/checkbox" },
      { title: "Collapsible", href: "/docs/collapsible" },
      { title: "Context Menu", href: "/docs/context-menu" },
      { title: "Data Table", href: "/docs/data-table" },
      { title: "Date Picker", href: "/docs/date-picker" },
      { title: "Dialog", href: "/docs/dialog" },
      { title: "Drawer", href: "/docs/drawer" },
      { title: "Dropdown Menu", href: "/docs/dropdown-menu" },
      { title: "Empty", href: "/docs/empty" },
      { title: "Field", href: "/docs/field" },
      { title: "Hover Card", href: "/docs/hover-card" },
      { title: "Input", href: "/docs/input" },
      { title: "Input Group", href: "/docs/input-group" },
      { title: "Input OTP", href: "/docs/input-otp" },
      { title: "Keyboard Shortcuts", href: "/docs/keyboard-shortcuts" },
      { title: "Label", href: "/docs/label" },
      { title: "Menubar", href: "/docs/menubar" },
      { title: "Navigation Menu", href: "/docs/navigation-menu" },
      { title: "Pagination", href: "/docs/pagination" },
      { title: "Radio Group", href: "/docs/radio-group" },
      { title: "Resizable", href: "/docs/resizable" },
      { title: "Scroll Area", href: "/docs/scroll-area" },
      { title: "Select", href: "/docs/select" },
      { title: "Separator", href: "/docs/separator" },
      { title: "Sheet", href: "/docs/sheet" },
      { title: "Sidebar", href: "/docs/sidebar" },
      { title: "Skeleton", href: "/docs/skeleton" },
      { title: "Slider", href: "/docs/slider" },
      { title: "Sonner", href: "/docs/sonner" },
      { title: "Spinner", href: "/docs/spinner" },
      { title: "Switch", href: "/docs/switch" },
      { title: "Tabs", href: "/docs/tabs" },
      { title: "Textarea", href: "/docs/textarea" },
      { title: "Toggle", href: "/docs/toggle" },
      { title: "Toggle Group", href: "/docs/toggle-group" },
      { title: "Tooltip", href: "/docs/tooltip" },
    ],
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <ScrollArea className="h-full w-full">
      <div className="space-y-8 px-4 py-6">
        {navSections.map((section) => (
          <div key={section.title} className="space-y-3">
            <h3 className="font-semibold text-sm text-muted-foreground px-2">
              {section.title}
            </h3>
            <nav className="space-y-1">
              {section.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
                    pathname === item.href
                      ? "bg-accent text-accent-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}
