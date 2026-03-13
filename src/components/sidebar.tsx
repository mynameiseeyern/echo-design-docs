"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"

interface NavItem {
  title: string
  href: string
}

interface ComponentCategory {
  title: string
  items: NavItem[]
}

interface NavSection {
  title: string
  items?: NavItem[]
  categories?: ComponentCategory[]
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
    categories: [
      {
        title: "Forms and input",
        items: [
          { title: "Button", href: "/docs/button" },
          { title: "Checkbox", href: "/docs/checkbox" },
          { title: "Input", href: "/docs/input" },
          { title: "Input Group", href: "/docs/input-group" },
          { title: "Input OTP", href: "/docs/input-otp" },
          { title: "Field", href: "/docs/field" },
          { title: "Label", href: "/docs/label" },
          { title: "Radio Group", href: "/docs/radio-group" },
          { title: "Select", href: "/docs/select" },
          { title: "Slider", href: "/docs/slider" },
          { title: "Switch", href: "/docs/switch" },
          { title: "Textarea", href: "/docs/textarea" },
          { title: "Toggle", href: "/docs/toggle" },
          { title: "Toggle Group", href: "/docs/toggle-group" },
          { title: "Date Picker", href: "/docs/date-picker" },
        ],
      },
      {
        title: "Navigation",
        items: [
          { title: "Menubar", href: "/docs/menubar" },
          { title: "Navigation Menu", href: "/docs/navigation-menu" },
          { title: "Pagination", href: "/docs/pagination" },
          { title: "Tabs", href: "/docs/tabs" },
          { title: "Sidebar", href: "/docs/sidebar" },
        ],
      },
      {
        title: "Feedback",
        items: [
          { title: "Alert", href: "/docs/alert" },
          { title: "Sonner", href: "/docs/sonner" },
          { title: "Spinner", href: "/docs/spinner" },
          { title: "Skeleton", href: "/docs/skeleton" },
          { title: "Empty", href: "/docs/empty" },
        ],
      },
      {
        title: "Overlay",
        items: [
          { title: "Dialog", href: "/docs/dialog" },
          { title: "Drawer", href: "/docs/drawer" },
          { title: "Dropdown Menu", href: "/docs/dropdown-menu" },
          { title: "Context Menu", href: "/docs/context-menu" },
          { title: "Hover Card", href: "/docs/hover-card" },
          { title: "Popover", href: "/docs/popover" },
          { title: "Sheet", href: "/docs/sheet" },
          { title: "Tooltip", href: "/docs/tooltip" },
        ],
      },
      {
        title: "Data display",
        items: [
          { title: "Accordion", href: "/docs/accordion" },
          { title: "Avatar", href: "/docs/avatar" },
          { title: "Badge", href: "/docs/badge" },
          { title: "Card", href: "/docs/card" },
          { title: "Carousel", href: "/docs/carousel" },
          { title: "Chart", href: "/docs/chart" },
          { title: "Collapsible", href: "/docs/collapsible" },
          { title: "Data Table", href: "/docs/data-table" },
          { title: "Separator", href: "/docs/separator" },
          { title: "Scroll Area", href: "/docs/scroll-area" },
        ],
      },
      {
        title: "Utility",
        items: [
          { title: "Keyboard Shortcuts", href: "/docs/keyboard-shortcuts" },
          { title: "Resizable", href: "/docs/resizable" },
        ],
      },
    ],
  },
  {
    title: "Patterns",
    items: [
      { title: "Sign In", href: "/docs/sign-in-pattern" },
      { title: "Dashboard Overview", href: "/docs/dashboard-overview-pattern" },
      { title: "Queues Table", href: "/docs/queues-table-pattern" },
      { title: "Queues Chart", href: "/docs/queues-chart-pattern" },
    ],
  },
  {
    title: "Resources",
    items: [
      { title: "Inspiration", href: "/docs/inspiration" },
    ],
  },
]

interface CategoryItemProps {
  category: ComponentCategory
  pathname: string
}

function CategoryItem({ category, pathname }: CategoryItemProps) {
  const [isOpen, setIsOpen] = useState(true)
  const isAnyActive = category.items.some((item) => pathname === item.href)

  return (
    <div key={category.title}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-3 py-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent/50"
      >
        <span>{category.title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 0 : -90 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-3 w-3" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <nav className="space-y-1 ml-1 pl-2 border-l border-border">
              {category.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block rounded-md px-3 py-1.5 text-xs transition-colors relative",
                    pathname === item.href
                      ? "text-primary font-medium bg-primary/5"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  )}
                >
                  {pathname === item.href && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-primary rounded-r" />
                  )}
                  <span className="block pl-1">{item.title}</span>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

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

            {section.items && (
              <nav className="space-y-1">
                {section.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "block rounded-md px-3 py-1.5 text-sm transition-colors relative",
                      pathname === item.href
                        ? "text-primary font-medium bg-primary/5"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                    )}
                  >
                    {pathname === item.href && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-primary rounded-r" />
                    )}
                    <span className="block pl-1">{item.title}</span>
                  </Link>
                ))}
              </nav>
            )}

            {section.categories && (
              <div className="space-y-2">
                {section.categories.map((category) => (
                  <CategoryItem
                    key={category.title}
                    category={category}
                    pathname={pathname}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}
