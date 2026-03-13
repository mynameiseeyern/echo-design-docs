import Link from "next/link"
import { Search } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500" />
            <span className="hidden sm:inline">Echo</span>
          </Link>
        </div>

        <div className="flex items-center gap-4 ml-auto">
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
