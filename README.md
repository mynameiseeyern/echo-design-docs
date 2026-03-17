# Echo Design System Documentation

A comprehensive design system documentation site for **Echo**, an AI-powered Interaction Intelligence Platform for contact centres. Built with Next.js 16, Tailwind CSS v4, and shadcn/ui components.

**Live site**: Deployed on Vercel from `main` branch.

## Features

- **57 Documentation Pages**: Foundations, 40+ components, patterns, and resources — all fully documented
- **Live Component Previews**: Interactive examples with copy-pasteable code for every component
- **Dynamic Search**: Instant search across all pages with keyboard navigation (Cmd+K / Ctrl+K)
- **Responsive Design**: Mobile-friendly with hamburger nav drawer, fullscreen mobile search, and adaptive layouts
- **Dark Mode**: Light and dark themes with Echo brand tokens
- **Table of Contents**: Auto-generated sticky TOC sidebar with scroll-aware highlighting
- **Accessible**: WCAG 2.1 AA compliant with proper ARIA attributes and keyboard support
- **Type Safe**: Full TypeScript throughout

## Project Structure

```
src/
├── app/
│   ├── docs/
│   │   ├── [slug]/page.tsx            # Dynamic doc pages with TOC
│   │   └── layout.tsx                 # Docs layout (header + sidebar + content)
│   ├── layout.tsx                     # Root layout with theme provider
│   ├── page.tsx                       # Home (redirects to /docs/introduction)
│   └── globals.css                    # Echo design tokens & global styles
├── components/
│   ├── ui/                            # 30 shadcn/Radix UI primitives
│   ├── doc-components.tsx             # Shared doc building blocks (ContentSection, ExampleBlock, DosDonts, PropsTable)
│   ├── header.tsx                     # Sticky header with logo, search, links
│   ├── sidebar.tsx                    # Collapsible nav sidebar (categorised)
│   ├── mobile-nav.tsx                 # Sheet-based mobile navigation drawer
│   ├── search.tsx                     # Inline search input + mobile fullscreen search
│   ├── table-of-contents.tsx          # Sticky TOC with IntersectionObserver
│   ├── code-block.tsx                 # Syntax-highlighted code examples
│   ├── theme-provider.tsx             # next-themes provider
│   └── theme-toggle.tsx               # Light/dark mode toggle
└── lib/
    ├── docs-content.tsx               # Foundation & pattern page content + merge logic
    ├── component-docs-batch1.tsx      # Components: button, badge, card, checkbox, input, switch, tabs, tooltip, dialog, alert
    ├── component-docs-batch2.tsx      # Components: accordion, avatar, collapsible, select, slider, toggle, toggle-group, radio-group, separator, progress
    ├── component-docs-batch3.tsx      # Components: sheet, dropdown-menu, context-menu, hover-card, alert-dialog, popover, skeleton, textarea, label, scroll-area
    ├── component-docs-batch4.tsx      # Components: button-group, carousel, chart, data-table, date-picker, drawer, empty, field, input-group, input-otp, keyboard-shortcuts, navigation-menu + more
    ├── spacing-layout-guide.tsx       # Interactive spacing & layout guide
    ├── search-data.ts                 # Search index (titles, descriptions, categories)
    └── utils.ts                       # cn() utility
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

```bash
npm run build
npm start
```

## Documentation Pages

### Getting Started
Introduction, Design Principles, Getting Started guide

### Foundations
Typography, Colors, Spacing & Layout, Icons

### Components (40+)

| Category | Components |
|----------|-----------|
| **Forms & Input** | Button, Button Group, Checkbox, Input, Input Group, Input OTP, Field, Label, Radio Group, Select, Slider, Switch, Textarea, Toggle, Toggle Group, Date Picker |
| **Navigation** | Menubar, Navigation Menu, Pagination, Tabs, Sidebar |
| **Feedback** | Alert, Sonner, Spinner, Skeleton, Empty |
| **Overlay** | Dialog, Alert Dialog, Drawer, Dropdown Menu, Context Menu, Hover Card, Popover, Sheet, Tooltip |
| **Data Display** | Accordion, Avatar, Badge, Card, Carousel, Chart, Collapsible, Data Table, Separator, Scroll Area, Progress |
| **Utility** | Keyboard Shortcuts, Resizable |

### Patterns
Sign In, Dashboard Overview, Queues Table, Queues Chart

### Resources
Inspiration (curated shadcn/ui kits and block libraries)

## Component Documentation Structure

Each component page includes:

1. **Live Preview** — Interactive rendered examples
2. **Code Examples** — Copy-pasteable implementation code
3. **Usage Guidelines** — Do's and Don'ts with visual indicators
4. **Echo Usage** — How the component is used in Echo's product context
5. **Accessibility** — ARIA attributes and keyboard support
6. **API Reference** — Props table with types and defaults

## Design Tokens

The Echo brand uses a purple-to-cyan gradient identity with `#6a47f0` as the primary color.

### Key CSS Variables

```css
:root {
  --primary: 253 85% 61%;       /* Echo purple #6a47f0 */
  --background: 0 0% 98%;       /* Light neutral */
  --foreground: 240 10% 4%;     /* Near-black text */
  --muted: 240 5% 96%;          /* Subtle backgrounds */
  --border: 240 6% 90%;         /* Soft borders */
}
```

Full token set with dark mode overrides in `src/app/globals.css`.

## Technology Stack

- **Framework**: Next.js 16.1.6 (App Router)
- **UI**: React 19.2.3
- **Styling**: Tailwind CSS v4
- **Component Primitives**: Radix UI (25 packages)
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono
- **Theme**: next-themes
- **Utilities**: clsx, tailwind-merge, class-variance-authority

## Responsive Layout

- **Mobile** (<1024px): Hidden sidebar, hamburger nav drawer via Sheet component, fullscreen search overlay, single-column content
- **Desktop** (>=1024px): 288px sticky sidebar, inline search with dropdown, main content area
- **Wide** (>=1280px): Sticky table of contents sidebar on the right

## License

This design system documentation is open source and available under the MIT License.
