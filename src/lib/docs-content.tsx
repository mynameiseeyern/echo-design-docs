"use client"

import React from "react"

export interface DocContent {
  title: string
  description: string
  html: string
  component?: React.ReactNode
}

const componentDocsMap: Record<string, DocContent> = {}

// ============================================
// Foundation Pages
// ============================================

componentDocsMap["introduction"] = {
  title: "Introduction",
  description: "Welcome to the Echo Design System",
  html: `
    <div class="space-y-8">
      <section class="space-y-4">
        <p class="text-lg text-muted-foreground">
          Echo is a modern design system built on Tailwind CSS and shadcn/ui components. It provides a comprehensive set of beautifully designed, accessible components that can be easily customized to match your brand.
        </p>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Features</h2>
        <ul class="space-y-2 text-base">
          <li class="flex gap-3"><span class="text-primary font-bold">•</span> <span>Built on Tailwind CSS - utility-first CSS framework</span></li>
          <li class="flex gap-3"><span class="text-primary font-bold">•</span> <span>shadcn/ui components - copy-paste component library</span></li>
          <li class="flex gap-3"><span class="text-primary font-bold">•</span> <span>Accessible by default - WCAG 2.1 AA compliant</span></li>
          <li class="flex gap-3"><span class="text-primary font-bold">•</span> <span>Customizable - extensive theming options</span></li>
          <li class="flex gap-3"><span class="text-primary font-bold">•</span> <span>Dark mode support - built-in light and dark themes</span></li>
          <li class="flex gap-3"><span class="text-primary font-bold">•</span> <span>TypeScript first - full type safety</span></li>
        </ul>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Getting Started</h2>
        <p class="text-base text-muted-foreground">
          Explore the documentation to learn about our design principles, foundations, and component library. Each component comes with interactive examples, code snippets, usage guidelines, and accessibility notes.
        </p>
      </section>
    </div>
  `,
}

componentDocsMap["principles"] = {
  title: "Design Principles",
  description: "Core principles that guide the Echo Design System",
  html: `
    <div class="space-y-8">
      <section class="space-y-6">
        <div class="space-y-2">
          <h2 class="text-2xl font-semibold">Consistency</h2>
          <p class="text-base text-muted-foreground">
            All components follow consistent patterns and conventions. Users should feel familiar with every interaction, reducing the learning curve and increasing productivity.
          </p>
        </div>
        <div class="space-y-2">
          <h2 class="text-2xl font-semibold">Accessibility</h2>
          <p class="text-base text-muted-foreground">
            Accessibility is not an afterthought. Every component is built with accessibility in mind, supporting keyboard navigation, screen readers, and other assistive technologies.
          </p>
        </div>
        <div class="space-y-2">
          <h2 class="text-2xl font-semibold">Simplicity</h2>
          <p class="text-base text-muted-foreground">
            We believe in the power of simplicity. Our components are designed to be simple and straightforward, avoiding unnecessary complexity while maintaining flexibility.
          </p>
        </div>
        <div class="space-y-2">
          <h2 class="text-2xl font-semibold">Scalability</h2>
          <p class="text-base text-muted-foreground">
            Echo is designed to scale with your needs. From small projects to large enterprises, the design system adapts to your requirements.
          </p>
        </div>
      </section>
    </div>
  `,
}

componentDocsMap["getting-started"] = {
  title: "Getting Started",
  description: "How to use the Echo Design System",
  html: `
    <div class="space-y-8">
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Installation</h2>
        <pre class="bg-muted rounded-lg p-4 overflow-x-auto"><code class="text-sm">npm install @radix-ui/react-slot @radix-ui/react-tabs @radix-ui/react-tooltip
npm install class-variance-authority clsx tailwind-merge
npm install lucide-react</code></pre>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Setup Tailwind CSS</h2>
        <p class="text-base text-muted-foreground mb-4">
          Configure Tailwind CSS with CSS variables for theming support.
        </p>
        <pre class="bg-muted rounded-lg p-4 overflow-x-auto"><code class="text-sm">/* globals.css */
@import "tailwindcss";

:root {
  --primary: 253 85% 61%;
  --background: 0 0% 98%;
  /* ... more variables */
}</code></pre>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Using Components</h2>
        <p class="text-base text-muted-foreground mb-4">
          Import and use components in your application.
        </p>
        <pre class="bg-muted rounded-lg p-4 overflow-x-auto"><code class="text-sm">import { Button } from "@/components/ui/button"

export function MyComponent() {
  return &lt;Button&gt;Click me&lt;/Button&gt;
}</code></pre>
      </section>
    </div>
  `,
}

componentDocsMap["typography"] = {
  title: "Typography",
  description: "Font families, type scale, numeric display rules, and text styling guidelines.",
  html: `
    <div class="space-y-12">
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Font Families</h2>
        <p class="text-base text-muted-foreground mb-6">
          Echo uses two font families: <strong>Geist Sans</strong> as the primary typeface for all UI text, and <strong>Geist Mono</strong> as the monospaced typeface reserved for numeric values, code, and technical content.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="border rounded-lg p-6 bg-card space-y-3">
            <p class="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Sans — Primary</p>
            <p class="text-3xl font-bold" style="font-family: var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif;">Geist Sans</p>
            <p class="text-sm text-muted-foreground" style="font-family: var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif;">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>abcdefghijklmnopqrstuvwxyz</p>
            <p class="text-xs text-muted-foreground">Used for headings, body text, labels, buttons, and all general UI copy.</p>
          </div>
          <div class="border rounded-lg p-6 bg-card space-y-3">
            <p class="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Mono — Numbers &amp; Code</p>
            <p class="text-3xl font-bold font-mono">Geist Mono</p>
            <p class="text-sm text-muted-foreground font-mono">0123456789 · $1,234.56 · 87% · 4:32</p>
            <p class="text-xs text-muted-foreground">Used for all numeric values, KPI metrics, scores, durations, percentages, currency, code snippets, and technical data.</p>
          </div>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Numeric Typography Rule</h2>
        <div class="border-l-4 border-primary pl-4 py-2 bg-primary/5 rounded-r-lg">
          <p class="text-sm font-semibold text-foreground">All numbers must use Geist Mono (<code class="text-xs bg-muted px-1.5 py-0.5 rounded">font-mono</code>)</p>
          <p class="text-sm text-muted-foreground mt-1">This ensures consistent character widths for numeric data, preventing layout shifts when values update and improving readability in tables, dashboards, and metric cards.</p>
        </div>
        <div class="space-y-3 mt-4">
          <p class="text-sm font-semibold">Applies to:</p>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
            <div class="border rounded-lg p-3 bg-card text-center"><p class="text-2xl font-bold font-mono">1,234</p><p class="text-xs text-muted-foreground mt-1">KPI values</p></div>
            <div class="border rounded-lg p-3 bg-card text-center"><p class="text-2xl font-bold font-mono">87%</p><p class="text-xs text-muted-foreground mt-1">Percentages</p></div>
            <div class="border rounded-lg p-3 bg-card text-center"><p class="text-2xl font-bold font-mono">4:32</p><p class="text-xs text-muted-foreground mt-1">Durations</p></div>
            <div class="border rounded-lg p-3 bg-card text-center"><p class="text-2xl font-bold font-mono">$12.50</p><p class="text-xs text-muted-foreground mt-1">Currency</p></div>
            <div class="border rounded-lg p-3 bg-card text-center"><p class="text-2xl font-bold font-mono">#42</p><p class="text-xs text-muted-foreground mt-1">IDs &amp; counts</p></div>
            <div class="border rounded-lg p-3 bg-card text-center"><p class="text-2xl font-bold font-mono">+12.5%</p><p class="text-xs text-muted-foreground mt-1">Change indicators</p></div>
          </div>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Font Scale</h2>
        <p class="text-base text-muted-foreground mb-6">Echo uses a carefully curated type scale to maintain visual hierarchy and readability.</p>
        <div class="space-y-4">
          <div class="flex items-baseline gap-4 border-b pb-2"><span class="text-xs text-muted-foreground w-16 font-mono">xs</span><span class="text-xs">Text XS — 12px / 0.75rem</span></div>
          <div class="flex items-baseline gap-4 border-b pb-2"><span class="text-xs text-muted-foreground w-16 font-mono">sm</span><span class="text-sm">Text SM — 14px / 0.875rem</span></div>
          <div class="flex items-baseline gap-4 border-b pb-2"><span class="text-xs text-muted-foreground w-16 font-mono">base</span><span class="text-base">Text Base — 16px / 1rem</span></div>
          <div class="flex items-baseline gap-4 border-b pb-2"><span class="text-xs text-muted-foreground w-16 font-mono">lg</span><span class="text-lg">Text LG — 18px / 1.125rem</span></div>
          <div class="flex items-baseline gap-4 border-b pb-2"><span class="text-xs text-muted-foreground w-16 font-mono">xl</span><span class="text-xl">Text XL — 20px / 1.25rem</span></div>
          <div class="flex items-baseline gap-4 border-b pb-2"><span class="text-xs text-muted-foreground w-16 font-mono">2xl</span><span class="text-2xl">Text 2XL — 24px / 1.5rem</span></div>
          <div class="flex items-baseline gap-4 border-b pb-2"><span class="text-xs text-muted-foreground w-16 font-mono">3xl</span><span class="text-3xl">Text 3XL — 30px / 1.875rem</span></div>
          <div class="flex items-baseline gap-4 border-b pb-2"><span class="text-xs text-muted-foreground w-16 font-mono">4xl</span><span class="text-4xl">Text 4XL — 36px / 2.25rem</span></div>
          <div class="flex items-baseline gap-4"><span class="text-xs text-muted-foreground w-16 font-mono">5xl</span><span class="text-5xl">Text 5XL — 48px / 3rem</span></div>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Font Weights</h2>
        <div class="space-y-3">
          <div class="flex items-baseline gap-4 border-b pb-2"><span class="text-xs text-muted-foreground w-24 font-mono">normal (400)</span><span class="text-lg font-normal">The quick brown fox jumps over the lazy dog</span></div>
          <div class="flex items-baseline gap-4 border-b pb-2"><span class="text-xs text-muted-foreground w-24 font-mono">medium (500)</span><span class="text-lg font-medium">The quick brown fox jumps over the lazy dog</span></div>
          <div class="flex items-baseline gap-4 border-b pb-2"><span class="text-xs text-muted-foreground w-24 font-mono">semibold (600)</span><span class="text-lg font-semibold">The quick brown fox jumps over the lazy dog</span></div>
          <div class="flex items-baseline gap-4"><span class="text-xs text-muted-foreground w-24 font-mono">bold (700)</span><span class="text-lg font-bold">The quick brown fox jumps over the lazy dog</span></div>
        </div>
      </section>
    </div>
  `,
}

componentDocsMap["colors"] = {
  title: "Colors",
  description: "Echo brand palette, semantic tokens, and chart color scale.",
  html: `
    <div class="space-y-12">
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Echo Brand Palette</h2>
        <p class="text-base text-muted-foreground mb-6">
          The Echo brand uses a purple color scale from echo.50 (lightest) to echo.950 (darkest). The primary brand color is <strong>echo.600</strong> (#6a47f0).
        </p>
        <div class="grid grid-cols-5 md:grid-cols-11 gap-2">
          <div class="space-y-1 text-center"><div class="h-12 rounded-md" style="background-color:#f8f6ff;"></div><p class="text-[10px] font-mono text-muted-foreground">50</p></div>
          <div class="space-y-1 text-center"><div class="h-12 rounded-md" style="background-color:#f1edff;"></div><p class="text-[10px] font-mono text-muted-foreground">100</p></div>
          <div class="space-y-1 text-center"><div class="h-12 rounded-md" style="background-color:#e0d8ff;"></div><p class="text-[10px] font-mono text-muted-foreground">200</p></div>
          <div class="space-y-1 text-center"><div class="h-12 rounded-md" style="background-color:#c3b3ff;"></div><p class="text-[10px] font-mono text-muted-foreground">300</p></div>
          <div class="space-y-1 text-center"><div class="h-12 rounded-md" style="background-color:#a18aff;"></div><p class="text-[10px] font-mono text-muted-foreground">400</p></div>
          <div class="space-y-1 text-center"><div class="h-12 rounded-md" style="background-color:#7f5aff;"></div><p class="text-[10px] font-mono text-muted-foreground">500</p></div>
          <div class="space-y-1 text-center"><div class="h-12 rounded-md ring-2 ring-foreground/20" style="background-color:#6a47f0;"></div><p class="text-[10px] font-mono font-bold">600</p></div>
          <div class="space-y-1 text-center"><div class="h-12 rounded-md" style="background-color:#5433d0;"></div><p class="text-[10px] font-mono text-muted-foreground">700</p></div>
          <div class="space-y-1 text-center"><div class="h-12 rounded-md" style="background-color:#4125aa;"></div><p class="text-[10px] font-mono text-muted-foreground">800</p></div>
          <div class="space-y-1 text-center"><div class="h-12 rounded-md" style="background-color:#2b1679;"></div><p class="text-[10px] font-mono text-muted-foreground">900</p></div>
          <div class="space-y-1 text-center"><div class="h-12 rounded-md" style="background-color:#180b46;"></div><p class="text-[10px] font-mono text-muted-foreground">950</p></div>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Semantic Tokens</h2>
        <p class="text-base text-muted-foreground mb-4">Semantic tokens adapt automatically between light and dark modes.</p>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div class="space-y-2"><div class="h-20 rounded-lg bg-primary"></div><div class="text-sm font-semibold">Primary</div><div class="text-xs font-mono text-muted-foreground">echo.600 · #6a47f0</div></div>
          <div class="space-y-2"><div class="h-20 rounded-lg bg-secondary border"></div><div class="text-sm font-semibold">Secondary</div><div class="text-xs font-mono text-muted-foreground">blue.50 · #eff6ff</div></div>
          <div class="space-y-2"><div class="h-20 rounded-lg bg-destructive"></div><div class="text-sm font-semibold">Destructive</div><div class="text-xs font-mono text-muted-foreground">red.600 · #dc2626</div></div>
          <div class="space-y-2"><div class="h-20 rounded-lg bg-muted border"></div><div class="text-sm font-semibold">Muted</div><div class="text-xs font-mono text-muted-foreground">zinc.100 · #f4f4f5</div></div>
          <div class="space-y-2"><div class="h-20 rounded-lg bg-background border"></div><div class="text-sm font-semibold">Background</div><div class="text-xs font-mono text-muted-foreground">neutral.50 · #fafafa</div></div>
          <div class="space-y-2"><div class="h-20 rounded-lg bg-foreground"></div><div class="text-sm font-semibold">Foreground</div><div class="text-xs font-mono text-muted-foreground">zinc.950 · #09090b</div></div>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Chart Colors</h2>
        <p class="text-sm text-muted-foreground mb-3">Charts use 5 sequential shades from the Echo palette:</p>
        <div class="grid grid-cols-5 gap-3">
          <div class="text-center"><div class="w-full h-10 rounded-md" style="background-color: #c3b3ff;"></div><p class="text-xs font-mono text-muted-foreground mt-1">--chart-1</p></div>
          <div class="text-center"><div class="w-full h-10 rounded-md" style="background-color: #7f5aff;"></div><p class="text-xs font-mono text-muted-foreground mt-1">--chart-2</p></div>
          <div class="text-center"><div class="w-full h-10 rounded-md" style="background-color: #6a47f0;"></div><p class="text-xs font-mono text-muted-foreground mt-1">--chart-3</p></div>
          <div class="text-center"><div class="w-full h-10 rounded-md" style="background-color: #5433d0;"></div><p class="text-xs font-mono text-muted-foreground mt-1">--chart-4</p></div>
          <div class="text-center"><div class="w-full h-10 rounded-md" style="background-color: #4125aa;"></div><p class="text-xs font-mono text-muted-foreground mt-1">--chart-5</p></div>
        </div>
      </section>
    </div>
  `,
}

componentDocsMap["spacing"] = {
  title: "Spacing",
  description: "Spacing scale and layout utilities",
  html: `
    <div class="space-y-8">
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Spacing Scale</h2>
        <p class="text-base text-muted-foreground mb-6">Echo uses an 8px-based spacing scale for consistent alignment and layout.</p>
        <div class="space-y-4">
          <div class="flex items-center gap-4"><div class="w-8 h-8 bg-primary rounded"></div><div class="text-sm"><span class="font-semibold">8px</span> - Base unit (p-2)</div></div>
          <div class="flex items-center gap-4"><div class="w-12 h-8 bg-primary rounded"></div><div class="text-sm"><span class="font-semibold">16px</span> - Component padding (p-4)</div></div>
          <div class="flex items-center gap-4"><div class="w-20 h-8 bg-primary rounded"></div><div class="text-sm"><span class="font-semibold">24px</span> - Section spacing (p-6)</div></div>
          <div class="flex items-center gap-4"><div class="w-32 h-8 bg-primary rounded"></div><div class="text-sm"><span class="font-semibold">32px</span> - Large spacing (p-8)</div></div>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Application</h2>
        <pre class="bg-muted rounded-lg p-4 overflow-x-auto"><code class="text-sm">&lt;div class="p-4"&gt;&lt;/div&gt;  {/* padding: 16px */}
&lt;div class="m-6"&gt;&lt;/div&gt;  {/* margin: 24px */}
&lt;div class="gap-4"&gt;&lt;/div&gt; {/* gap: 16px */}</code></pre>
      </section>
    </div>
  `,
}

componentDocsMap["icons"] = {
  title: "Icons",
  description: "Using Lucide React icons",
  html: `
    <div class="space-y-8">
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Lucide React</h2>
        <p class="text-base text-muted-foreground mb-4">
          Echo uses Lucide React, a beautiful set of open-source icons. Browse the full library at lucide.dev.
        </p>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Usage</h2>
        <pre class="bg-muted rounded-lg p-4 overflow-x-auto"><code class="text-sm">import { Check, X, AlertCircle } from "lucide-react"

export function MyComponent() {
  return (
    &lt;&gt;
      &lt;Check className="h-4 w-4" /&gt;
      &lt;X className="h-4 w-4" /&gt;
      &lt;AlertCircle className="h-5 w-5" /&gt;
    &lt;/&gt;
  )
}</code></pre>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Sizing</h2>
        <div class="space-y-2 text-sm">
          <div class="flex items-center gap-4"><span class="font-semibold min-w-24">h-4 w-4</span> <span>Button icons, inline</span></div>
          <div class="flex items-center gap-4"><span class="font-semibold min-w-24">h-5 w-5</span> <span>Default icons</span></div>
          <div class="flex items-center gap-4"><span class="font-semibold min-w-24">h-6 w-6</span> <span>Header icons</span></div>
          <div class="flex items-center gap-4"><span class="font-semibold min-w-24">h-8 w-8</span> <span>Large icons</span></div>
        </div>
      </section>
    </div>
  `,
}

// ============================================
// Pattern Pages
// ============================================

componentDocsMap["sign-in-pattern"] = {
  title: "Sign In",
  description: "Authentication page pattern using Echo brand identity with email-based login flow.",
  html: `<div class="space-y-12"><section class="space-y-4"><h2 class="text-2xl font-semibold">Overview</h2><p class="text-base leading-relaxed text-muted-foreground">The Sign In pattern provides a branded authentication entry point for the Echo platform. It combines the Echo logo with a clean, centered login form against decorative brand elements.</p></section><section class="space-y-4"><h2 class="text-2xl font-semibold">Anatomy</h2><div class="space-y-3"><div class="flex gap-4"><div class="font-mono text-sm font-semibold text-primary min-w-40">Brand Logo</div><div class="text-sm text-muted-foreground">Echo wordmark positioned top-left</div></div><div class="flex gap-4"><div class="font-mono text-sm font-semibold text-primary min-w-40">Card Container</div><div class="text-sm text-muted-foreground">Centered card with the sign-in form</div></div><div class="flex gap-4"><div class="font-mono text-sm font-semibold text-primary min-w-40">Email Input</div><div class="text-sm text-muted-foreground">Primary input with label and placeholder</div></div><div class="flex gap-4"><div class="font-mono text-sm font-semibold text-primary min-w-40">Continue Button</div><div class="text-sm text-muted-foreground">Full-width primary button</div></div></div></section><section class="space-y-4"><h2 class="text-2xl font-semibold">Components Used</h2><div class="flex flex-wrap gap-2"><span class="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">Card</span><span class="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">Input</span><span class="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">Label</span><span class="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">Button</span></div></section></div>`,
}

componentDocsMap["dashboard-overview-pattern"] = {
  title: "Dashboard Overview",
  description: "Primary dashboard layout with sidebar navigation, KPI metric cards, line charts, and scorecard widgets.",
  html: `<div class="space-y-12"><section class="space-y-4"><h2 class="text-2xl font-semibold">Overview</h2><p class="text-base leading-relaxed text-muted-foreground">The Dashboard Overview is the primary landing screen after authentication. It presents a high-level summary of operational metrics using KPI cards, trend line charts, and scorecard widgets.</p></section><section class="space-y-4"><h2 class="text-2xl font-semibold">Anatomy</h2><div class="space-y-3"><div class="flex gap-4"><div class="font-mono text-sm font-semibold text-primary min-w-40">Sidebar</div><div class="text-sm text-muted-foreground">Collapsible navigation with Echo branding</div></div><div class="flex gap-4"><div class="font-mono text-sm font-semibold text-primary min-w-40">KPI Cards Row</div><div class="text-sm text-muted-foreground">3-column grid of metric cards with value, label, and % change</div></div><div class="flex gap-4"><div class="font-mono text-sm font-semibold text-primary min-w-40">Line Chart</div><div class="text-sm text-muted-foreground">Time-series chart with echo brand colors</div></div><div class="flex gap-4"><div class="font-mono text-sm font-semibold text-primary min-w-40">Scorecard Grid</div><div class="text-sm text-muted-foreground">2-column grid of scorecard cards with gauge charts</div></div></div></section><section class="space-y-4"><h2 class="text-2xl font-semibold">Components Used</h2><div class="flex flex-wrap gap-2"><span class="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">Sidebar</span><span class="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">Card</span><span class="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">Chart</span><span class="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">Badge</span><span class="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">Avatar</span></div></section></div>`,
}

componentDocsMap["queues-table-pattern"] = {
  title: "Queues Table",
  description: "Data table pattern with color-coded score badges, pagination, and filter panels.",
  html: `<div class="space-y-12"><section class="space-y-4"><h2 class="text-2xl font-semibold">Overview</h2><p class="text-base leading-relaxed text-muted-foreground">The Queues Table pattern displays operational queue data in a structured table format with color-coded score badges, expandable filter panels, breadcrumb navigation, and pagination controls.</p></section><section class="space-y-4"><h2 class="text-2xl font-semibold">Score Badge System</h2><p class="text-sm text-muted-foreground mb-3">Scores use a three-tier color system:</p><div class="grid grid-cols-3 gap-4"><div class="border rounded-lg p-4 bg-card text-center"><div class="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 mb-2">Good: 87</div><p class="text-xs text-muted-foreground">Score ≥ 67</p></div><div class="border rounded-lg p-4 bg-card text-center"><div class="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 mb-2">Fair: 52</div><p class="text-xs text-muted-foreground">Score 34–66</p></div><div class="border rounded-lg p-4 bg-card text-center"><div class="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 mb-2">Low: 21</div><p class="text-xs text-muted-foreground">Score 0–33</p></div></div></section><section class="space-y-4"><h2 class="text-2xl font-semibold">Components Used</h2><div class="flex flex-wrap gap-2"><span class="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">Data Table</span><span class="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">Badge</span><span class="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">Tabs</span><span class="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">Pagination</span><span class="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">Checkbox</span></div></section></div>`,
}

componentDocsMap["queues-chart-pattern"] = {
  title: "Queues Chart",
  description: "Chart visualization pattern with line charts, tab navigation, and collapsible filter panels.",
  html: `<div class="space-y-12"><section class="space-y-4"><h2 class="text-2xl font-semibold">Overview</h2><p class="text-base leading-relaxed text-muted-foreground">The Queues Chart pattern provides a visual representation of queue performance data over time with multi-series line charts, a Chart/Table toggle, and collapsible filter panels.</p></section><section class="space-y-4"><h2 class="text-2xl font-semibold">Chart Color Tokens</h2><div class="grid grid-cols-5 gap-3"><div class="text-center"><div class="w-full h-8 rounded-md mb-1" style="background-color: #c3b3ff;"></div><p class="text-xs font-mono text-muted-foreground">--chart-1</p></div><div class="text-center"><div class="w-full h-8 rounded-md mb-1" style="background-color: #7f5aff;"></div><p class="text-xs font-mono text-muted-foreground">--chart-2</p></div><div class="text-center"><div class="w-full h-8 rounded-md mb-1" style="background-color: #6a47f0;"></div><p class="text-xs font-mono text-muted-foreground">--chart-3</p></div><div class="text-center"><div class="w-full h-8 rounded-md mb-1" style="background-color: #5433d0;"></div><p class="text-xs font-mono text-muted-foreground">--chart-4</p></div><div class="text-center"><div class="w-full h-8 rounded-md mb-1" style="background-color: #4125aa;"></div><p class="text-xs font-mono text-muted-foreground">--chart-5</p></div></div></section><section class="space-y-4"><h2 class="text-2xl font-semibold">Components Used</h2><div class="flex flex-wrap gap-2"><span class="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">Chart</span><span class="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">Tabs</span><span class="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">Checkbox</span><span class="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">Collapsible</span></div></section></div>`,
}

// ============================================
// Component Pages - Import from batch files
// ============================================

import batch1 from "./component-docs-batch1"
import batch2 from "./component-docs-batch2"
import batch3 from "./component-docs-batch3"
import batch4 from "./component-docs-batch4"

// Merge all component docs into the map
// Each batch exports: Record<string, { title, description, component }>
// We need to convert to DocContent format (add empty html string)
function mergeBatch(batch: Record<string, { title: string; description: string; component: React.ReactNode }>) {
  for (const [slug, doc] of Object.entries(batch)) {
    componentDocsMap[slug] = {
      title: doc.title,
      description: doc.description,
      html: "",
      component: doc.component,
    }
  }
}

mergeBatch(batch1)
mergeBatch(batch2)
mergeBatch(batch3)
mergeBatch(batch4)

// ============================================
// Export
// ============================================

export function getDocContent(slug: string): DocContent | null {
  return componentDocsMap[slug] || null
}
