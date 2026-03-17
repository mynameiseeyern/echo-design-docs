import Link from "next/link"
import { Search } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { MobileNav } from "./mobile-nav"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-2">
          {/* Mobile hamburger menu */}
          <MobileNav />

          <Link href="/" className="flex items-center gap-2.5 font-bold text-lg">
            {/* Echo logo — soundwave bars */}
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <defs>
                <linearGradient id="echo-grad-dot" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7B6CF6" />
                  <stop offset="100%" stopColor="#5B9BF0" />
                </linearGradient>
                <linearGradient id="echo-grad-1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#9B6CF6" />
                  <stop offset="100%" stopColor="#4DB8F0" />
                </linearGradient>
                <linearGradient id="echo-grad-2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#A45CF6" />
                  <stop offset="100%" stopColor="#38D4E8" />
                </linearGradient>
                <linearGradient id="echo-grad-3" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#9B6CF6" />
                  <stop offset="100%" stopColor="#4DB8F0" />
                </linearGradient>
              </defs>
              {/* Dot */}
              <circle cx="4.5" cy="16" r="2.8" fill="url(#echo-grad-dot)" />
              {/* Short bar */}
              <rect x="10" y="8" width="4.5" height="16" rx="2.25" fill="url(#echo-grad-1)" />
              {/* Tall bar */}
              <rect x="17.5" y="3" width="4.5" height="26" rx="2.25" fill="url(#echo-grad-2)" />
              {/* Medium bar */}
              <rect x="25" y="7" width="4.5" height="18" rx="2.25" fill="url(#echo-grad-3)" />
            </svg>
            <span className="hidden sm:inline">Echo</span>
          </Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 ml-auto">
          {/* Search */}
          <div className="hidden md:flex items-center gap-2 bg-muted rounded-md px-3 py-2 text-sm text-muted-foreground">
            <Search className="h-4 w-4" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-0 outline-none w-40 placeholder-muted-foreground"
              disabled
            />
          </div>

          {/* Links */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="https://github.com/mynameiseeyern/echo-design-docs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.figma.com/design/H2PTqn3CQeaxY0t9XijFnI/Echo-Design-System"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Figma
            </a>
          </div>

          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
