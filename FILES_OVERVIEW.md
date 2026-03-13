# Echo Design System - Files Overview

## Directory Structure (Changes Only)

```
/src
├── app
│   └── docs
│       ├── layout.tsx                    [MODIFIED] 3-column layout
│       └── [slug]
│           ├── page.tsx                  [MODIFIED] Server component with metadata
│           └── client-page.tsx           [NEW] Client-side rendering & TOC extraction
│
└── components
    ├── sidebar.tsx                       [MODIFIED] Categorized navigation with collapsible groups
    ├── header.tsx                        [MODIFIED] Search bar & improved layout
    ├── table-of-contents.tsx             [NEW] Right sidebar TOC with intersection observer
    └── doc-components.tsx                [MODIFIED] New documentation components (5 new + 7 legacy)
```

---

## File Details

### 1. src/components/sidebar.tsx (244 lines)
**Type**: Client Component (uses "use client")

**Imports**:
- usePathname from "next/navigation"
- Link from "next/link"
- useState from "react"
- motion, AnimatePresence from "framer-motion"
- ChevronDown from "lucide-react"
- cn from "@/lib/utils"
- ScrollArea from "@/components/ui/scroll-area"

**Key Exports**:
- `Sidebar()` - Main component
- `CategoryItem()` - Sub-component for collapsible categories

**Features**:
- 4 main sections: Getting Started, Foundations, Components, Patterns
- 6 collapsible component categories
- 45 component links organized by category
- Active item detection with left border accent
- Smooth category open/close animation
- Responsive scrolling with ScrollArea

**State Management**:
- `isOpen` - Track category collapse state per category

---

### 2. src/components/table-of-contents.tsx (89 lines)
**Type**: Client Component (uses "use client")

**Imports**:
- useEffect, useState from "react"
- motion from "framer-motion"
- cn from "@/lib/utils"

**Key Exports**:
- `TableOfContents()` - Main component
- `TOCItem` - TypeScript interface for TOC items

**Features**:
- Auto-detects currently visible section using Intersection Observer
- Smooth scroll navigation
- Sticky positioning (top-20)
- Animated active indicator with spring animation
- H3 items are indented
- Responsive hiding below xl breakpoint

**Intersection Observer Config**:
- rootMargin: "-100px 0px -66%" (adjusts visible area)

**State Management**:
- `activeId` - Track currently visible section

---

### 3. src/components/header.tsx (53 lines)
**Type**: Server Component (no "use client")

**Imports**:
- Link from "next/link"
- Search from "lucide-react"
- ThemeToggle from "./theme-toggle"

**Key Exports**:
- `Header()` - Main component

**Features**:
- Echo logo (gradient square, responsive sizing)
- Search bar (placeholder, md+ breakpoint)
- GitHub and Figma links (sm+ breakpoint)
- Theme toggle button
- Clean horizontal layout with justify-between
- Sticky positioning with backdrop blur

**Layout**:
- Left: Logo + text (responsive)
- Center: Search (hidden mobile)
- Right: Links (hidden mobile) + Theme toggle

---

### 4. src/components/doc-components.tsx (389 lines)
**Type**: Client Component (uses "use client")

**Imports**:
- React, useState from "react"
- motion, AnimatePresence from "framer-motion"
- Copy, Check from "lucide-react"
- cn from "@/lib/utils"

**Key Exports** (5 NEW):

#### ContentSection
```tsx
<ContentSection id="anatomy" title="Anatomy">
  {children}
</ContentSection>
```
- Wrapper with proper scroll-margin-top
- ID anchoring for TOC integration

#### ExampleBlock
```tsx
<ExampleBlock
  title="Title"
  description="Subtitle"
  preview={<Component />}
  code={`code string`}
/>
```
- Preview area
- Collapsible code section (default closed)
- Copy button with clipboard API
- Smooth animations

#### DosDonts
```tsx
<DosDonts
  dos={[{ description, preview? }]}
  donts={[{ description, preview? }]}
/>
```
- Side-by-side layout (2 columns md+)
- Green checkmark / Red X headers
- Optional preview areas

#### ComponentPageTabs
```tsx
<ComponentPageTabs activeTab="examples" slug="button" />
```
- 3 tabs: Examples, Usage, Code
- URL-based navigation

#### PropsTable
```tsx
<PropsTable
  props={[
    { name, type, default?, description }
  ]}
/>
```
- 4-column table
- Monospace code styling
- Hover effects

**Legacy Exports** (7 maintained for backward compatibility):
- `DocSection`
- `Preview`
- `Anatomy`
- `VariantsTable`
- `A11yList`
- `CodeExample`
- `ComponentBadges`

---

### 5. src/app/docs/layout.tsx (27 lines)
**Type**: Server Component (no "use client")

**Imports**:
- Header from "@/components/header"
- Sidebar from "@/components/sidebar"

**Key Exports**:
- `DocsLayout()` - Root layout for /docs routes

**Features**:
- 3-column layout
- Left sidebar (w-72, hidden below lg)
- Main content area (flex-1, max-w-5xl)
- Right TOC (rendered by page component)
- Proper scrolling and overflow handling

**Responsive Behavior**:
- Mobile: Full width main content
- lg+: Shows left sidebar (w-72)
- xl+: TOC rendered by child component

---

### 6. src/app/docs/[slug]/page.tsx (30 lines)
**Type**: Server Component (no "use client")

**Imports**:
- notFound from "next/navigation"
- getDocContent from "@/lib/docs-content"
- ClientDocPage from "./client-page"

**Key Exports**:
- `generateMetadata()` - Async metadata function
- `DocPage()` - Server page component

**Features**:
- Handles async slug param
- Generates page metadata
- Validates content exists (404 if not)
- Delegates rendering to ClientDocPage

**Metadata**:
```
title: "{title} - Echo Design System"
description: "{description}"
```

---

### 7. src/app/docs/[slug]/client-page.tsx (75 lines)
**Type**: Client Component (uses "use client")

**Imports**:
- useEffect, useState from "react"
- motion from "framer-motion"
- DocContent from "@/lib/docs-content"
- TableOfContents from "@/components/table-of-contents"

**Key Exports**:
- `ClientDocPage()` - Client page component
- `ClientDocPageProps` - TypeScript interface

**Features**:
- Extracts h2 and h3 headings from rendered content
- Assigns auto IDs to headings
- Passes TOC items to TableOfContents
- Page entrance animation (fade + slide up)
- Proper cleanup with useEffect

**Heading Extraction**:
- Queries document for h2 and h3 elements
- Generates IDs if missing
- Determines heading level
- Creates TOCItem array

**Animation**:
- Initial: opacity 0, translateY 10px
- Animate: opacity 1, translateY 0px
- Duration: 300ms

---

## Component Dependency Graph

```
Header
  ├── ThemeToggle (from theme-toggle.tsx)
  └── Search icon (from lucide-react)

DocsLayout
  ├── Header
  ├── Sidebar
  └── {children} → ClientDocPage

ClientDocPage
  ├── TableOfContents
  └── (rendered content with h2/h3 headings)

ExampleBlock
  ├── Copy, Check icons (from lucide-react)
  └── AnimatePresence, motion (from framer-motion)

DosDonts
  └── motion (from framer-motion)

PropsTable
  └── (standard HTML table)

Sidebar
  ├── ChevronDown icon (from lucide-react)
  ├── AnimatePresence, motion (from framer-motion)
  └── ScrollArea (from @/components/ui/scroll-area)

TableOfContents
  └── motion (from framer-motion)
```

---

## Configuration Files Used

**tsconfig.json**
- Path alias: `@/*` → `src/*`

**tailwind.config** (globals.css)
- Primary color: #6a47f0 (Echo purple)
- Responsive breakpoints: sm, md, lg, xl
- Dark mode with `.dark` class

**next.config** (implicit)
- Turbopack compiler
- Server/Client component setup
- Dynamic routes with [slug]

---

## Type Definitions

### TOCItem (table-of-contents.tsx)
```tsx
interface TOCItem {
  id: string
  title: string
  level: number // 2 for h2, 3 for h3
}
```

### ExampleBlockProps (doc-components.tsx)
```tsx
interface ExampleBlockProps {
  title?: string
  description?: string
  preview: React.ReactNode
  code: string
}
```

### DosDontsProps (doc-components.tsx)
```tsx
interface DosDontsProps {
  dos: Array<{
    description: string
    preview?: React.ReactNode
  }>
  donts: Array<{
    description: string
    preview?: React.ReactNode
  }>
}
```

### PropsTableProps (doc-components.tsx)
```tsx
interface PropsTableProps {
  props: Array<{
    name: string
    type: string
    default?: string
    description: string
  }>
}
```

---

## Code Statistics

| File | Lines | Type | Complexity |
|------|-------|------|-----------|
| sidebar.tsx | 244 | Component | Medium |
| header.tsx | 53 | Component | Low |
| table-of-contents.tsx | 89 | Component | Low |
| doc-components.tsx | 389 | Component | Medium |
| layout.tsx | 27 | Layout | Low |
| page.tsx | 30 | Page | Low |
| client-page.tsx | 75 | Component | Low |
| **TOTAL** | **907** | - | - |

---

## Import Chain Example

When viewing `/docs/button`:

1. `page.tsx` (Server)
   - Calls `getDocContent("button")`
   - Renders `ClientDocPage` with content

2. `client-page.tsx` (Client)
   - Extracts h2/h3 headings
   - Creates TOCItem array
   - Renders content + TableOfContents

3. `layout.tsx`
   - Wraps page in Header + Sidebar
   - Manages 3-column layout

4. `sidebar.tsx`
   - Shows categorized components
   - Highlights active item (/docs/button)

5. `table-of-contents.tsx`
   - Shows page sections
   - Tracks visible section with IntersectionObserver

---

## Performance Optimizations

1. **Sidebar**: Uses ScrollArea for virtual scrolling
2. **TOC**: Uses IntersectionObserver instead of scroll listener
3. **Animations**: GPU-accelerated with framer-motion
4. **Components**: Proper memoization with React conventions
5. **Headings**: Lazy extraction on client side

---

## Browser Support

- Modern browsers with ES2020+ support
- Framer Motion: Chrome, Firefox, Safari, Edge
- IntersectionObserver: All modern browsers
- Clipboard API: All modern browsers
- CSS Grid/Flexbox: All modern browsers

---

## Future File Expansion Points

```
/src
├── components
│   ├── search.tsx              [FUTURE] Actual search implementation
│   ├── breadcrumb.tsx          [FUTURE] Breadcrumb navigation
│   └── component-grid.tsx      [FUTURE] Related components showcase
│
└── lib
    └── search.ts               [FUTURE] Search indexing logic
```

