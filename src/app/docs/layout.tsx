import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        {/* Left Sidebar Navigation — sticky, scrolls independently */}
        <aside className="hidden lg:block w-72 shrink-0 border-r border-border bg-background">
          <div className="sticky top-14 sm:top-16 h-[calc(100vh-3.5rem)] sm:h-[calc(100vh-4rem)] overflow-y-auto">
            <Sidebar />
          </div>
        </aside>

        {/* Main Content Area — window is the scroll container */}
        <main className="flex-1 min-w-0">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
