"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Sidebar } from "@/components/sidebar"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  // Close sheet when user clicks a link in the sidebar
  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
          aria-label="Open navigation menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72 p-0">
        <SheetHeader className="px-4 pt-4 pb-2 border-b">
          <SheetTitle className="flex items-center gap-2.5">
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <defs>
                <linearGradient id="echo-grad-dot-m" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7B6CF6" />
                  <stop offset="100%" stopColor="#5B9BF0" />
                </linearGradient>
                <linearGradient id="echo-grad-1-m" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#9B6CF6" />
                  <stop offset="100%" stopColor="#4DB8F0" />
                </linearGradient>
                <linearGradient id="echo-grad-2-m" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#A45CF6" />
                  <stop offset="100%" stopColor="#38D4E8" />
                </linearGradient>
                <linearGradient id="echo-grad-3-m" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#9B6CF6" />
                  <stop offset="100%" stopColor="#4DB8F0" />
                </linearGradient>
              </defs>
              <circle cx="4.5" cy="16" r="2.8" fill="url(#echo-grad-dot-m)" />
              <rect x="10" y="8" width="4.5" height="16" rx="2.25" fill="url(#echo-grad-1-m)" />
              <rect x="17.5" y="3" width="4.5" height="26" rx="2.25" fill="url(#echo-grad-2-m)" />
              <rect x="25" y="7" width="4.5" height="18" rx="2.25" fill="url(#echo-grad-3-m)" />
            </svg>
            <span>Echo</span>
          </SheetTitle>
        </SheetHeader>
        <div className="h-[calc(100vh-4rem)] overflow-y-auto" onClick={handleLinkClick}>
          <Sidebar />
        </div>
      </SheetContent>
    </Sheet>
  )
}
