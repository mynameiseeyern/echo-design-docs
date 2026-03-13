"use client"

import React from "react"
import { ContentSection } from "@/components/doc-components"

/* ── tiny helper: annotation label ── */
function Ann({ children, side = "top" }: { children: React.ReactNode; side?: "top" | "left" | "right" | "bottom" }) {
  const pos =
    side === "top"    ? "bottom-full left-1/2 -translate-x-1/2 mb-1" :
    side === "bottom" ? "top-full left-1/2 -translate-x-1/2 mt-1" :
    side === "left"   ? "right-full top-1/2 -translate-y-1/2 mr-1" :
                        "left-full top-1/2 -translate-y-1/2 ml-1"
  return (
    <span className={`absolute ${pos} text-[10px] font-mono font-semibold text-primary whitespace-nowrap bg-primary/10 rounded px-1 py-0.5`}>
      {children}
    </span>
  )
}

/* ── skeleton block ── */
function Skel({ className = "", label, children }: { className?: string; label?: string; children?: React.ReactNode }) {
  return (
    <div className={`relative bg-muted/60 border border-dashed border-border rounded ${className}`}>
      {label && <span className="absolute top-1 left-2 text-[10px] font-mono text-muted-foreground">{label}</span>}
      {children}
    </div>
  )
}

/* ── spacing swatch row ── */
function SpacingRow({ token, px, tailwind, usage }: { token: string; px: number; tailwind: string; usage: string }) {
  return (
    <div className="flex items-center gap-4 py-2 border-b border-border/50 last:border-0">
      <div className="w-16 shrink-0">
        <div className="h-6 bg-primary/20 border border-primary/40 rounded-sm" style={{ width: `${Math.min(px, 64)}px` }} />
      </div>
      <code className="text-xs font-semibold w-12 shrink-0">{token}</code>
      <code className="text-xs text-muted-foreground w-10 shrink-0">{px}px</code>
      <code className="text-xs text-primary w-16 shrink-0">{tailwind}</code>
      <span className="text-sm text-muted-foreground">{usage}</span>
    </div>
  )
}

/* ── radius swatch ── */
function RadiusExample({ name, tw, cssVar }: { name: string; tw: string; cssVar: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`w-16 h-16 bg-primary/15 border-2 border-primary/40 ${tw}`} />
      <div className="text-center">
        <p className="text-xs font-semibold">{name}</p>
        <code className="text-[10px] text-muted-foreground">{cssVar}</code>
      </div>
    </div>
  )
}

export function SpacingLayoutGuide() {
  return (
    <>
      {/* ────────────────────── SPACING SCALE ────────────────────── */}
      <ContentSection id="spacing-scale" title="Spacing scale">
        <p className="text-muted-foreground mb-6">
          Echo uses Tailwind's default 4px base grid. All spacing values are multiples of 4px, with the primary rhythm built on 8px increments. This keeps elements visually aligned without needing pixel-level tweaking.
        </p>
        <div className="bg-card border border-border rounded-lg p-4">
          <SpacingRow token="0.5" px={2} tailwind="p-0.5" usage="Tight inner gap — icon badge offsets" />
          <SpacingRow token="1" px={4} tailwind="p-1" usage="Minimal padding — compact badges, tags" />
          <SpacingRow token="1.5" px={6} tailwind="p-1.5" usage="Small inner padding — pill buttons, status chips" />
          <SpacingRow token="2" px={8} tailwind="p-2" usage="Default icon padding, tight component gaps" />
          <SpacingRow token="3" px={12} tailwind="p-3" usage="Compact card padding, input horizontal padding" />
          <SpacingRow token="4" px={16} tailwind="p-4" usage="Standard component padding — cards, inputs, alerts" />
          <SpacingRow token="5" px={20} tailwind="p-5" usage="Medium card padding — metric cards, KPI tiles" />
          <SpacingRow token="6" px={24} tailwind="p-6" usage="Section padding — card body, dialog content" />
          <SpacingRow token="8" px={32} tailwind="p-8" usage="Large section spacing — page sections, hero areas" />
          <SpacingRow token="10" px={40} tailwind="p-10" usage="Generous layout padding — empty states, onboarding" />
          <SpacingRow token="12" px={48} tailwind="p-12" usage="Extra-large — splash screens, sign-in cards" />
        </div>
      </ContentSection>

      {/* ────────────────────── WHEN TO USE WHAT ────────────────────── */}
      <ContentSection id="when-to-use" title="When to use what">
        <p className="text-muted-foreground mb-6">
          Picking the right spacing comes down to the relationship between elements. Closer things are related; further apart things are distinct.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Inline / tight */}
          <div className="bg-card border border-border rounded-lg p-5 space-y-3">
            <h3 className="text-sm font-semibold">Inline &amp; tight (4–8px)</h3>
            <p className="text-sm text-muted-foreground">Elements that form a single unit — icon + label, badge + count, avatar + name.</p>
            <div className="bg-muted/50 rounded p-4 flex items-center gap-2">
              <div className="relative">
                <Ann side="bottom">gap-2 (8px)</Ann>
                <div className="h-8 w-8 bg-primary/30 rounded-full" />
              </div>
              <div className="space-y-0.5">
                <div className="h-3 w-20 bg-muted-foreground/20 rounded" />
                <div className="h-2 w-14 bg-muted-foreground/10 rounded" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground">Echo example: Agent avatar + name in performance table rows</p>
          </div>

          {/* Component internal */}
          <div className="bg-card border border-border rounded-lg p-5 space-y-3">
            <h3 className="text-sm font-semibold">Component internal (12–16px)</h3>
            <p className="text-sm text-muted-foreground">Padding inside interactive components — cards, inputs, dropdowns, table cells.</p>
            <div className="bg-muted/50 rounded p-4">
              <div className="relative border border-dashed border-primary/40 rounded-lg p-4">
                <Ann side="top">p-4 (16px)</Ann>
                <div className="space-y-2">
                  <div className="h-3 w-24 bg-muted-foreground/20 rounded" />
                  <div className="h-6 w-full bg-muted-foreground/10 rounded" />
                </div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">Echo example: Inside an adherence score card or filter dropdown</p>
          </div>

          {/* Section gaps */}
          <div className="bg-card border border-border rounded-lg p-5 space-y-3">
            <h3 className="text-sm font-semibold">Section gaps (24–32px)</h3>
            <p className="text-sm text-muted-foreground">Space between distinct content groups — between a chart and a table, or between dashboard widget rows.</p>
            <div className="bg-muted/50 rounded p-4 space-y-6">
              <Skel className="h-10 rounded-lg" label="KPI Row" />
              <div className="relative">
                <Ann side="left">gap-6 (24px)</Ann>
                <Skel className="h-16 rounded-lg" label="Chart Section" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground">Echo example: Gap between the KPI bar and the call analysis chart below</p>
          </div>

          {/* Page-level */}
          <div className="bg-card border border-border rounded-lg p-5 space-y-3">
            <h3 className="text-sm font-semibold">Page-level (32–48px)</h3>
            <p className="text-sm text-muted-foreground">Top-level page padding and margins between major sections of a view.</p>
            <div className="bg-muted/50 rounded p-4">
              <div className="relative border border-dashed border-primary/40 rounded-lg p-8">
                <Ann side="top">p-8 (32px)</Ann>
                <div className="space-y-4">
                  <div className="h-4 w-32 bg-muted-foreground/20 rounded" />
                  <div className="h-20 w-full bg-muted-foreground/10 rounded" />
                </div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">Echo example: Main content area padding on the Dashboard and Reports views</p>
          </div>
        </div>
      </ContentSection>

      {/* ────────────────────── BORDER RADIUS ────────────────────── */}
      <ContentSection id="border-radius" title="Border radius">
        <p className="text-muted-foreground mb-6">
          Echo uses a consistent radius scale mapped to Tailwind's defaults. Larger containers get larger radii. Nested elements should use a smaller radius than their parent.
        </p>
        <div className="flex flex-wrap gap-8 justify-center py-6">
          <RadiusExample name="None" tw="rounded-none" cssVar="0px" />
          <RadiusExample name="Small" tw="rounded-sm" cssVar="calc(var(--radius) - 4px)" />
          <RadiusExample name="Default" tw="rounded-md" cssVar="calc(var(--radius) - 2px)" />
          <RadiusExample name="Large" tw="rounded-lg" cssVar="var(--radius)" />
          <RadiusExample name="XL" tw="rounded-xl" cssVar="calc(var(--radius) + 4px)" />
          <RadiusExample name="Full" tw="rounded-full" cssVar="9999px" />
        </div>

        <div className="bg-card border border-border rounded-lg p-5 space-y-4 mt-4">
          <h3 className="text-sm font-semibold">Which radius for what</h3>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
            <div className="flex justify-between py-1.5 border-b border-border/50">
              <span className="text-muted-foreground">Badges, tags, status chips</span>
              <code className="text-primary">rounded-full</code>
            </div>
            <div className="flex justify-between py-1.5 border-b border-border/50">
              <span className="text-muted-foreground">Buttons</span>
              <code className="text-primary">rounded-md</code>
            </div>
            <div className="flex justify-between py-1.5 border-b border-border/50">
              <span className="text-muted-foreground">Inputs, selects</span>
              <code className="text-primary">rounded-md</code>
            </div>
            <div className="flex justify-between py-1.5 border-b border-border/50">
              <span className="text-muted-foreground">Cards, dialogs</span>
              <code className="text-primary">rounded-lg</code>
            </div>
            <div className="flex justify-between py-1.5 border-b border-border/50">
              <span className="text-muted-foreground">Dropdowns, popovers</span>
              <code className="text-primary">rounded-lg</code>
            </div>
            <div className="flex justify-between py-1.5 border-b border-border/50">
              <span className="text-muted-foreground">Avatars</span>
              <code className="text-primary">rounded-full</code>
            </div>
            <div className="flex justify-between py-1.5 border-b border-border/50">
              <span className="text-muted-foreground">Table cells</span>
              <code className="text-primary">rounded-none</code>
            </div>
            <div className="flex justify-between py-1.5 border-b border-border/50">
              <span className="text-muted-foreground">Toast / Sonner</span>
              <code className="text-primary">rounded-lg</code>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Nesting rule: if a card uses <code className="text-primary">rounded-lg</code>, inner elements like buttons should use <code className="text-primary">rounded-md</code> so the curves don't clash.
          </p>
        </div>
      </ContentSection>

      {/* ────────────────────── LAYOUT PATTERNS ────────────────────── */}
      <ContentSection id="layout-patterns" title="Layout patterns">
        <p className="text-muted-foreground mb-6">
          These skeleton diagrams show how Echo's key views are composed. Annotations call out the spacing tokens used at each level.
        </p>

        {/* Dashboard layout */}
        <div className="space-y-3 mb-10">
          <h3 className="text-sm font-semibold">Dashboard view</h3>
          <p className="text-sm text-muted-foreground">The primary Echo surface — sidebar nav, header, KPI row, and widget grid.</p>
          <div className="bg-muted/30 border border-border rounded-xl p-3 overflow-hidden">
            <div className="flex h-[340px]">
              {/* Sidebar */}
              <Skel className="w-[60px] shrink-0 rounded-lg mr-3 flex flex-col items-center pt-4 gap-3" label="Nav">
                <div className="w-6 h-6 bg-primary/20 rounded" />
                <div className="w-6 h-6 bg-primary/30 rounded" />
                <div className="w-6 h-6 bg-primary/20 rounded" />
                <div className="w-6 h-6 bg-primary/20 rounded" />
              </Skel>

              {/* Main content */}
              <div className="flex-1 flex flex-col gap-3 relative">
                {/* Header bar */}
                <Skel className="h-10 rounded-lg flex items-center px-3 gap-2" label="Header">
                  <div className="h-3 w-20 bg-muted-foreground/15 rounded" />
                  <div className="flex-1" />
                  <div className="h-5 w-5 bg-muted-foreground/10 rounded-full" />
                  <div className="h-5 w-5 bg-muted-foreground/10 rounded-full" />
                </Skel>

                {/* Page padding wrapper */}
                <div className="flex-1 relative border border-dashed border-primary/30 rounded-lg p-4">
                  <Ann side="top">p-6 page padding</Ann>

                  {/* KPI Row */}
                  <div className="grid grid-cols-4 gap-3 mb-4 relative">
                    <Ann side="left">gap-3 (12px)</Ann>
                    {[1,2,3,4].map(i => (
                      <Skel key={i} className="h-16 rounded-lg p-2 flex flex-col justify-center items-center gap-1">
                        <div className="h-2 w-10 bg-muted-foreground/15 rounded" />
                        <div className="h-4 w-8 bg-muted-foreground/20 rounded" />
                      </Skel>
                    ))}
                  </div>

                  {/* Chart + Table grid */}
                  <div className="grid grid-cols-2 gap-4 relative">
                    <Ann side="top">gap-4 (16px)</Ann>
                    <Skel className="h-32 rounded-lg p-3" label="Chart">
                      <div className="mt-4 flex items-end gap-1 h-16">
                        {[40,65,50,80,55,70,45,60].map((h,i) => (
                          <div key={i} className="flex-1 bg-primary/20 rounded-t" style={{height:`${h}%`}} />
                        ))}
                      </div>
                    </Skel>
                    <Skel className="h-32 rounded-lg p-3" label="Agent Table">
                      <div className="mt-4 space-y-2">
                        {[1,2,3].map(i => (
                          <div key={i} className="flex gap-2 items-center">
                            <div className="w-4 h-4 bg-muted-foreground/10 rounded-full" />
                            <div className="h-2 flex-1 bg-muted-foreground/10 rounded" />
                            <div className="h-3 w-8 bg-green-500/20 rounded" />
                          </div>
                        ))}
                      </div>
                    </Skel>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card anatomy */}
        <div className="space-y-3 mb-10">
          <h3 className="text-sm font-semibold">Card anatomy</h3>
          <p className="text-sm text-muted-foreground">Standard card with header, body content, and footer — annotated with spacing.</p>
          <div className="max-w-md mx-auto">
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              {/* Header */}
              <div className="relative border-b border-border px-4 py-3">
                <Ann side="right">px-4 py-3</Ann>
                <div className="flex items-center justify-between">
                  <div className="h-3 w-28 bg-muted-foreground/20 rounded" />
                  <div className="h-5 w-5 bg-muted-foreground/10 rounded" />
                </div>
              </div>
              {/* Body */}
              <div className="relative p-4 space-y-3">
                <Ann side="right">p-4 (16px)</Ann>
                <div className="h-3 w-full bg-muted-foreground/15 rounded" />
                <div className="h-3 w-4/5 bg-muted-foreground/10 rounded" />
                <div className="h-3 w-3/5 bg-muted-foreground/10 rounded" />
                <div className="relative flex gap-3 mt-4">
                  <Ann side="bottom">gap-3 (12px)</Ann>
                  <div className="h-8 flex-1 bg-primary/15 rounded-md" />
                  <div className="h-8 flex-1 bg-muted-foreground/10 rounded-md" />
                </div>
              </div>
              {/* Footer */}
              <div className="relative border-t border-border px-4 py-3">
                <Ann side="right">px-4 py-3</Ann>
                <div className="flex justify-end gap-2">
                  <div className="h-3 w-12 bg-muted-foreground/10 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Data table */}
        <div className="space-y-3 mb-10">
          <h3 className="text-sm font-semibold">Data table row</h3>
          <p className="text-sm text-muted-foreground">Agent performance table showing cell padding and row height.</p>
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            {/* Header row */}
            <div className="relative flex items-center border-b border-border bg-muted/50 px-4 h-10 text-xs font-medium text-muted-foreground gap-4">
              <Ann side="top">h-10 header / px-4</Ann>
              <span className="w-8">#</span>
              <span className="flex-1">Agent</span>
              <span className="w-20 text-right">Adherence</span>
              <span className="w-20 text-right">Calls</span>
              <span className="w-20 text-right">Risk</span>
            </div>
            {/* Data rows */}
            {[
              { name: "Sarah Chen", score: "78%", calls: "142", risk: "Low", color: "bg-green-500/20 text-green-700" },
              { name: "James Wu", score: "52%", calls: "98", risk: "Med", color: "bg-yellow-500/20 text-yellow-700" },
              { name: "Priya Patel", score: "31%", calls: "67", risk: "High", color: "bg-red-500/20 text-red-700" },
            ].map((row, i) => (
              <div key={i} className="relative flex items-center border-b border-border/50 px-4 h-12 text-sm gap-4">
                {i === 0 && <Ann side="right">h-12 row / px-4 cell</Ann>}
                <span className="w-8 text-muted-foreground">{i+1}</span>
                <span className="flex-1 font-medium">{row.name}</span>
                <span className="w-20 text-right font-mono">{row.score}</span>
                <span className="w-20 text-right font-mono text-muted-foreground">{row.calls}</span>
                <span className={`w-20 text-right text-xs font-medium ${row.color} rounded-full text-center py-0.5`}>{row.risk}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form layout */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold">Form layout</h3>
          <p className="text-sm text-muted-foreground">Vertical form with label + input pairs and action buttons.</p>
          <div className="max-w-sm mx-auto bg-card border border-border rounded-lg p-6">
            <div className="relative space-y-5">
              <Ann side="right">space-y-5 (20px)</Ann>
              {/* Field 1 */}
              <div className="relative space-y-1.5">
                <Ann side="left">space-y-1.5 (6px)</Ann>
                <div className="h-3 w-16 bg-muted-foreground/20 rounded" />
                <div className="h-9 w-full bg-muted/80 border border-border rounded-md" />
              </div>
              {/* Field 2 */}
              <div className="space-y-1.5">
                <div className="h-3 w-20 bg-muted-foreground/20 rounded" />
                <div className="h-9 w-full bg-muted/80 border border-border rounded-md" />
              </div>
              {/* Field 3 */}
              <div className="space-y-1.5">
                <div className="h-3 w-24 bg-muted-foreground/20 rounded" />
                <div className="h-20 w-full bg-muted/80 border border-border rounded-md" />
              </div>
              {/* Actions */}
              <div className="relative flex gap-3 pt-2">
                <Ann side="bottom">gap-3 (12px)</Ann>
                <div className="h-9 flex-1 bg-primary/20 rounded-md" />
                <div className="h-9 w-20 bg-muted/80 border border-border rounded-md" />
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* ────────────────────── SPACING DOS AND DONTS ────────────────────── */}
      <ContentSection id="guidelines" title="Spacing guidelines">
        <div className="grid md:grid-cols-2 gap-6">
          {/* DO */}
          <div className="border border-green-500/30 bg-green-500/5 rounded-lg p-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold">✓</div>
              <h4 className="text-sm font-semibold text-green-700 dark:text-green-400">Do</h4>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Use consistent spacing within a component — if a card uses <code className="text-primary">p-4</code>, all cards in that view should too.</p>
              <p>Use smaller spacing for related elements (icon + label) and larger spacing to separate groups (chart from table).</p>
              <p>Match vertical and horizontal padding within containers — <code className="text-primary">px-4 py-4</code> or <code className="text-primary">px-6 py-4</code>, not random combinations.</p>
              <p>Use <code className="text-primary">gap</code> instead of margins between flex/grid children for predictable spacing.</p>
            </div>
          </div>
          {/* DON'T */}
          <div className="border border-red-500/30 bg-red-500/5 rounded-lg p-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-full bg-red-500 flex items-center justify-center text-white text-xs font-bold">✗</div>
              <h4 className="text-sm font-semibold text-red-700 dark:text-red-400">Don't</h4>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Don't use arbitrary pixel values (13px, 17px, 22px) — stick to the 4px grid so everything aligns.</p>
              <p>Don't apply different padding to sibling cards in the same row. Inconsistency makes the UI feel unpolished.</p>
              <p>Don't collapse spacing to fit more data. If the view is too dense, reconsider the layout hierarchy or use progressive disclosure.</p>
              <p>Don't use large spacing (32px+) inside compact components like table cells or badges.</p>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* ────────────────────── ECHO-SPECIFIC SPACING ────────────────────── */}
      <ContentSection id="echo-usage" title="Echo usage">
        <p className="text-muted-foreground mb-4">
          How spacing is applied across core Echo surfaces.
        </p>
        <div className="bg-card border border-border rounded-lg divide-y divide-border">
          {[
            { surface: "Dashboard page padding", token: "p-6 (24px)", note: "Main content area of all dashboard views" },
            { surface: "KPI metric card internal", token: "p-4 (16px)", note: "Adherence score, call volume, risk count tiles" },
            { surface: "Gap between KPI cards", token: "gap-4 (16px)", note: "Horizontal grid gap in the KPI row" },
            { surface: "Section gap (KPIs → charts)", token: "space-y-6 (24px)", note: "Vertical separation between dashboard sections" },
            { surface: "Data table row height", token: "h-12 (48px)", note: "Agent performance, call log, and queue tables" },
            { surface: "Data table cell padding", token: "px-4 (16px)", note: "Horizontal padding inside each cell" },
            { surface: "Dialog / sheet body", token: "p-6 (24px)", note: "Call detail drawers, filter modals, settings panels" },
            { surface: "Form field stack", token: "space-y-5 (20px)", note: "Gap between label+input groups in settings forms" },
            { surface: "Label to input gap", token: "space-y-1.5 (6px)", note: "Tight coupling between field label and its input" },
            { surface: "Sidebar nav item padding", token: "px-3 py-2 (12/8px)", note: "Navigation items in the main sidebar" },
            { surface: "Toast / alert padding", token: "p-4 (16px)", note: "Compliance risk alerts, system notifications" },
          ].map((row, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 px-4 py-3">
              <span className="text-sm font-medium w-56 shrink-0">{row.surface}</span>
              <code className="text-xs text-primary w-32 shrink-0">{row.token}</code>
              <span className="text-sm text-muted-foreground">{row.note}</span>
            </div>
          ))}
        </div>
      </ContentSection>
    </>
  )
}
