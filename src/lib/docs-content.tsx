import React from "react"
import { CodeBlock } from "@/components/code-block"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Check, X } from "lucide-react"

interface DocContent {
  title: string
  description: string
  html: string
}

const componentDocsMap: Record<string, DocContent> = {}

// Helper to generate component documentation
function generateComponentDoc(
  slug: string,
  title: string,
  description: string,
  preview: React.ReactNode,
  rationale: string,
  anatomy: Record<string, string>,
  variants?: Record<string, string>,
  codeSnippet?: string,
  a11y?: string,
  guidelines?: string
): DocContent {
  const html = `
    <div class="space-y-12">
      <!-- Preview Section -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Preview</h2>
        <div class="border rounded-lg p-8 bg-card">
          ${/* Preview would be rendered server-side */ ""}
        </div>
      </section>

      <!-- Purpose & Rationale -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Purpose & Rationale</h2>
        <p class="text-base leading-relaxed text-muted-foreground">${rationale}</p>
      </section>

      <!-- Anatomy -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Anatomy</h2>
        <div class="space-y-2">
          ${Object.entries(anatomy)
            .map(
              ([part, desc]) =>
                `<div class="flex gap-4"><div class="font-mono text-sm font-semibold text-primary min-w-32">${part}</div><div class="text-sm">${desc}</div></div>`
            )
            .join("")}
        </div>
      </section>

      ${
        variants
          ? `
      <!-- Variants -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Variants</h2>
        <div class="space-y-2">
          ${Object.entries(variants)
            .map(
              ([variant, desc]) =>
                `<div class="flex gap-4"><div class="font-mono text-sm font-semibold text-secondary min-w-32">${variant}</div><div class="text-sm">${desc}</div></div>`
            )
            .join("")}
        </div>
      </section>
      `
          : ""
      }

      <!-- Do's and Don'ts -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Do's and Don'ts</h2>
        <div class="grid grid-cols-2 gap-6">
          <div class="space-y-3">
            <h3 class="font-semibold text-green-600">Do's</h3>
            <ul class="space-y-2">
              <li class="flex gap-2 text-sm"><span class="text-green-600 font-bold">✓</span> Use for primary actions</li>
              <li class="flex gap-2 text-sm"><span class="text-green-600 font-bold">✓</span> Keep labels clear and concise</li>
              <li class="flex gap-2 text-sm"><span class="text-green-600 font-bold">✓</span> Provide visual feedback on interaction</li>
            </ul>
          </div>
          <div class="space-y-3">
            <h3 class="font-semibold text-red-600">Don'ts</h3>
            <ul class="space-y-2">
              <li class="flex gap-2 text-sm"><span class="text-red-600 font-bold">✗</span> Use vague button labels</li>
              <li class="flex gap-2 text-sm"><span class="text-red-600 font-bold">✗</span> Disable without explanation</li>
              <li class="flex gap-2 text-sm"><span class="text-red-600 font-bold">✗</span> Use multiple primary buttons</li>
            </ul>
          </div>
        </div>
      </section>

      ${
        codeSnippet
          ? `
      <!-- Code Example -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Code Example</h2>
        <pre class="bg-muted rounded-lg p-4 overflow-x-auto"><code class="text-sm">${codeSnippet}</code></pre>
      </section>
      `
          : ""
      }

      ${
        a11y
          ? `
      <!-- Accessibility -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Accessibility</h2>
        <p class="text-base leading-relaxed text-muted-foreground">${a11y}</p>
      </section>
      `
          : ""
      }

      ${
        guidelines
          ? `
      <!-- Content Guidelines -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Content & Style Guidelines</h2>
        <p class="text-base leading-relaxed text-muted-foreground">${guidelines}</p>
      </section>
      `
          : ""
      }
    </div>
  `

  return {
    title,
    description,
    html,
  }
}

// Foundation Pages
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
          Explore the documentation to learn about our design principles, foundations, and component library. Each component comes with code examples and best practices.
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
  --primary: 280 60% 50%;
  --secondary: 200 90% 56%;
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
  description: "Text styles and font scale",
  html: `
    <div class="space-y-8">
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Font Scale</h2>
        <p class="text-base text-muted-foreground mb-6">
          Echo uses a carefully curated type scale to maintain visual hierarchy and readability.
        </p>
        <div class="space-y-4">
          <div class="text-xs">Text XS - Extra Small</div>
          <div class="text-sm">Text SM - Small</div>
          <div class="text-base">Text Base - Regular</div>
          <div class="text-lg">Text LG - Large</div>
          <div class="text-xl">Text XL - Extra Large</div>
          <div class="text-2xl">Text 2XL</div>
          <div class="text-3xl">Text 3XL</div>
          <div class="text-4xl">Text 4XL</div>
          <div class="text-5xl">Text 5XL</div>
          <div class="text-7xl">Text 7XL</div>
          <div class="text-8xl">Text 8XL</div>
          <div class="text-9xl">Text 9XL</div>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Usage</h2>
        <p class="text-base text-muted-foreground mb-4">
          Apply typography classes using Tailwind utilities.
        </p>
        <pre class="bg-muted rounded-lg p-4 overflow-x-auto"><code class="text-sm">&lt;h1 class="text-4xl font-bold"&gt;Heading&lt;/h1&gt;
&lt;p class="text-base"&gt;Body text&lt;/p&gt;
&lt;span class="text-sm text-muted-foreground"&gt;Caption&lt;/span&gt;</code></pre>
      </section>
    </div>
  `,
}

componentDocsMap["colors"] = {
  title: "Colors",
  description: "Color palette and usage",
  html: `
    <div class="space-y-8">
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Color Palette</h2>
        <p class="text-base text-muted-foreground mb-6">
          The Echo color system is built on semantic color tokens that adapt to light and dark modes.
        </p>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div class="space-y-2">
            <div class="h-24 rounded-lg bg-primary"></div>
            <div class="text-sm font-semibold">Primary</div>
            <div class="text-xs text-muted-foreground">hsl(280 60% 50%)</div>
          </div>
          <div class="space-y-2">
            <div class="h-24 rounded-lg bg-secondary"></div>
            <div class="text-sm font-semibold">Secondary</div>
            <div class="text-xs text-muted-foreground">hsl(200 90% 56%)</div>
          </div>
          <div class="space-y-2">
            <div class="h-24 rounded-lg bg-accent"></div>
            <div class="text-sm font-semibold">Accent</div>
            <div class="text-xs text-muted-foreground">hsl(280 60% 50%)</div>
          </div>
          <div class="space-y-2">
            <div class="h-24 rounded-lg bg-destructive"></div>
            <div class="text-sm font-semibold">Destructive</div>
            <div class="text-xs text-muted-foreground">hsl(0 84.2% 60.2%)</div>
          </div>
          <div class="space-y-2">
            <div class="h-24 rounded-lg bg-muted"></div>
            <div class="text-sm font-semibold">Muted</div>
            <div class="text-xs text-muted-foreground">hsl(0 0% 96.1%)</div>
          </div>
          <div class="space-y-2">
            <div class="h-24 rounded-lg bg-card border"></div>
            <div class="text-sm font-semibold">Card</div>
            <div class="text-xs text-muted-foreground">Surface color</div>
          </div>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Usage</h2>
        <p class="text-base text-muted-foreground mb-4">
          Apply colors using Tailwind utilities.
        </p>
        <pre class="bg-muted rounded-lg p-4 overflow-x-auto"><code class="text-sm">&lt;div class="bg-primary text-primary-foreground"&gt;&lt;/div&gt;
&lt;div class="bg-secondary/50"&gt;&lt;/div&gt;
&lt;div class="border border-border"&gt;&lt;/div&gt;</code></pre>
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
        <p class="text-base text-muted-foreground mb-6">
          Echo uses an 8px-based spacing scale for consistent alignment and layout.
        </p>
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <div class="w-8 h-8 bg-primary rounded"></div>
            <div class="text-sm"><span class="font-semibold">8px</span> - Base unit (p-2)</div>
          </div>
          <div class="flex items-center gap-4">
            <div class="w-12 h-8 bg-primary rounded"></div>
            <div class="text-sm"><span class="font-semibold">16px</span> - Component padding (p-4)</div>
          </div>
          <div class="flex items-center gap-4">
            <div class="w-20 h-8 bg-primary rounded"></div>
            <div class="text-sm"><span class="font-semibold">24px</span> - Section spacing (p-6)</div>
          </div>
          <div class="flex items-center gap-4">
            <div class="w-32 h-8 bg-primary rounded"></div>
            <div class="text-sm"><span class="font-semibold">32px</span> - Large spacing (p-8)</div>
          </div>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Application</h2>
        <p class="text-base text-muted-foreground mb-4">
          Use Tailwind spacing utilities for padding, margins, and gaps.
        </p>
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
        <p class="text-base text-muted-foreground mb-4">
          Common icon sizes for different use cases.
        </p>
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

// Component Pages
componentDocsMap["button"] = {
  title: "Button",
  description: "A clickable element used to trigger actions",
  html: `
    <div class="space-y-12">
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Preview</h2>
        <div class="border rounded-lg p-8 bg-card space-y-4">
          <div class="flex flex-wrap gap-4">
            <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90">Default</button>
            <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-3 bg-secondary text-secondary-foreground hover:bg-secondary/80">Secondary</button>
            <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground">Outline</button>
            <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 hover:bg-accent hover:text-accent-foreground">Ghost</button>
            <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 text-primary underline-offset-4 hover:underline">Link</button>
            <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-destructive text-destructive-foreground hover:bg-destructive/90">Destructive</button>
          </div>
          <div class="border-t pt-4 flex gap-2">
            <button class="h-9 rounded-md px-3 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90">Small</button>
            <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90">Default</button>
            <button class="h-11 rounded-md px-8 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90">Large</button>
          </div>
          <div class="border-t pt-4 flex gap-2">
            <button disabled class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90">Disabled</button>
          </div>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Purpose & Rationale</h2>
        <p class="text-base leading-relaxed text-muted-foreground">Buttons are the primary way users trigger actions in your interface. They should be used for any action that changes the page state or submits data. Buttons communicate what action will happen when clicked and use clear, action-oriented labels.</p>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Anatomy</h2>
        <div class="space-y-2">
          <div class="flex gap-4"><div class="font-mono text-sm font-semibold text-primary min-w-32">Root</div><div class="text-sm">The button container element</div></div>
          <div class="flex gap-4"><div class="font-mono text-sm font-semibold text-primary min-w-32">Label</div><div class="text-sm">The text content of the button</div></div>
          <div class="flex gap-4"><div class="font-mono text-sm font-semibold text-primary min-w-32">Icon</div><div class="text-sm">Optional icon before or after the label</div></div>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Variants</h2>
        <div class="space-y-2">
          <div class="flex gap-4"><div class="font-mono text-sm font-semibold text-secondary min-w-32">default</div><div class="text-sm">Primary action, filled background</div></div>
          <div class="flex gap-4"><div class="font-mono text-sm font-semibold text-secondary min-w-32">secondary</div><div class="text-sm">Secondary action, different color</div></div>
          <div class="flex gap-4"><div class="font-mono text-sm font-semibold text-secondary min-w-32">outline</div><div class="text-sm">Outlined style, no background fill</div></div>
          <div class="flex gap-4"><div class="font-mono text-sm font-semibold text-secondary min-w-32">ghost</div><div class="text-sm">No background, appears on hover</div></div>
          <div class="flex gap-4"><div class="font-mono text-sm font-semibold text-secondary min-w-32">link</div><div class="text-sm">Styled like a link</div></div>
          <div class="flex gap-4"><div class="font-mono text-sm font-semibold text-secondary min-w-32">destructive</div><div class="text-sm">For dangerous actions like delete</div></div>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Sizes</h2>
        <div class="space-y-2">
          <div class="flex gap-4"><div class="font-mono text-sm font-semibold text-secondary min-w-32">sm</div><div class="text-sm">Small button (h-9)</div></div>
          <div class="flex gap-4"><div class="font-mono text-sm font-semibold text-secondary min-w-32">default</div><div class="text-sm">Default button (h-10)</div></div>
          <div class="flex gap-4"><div class="font-mono text-sm font-semibold text-secondary min-w-32">lg</div><div class="text-sm">Large button (h-11)</div></div>
          <div class="flex gap-4"><div class="font-mono text-sm font-semibold text-secondary min-w-32">icon</div><div class="text-sm">Square icon button (h-10 w-10)</div></div>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Do's and Don'ts</h2>
        <div class="grid grid-cols-2 gap-6">
          <div class="space-y-3">
            <h3 class="font-semibold text-green-600">Do's</h3>
            <ul class="space-y-2">
              <li class="flex gap-2 text-sm"><span class="text-green-600 font-bold">✓</span> Use clear, action-oriented labels</li>
              <li class="flex gap-2 text-sm"><span class="text-green-600 font-bold">✓</span> Use primary variant for main actions</li>
              <li class="flex gap-2 text-sm"><span class="text-green-600 font-bold">✓</span> Provide visual feedback on hover/click</li>
              <li class="flex gap-2 text-sm"><span class="text-green-600 font-bold">✓</span> Include loading state for async actions</li>
            </ul>
          </div>
          <div class="space-y-3">
            <h3 class="font-semibold text-red-600">Don'ts</h3>
            <ul class="space-y-2">
              <li class="flex gap-2 text-sm"><span class="text-red-600 font-bold">✗</span> Use vague labels like "Click here"</li>
              <li class="flex gap-2 text-sm"><span class="text-red-600 font-bold">✗</span> Use multiple primary buttons</li>
              <li class="flex gap-2 text-sm"><span class="text-red-600 font-bold">✗</span> Disable buttons without reason</li>
              <li class="flex gap-2 text-sm"><span class="text-red-600 font-bold">✗</span> Use buttons for navigation</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Code Example</h2>
        <pre class="bg-muted rounded-lg p-4 overflow-x-auto"><code class="text-sm">import { Button } from "@/components/ui/button"

export function MyComponent() {
  return (
    &lt;&gt;
      &lt;Button&gt;Click me&lt;/Button&gt;
      &lt;Button variant="secondary"&gt;Secondary&lt;/Button&gt;
      &lt;Button variant="outline"&gt;Outline&lt;/Button&gt;
      &lt;Button variant="destructive"&gt;Delete&lt;/Button&gt;
      &lt;Button size="sm"&gt;Small&lt;/Button&gt;
      &lt;Button size="lg"&gt;Large&lt;/Button&gt;
      &lt;Button disabled&gt;Disabled&lt;/Button&gt;
    &lt;/&gt;
  )
}</code></pre>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Accessibility</h2>
        <p class="text-base leading-relaxed text-muted-foreground">Buttons support all standard HTML button attributes. They have focus styles for keyboard navigation, proper ARIA labels, and are fully accessible to screen readers. Loading states should be communicated with aria-busy attribute.</p>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Content & Style Guidelines</h2>
        <p class="text-base leading-relaxed text-muted-foreground">Button labels should be concise, action-oriented, and start with a verb when possible (Save, Delete, Submit). Use sentence case for labels. Icons should supplement the text, not replace it. Always provide context for dangerous actions like delete or clear.</p>
      </section>
    </div>
  `,
}

componentDocsMap["input"] = {
  title: "Input",
  description: "A text input field for user entry",
  html: `
    <div class="space-y-12">
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Preview</h2>
        <div class="border rounded-lg p-8 bg-card space-y-4">
          <input type="text" placeholder="Default input" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" />
          <input type="text" placeholder="With label" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" />
          <input type="text" placeholder="Disabled" disabled class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" />
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Purpose & Rationale</h2>
        <p class="text-base leading-relaxed text-muted-foreground">Input fields are used to collect text information from users. They should be clear, easy to use, and provide helpful feedback.</p>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Anatomy</h2>
        <div class="space-y-2">
          <div class="flex gap-4"><div class="font-mono text-sm font-semibold text-primary min-w-32">Input</div><div class="text-sm">The text input element</div></div>
          <div class="flex gap-4"><div class="font-mono text-sm font-semibold text-primary min-w-32">Placeholder</div><div class="text-sm">Helper text shown when empty</div></div>
          <div class="flex gap-4"><div class="font-mono text-sm font-semibold text-primary min-w-32">Label</div><div class="text-sm">Optional label above the input</div></div>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Do's and Don'ts</h2>
        <div class="grid grid-cols-2 gap-6">
          <div class="space-y-3">
            <h3 class="font-semibold text-green-600">Do's</h3>
            <ul class="space-y-2">
              <li class="flex gap-2 text-sm"><span class="text-green-600 font-bold">✓</span> Use clear labels and placeholders</li>
              <li class="flex gap-2 text-sm"><span class="text-green-600 font-bold">✓</span> Validate on blur or submit</li>
              <li class="flex gap-2 text-sm"><span class="text-green-600 font-bold">✓</span> Show error messages clearly</li>
            </ul>
          </div>
          <div class="space-y-3">
            <h3 class="font-semibold text-red-600">Don'ts</h3>
            <ul class="space-y-2">
              <li class="flex gap-2 text-sm"><span class="text-red-600 font-bold">✗</span> Use placeholder as label</li>
              <li class="flex gap-2 text-sm"><span class="text-red-600 font-bold">✗</span> Hide required indicators</li>
              <li class="flex gap-2 text-sm"><span class="text-red-600 font-bold">✗</span> Use placeholder text that's too long</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Code Example</h2>
        <pre class="bg-muted rounded-lg p-4 overflow-x-auto"><code class="text-sm">import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function MyComponent() {
  return (
    &lt;&gt;
      &lt;Input placeholder="Enter text..." /&gt;
      &lt;div className="space-y-2"&gt;
        &lt;Label htmlFor="name"&gt;Name&lt;/Label&gt;
        &lt;Input id="name" placeholder="John Doe" /&gt;
      &lt;/div&gt;
      &lt;Input disabled placeholder="Disabled input" /&gt;
    &lt;/&gt;
  )
}</code></pre>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Accessibility</h2>
        <p class="text-base leading-relaxed text-muted-foreground">Always associate inputs with labels using htmlFor/id. Use appropriate input types (email, password, number) for better mobile keyboards and validation. Error messages should be clearly labeled with aria-describedby.</p>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Content & Style Guidelines</h2>
        <p class="text-base leading-relaxed text-muted-foreground">Placeholder text should be helpful but not essential. Labels should be descriptive and concise. Error messages should be specific and actionable.</p>
      </section>
    </div>
  `,
}

componentDocsMap["badge"] = {
  title: "Badge",
  description: "A small, colored label for categorization",
  html: `
    <div class="space-y-12">
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Preview</h2>
        <div class="border rounded-lg p-8 bg-card space-y-4">
          <div class="flex flex-wrap gap-2">
            <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-primary text-primary-foreground hover:bg-primary/80">Default</div>
            <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">Secondary</div>
            <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80">Destructive</div>
            <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors text-foreground">Outline</div>
          </div>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Purpose & Rationale</h2>
        <p class="text-base leading-relaxed text-muted-foreground">Badges are used to label or categorize items. They draw attention and provide quick visual context.</p>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Anatomy</h2>
        <div class="space-y-2">
          <div class="flex gap-4"><div class="font-mono text-sm font-semibold text-primary min-w-32">Root</div><div class="text-sm">The badge container</div></div>
          <div class="flex gap-4"><div class="font-mono text-sm font-semibold text-primary min-w-32">Label</div><div class="text-sm">The text content</div></div>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Variants</h2>
        <div class="space-y-2">
          <div class="flex gap-4"><div class="font-mono text-sm font-semibold text-secondary min-w-32">default</div><div class="text-sm">Primary badge</div></div>
          <div class="flex gap-4"><div class="font-mono text-sm font-semibold text-secondary min-w-32">secondary</div><div class="text-sm">Secondary badge</div></div>
          <div class="flex gap-4"><div class="font-mono text-sm font-semibold text-secondary min-w-32">destructive</div><div class="text-sm">For alerts or errors</div></div>
          <div class="flex gap-4"><div class="font-mono text-sm font-semibold text-secondary min-w-32">outline</div><div class="text-sm">Outlined style</div></div>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Do's and Don'ts</h2>
        <div class="grid grid-cols-2 gap-6">
          <div class="space-y-3">
            <h3 class="font-semibold text-green-600">Do's</h3>
            <ul class="space-y-2">
              <li class="flex gap-2 text-sm"><span class="text-green-600 font-bold">✓</span> Keep labels short</li>
              <li class="flex gap-2 text-sm"><span class="text-green-600 font-bold">✓</span> Use for status and tags</li>
            </ul>
          </div>
          <div class="space-y-3">
            <h3 class="font-semibold text-red-600">Don'ts</h3>
            <ul class="space-y-2">
              <li class="flex gap-2 text-sm"><span class="text-red-600 font-bold">✗</span> Use for navigation</li>
              <li class="flex gap-2 text-sm"><span class="text-red-600 font-bold">✗</span> Use long text</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Code Example</h2>
        <pre class="bg-muted rounded-lg p-4 overflow-x-auto"><code class="text-sm">import { Badge } from "@/components/ui/badge"

export function MyComponent() {
  return (
    &lt;&gt;
      &lt;Badge&gt;New&lt;/Badge&gt;
      &lt;Badge variant="secondary"&gt;In Progress&lt;/Badge&gt;
      &lt;Badge variant="destructive"&gt;Critical&lt;/Badge&gt;
      &lt;Badge variant="outline"&gt;Draft&lt;/Badge&gt;
    &lt;/&gt;
  )
}</code></pre>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Accessibility</h2>
        <p class="text-base leading-relaxed text-muted-foreground">Badges should have sufficient color contrast. When used with icons, ensure the combined meaning is clear.</p>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Content & Style Guidelines</h2>
        <p class="text-base leading-relaxed text-muted-foreground">Keep badge text concise, typically one or two words. Use consistent terminology across your application.</p>
      </section>
    </div>
  `,
}

componentDocsMap["card"] = {
  title: "Card",
  description: "A container for content with a border and padding",
  html: `
    <div class="space-y-12">
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Preview</h2>
        <div class="border rounded-lg p-8 bg-card space-y-4">
          <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div class="flex flex-col space-y-1.5 p-6">
              <h2 class="text-2xl font-semibold leading-none tracking-tight">Card Title</h2>
              <p class="text-sm text-muted-foreground">Card description</p>
            </div>
            <div class="p-6 pt-0">
              <p>Card content goes here.</p>
            </div>
            <div class="flex items-center p-6 pt-0">
              <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground">Cancel</button>
            </div>
          </div>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Purpose & Rationale</h2>
        <p class="text-base leading-relaxed text-muted-foreground">Cards are versatile containers used to group and organize content. They create visual hierarchy and separate content into logical sections.</p>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Anatomy</h2>
        <div class="space-y-2">
          <div class="flex gap-4"><div class="font-mono text-sm font-semibold text-primary min-w-32">Card</div><div class="text-sm">The main container</div></div>
          <div class="flex gap-4"><div class="font-mono text-sm font-semibold text-primary min-w-32">CardHeader</div><div class="text-sm">Top section with title/description</div></div>
          <div class="flex gap-4"><div class="font-mono text-sm font-semibold text-primary min-w-32">CardContent</div><div class="text-sm">Main content area</div></div>
          <div class="flex gap-4"><div class="font-mono text-sm font-semibold text-primary min-w-32">CardFooter</div><div class="text-sm">Bottom section, typically for actions</div></div>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Do's and Don'ts</h2>
        <div class="grid grid-cols-2 gap-6">
          <div class="space-y-3">
            <h3 class="font-semibold text-green-600">Do's</h3>
            <ul class="space-y-2">
              <li class="flex gap-2 text-sm"><span class="text-green-600 font-bold">✓</span> Use for logical grouping</li>
              <li class="flex gap-2 text-sm"><span class="text-green-600 font-bold">✓</span> Add meaningful titles</li>
            </ul>
          </div>
          <div class="space-y-3">
            <h3 class="font-semibold text-red-600">Don'ts</h3>
            <ul class="space-y-2">
              <li class="flex gap-2 text-sm"><span class="text-red-600 font-bold">✗</span> Nest cards unnecessarily</li>
              <li class="flex gap-2 text-sm"><span class="text-red-600 font-bold">✗</span> Overload with content</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Code Example</h2>
        <pre class="bg-muted rounded-lg p-4 overflow-x-auto"><code class="text-sm">import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function MyCard() {
  return (
    &lt;Card&gt;
      &lt;CardHeader&gt;
        &lt;CardTitle&gt;Title&lt;/CardTitle&gt;
        &lt;CardDescription&gt;Description&lt;/CardDescription&gt;
      &lt;/CardHeader&gt;
      &lt;CardContent&gt;
        Content goes here
      &lt;/CardContent&gt;
    &lt;/Card&gt;
  )
}</code></pre>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Accessibility</h2>
        <p class="text-base leading-relaxed text-muted-foreground">Cards should have proper heading hierarchy. Interactive elements within cards should be keyboard accessible.</p>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Content & Style Guidelines</h2>
        <p class="text-base leading-relaxed text-muted-foreground">Use cards to organize related content. Provide clear titles and descriptions for each card's purpose.</p>
      </section>
    </div>
  `,
}

componentDocsMap["dialog"] = {
  title: "Dialog",
  description: "A modal overlay for important information or actions",
  html: `
    <div class="space-y-12">
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Preview</h2>
        <div class="border rounded-lg p-8 bg-card">
          <p class="text-sm text-muted-foreground">Dialog component preview would appear here. Click "Open Dialog" to see it in action.</p>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Purpose & Rationale</h2>
        <p class="text-base leading-relaxed text-muted-foreground">Dialogs capture user attention for important information or confirmation. They overlay the page content and require action before dismissing.</p>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Anatomy</h2>
        <div class="space-y-2">
          <div class="flex gap-4"><div class="font-mono text-sm font-semibold text-primary min-w-32">Trigger</div><div class="text-sm">Button or element that opens the dialog</div></div>
          <div class="flex gap-4"><div class="font-mono text-sm font-semibold text-primary min-w-32">Overlay</div><div class="text-sm">Semi-transparent background layer</div></div>
          <div class="flex gap-4"><div class="font-mono text-sm font-semibold text-primary min-w-32">Content</div><div class="text-sm">The dialog box container</div></div>
          <div class="flex gap-4"><div class="font-mono text-sm font-semibold text-primary min-w-32">Header</div><div class="text-sm">Title and close button</div></div>
          <div class="flex gap-4"><div class="font-mono text-sm font-semibold text-primary min-w-32">Footer</div><div class="text-sm">Action buttons</div></div>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Do's and Don'ts</h2>
        <div class="grid grid-cols-2 gap-6">
          <div class="space-y-3">
            <h3 class="font-semibold text-green-600">Do's</h3>
            <ul class="space-y-2">
              <li class="flex gap-2 text-sm"><span class="text-green-600 font-bold">✓</span> Use for critical actions</li>
              <li class="flex gap-2 text-sm"><span class="text-green-600 font-bold">✓</span> Provide clear dismiss option</li>
              <li class="flex gap-2 text-sm"><span class="text-green-600 font-bold">✓</span> Use for confirmations</li>
            </ul>
          </div>
          <div class="space-y-3">
            <h3 class="font-semibold text-red-600">Don'ts</h3>
            <ul class="space-y-2">
              <li class="flex gap-2 text-sm"><span class="text-red-600 font-bold">✗</span> Use for non-critical info</li>
              <li class="flex gap-2 text-sm"><span class="text-red-600 font-bold">✗</span> Nest dialogs</li>
              <li class="flex gap-2 text-sm"><span class="text-red-600 font-bold">✗</span> Use for long forms</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Code Example</h2>
        <pre class="bg-muted rounded-lg p-4 overflow-x-auto"><code class="text-sm">import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export function MyDialog() {
  return (
    &lt;Dialog&gt;
      &lt;DialogTrigger asChild&gt;
        &lt;button&gt;Open Dialog&lt;/button&gt;
      &lt;/DialogTrigger&gt;
      &lt;DialogContent&gt;
        &lt;DialogHeader&gt;
          &lt;DialogTitle&gt;Are you sure?&lt;/DialogTitle&gt;
          &lt;DialogDescription&gt;
            This action cannot be undone.
          &lt;/DialogDescription&gt;
        &lt;/DialogHeader&gt;
      &lt;/DialogContent&gt;
    &lt;/Dialog&gt;
  )
}</code></pre>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Accessibility</h2>
        <p class="text-base leading-relaxed text-muted-foreground">Dialogs manage focus and return it to the trigger element when closed. They support keyboard dismissal (ESC) and include proper ARIA attributes.</p>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Content & Style Guidelines</h2>
        <p class="text-base leading-relaxed text-muted-foreground">Use clear, direct language in dialog titles. Provide context about what action the user is about to perform. Confirm destructive actions.</p>
      </section>
    </div>
  `,
}

componentDocsMap["tabs"] = {
  title: "Tabs",
  description: "Organize content into multiple sections with tabs",
  html: `
    <div class="space-y-12">
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Preview</h2>
        <div class="border rounded-lg p-8 bg-card">
          <div>
            <div class="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
              <button class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background text-foreground shadow-sm">Tab 1</button>
              <button class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">Tab 2</button>
              <button class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">Tab 3</button>
            </div>
            <div class="mt-4 text-sm">Tab 1 content</div>
          </div>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Purpose & Rationale</h2>
        <p class="text-base leading-relaxed text-muted-foreground">Tabs organize content into separate views, allowing users to switch between them without leaving the page.</p>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Anatomy</h2>
        <div class="space-y-2">
          <div class="flex gap-4"><div class="font-mono text-sm font-semibold text-primary min-w-32">Root</div><div class="text-sm">The tabs container</div></div>
          <div class="flex gap-4"><div class="font-mono text-sm font-semibold text-primary min-w-32">List</div><div class="text-sm">Container for tab triggers</div></div>
          <div class="flex gap-4"><div class="font-mono text-sm font-semibold text-primary min-w-32">Trigger</div><div class="text-sm">Individual tab button</div></div>
          <div class="flex gap-4"><div class="font-mono text-sm font-semibold text-primary min-w-32">Content</div><div class="text-sm">Tab panel content</div></div>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Do's and Don'ts</h2>
        <div class="grid grid-cols-2 gap-6">
          <div class="space-y-3">
            <h3 class="font-semibold text-green-600">Do's</h3>
            <ul class="space-y-2">
              <li class="flex gap-2 text-sm"><span class="text-green-600 font-bold">✓</span> Use for related content</li>
              <li class="flex gap-2 text-sm"><span class="text-green-600 font-bold">✓</span> Keep tab labels short</li>
            </ul>
          </div>
          <div class="space-y-3">
            <h3 class="font-semibold text-red-600">Don'ts</h3>
            <ul class="space-y-2">
              <li class="flex gap-2 text-sm"><span class="text-red-600 font-bold">✗</span> Use more than 6-8 tabs</li>
              <li class="flex gap-2 text-sm"><span class="text-red-600 font-bold">✗</span> Use for navigation</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Code Example</h2>
        <pre class="bg-muted rounded-lg p-4 overflow-x-auto"><code class="text-sm">import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function MyTabs() {
  return (
    &lt;Tabs defaultValue="tab1"&gt;
      &lt;TabsList&gt;
        &lt;TabsTrigger value="tab1"&gt;Tab 1&lt;/TabsTrigger&gt;
        &lt;TabsTrigger value="tab2"&gt;Tab 2&lt;/TabsTrigger&gt;
      &lt;/TabsList&gt;
      &lt;TabsContent value="tab1"&gt;Content 1&lt;/TabsContent&gt;
      &lt;TabsContent value="tab2"&gt;Content 2&lt;/TabsContent&gt;
    &lt;/Tabs&gt;
  )
}</code></pre>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Accessibility</h2>
        <p class="text-base leading-relaxed text-muted-foreground">Tabs support keyboard navigation with arrow keys. Active tab is indicated with aria-selected. Focus is managed automatically.</p>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Content & Style Guidelines</h2>
        <p class="text-base leading-relaxed text-muted-foreground">Use concise tab labels that clearly describe the content. Avoid using more than 5-6 tabs in a single tab group.</p>
      </section>
    </div>
  `,
}

componentDocsMap["checkbox"] = {
  title: "Checkbox",
  description: "A control for selecting one or more items",
  html: `
    <div class="space-y-12">
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Preview</h2>
        <div class="border rounded-lg p-8 bg-card space-y-4">
          <div class="flex items-center space-x-2">
            <input type="checkbox" id="cb1" class="h-4 w-4 rounded border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
            <label for="cb1" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Unchecked</label>
          </div>
          <div class="flex items-center space-x-2">
            <input type="checkbox" id="cb2" checked class="h-4 w-4 rounded border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
            <label for="cb2" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Checked</label>
          </div>
          <div class="flex items-center space-x-2">
            <input type="checkbox" id="cb3" disabled class="h-4 w-4 rounded border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
            <label for="cb3" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Disabled</label>
          </div>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Purpose & Rationale</h2>
        <p class="text-base leading-relaxed text-muted-foreground">Checkboxes allow users to select multiple options from a set. They should be used when multiple selections are possible.</p>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Anatomy</h2>
        <div class="space-y-2">
          <div class="flex gap-4"><div class="font-mono text-sm font-semibold text-primary min-w-32">Root</div><div class="text-sm">The checkbox input element</div></div>
          <div class="flex gap-4"><div class="font-mono text-sm font-semibold text-primary min-w-32">Label</div><div class="text-sm">Associated label text</div></div>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Do's and Don'ts</h2>
        <div class="grid grid-cols-2 gap-6">
          <div class="space-y-3">
            <h3 class="font-semibold text-green-600">Do's</h3>
            <ul class="space-y-2">
              <li class="flex gap-2 text-sm"><span class="text-green-600 font-bold">✓</span> Use for multiple selection</li>
              <li class="flex gap-2 text-sm"><span class="text-green-600 font-bold">✓</span> Group related options</li>
            </ul>
          </div>
          <div class="space-y-3">
            <h3 class="font-semibold text-red-600">Don'ts</h3>
            <ul class="space-y-2">
              <li class="flex gap-2 text-sm"><span class="text-red-600 font-bold">✗</span> Use for single selection</li>
              <li class="flex gap-2 text-sm"><span class="text-red-600 font-bold">✗</span> Pre-check without consent</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Code Example</h2>
        <pre class="bg-muted rounded-lg p-4 overflow-x-auto"><code class="text-sm">import { Checkbox } from "@/components/ui/checkbox"

export function MyCheckbox() {
  return (
    &lt;&gt;
      &lt;div className="flex items-center space-x-2"&gt;
        &lt;Checkbox id="terms" /&gt;
        &lt;label htmlFor="terms"&gt;I agree to the terms&lt;/label&gt;
      &lt;/div&gt;
    &lt;/&gt;
  )
}</code></pre>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Accessibility</h2>
        <p class="text-base leading-relaxed text-muted-foreground">Always associate checkboxes with labels. Support keyboard interaction (Space to toggle). Use aria-describedby for additional context.</p>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Content & Style Guidelines</h2>
        <p class="text-base leading-relaxed text-muted-foreground">Keep checkbox labels clear and concise. Group related checkboxes visually. Avoid using checkboxes for navigation.</p>
      </section>
    </div>
  `,
}

componentDocsMap["scroll-area"] = {
  title: "Scroll Area",
  description: "A scrollable container with custom styling",
  html: `
    <div class="space-y-12">
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Preview</h2>
        <div class="border rounded-lg p-8 bg-card">
          <div class="h-48 border rounded bg-muted p-4 overflow-y-auto">
            <div class="space-y-2">
              <p>Scrollable content line 1</p>
              <p>Scrollable content line 2</p>
              <p>Scrollable content line 3</p>
              <p>Scrollable content line 4</p>
              <p>Scrollable content line 5</p>
              <p>Scrollable content line 6</p>
              <p>Scrollable content line 7</p>
              <p>Scrollable content line 8</p>
            </div>
          </div>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Purpose & Rationale</h2>
        <p class="text-base leading-relaxed text-muted-foreground">ScrollArea provides a consistent, styleable scrollbar experience across browsers.</p>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Anatomy</h2>
        <div class="space-y-2">
          <div class="flex gap-4"><div class="font-mono text-sm font-semibold text-primary min-w-32">Root</div><div class="text-sm">The scroll area container</div></div>
          <div class="flex gap-4"><div class="font-mono text-sm font-semibold text-primary min-w-32">Viewport</div><div class="text-sm">The visible content area</div></div>
          <div class="flex gap-4"><div class="font-mono text-sm font-semibold text-primary min-w-32">ScrollBar</div><div class="text-sm">The scrollbar track and thumb</div></div>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Code Example</h2>
        <pre class="bg-muted rounded-lg p-4 overflow-x-auto"><code class="text-sm">import { ScrollArea } from "@/components/ui/scroll-area"

export function MyScrollArea() {
  return (
    &lt;ScrollArea className="h-72 w-48"&gt;
      &lt;div className="p-4"&gt;
        {/* Content goes here */}
      &lt;/div&gt;
    &lt;/ScrollArea&gt;
  )
}</code></pre>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Accessibility</h2>
        <p class="text-base leading-relaxed text-muted-foreground">ScrollArea content is still keyboard accessible. Scrollbar is keyboard navigable.</p>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Content & Style Guidelines</h2>
        <p class="text-base leading-relaxed text-muted-foreground">Use ScrollArea for long lists or content that exceeds viewport height. Set appropriate height constraints.</p>
      </section>
    </div>
  `,
}

componentDocsMap["tooltip"] = {
  title: "Tooltip",
  description: "A small popup providing additional context",
  html: `
    <div class="space-y-12">
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Preview</h2>
        <div class="border rounded-lg p-8 bg-card">
          <p class="text-sm text-muted-foreground">Hover over interactive elements to see tooltips</p>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Purpose & Rationale</h2>
        <p class="text-base leading-relaxed text-muted-foreground">Tooltips provide helpful context for icons or actions without cluttering the interface.</p>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Anatomy</h2>
        <div class="space-y-2">
          <div class="flex gap-4"><div class="font-mono text-sm font-semibold text-primary min-w-32">Root</div><div class="text-sm">The tooltip container</div></div>
          <div class="flex gap-4"><div class="font-mono text-sm font-semibold text-primary min-w-32">Trigger</div><div class="text-sm">The element that triggers the tooltip</div></div>
          <div class="flex gap-4"><div class="font-mono text-sm font-semibold text-primary min-w-32">Content</div><div class="text-sm">The tooltip text</div></div>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Do's and Don'ts</h2>
        <div class="grid grid-cols-2 gap-6">
          <div class="space-y-3">
            <h3 class="font-semibold text-green-600">Do's</h3>
            <ul class="space-y-2">
              <li class="flex gap-2 text-sm"><span class="text-green-600 font-bold">✓</span> Use for icons and abbreviations</li>
              <li class="flex gap-2 text-sm"><span class="text-green-600 font-bold">✓</span> Keep text concise</li>
            </ul>
          </div>
          <div class="space-y-3">
            <h3 class="font-semibold text-red-600">Don'ts</h3>
            <ul class="space-y-2">
              <li class="flex gap-2 text-sm"><span class="text-red-600 font-bold">✗</span> Use for essential information</li>
              <li class="flex gap-2 text-sm"><span class="text-red-600 font-bold">✗</span> Use on mobile</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Code Example</h2>
        <pre class="bg-muted rounded-lg p-4 overflow-x-auto"><code class="text-sm">import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function MyTooltip() {
  return (
    &lt;TooltipProvider&gt;
      &lt;Tooltip&gt;
        &lt;TooltipTrigger&gt;Hover me&lt;/TooltipTrigger&gt;
        &lt;TooltipContent&gt;Tooltip text&lt;/TooltipContent&gt;
      &lt;/Tooltip&gt;
    &lt;/TooltipProvider&gt;
  )
}</code></pre>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Accessibility</h2>
        <p class="text-base leading-relaxed text-muted-foreground">Tooltips appear on hover and focus. They include proper ARIA labels and are dismissible.</p>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Content & Style Guidelines</h2>
        <p class="text-base leading-relaxed text-muted-foreground">Keep tooltip content brief - one or two short sentences maximum. Never hide critical information in tooltips.</p>
      </section>
    </div>
  `,
}

componentDocsMap["switch"] = {
  title: "Switch",
  description: "A toggle control for boolean values",
  html: `
    <div class="space-y-12">
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Preview</h2>
        <div class="border rounded-lg p-8 bg-card space-y-4">
          <div class="flex items-center space-x-3">
            <div class="inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors bg-input">
              <div class="pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform translate-x-0"></div>
            </div>
            <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Off</label>
          </div>
          <div class="flex items-center space-x-3">
            <div class="inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors bg-primary">
              <div class="pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform translate-x-5"></div>
            </div>
            <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">On</label>
          </div>
          <div class="flex items-center space-x-3">
            <div class="inline-flex h-6 w-11 shrink-0 cursor-not-allowed items-center rounded-full border-2 border-transparent shadow-sm transition-colors bg-muted opacity-50">
              <div class="pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform translate-x-0"></div>
            </div>
            <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Disabled</label>
          </div>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Purpose & Rationale</h2>
        <p class="text-base leading-relaxed text-muted-foreground">Switches control boolean states. They're used for settings, feature toggles, and yes/no questions that require immediate state changes.</p>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Anatomy</h2>
        <div class="space-y-2">
          <div class="flex gap-4"><div class="font-mono text-sm font-semibold text-primary min-w-32">Root</div><div class="text-sm">The switch container</div></div>
          <div class="flex gap-4"><div class="font-mono text-sm font-semibold text-primary min-w-32">Thumb</div><div class="text-sm">The draggable toggle element</div></div>
          <div class="flex gap-4"><div class="font-mono text-sm font-semibold text-primary min-w-32">Label</div><div class="text-sm">Associated label text</div></div>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Do's and Don'ts</h2>
        <div class="grid grid-cols-2 gap-6">
          <div class="space-y-3">
            <h3 class="font-semibold text-green-600">Do's</h3>
            <ul class="space-y-2">
              <li class="flex gap-2 text-sm"><span class="text-green-600 font-bold">✓</span> Use for immediate state changes</li>
              <li class="flex gap-2 text-sm"><span class="text-green-600 font-bold">✓</span> Always pair with a label</li>
              <li class="flex gap-2 text-sm"><span class="text-green-600 font-bold">✓</span> Show current state clearly</li>
            </ul>
          </div>
          <div class="space-y-3">
            <h3 class="font-semibold text-red-600">Don'ts</h3>
            <ul class="space-y-2">
              <li class="flex gap-2 text-sm"><span class="text-red-600 font-bold">✗</span> Use for multiple selections</li>
              <li class="flex gap-2 text-sm"><span class="text-red-600 font-bold">✗</span> Use for navigation</li>
              <li class="flex gap-2 text-sm"><span class="text-red-600 font-bold">✗</span> Delay state changes</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Code Example</h2>
        <pre class="bg-muted rounded-lg p-4 overflow-x-auto"><code class="text-sm">import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function MySwitch() {
  const [enabled, setEnabled] = React.useState(false)

  return (
    &lt;div className="flex items-center space-x-2"&gt;
      &lt;Switch
        checked={enabled}
        onCheckedChange={setEnabled}
        id="feature"
      /&gt;
      &lt;Label htmlFor="feature"&gt;Enable feature&lt;/Label&gt;
    &lt;/div&gt;
  )
}</code></pre>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Accessibility</h2>
        <p class="text-base leading-relaxed text-muted-foreground">Switches are fully keyboard accessible with Space to toggle. They have proper ARIA attributes and focus management.</p>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Content & Style Guidelines</h2>
        <p class="text-base leading-relaxed text-muted-foreground">Use clear labels that describe what the switch controls. Be specific about on/off states. Consider adding helper text for complex settings.</p>
      </section>
    </div>
  `,
}

// Placeholder pages for remaining components
const placeholderComponents = [
  "accordion",
  "alert",
  "avatar",
  "button-group",
  "carousel",
  "chart",
  "collapsible",
  "context-menu",
  "data-table",
  "date-picker",
  "drawer",
  "dropdown-menu",
  "empty",
  "field",
  "hover-card",
  "input-group",
  "input-otp",
  "keyboard-shortcuts",
  "menubar",
  "navigation-menu",
  "pagination",
  "radio-group",
  "resizable",
  "select",
  "separator",
  "sheet",
  "sidebar",
  "skeleton",
  "slider",
  "sonner",
  "spinner",
  "textarea",
  "toggle",
  "toggle-group",
  "label",
]

placeholderComponents.forEach((slug) => {
  const title = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")

  componentDocsMap[slug] = {
    title,
    description: `${title} component documentation`,
    html: `
      <div class="space-y-8">
        <section class="space-y-4">
          <h2 class="text-2xl font-semibold">Coming Soon</h2>
          <p class="text-base text-muted-foreground">
            Documentation for the ${title} component is coming soon. Please check back later.
          </p>
        </section>

        <section class="space-y-4">
          <h2 class="text-2xl font-semibold">Preview</h2>
          <div class="border rounded-lg p-8 bg-card text-center text-muted-foreground">
            Component preview will appear here
          </div>
        </section>

        <section class="space-y-4">
          <h2 class="text-2xl font-semibold">Purpose & Rationale</h2>
          <p class="text-base text-muted-foreground">Documentation coming soon.</p>
        </section>

        <section class="space-y-4">
          <h2 class="text-2xl font-semibold">Anatomy</h2>
          <p class="text-base text-muted-foreground">Documentation coming soon.</p>
        </section>

        <section class="space-y-4">
          <h2 class="text-2xl font-semibold">Variants</h2>
          <p class="text-base text-muted-foreground">Documentation coming soon.</p>
        </section>

        <section class="space-y-4">
          <h2 class="text-2xl font-semibold">Do's and Don'ts</h2>
          <p class="text-base text-muted-foreground">Documentation coming soon.</p>
        </section>

        <section class="space-y-4">
          <h2 class="text-2xl font-semibold">Code Example</h2>
          <p class="text-base text-muted-foreground">Code examples coming soon.</p>
        </section>

        <section class="space-y-4">
          <h2 class="text-2xl font-semibold">Accessibility</h2>
          <p class="text-base text-muted-foreground">Documentation coming soon.</p>
        </section>

        <section class="space-y-4">
          <h2 class="text-2xl font-semibold">Content & Style Guidelines</h2>
          <p class="text-base text-muted-foreground">Documentation coming soon.</p>
        </section>
      </div>
    `,
  }
})

export function getDocContent(slug: string): DocContent | null {
  return componentDocsMap[slug] || null
}
