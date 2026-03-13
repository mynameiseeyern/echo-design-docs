"use client"

import React from "react"
import { SpacingLayoutGuide } from "./spacing-layout-guide"

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
  description: "The design system for Echo — an AI-powered Interaction Intelligence Platform for contact centres.",
  html: `
    <div class="space-y-10">
      <section class="space-y-4">
        <p class="text-lg text-muted-foreground">
          Echo is an AI-powered Interaction Intelligence Platform that analyses 100% of contact centre calls to detect risk, measure process adherence, and elevate agent performance. This design system provides the components, patterns, and guidelines used to build every surface of the Echo product.
        </p>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">What Echo does</h2>
        <p class="text-base text-muted-foreground">
          Contact centres typically review only 1–3% of calls manually. Echo closes that gap by automatically scoring every interaction against defined SOPs, surfacing compliance risks, identifying training gaps, and giving leaders the visibility they need to act — not guess.
        </p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          <div class="border rounded-lg p-4 bg-card text-center space-y-1">
            <p class="text-2xl font-bold text-primary">100%</p>
            <p class="text-xs text-muted-foreground">Call coverage</p>
          </div>
          <div class="border rounded-lg p-4 bg-card text-center space-y-1">
            <p class="text-2xl font-bold text-primary">64%</p>
            <p class="text-xs text-muted-foreground">Avg adherence</p>
          </div>
          <div class="border rounded-lg p-4 bg-card text-center space-y-1">
            <p class="text-2xl font-bold text-primary">50×</p>
            <p class="text-xs text-muted-foreground">Manual QA</p>
          </div>
          <div class="border rounded-lg p-4 bg-card text-center space-y-1">
            <p class="text-2xl font-bold text-primary">&lt;30 days</p>
            <p class="text-xs text-muted-foreground">Time to value</p>
          </div>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Core product pillars</h2>
        <p class="text-sm text-muted-foreground mb-2">Every component in this system supports one or more of these pillars.</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="border rounded-lg p-5 bg-card space-y-2">
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 rounded-full bg-primary"></div>
              <h3 class="font-semibold text-sm">Dynamic Process Adherence</h3>
            </div>
            <p class="text-sm text-muted-foreground">Step-by-step SOP scoring across every call. Visualised with progress bars, adherence badges, and step-level breakdowns.</p>
          </div>
          <div class="border rounded-lg p-5 bg-card space-y-2">
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 rounded-full bg-primary"></div>
              <h3 class="font-semibold text-sm">Workforce Intelligence</h3>
            </div>
            <p class="text-sm text-muted-foreground">Agent performance tables, coaching insights, skill gap identification. Data tables, badges, and trend charts are the primary surfaces.</p>
          </div>
          <div class="border rounded-lg p-5 bg-card space-y-2">
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 rounded-full bg-primary"></div>
              <h3 class="font-semibold text-sm">Proactive Compliance</h3>
            </div>
            <p class="text-sm text-muted-foreground">Risk alerts and deviation detection before they escalate. Alerts, alert dialogs, and color-coded badges carry this information.</p>
          </div>
          <div class="border rounded-lg p-5 bg-card space-y-2">
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 rounded-full bg-primary"></div>
              <h3 class="font-semibold text-sm">Risk-informed Solutions</h3>
            </div>
            <p class="text-sm text-muted-foreground">Actionable insight cards that connect risk detection to tailored recommendations. Cards, collapsibles, and drawers present these findings.</p>
          </div>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Key UI surfaces</h2>
        <p class="text-sm text-muted-foreground mb-2">These are the primary screens that make up Echo. Each combines multiple components from this system.</p>
        <div class="space-y-3">
          <div class="border rounded-lg p-4 bg-card flex items-start gap-4">
            <span class="text-primary font-mono text-sm font-bold shrink-0 mt-0.5">01</span>
            <div>
              <h3 class="font-semibold text-sm">Dashboards &amp; Overview</h3>
              <p class="text-sm text-muted-foreground">Top-level metrics — call coverage, overall adherence, QA efficiency. Built with Cards, Charts, Badges, and Tabs.</p>
            </div>
          </div>
          <div class="border rounded-lg p-4 bg-card flex items-start gap-4">
            <span class="text-primary font-mono text-sm font-bold shrink-0 mt-0.5">02</span>
            <div>
              <h3 class="font-semibold text-sm">Process Adherence Reports</h3>
              <p class="text-sm text-muted-foreground">Step-by-step SOP scoring with color-coded progress bars (green ≥67%, yellow 34–66%, red &lt;34%). Built with Progress, Badge, Separator, and Cards.</p>
            </div>
          </div>
          <div class="border rounded-lg p-4 bg-card flex items-start gap-4">
            <span class="text-primary font-mono text-sm font-bold shrink-0 mt-0.5">03</span>
            <div>
              <h3 class="font-semibold text-sm">Agent Performance Tables</h3>
              <p class="text-sm text-muted-foreground">Agent name, call count, adherence %, lowest step. Built with Data Table, Badge, Pagination, and Tooltip.</p>
            </div>
          </div>
          <div class="border rounded-lg p-4 bg-card flex items-start gap-4">
            <span class="text-primary font-mono text-sm font-bold shrink-0 mt-0.5">04</span>
            <div>
              <h3 class="font-semibold text-sm">Insight Cards</h3>
              <p class="text-sm text-muted-foreground">Flagged findings — identity verification shortcuts, security guidance skipped, knowledge gaps, top performers. Built with Card, Alert, and color-coded left-border accents.</p>
            </div>
          </div>
          <div class="border rounded-lg p-4 bg-card flex items-start gap-4">
            <span class="text-primary font-mono text-sm font-bold shrink-0 mt-0.5">05</span>
            <div>
              <h3 class="font-semibold text-sm">Queue Management</h3>
              <p class="text-sm text-muted-foreground">Filterable queue views with tabs, collapsible filter panels, and paginated call lists. Built with Tabs, Collapsible, Select, Checkbox, and Data Table.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Design system foundations</h2>
        <ul class="space-y-2 text-base">
          <li class="flex gap-3"><span class="text-primary font-bold">•</span> <span>Built on Tailwind CSS and shadcn/ui with Radix UI primitives</span></li>
          <li class="flex gap-3"><span class="text-primary font-bold">•</span> <span>Accessible by default — WCAG 2.1 AA, keyboard navigation, screen reader support</span></li>
          <li class="flex gap-3"><span class="text-primary font-bold">•</span> <span>Echo brand tokens — primary purple (#6a47f0), adherence color scale, Geist typeface</span></li>
          <li class="flex gap-3"><span class="text-primary font-bold">•</span> <span>Dark mode support — light and dark themes with CSS variable switching</span></li>
          <li class="flex gap-3"><span class="text-primary font-bold">•</span> <span>TypeScript first — full type safety across every component</span></li>
        </ul>
      </section>
    </div>
  `,
}

componentDocsMap["principles"] = {
  title: "Design Principles",
  description: "Core principles that guide every design decision in Echo.",
  html: `
    <div class="space-y-10">
      <section class="space-y-4">
        <p class="text-lg text-muted-foreground">
          Echo serves contact centre leaders, QA managers, and workforce analysts who make high-stakes decisions about compliance, agent performance, and customer outcomes. These principles ensure the interface supports that responsibility.
        </p>
      </section>

      <section class="space-y-6">
        <div class="space-y-3">
          <h2 class="text-2xl font-semibold">Clarity over decoration</h2>
          <p class="text-base text-muted-foreground">
            Echo users are scanning adherence scores, agent tables, and risk alerts under time pressure. Every element must communicate meaning immediately. Avoid decorative flourishes that compete with data — use color, weight, and spacing to create hierarchy, not ornament.
          </p>
          <div class="border rounded-lg p-4 bg-muted/50 space-y-1">
            <p class="text-sm font-medium">In practice</p>
            <p class="text-sm text-muted-foreground">Adherence badges use a three-tier color system (green ≥67%, yellow 34–66%, red &lt;34%) so a QA manager can assess an agent's performance at a glance without reading the number.</p>
          </div>
        </div>

        <div class="space-y-3">
          <h2 class="text-2xl font-semibold">Consistency builds trust</h2>
          <p class="text-base text-muted-foreground">
            When a 91% adherence badge is green on the Agent Performance table, it must be the same green on the Process Adherence report and the Dashboard overview. Inconsistent visual language erodes confidence in the data — and in Echo itself.
          </p>
          <div class="border rounded-lg p-4 bg-muted/50 space-y-1">
            <p class="text-sm font-medium">In practice</p>
            <p class="text-sm text-muted-foreground">Use shared design tokens for all score-related colors. Never hard-code a one-off green or red. Components like Badge, Progress, and Chart all pull from the same adherence color scale.</p>
          </div>
        </div>

        <div class="space-y-3">
          <h2 class="text-2xl font-semibold">Data density, not data overload</h2>
          <p class="text-base text-muted-foreground">
            Echo analyses thousands of calls. The interface must show enough information for informed decisions without overwhelming the user. Use progressive disclosure — summary first, detail on demand. Collapsible panels, tooltips, and drill-through patterns keep the surface clean.
          </p>
          <div class="border rounded-lg p-4 bg-muted/50 space-y-1">
            <p class="text-sm font-medium">In practice</p>
            <p class="text-sm text-muted-foreground">The Dashboard shows top-level KPIs (call coverage, avg adherence, QA efficiency). Clicking into an agent row opens a detailed step-by-step breakdown. The user controls the depth.</p>
          </div>
        </div>

        <div class="space-y-3">
          <h2 class="text-2xl font-semibold">Accessible by default</h2>
          <p class="text-base text-muted-foreground">
            Echo is used by people across contact centre operations — team leads, QA analysts, compliance officers, and executives. Every component supports keyboard navigation, screen readers, and meets WCAG 2.1 AA. Never rely on color alone to convey meaning; always pair it with text or an icon.
          </p>
          <div class="border rounded-lg p-4 bg-muted/50 space-y-1">
            <p class="text-sm font-medium">In practice</p>
            <p class="text-sm text-muted-foreground">Adherence scores always show the percentage number alongside the color indicator. Risk alerts include both a red icon and the word "Risk" so the meaning is clear regardless of how the user perceives color.</p>
          </div>
        </div>

        <div class="space-y-3">
          <h2 class="text-2xl font-semibold">Composable, not custom</h2>
          <p class="text-base text-muted-foreground">
            Every new screen in Echo should be built from existing components. If a pattern doesn't exist, add it to the system — don't create a one-off. This keeps the codebase maintainable and ensures new features feel native from day one.
          </p>
          <div class="border rounded-lg p-4 bg-muted/50 space-y-1">
            <p class="text-sm font-medium">In practice</p>
            <p class="text-sm text-muted-foreground">The Insight Cards on the pilot report use the same Card component as the Dashboard metric cards, the same Badge for scores, and the same colored left-border accent pattern used throughout the app.</p>
          </div>
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
          Import and use components in Echo.
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
  title: "Spacing & Layout",
  description: "Spacing scale, border radius, and layout patterns with annotated examples for building consistent Echo interfaces.",
  html: "",
  component: <SpacingLayoutGuide />,
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
// Resources — Inspiration Directory
// ============================================

componentDocsMap["inspiration"] = {
  title: "Inspiration",
  description: "Open source shadcn/ui kits, block libraries, and component collections for design and development inspiration.",
  html: `
    <div class="space-y-12">

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Official</h2>
        <p class="text-muted-foreground">The canonical source for shadcn/ui components and blocks.</p>
        <div class="grid gap-4">
          <a href="https://ui.shadcn.com" target="_blank" rel="noopener" class="group block border rounded-lg p-5 bg-card hover:border-primary/50 transition-colors">
            <div class="flex items-start justify-between mb-2">
              <h3 class="font-semibold group-hover:text-primary transition-colors">shadcn/ui</h3>
              <span class="text-xs font-mono bg-muted px-2 py-0.5 rounded">ui.shadcn.com</span>
            </div>
            <p class="text-sm text-muted-foreground">The foundation — beautifully designed, accessible components and a code distribution platform. Open source, open code.</p>
            <div class="flex gap-2 mt-3">
              <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md">Components</span>
              <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md">Blocks</span>
              <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md">Registry</span>
            </div>
          </a>
          <a href="https://github.com/shadcn-ui/ui" target="_blank" rel="noopener" class="group block border rounded-lg p-5 bg-card hover:border-primary/50 transition-colors">
            <div class="flex items-start justify-between mb-2">
              <h3 class="font-semibold group-hover:text-primary transition-colors">shadcn-ui/ui — GitHub</h3>
              <span class="text-xs font-mono bg-muted px-2 py-0.5 rounded">github.com</span>
            </div>
            <p class="text-sm text-muted-foreground">The official open-source repository. Explore the source for every component, block, and the CLI registry.</p>
            <div class="flex gap-2 mt-3">
              <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md">Source Code</span>
              <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md">CLI</span>
            </div>
          </a>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Block Libraries</h2>
        <p class="text-muted-foreground">Pre-built page sections — hero areas, pricing cards, auth forms, dashboards — ready to drop in.</p>
        <div class="grid gap-4">
          <a href="https://shadcnblocks.com" target="_blank" rel="noopener" class="group block border rounded-lg p-5 bg-card hover:border-primary/50 transition-colors">
            <div class="flex items-start justify-between mb-2">
              <h3 class="font-semibold group-hover:text-primary transition-colors">shadcnblocks</h3>
              <span class="text-xs font-mono bg-muted px-2 py-0.5 rounded">shadcnblocks.com</span>
            </div>
            <p class="text-sm text-muted-foreground">The largest third-party block library — 1,390+ blocks, 1,189 component variants, 13 complete templates. Free and open source. CLI-installable.</p>
            <div class="flex gap-2 mt-3">
              <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md">1,390+ Blocks</span>
              <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md">Marketing</span>
              <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md">Templates</span>
            </div>
          </a>
          <a href="https://github.com/shadcnspace/shadcnspace" target="_blank" rel="noopener" class="group block border rounded-lg p-5 bg-card hover:border-primary/50 transition-colors">
            <div class="flex items-start justify-between mb-2">
              <h3 class="font-semibold group-hover:text-primary transition-colors">Shadcn Space</h3>
              <span class="text-xs font-mono bg-muted px-2 py-0.5 rounded">github.com</span>
            </div>
            <p class="text-sm text-muted-foreground">100+ components, 51+ reusable blocks and layouts, dashboard UI kits. Built with React, Tailwind, Radix UI, and Base UI. No runtime dependencies.</p>
            <div class="flex gap-2 mt-3">
              <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md">100+ Components</span>
              <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md">51+ Blocks</span>
              <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md">Dashboards</span>
            </div>
          </a>
          <a href="https://blocks.so" target="_blank" rel="noopener" class="group block border rounded-lg p-5 bg-card hover:border-primary/50 transition-colors">
            <div class="flex items-start justify-between mb-2">
              <h3 class="font-semibold group-hover:text-primary transition-colors">blocks.so</h3>
              <span class="text-xs font-mono bg-muted px-2 py-0.5 rounded">blocks.so</span>
            </div>
            <p class="text-sm text-muted-foreground">60+ free, beautifully designed, accessible blocks built with React, Tailwind CSS, and Next.js. Copy-paste ready.</p>
            <div class="flex gap-2 mt-3">
              <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md">60+ Blocks</span>
              <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md">Free</span>
              <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md">Next.js</span>
            </div>
          </a>
          <a href="https://shadcnuikit.com" target="_blank" rel="noopener" class="group block border rounded-lg p-5 bg-card hover:border-primary/50 transition-colors">
            <div class="flex items-start justify-between mb-2">
              <h3 class="font-semibold group-hover:text-primary transition-colors">shadcn UI Kit</h3>
              <span class="text-xs font-mono bg-muted px-2 py-0.5 rounded">shadcnuikit.com</span>
            </div>
            <p class="text-sm text-muted-foreground">151 blocks, 503 free components, 60 real-world examples. 12 admin dashboards, 11 web app templates. Next.js 16, React 19, Tailwind v4.</p>
            <div class="flex gap-2 mt-3">
              <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md">151 Blocks</span>
              <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md">Dashboards</span>
              <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md">eCommerce</span>
            </div>
          </a>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Animation &amp; Effects Libraries</h2>
        <p class="text-muted-foreground">Component libraries that pair with shadcn/ui to add motion, transitions, and visual polish.</p>
        <div class="grid gap-4">
          <a href="https://magicui.design" target="_blank" rel="noopener" class="group block border rounded-lg p-5 bg-card hover:border-primary/50 transition-colors">
            <div class="flex items-start justify-between mb-2">
              <h3 class="font-semibold group-hover:text-primary transition-colors">Magic UI</h3>
              <span class="text-xs font-mono bg-muted px-2 py-0.5 rounded">magicui.design</span>
            </div>
            <p class="text-sm text-muted-foreground">150+ free animated components built with React, TypeScript, Tailwind CSS, and Motion. The perfect animation companion for shadcn/ui.</p>
            <div class="flex gap-2 mt-3">
              <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md">150+ Components</span>
              <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md">Animations</span>
              <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md">Free</span>
            </div>
          </a>
          <a href="https://ui.aceternity.com" target="_blank" rel="noopener" class="group block border rounded-lg p-5 bg-card hover:border-primary/50 transition-colors">
            <div class="flex items-start justify-between mb-2">
              <h3 class="font-semibold group-hover:text-primary transition-colors">Aceternity UI</h3>
              <span class="text-xs font-mono bg-muted px-2 py-0.5 rounded">ui.aceternity.com</span>
            </div>
            <p class="text-sm text-muted-foreground">Copy-paste components with stunning visual effects — parallax scroll, 3D cards, spotlight, aurora backgrounds. Built with Tailwind and Framer Motion.</p>
            <div class="flex gap-2 mt-3">
              <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md">Effects</span>
              <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md">Framer Motion</span>
              <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md">3D</span>
            </div>
          </a>
          <a href="https://originui.com" target="_blank" rel="noopener" class="group block border rounded-lg p-5 bg-card hover:border-primary/50 transition-colors">
            <div class="flex items-start justify-between mb-2">
              <h3 class="font-semibold group-hover:text-primary transition-colors">Origin UI</h3>
              <span class="text-xs font-mono bg-muted px-2 py-0.5 rounded">originui.com</span>
            </div>
            <p class="text-sm text-muted-foreground">Hundreds of copy-paste components for rapidly building modern app interfaces. Slightly more advanced variants than base shadcn — timelines, rich dialogs, etc.</p>
            <div class="flex gap-2 mt-3">
              <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md">Advanced Components</span>
              <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md">Open Source</span>
            </div>
          </a>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Starter Kits &amp; Dashboards</h2>
        <p class="text-muted-foreground">Production-ready starters that demonstrate real-world shadcn/ui patterns at scale.</p>
        <div class="grid gap-4">
          <a href="https://github.com/shadcn-ui/taxonomy" target="_blank" rel="noopener" class="group block border rounded-lg p-5 bg-card hover:border-primary/50 transition-colors">
            <div class="flex items-start justify-between mb-2">
              <h3 class="font-semibold group-hover:text-primary transition-colors">Taxonomy</h3>
              <span class="text-xs font-mono bg-muted px-2 py-0.5 rounded">19.2k ⭐</span>
            </div>
            <p class="text-sm text-muted-foreground">The original shadcn/ui showcase app — reference implementation for Next.js app router patterns. Built by shadcn.</p>
            <div class="flex gap-2 mt-3">
              <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md">App Router</span>
              <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md">Auth</span>
              <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md">Reference</span>
            </div>
          </a>
          <a href="https://github.com/shadcn-ui/ui/tree/main/apps/www" target="_blank" rel="noopener" class="group block border rounded-lg p-5 bg-card hover:border-primary/50 transition-colors">
            <div class="flex items-start justify-between mb-2">
              <h3 class="font-semibold group-hover:text-primary transition-colors">shadcn/ui Docs Site (source)</h3>
              <span class="text-xs font-mono bg-muted px-2 py-0.5 rounded">github.com</span>
            </div>
            <p class="text-sm text-muted-foreground">The source code for ui.shadcn.com itself — study the blocks, examples, themes, and registry implementation firsthand.</p>
            <div class="flex gap-2 mt-3">
              <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md">Docs Pattern</span>
              <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md">Registry</span>
              <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md">Themes</span>
            </div>
          </a>
          <a href="https://github.com/haydenbleasel/next-forge" target="_blank" rel="noopener" class="group block border rounded-lg p-5 bg-card hover:border-primary/50 transition-colors">
            <div class="flex items-start justify-between mb-2">
              <h3 class="font-semibold group-hover:text-primary transition-colors">next-forge</h3>
              <span class="text-xs font-mono bg-muted px-2 py-0.5 rounded">6.9k ⭐</span>
            </div>
            <p class="text-sm text-muted-foreground">Production-grade Turborepo monorepo — 6 deployable apps, 16+ integrated packages. One command sets up everything.</p>
            <div class="flex gap-2 mt-3">
              <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md">Monorepo</span>
              <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md">SaaS</span>
              <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md">Production</span>
            </div>
          </a>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Curated Lists &amp; Directories</h2>
        <p class="text-muted-foreground">Meta-collections — browse these to discover even more libraries, templates, and registries.</p>
        <div class="grid gap-4">
          <a href="https://github.com/birobirobiro/awesome-shadcn-ui" target="_blank" rel="noopener" class="group block border rounded-lg p-5 bg-card hover:border-primary/50 transition-colors">
            <div class="flex items-start justify-between mb-2">
              <h3 class="font-semibold group-hover:text-primary transition-colors">awesome-shadcn-ui</h3>
              <span class="text-xs font-mono bg-muted px-2 py-0.5 rounded">github.com</span>
            </div>
            <p class="text-sm text-muted-foreground">The definitive curated list of awesome things related to shadcn/ui — dozens of community components, registries, tools, and projects.</p>
            <div class="flex gap-2 mt-3">
              <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md">Curated List</span>
              <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md">Community</span>
            </div>
          </a>
          <a href="https://registry.directory" target="_blank" rel="noopener" class="group block border rounded-lg p-5 bg-card hover:border-primary/50 transition-colors">
            <div class="flex items-start justify-between mb-2">
              <h3 class="font-semibold group-hover:text-primary transition-colors">registry.directory</h3>
              <span class="text-xs font-mono bg-muted px-2 py-0.5 rounded">registry.directory</span>
            </div>
            <p class="text-sm text-muted-foreground">The explorer for shadcn/ui registries — browse and discover all available component registries in one place.</p>
            <div class="flex gap-2 mt-3">
              <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md">Registry Explorer</span>
              <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md">Directory</span>
            </div>
          </a>
          <a href="https://shadcntemplates.com" target="_blank" rel="noopener" class="group block border rounded-lg p-5 bg-card hover:border-primary/50 transition-colors">
            <div class="flex items-start justify-between mb-2">
              <h3 class="font-semibold group-hover:text-primary transition-colors">shadcntemplates.com</h3>
              <span class="text-xs font-mono bg-muted px-2 py-0.5 rounded">shadcntemplates.com</span>
            </div>
            <p class="text-sm text-muted-foreground">A directory of shadcn UI templates, components, blocks, boilerplates and more — accepts open source and free submissions.</p>
            <div class="flex gap-2 mt-3">
              <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md">Templates</span>
              <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md">Directory</span>
            </div>
          </a>
          <a href="https://shadcnstudio.com" target="_blank" rel="noopener" class="group block border rounded-lg p-5 bg-card hover:border-primary/50 transition-colors">
            <div class="flex items-start justify-between mb-2">
              <h3 class="font-semibold group-hover:text-primary transition-colors">Shadcn Studio</h3>
              <span class="text-xs font-mono bg-muted px-2 py-0.5 rounded">shadcnstudio.com</span>
            </div>
            <p class="text-sm text-muted-foreground">1,000+ components, blocks, UI kits, boilerplates, templates, and themes with AI tools to accelerate development.</p>
            <div class="flex gap-2 mt-3">
              <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md">1,000+ Components</span>
              <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md">AI Tools</span>
            </div>
          </a>
        </div>
      </section>

    </div>
  `,
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
