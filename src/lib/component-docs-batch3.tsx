"use client"

import React, { useState } from "react"
import { ContentSection, ExampleBlock, DosDonts, PropsTable } from "@/components/doc-components"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Skeleton } from "@/components/ui/skeleton"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Menu, MoreHorizontal, Copy, Trash2, Share, LogOut, Plus } from "lucide-react"

/* ============================================
   SHEET COMPONENT DOCS
   ============================================ */

function SheetDefaultPreview() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <Menu className="w-4 h-4 mr-2" />
          Open Sidebar
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Navigation Menu</SheetTitle>
          <SheetDescription>
            Access your dashboard and settings from here.
          </SheetDescription>
        </SheetHeader>
        <div className="space-y-4 mt-6">
          <Button variant="ghost" className="w-full justify-start">Dashboard</Button>
          <Button variant="ghost" className="w-full justify-start">Settings</Button>
          <Button variant="ghost" className="w-full justify-start">Profile</Button>
          <Button variant="ghost" className="w-full justify-start">Help</Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

function SheetVariantsPreview() {
  const [activeSide, setActiveSide] = useState<"left" | "right" | "top" | "bottom">("left")
  
  return (
    <div className="flex flex-wrap gap-3">
      {(["left", "right", "top", "bottom"] as const).map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant={activeSide === side ? "default" : "outline"}>
              {side.charAt(0).toUpperCase() + side.slice(1)}
            </Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>Sheet from {side}</SheetTitle>
              <SheetDescription>
                This sheet slides in from the {side} side.
              </SheetDescription>
            </SheetHeader>
            <div className="mt-4 text-sm text-muted-foreground">
              Content area for {side} positioned sheet.
            </div>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}

const sheetDosDonts = {
  dos: [
    { description: "Use for navigation menus on mobile" },
    { description: "Include clear titles and descriptions" },
    { description: "Keep content scrollable if lengthy" },
    { description: "Add close button or use outside click" }
  ],
  donts: [
    { description: "Don't nest sheets within sheets" },
    { description: "Don't hide critical actions in sheets" },
    { description: "Don't make sheets too wide/tall" },
    { description: "Don't leave sheets open by default" }
  ]
}

const sheetProps = [
  { name: "side", type: "\"left\" | \"right\" | \"top\" | \"bottom\"", default: "right", description: "Direction from which sheet slides in" },
  { name: "open", type: "boolean", default: "-", description: "Controlled open state" },
  { name: "onOpenChange", type: "(open: boolean) => void", default: "-", description: "Callback when sheet open state changes" }
]

/* ============================================
   DROPDOWN MENU COMPONENT DOCS
   ============================================ */

function DropdownMenuDefaultPreview() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <MoreHorizontal className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Copy className="w-4 h-4 mr-2" />
          Copy
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Share className="w-4 h-4 mr-2" />
          Share
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-red-600">
          <Trash2 className="w-4 h-4 mr-2" />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function DropdownMenuAlignmentPreview() {
  return (
    <div className="flex gap-4">
      <div>
        <p className="text-xs text-muted-foreground mb-2">align=start</p>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div>
        <p className="text-xs text-muted-foreground mb-2">align=center</p>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div>
        <p className="text-xs text-muted-foreground mb-2">align=end</p>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

const dropdownDosDonts = {
  dos: [
    { description: "Use for secondary actions and options" },
    { description: "Group related items logically" },
    { description: "Include icons for visual clarity" },
    { description: "Use separators to organize items" }
  ],
  donts: [
    { description: "Don't use for primary navigation" },
    { description: "Don't include too many items (limit to 10)" },
    { description: "Don't nest dropdown menus too deeply" },
    { description: "Don't use vague action labels" }
  ]
}

const dropdownProps = [
  { name: "open", type: "boolean", default: "-", description: "Controlled open state" },
  { name: "onOpenChange", type: "(open: boolean) => void", default: "-", description: "Callback when menu opens/closes" },
  { name: "align", type: "\"start\" | \"center\" | \"end\"", default: "start", description: "Menu alignment relative to trigger" }
]

/* ============================================
   CONTEXT MENU COMPONENT DOCS
   ============================================ */

function ContextMenuDefaultPreview() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex items-center justify-center w-64 h-40 border-2 border-dashed rounded-lg bg-muted text-muted-foreground cursor-context-menu">
        Right-click here
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          <Copy className="w-4 h-4 mr-2" />
          Copy
        </ContextMenuItem>
        <ContextMenuItem>
          <Share className="w-4 h-4 mr-2" />
          Share
        </ContextMenuItem>
        <ContextMenuItem className="text-red-600">
          <Trash2 className="w-4 h-4 mr-2" />
          Delete
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}

const contextDosDonts = {
  dos: [
    { description: "Use for context-sensitive actions" },
    { description: "Keep options relevant to the item" },
    { description: "Include common actions like copy/paste" },
    { description: "Use clear, action-oriented labels" }
  ],
  donts: [
    { description: "Don't overload with too many options" },
    { description: "Don't replace primary interaction methods" },
    { description: "Don't include actions that don't apply" },
    { description: "Don't use for navigation" }
  ]
}

const contextProps = [
  { name: "open", type: "boolean", default: "-", description: "Controlled open state" },
  { name: "onOpenChange", type: "(open: boolean) => void", default: "-", description: "Callback when context menu opens/closes" }
]

/* ============================================
   HOVER CARD COMPONENT DOCS
   ============================================ */

function HoverCardDefaultPreview() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">Hover over me</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Preview Card</h4>
          <p className="text-sm text-muted-foreground">
            This card appears when hovering. Perfect for showing previews or additional context.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

function HoverCardUserPreview() {
  return (
    <div className="flex gap-4">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link" className="text-base">@johndoe</Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between space-x-4">
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">John Doe</h4>
              <p className="text-sm text-muted-foreground">
                Product Designer at Company
              </p>
              <p className="text-xs text-muted-foreground pt-2">
                Joined in January 2024 • 342 followers
              </p>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}

const hoverCardDosDonts = {
  dos: [
    { description: "Use for contextual preview information" },
    { description: "Show relevant details without leaving page" },
    { description: "Include user profiles or link previews" },
    { description: "Keep content concise and focused" }
  ],
  donts: [
    { description: "Don't include critical information only" },
    { description: "Don't show interactive elements within" },
    { description: "Don't use for error messages" },
    { description: "Don't make cards too large" }
  ]
}

const hoverCardProps = [
  { name: "open", type: "boolean", default: "-", description: "Controlled open state" },
  { name: "onOpenChange", type: "(open: boolean) => void", default: "-", description: "Callback when card opens/closes" },
  { name: "openDelay", type: "number", default: "200", description: "Delay before showing card on hover (ms)" }
]

/* ============================================
   ALERT DIALOG COMPONENT DOCS
   ============================================ */

function AlertDialogDefaultPreview() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete Account</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your account and remove all data.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-red-600 hover:bg-red-700">Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

function AlertDialogConfirmPreview() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Save Changes</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirm Changes</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to save all the changes? You can always undo them later.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Discard</AlertDialogCancel>
          <AlertDialogAction>Save</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

const alertDialogDosDonts = {
  dos: [
    { description: "Use for destructive or critical actions" },
    { description: "Make consequences clear in description" },
    { description: "Provide obvious cancel button" },
    { description: "Use clear action button labels" }
  ],
  donts: [
    { description: "Don't use for routine confirmations" },
    { description: "Don't hide the consequence of action" },
    { description: "Don't make default button destructive" },
    { description: "Don't use ambiguous button text" }
  ]
}

const alertDialogProps = [
  { name: "open", type: "boolean", default: "-", description: "Controlled open state" },
  { name: "onOpenChange", type: "(open: boolean) => void", default: "-", description: "Callback when dialog opens/closes" }
]

/* ============================================
   POPOVER COMPONENT DOCS
   ============================================ */

function PopoverDefaultPreview() {
  const [value, setValue] = useState("")
  
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-sm mb-2">Filter Options</h4>
            <p className="text-xs text-muted-foreground mb-3">
              Select filters to refine your search results.
            </p>
          </div>
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" className="rounded" defaultChecked />
              Active items
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" className="rounded" />
              Archived items
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" className="rounded" />
              Recently updated
            </label>
          </div>
          <Button size="sm" className="w-full">Apply Filters</Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

function PopoverDatePickerPreview() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Pick a date</Button>
      </PopoverTrigger>
      <PopoverContent className="w-64" align="start">
        <div className="space-y-4">
          <h4 className="font-medium text-sm">Select Date Range</h4>
          <div className="grid grid-cols-7 gap-1 text-xs text-center">
            {Array.from({ length: 31 }, (_, i) => (
              <button key={i} className="p-1 rounded hover:bg-muted text-sm">
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

const popoverDosDonts = {
  dos: [
    { description: "Use for lightweight dialogs and filters" },
    { description: "Position near the trigger element" },
    { description: "Keep content simple and focused" },
    { description: "Include close action or outside click" }
  ],
  donts: [
    { description: "Don't use for complex forms" },
    { description: "Don't overload with content" },
    { description: "Don't nest popovers" },
    { description: "Don't use for critical confirmations" }
  ]
}

const popoverProps = [
  { name: "open", type: "boolean", default: "-", description: "Controlled open state" },
  { name: "onOpenChange", type: "(open: boolean) => void", default: "-", description: "Callback when popover opens/closes" },
  { name: "align", type: "\"start\" | \"center\" | \"end\"", default: "center", description: "Alignment relative to trigger" }
]

/* ============================================
   SKELETON COMPONENT DOCS
   ============================================ */

function SkeletonDefaultPreview() {
  return (
    <div className="space-y-3">
      <Skeleton className="h-4 w-48" />
      <Skeleton className="h-4 w-40" />
      <Skeleton className="h-4 w-44" />
    </div>
  )
}

function SkeletonCardPreview() {
  return (
    <div className="space-y-4">
      <div className="border rounded-lg p-4 space-y-4">
        <div className="flex gap-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-3 w-32" />
          </div>
        </div>
        <Skeleton className="h-32 w-full rounded" />
        <div className="flex gap-2">
          <Skeleton className="h-8 w-16 rounded" />
          <Skeleton className="h-8 w-16 rounded" />
        </div>
      </div>
    </div>
  )
}

const skeletonDosDonts = {
  dos: [
    { description: "Use during content loading states" },
    { description: "Match the shape of actual content" },
    { description: "Use subtle animations for feedback" },
    { description: "Clear skeleton when content loads" }
  ],
  donts: [
    { description: "Don't use skeleton for empty states" },
    { description: "Don't keep skeleton visible too long" },
    { description: "Don't use skeleton for errors" },
    { description: "Don't make skeleton too prominent" }
  ]
}

const skeletonProps = [
  { name: "className", type: "string", default: "-", description: "Additional CSS classes for styling" }
]

/* ============================================
   TEXTAREA COMPONENT DOCS
   ============================================ */

function TextareaDefaultPreview() {
  const [value, setValue] = useState("")
  
  return (
    <div className="space-y-3 w-full max-w-md">
      <Label htmlFor="textarea">Message</Label>
      <Textarea
        id="textarea"
        placeholder="Enter your message here..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p className="text-xs text-muted-foreground">
        {value.length} characters
      </p>
    </div>
  )
}

function TextareaSizesPreview() {
  return (
    <div className="space-y-4 w-full max-w-md">
      <div>
        <Label htmlFor="small">Small</Label>
        <Textarea id="small" className="resize-none h-20" placeholder="Small textarea..." />
      </div>
      <div>
        <Label htmlFor="medium">Medium (default)</Label>
        <Textarea id="medium" placeholder="Medium textarea..." />
      </div>
      <div>
        <Label htmlFor="large">Large</Label>
        <Textarea id="large" className="resize-none h-40" placeholder="Large textarea..." />
      </div>
    </div>
  )
}

const textareaDosDonts = {
  dos: [
    { description: "Use for multi-line text input" },
    { description: "Include helper text for context" },
    { description: "Show character count if relevant" },
    { description: "Set appropriate height for content" }
  ],
  donts: [
    { description: "Don't use for single-line input" },
    { description: "Don't hide labels" },
    { description: "Don't make too wide on desktop" },
    { description: "Don't remove resize capability" }
  ]
}

const textareaProps = [
  { name: "placeholder", type: "string", default: "-", description: "Placeholder text shown when empty" },
  { name: "disabled", type: "boolean", default: "false", description: "Disable textarea input" },
  { name: "rows", type: "number", default: "3", description: "Number of visible text rows" },
  { name: "maxLength", type: "number", default: "-", description: "Maximum character count" }
]

/* ============================================
   LABEL COMPONENT DOCS
   ============================================ */

function LabelDefaultPreview() {
  return (
    <div className="space-y-3 w-full max-w-md">
      <div>
        <Label htmlFor="email">Email Address</Label>
        <input
          id="email"
          type="email"
          className="mt-1 w-full px-3 py-2 border rounded-md text-sm"
          placeholder="you@example.com"
        />
      </div>
    </div>
  )
}

function LabelVariantsPreview() {
  return (
    <div className="space-y-6 w-full max-w-md">
      <div>
        <Label>Standard Label</Label>
        <input className="mt-1 w-full px-3 py-2 border rounded-md text-sm" />
      </div>
      <div>
        <Label>
          Required Label <span className="text-red-600">*</span>
        </Label>
        <input className="mt-1 w-full px-3 py-2 border rounded-md text-sm" required />
      </div>
      <div>
        <Label>Disabled Label</Label>
        <input className="mt-1 w-full px-3 py-2 border rounded-md text-sm bg-muted text-muted-foreground cursor-not-allowed" disabled />
      </div>
    </div>
  )
}

const labelDosDonts = {
  dos: [
    { description: "Always associate labels with inputs" },
    { description: "Use clear, descriptive text" },
    { description: "Position above or beside input" },
    { description: "Include required field indicators" }
  ],
  donts: [
    { description: "Don't omit labels for clarity" },
    { description: "Don't use placeholder as label" },
    { description: "Don't use vague label text" },
    { description: "Don't hide labels on mobile" }
  ]
}

const labelProps = [
  { name: "htmlFor", type: "string", default: "-", description: "ID of associated form element" },
  { name: "className", type: "string", default: "-", description: "Additional CSS classes" }
]

/* ============================================
   SCROLL AREA COMPONENT DOCS
   ============================================ */

function ScrollAreaDefaultPreview() {
  const items = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`)
  
  return (
    <ScrollArea className="h-48 w-64 border rounded-lg">
      <div className="p-4 space-y-2">
        {items.map((item) => (
          <div key={item} className="text-sm py-2 px-2 rounded hover:bg-muted cursor-pointer">
            {item}
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}

function ScrollAreaTablePreview() {
  const rows = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    name: `Entry ${i + 1}`,
    status: ["Active", "Inactive", "Pending"][i % 3]
  }))
  
  return (
    <ScrollArea className="h-64 w-80 border rounded-lg">
      <div className="p-4">
        <table className="text-sm w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left pb-2">ID</th>
              <th className="text-left pb-2">Name</th>
              <th className="text-left pb-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-b">
                <td className="py-2">{row.id}</td>
                <td className="py-2">{row.name}</td>
                <td className="py-2">{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ScrollArea>
  )
}

const scrollAreaDosDonts = {
  dos: [
    { description: "Use for long lists or tables" },
    { description: "Keep scroll area reasonably sized" },
    { description: "Provide visual scrollbar indicators" },
    { description: "Test with keyboard navigation" }
  ],
  donts: [
    { description: "Don't use on full-page content" },
    { description: "Don't hide scrollbar completely" },
    { description: "Don't make scrollable areas too small" },
    { description: "Don't nest scroll areas" }
  ]
}

const scrollAreaProps = [
  { name: "className", type: "string", default: "-", description: "Custom CSS classes" },
  { name: "children", type: "React.ReactNode", default: "-", description: "Content to be scrolled" }
]

/* ============================================
   BATCH EXPORT
   ============================================ */

const batch3: Record<string, { title: string; description: string; component: React.ReactNode }> = {
  "sheet": {
    title: "Sheet",
    description: "A side panel that slides in from the edge of the screen, commonly used for navigation or forms.",
    component: (
      <div className="space-y-12">
        <ContentSection id="sheet-default" title="Default">
          <p className="text-muted-foreground mb-4">
            A sheet is a slide-out panel that overlays the main content. Perfect for mobile navigation or secondary forms.
          </p>
          <ExampleBlock
            title="Basic Sheet"
            description="Sheet that slides from the left side"
            preview={<SheetDefaultPreview />}
            code={`import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <Menu className="w-4 h-4 mr-2" />
          Open Sidebar
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Navigation Menu</SheetTitle>
        </SheetHeader>
        <div className="space-y-4 mt-6">
          <Button variant="ghost" className="w-full justify-start">Dashboard</Button>
          <Button variant="ghost" className="w-full justify-start">Settings</Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}`}
          />
        </ContentSection>

        <ContentSection id="sheet-variants" title="Variants">
          <p className="text-muted-foreground mb-4">
            Sheets can slide in from different directions using the side prop.
          </p>
          <ExampleBlock
            title="Side Variants"
            description="Click each button to see the sheet slide from different directions"
            preview={<SheetVariantsPreview />}
            code={`// Use side prop: "left", "right", "top", or "bottom"
<SheetContent side="right">
  <SheetHeader>
    <SheetTitle>Right Sheet</SheetTitle>
  </SheetHeader>
</SheetContent>`}
          />
        </ContentSection>

        <ContentSection id="sheet-usage" title="Usage Guidelines">
          <DosDonts dos={sheetDosDonts.dos} donts={sheetDosDonts.donts} />
        </ContentSection>

        <ContentSection id="sheet-echo-usage" title="Echo usage">
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Sheets provide side panels for viewing detailed call transcripts and agent coaching notes. They enable quick access to rich contextual information while maintaining focus on the main dashboard, essential for compliance review workflows.
            </p>
            <div className="space-y-2">
              <div className="border-l-2 border-primary pl-4 py-1">
                <p className="text-sm font-medium">Call Transcript Details</p>
                <p className="text-sm text-muted-foreground">Side panel displaying full call transcripts with timestamp markers and SOP step alignment</p>
              </div>
              <div className="border-l-2 border-primary pl-4 py-1">
                <p className="text-sm font-medium">Coaching Notes Sidebar</p>
                <p className="text-sm text-muted-foreground">Side panel for viewing and editing agent coaching notes related to specific calls</p>
              </div>
            </div>
          </div>
        </ContentSection>

        <ContentSection id="sheet-accessibility" title="Accessibility">
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Focus automatically moves to sheet content on open</li>
            <li>• Escape key closes the sheet</li>
            <li>• Click outside sheet to close (optional)</li>
            <li>• Proper ARIA attributes for screen readers</li>
            <li>• Keyboard navigation fully supported</li>
          </ul>
        </ContentSection>

        <ContentSection id="sheet-api" title="API Reference">
          <PropsTable props={sheetProps} />
        </ContentSection>
      </div>
    ),
  },

  "dropdown-menu": {
    title: "Dropdown Menu",
    description: "A menu that opens below a trigger button, displaying a list of actions or options.",
    component: (
      <div className="space-y-12">
        <ContentSection id="dropdown-default" title="Default">
          <p className="text-muted-foreground mb-4">
            Dropdown menus display a list of actions when triggered. Commonly used for secondary actions and options.
          </p>
          <ExampleBlock
            title="Basic Dropdown"
            description="Click to reveal menu options"
            preview={<DropdownMenuDefaultPreview />}
            code={`import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, Copy, Trash2 } from "lucide-react"

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <MoreHorizontal className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Copy className="w-4 h-4 mr-2" />
          Copy
        </DropdownMenuItem>
        <DropdownMenuItem className="text-red-600">
          <Trash2 className="w-4 h-4 mr-2" />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`}
          />
        </ContentSection>

        <ContentSection id="dropdown-alignment" title="Alignment">
          <p className="text-muted-foreground mb-4">
            Control where the menu appears relative to the trigger button.
          </p>
          <ExampleBlock
            title="Alignment Options"
            description="Different alignment positions for the dropdown menu"
            preview={<DropdownMenuAlignmentPreview />}
            code={`// Use align prop: "start", "center", or "end"
<DropdownMenuContent align="start">
  <DropdownMenuItem>Option 1</DropdownMenuItem>
  <DropdownMenuItem>Option 2</DropdownMenuItem>
</DropdownMenuContent>`}
          />
        </ContentSection>

        <ContentSection id="dropdown-usage" title="Usage Guidelines">
          <DosDonts dos={dropdownDosDonts.dos} donts={dropdownDosDonts.donts} />
        </ContentSection>

        <ContentSection id="dropdown-echo-usage" title="Echo usage">
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Dropdown menus provide contextual actions on agent rows and reports. They enable team leads and compliance officers to quickly access profile information, export data, assign coaches, and trigger bulk actions without cluttering the interface.
            </p>
            <div className="space-y-2">
              <div className="border-l-2 border-primary pl-4 py-1">
                <p className="text-sm font-medium">Agent Row Actions</p>
                <p className="text-sm text-muted-foreground">More actions menu on agent performance rows with options for View Profile, Export Data, and Assign Coach</p>
              </div>
              <div className="border-l-2 border-primary pl-4 py-1">
                <p className="text-sm font-medium">Report Export Options</p>
                <p className="text-sm text-muted-foreground">Dropdown menus for selecting export formats and report variations</p>
              </div>
            </div>
          </div>
        </ContentSection>

        <ContentSection id="dropdown-accessibility" title="Accessibility">
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Arrow keys navigate menu items</li>
            <li>• Enter or Space to select item</li>
            <li>• Escape closes menu</li>
            <li>• Proper ARIA roles and attributes</li>
            <li>• Focus management and keyboard support</li>
          </ul>
        </ContentSection>

        <ContentSection id="dropdown-api" title="API Reference">
          <PropsTable props={dropdownProps} />
        </ContentSection>
      </div>
    ),
  },

  "context-menu": {
    title: "Context Menu",
    description: "A menu that appears on right-click, providing context-specific actions for an element.",
    component: (
      <div className="space-y-12">
        <ContentSection id="context-default" title="Default">
          <p className="text-muted-foreground mb-4">
            Context menus appear on right-click and provide actions relevant to the clicked element.
          </p>
          <ExampleBlock
            title="Basic Context Menu"
            description="Right-click the area to see the context menu"
            preview={<ContextMenuDefaultPreview />}
            code={`import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu"
import { Copy, Share, Trash2 } from "lucide-react"

export function ContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="border-2 border-dashed p-8 rounded cursor-context-menu">
        Right-click here
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          <Copy className="w-4 h-4 mr-2" />
          Copy
        </ContextMenuItem>
        <ContextMenuItem>
          <Share className="w-4 h-4 mr-2" />
          Share
        </ContextMenuItem>
        <ContextMenuItem className="text-red-600">
          <Trash2 className="w-4 h-4 mr-2" />
          Delete
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}`}
          />
        </ContentSection>

        <ContentSection id="context-usage" title="Usage Guidelines">
          <DosDonts dos={contextDosDonts.dos} donts={contextDosDonts.donts} />
        </ContentSection>

        <ContentSection id="context-accessibility" title="Accessibility">
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Right-click or Shift+F10 to open menu</li>
            <li>• Arrow keys navigate items</li>
            <li>• Enter to select item</li>
            <li>• Escape closes menu</li>
            <li>• Proper focus and keyboard support</li>
          </ul>
        </ContentSection>

        <ContentSection id="context-api" title="API Reference">
          <PropsTable props={contextProps} />
        </ContentSection>
      </div>
    ),
  },

  "hover-card": {
    title: "Hover Card",
    description: "A card that appears on hover, showing additional information or preview about an element.",
    component: (
      <div className="space-y-12">
        <ContentSection id="hover-card-default" title="Default">
          <p className="text-muted-foreground mb-4">
            Hover cards display supplementary information when hovering over a trigger element.
          </p>
          <ExampleBlock
            title="Basic Hover Card"
            description="Hover over the button to see the card"
            preview={<HoverCardDefaultPreview />}
            code={`import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Button } from "@/components/ui/button"

export function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">Hover over me</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Preview Card</h4>
          <p className="text-sm text-muted-foreground">
            Additional information appears here.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}`}
          />
        </ContentSection>

        <ContentSection id="hover-card-user" title="User Profile Preview">
          <p className="text-muted-foreground mb-4">
            Perfect for showing user profiles or social previews.
          </p>
          <ExampleBlock
            title="User Profile Card"
            description="Hover to see user information"
            preview={<HoverCardUserPreview />}
            code={`<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="link">@johndoe</Button>
  </HoverCardTrigger>
  <HoverCardContent className="w-80">
    <div className="flex justify-between space-x-4">
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">John Doe</h4>
        <p className="text-sm text-muted-foreground">
          Product Designer at Company
        </p>
        <p className="text-xs text-muted-foreground pt-2">
          Joined in January 2024 • 342 followers
        </p>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>`}
          />
        </ContentSection>

        <ContentSection id="hover-card-usage" title="Usage Guidelines">
          <DosDonts dos={hoverCardDosDonts.dos} donts={hoverCardDosDonts.donts} />
        </ContentSection>

        <ContentSection id="hover-card-echo-usage" title="Echo usage">
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Hover cards display preview information on hover, such as agent statistics in leaderboards and SOP step details. They provide quick insights without opening modals, improving efficiency in browsing and analyzing data.
            </p>
            <div className="space-y-2">
              <div className="border-l-2 border-primary pl-4 py-1">
                <p className="text-sm font-medium">Agent Stats Previews</p>
                <p className="text-sm text-muted-foreground">Hovering on agent names in leaderboards shows summary stats (calls handled, adherence%, top strengths)</p>
              </div>
              <div className="border-l-2 border-primary pl-4 py-1">
                <p className="text-sm font-medium">SOP Step Previews</p>
                <p className="text-sm text-muted-foreground">Hovering on step references displays full step instructions and compliance criteria</p>
              </div>
            </div>
          </div>
        </ContentSection>

        <ContentSection id="hover-card-accessibility" title="Accessibility">
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Triggered by hover and focus</li>
            <li>• Touch devices show on press/hold</li>
            <li>• Escape key closes card</li>
            <li>• Proper ARIA attributes</li>
            <li>• Configurable delay before showing</li>
          </ul>
        </ContentSection>

        <ContentSection id="hover-card-api" title="API Reference">
          <PropsTable props={hoverCardProps} />
        </ContentSection>
      </div>
    ),
  },

  "alert-dialog": {
    title: "Alert Dialog",
    description: "A modal dialog that interrupts the user to confirm an action, typically a destructive one.",
    component: (
      <div className="space-y-12">
        <ContentSection id="alert-dialog-default" title="Default">
          <p className="text-muted-foreground mb-4">
            Alert dialogs are used for important confirmations, especially for destructive actions.
          </p>
          <ExampleBlock
            title="Destructive Action"
            description="Confirm before deleting"
            preview={<AlertDialogDefaultPreview />}
            code={`import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

export function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete Account</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your account.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-red-600">Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}`}
          />
        </ContentSection>

        <ContentSection id="alert-dialog-confirm" title="Confirmation Dialog">
          <p className="text-muted-foreground mb-4">
            Use for non-destructive confirmations as well.
          </p>
          <ExampleBlock
            title="Save Confirmation"
            description="Confirm before saving changes"
            preview={<AlertDialogConfirmPreview />}
            code={`<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button>Save Changes</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Confirm Changes</AlertDialogTitle>
      <AlertDialogDescription>
        Are you sure you want to save all changes?
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Discard</AlertDialogCancel>
      <AlertDialogAction>Save</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}
          />
        </ContentSection>

        <ContentSection id="alert-dialog-usage" title="Usage Guidelines">
          <DosDonts dos={alertDialogDosDonts.dos} donts={alertDialogDosDonts.donts} />
        </ContentSection>

        <ContentSection id="alert-dialog-echo-usage" title="Echo usage">
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Alert dialogs confirm high-impact operations like SOP deletions and bulk agent reassignments. They prevent accidental data loss and ensure compliance officers and QA managers deliberately confirm critical actions.
            </p>
            <div className="space-y-2">
              <div className="border-l-2 border-primary pl-4 py-1">
                <p className="text-sm font-medium">SOP Configuration Deletion</p>
                <p className="text-sm text-muted-foreground">Confirmation dialog when deleting SOP configurations to prevent accidental removal</p>
              </div>
              <div className="border-l-2 border-primary pl-4 py-1">
                <p className="text-sm font-medium">Bulk Agent Reassignment</p>
                <p className="text-sm text-muted-foreground">Confirmation dialog when performing bulk reassignment of agents to different queues or teams</p>
              </div>
            </div>
          </div>
        </ContentSection>

        <ContentSection id="alert-dialog-accessibility" title="Accessibility">
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Focuses on action button when opened</li>
            <li>• Escape key cancels the action</li>
            <li>• Clear and descriptive messaging</li>
            <li>• Tab navigation between buttons</li>
            <li>• Screen reader friendly announcements</li>
          </ul>
        </ContentSection>

        <ContentSection id="alert-dialog-api" title="API Reference">
          <PropsTable props={alertDialogProps} />
        </ContentSection>
      </div>
    ),
  },

  "popover": {
    title: "Popover",
    description: "A non-modal dialog that overlays an element, used for quick interactions like filters or settings.",
    component: (
      <div className="space-y-12">
        <ContentSection id="popover-default" title="Default">
          <p className="text-muted-foreground mb-4">
            Popovers are lightweight, non-modal panels perfect for filters, settings, or quick forms.
          </p>
          <ExampleBlock
            title="Filter Popover"
            description="Click to open filtering options"
            preview={<PopoverDefaultPreview />}
            code={`import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-4">
          <h4 className="font-medium text-sm">Filter Options</h4>
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" className="rounded" defaultChecked />
              Active items
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" className="rounded" />
              Archived items
            </label>
          </div>
          <Button size="sm" className="w-full">Apply Filters</Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}`}
          />
        </ContentSection>

        <ContentSection id="popover-variants" title="Date Picker">
          <p className="text-muted-foreground mb-4">
            Popovers work well for date pickers and calendar interfaces.
          </p>
          <ExampleBlock
            title="Date Range Picker"
            description="Click to select dates"
            preview={<PopoverDatePickerPreview />}
            code={`<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Pick a date</Button>
  </PopoverTrigger>
  <PopoverContent className="w-64" align="start">
    <div className="space-y-4">
      <h4 className="font-medium text-sm">Select Date Range</h4>
      {/* Calendar UI here */}
    </div>
  </PopoverContent>
</Popover>`}
          />
        </ContentSection>

        <ContentSection id="popover-usage" title="Usage Guidelines">
          <DosDonts dos={popoverDosDonts.dos} donts={popoverDosDonts.donts} />
        </ContentSection>

        <ContentSection id="popover-echo-usage" title="Echo usage">
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Popovers provide contextual controls for filtering and display options without taking up permanent screen space. They're used for date range selection, quick filters, and column visibility toggles in dense tables and reports.
            </p>
            <div className="space-y-2">
              <div className="border-l-2 border-primary pl-4 py-1">
                <p className="text-sm font-medium">Quick Filters</p>
                <p className="text-sm text-muted-foreground">Popover menus for applying quick filter combinations to call lists and agent views</p>
              </div>
              <div className="border-l-2 border-primary pl-4 py-1">
                <p className="text-sm font-medium">Date Range & Column Toggles</p>
                <p className="text-sm text-muted-foreground">Popovers for date range picker and column visibility toggles in report tables</p>
              </div>
            </div>
          </div>
        </ContentSection>

        <ContentSection id="popover-accessibility" title="Accessibility">
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Escape key closes popover</li>
            <li>• Click outside to close</li>
            <li>• Tab navigation within popover</li>
            <li>• Proper ARIA attributes</li>
            <li>• Focus management on close</li>
          </ul>
        </ContentSection>

        <ContentSection id="popover-api" title="API Reference">
          <PropsTable props={popoverProps} />
        </ContentSection>
      </div>
    ),
  },

  "skeleton": {
    title: "Skeleton",
    description: "A placeholder component that represents content before it loads, improving perceived performance.",
    component: (
      <div className="space-y-12">
        <ContentSection id="skeleton-default" title="Default">
          <p className="text-muted-foreground mb-4">
            Skeletons show a loading placeholder that matches the shape of the actual content.
          </p>
          <ExampleBlock
            title="Text Loading"
            description="Placeholder for text content"
            preview={<SkeletonDefaultPreview />}
            code={`import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonDemo() {
  return (
    <div className="space-y-3">
      <Skeleton className="h-4 w-48" />
      <Skeleton className="h-4 w-40" />
      <Skeleton className="h-4 w-44" />
    </div>
  )
}`}
          />
        </ContentSection>

        <ContentSection id="skeleton-card" title="Card Loading">
          <p className="text-muted-foreground mb-4">
            Combine multiple skeletons to represent complex content.
          </p>
          <ExampleBlock
            title="Card Layout Loading"
            description="Complex skeleton matching card structure"
            preview={<SkeletonCardPreview />}
            code={`<div className="border rounded-lg p-4 space-y-4">
  <div className="flex gap-4">
    <Skeleton className="h-12 w-12 rounded-full" />
    <div className="flex-1 space-y-2">
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-3 w-32" />
    </div>
  </div>
  <Skeleton className="h-32 w-full rounded" />
  <div className="flex gap-2">
    <Skeleton className="h-8 w-16 rounded" />
    <Skeleton className="h-8 w-16 rounded" />
  </div>
</div>`}
          />
        </ContentSection>

        <ContentSection id="skeleton-usage" title="Usage Guidelines">
          <DosDonts dos={skeletonDosDonts.dos} donts={skeletonDosDonts.donts} />
        </ContentSection>

        <ContentSection id="skeleton-echo-usage" title="Echo usage">
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Skeleton loaders display placeholder content while data is loading, providing visual feedback for dashboard KPI cards, agent tables, and charts. They improve perceived performance and set user expectations for data-heavy operations.
            </p>
            <div className="space-y-2">
              <div className="border-l-2 border-primary pl-4 py-1">
                <p className="text-sm font-medium">Dashboard KPI Cards</p>
                <p className="text-sm text-muted-foreground">Skeleton loaders for adherence summary cards and performance metrics while data is fetching</p>
              </div>
              <div className="border-l-2 border-primary pl-4 py-1">
                <p className="text-sm font-medium">Table & Chart Loading</p>
                <p className="text-sm text-muted-foreground">Skeleton rows for agent tables and chart loading states during data processing</p>
              </div>
            </div>
          </div>
        </ContentSection>

        <ContentSection id="skeleton-accessibility" title="Accessibility">
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Mark as loading with aria-busy when appropriate</li>
            <li>• Provide context about what's loading</li>
            <li>• Use aria-label for screen readers</li>
            <li>• Animate subtly to indicate loading state</li>
            <li>• Never use as permanent content placeholders</li>
          </ul>
        </ContentSection>

        <ContentSection id="skeleton-api" title="API Reference">
          <PropsTable props={skeletonProps} />
        </ContentSection>
      </div>
    ),
  },

  "textarea": {
    title: "Textarea",
    description: "A form input for capturing multi-line text from users.",
    component: (
      <div className="space-y-12">
        <ContentSection id="textarea-default" title="Default">
          <p className="text-muted-foreground mb-4">
            Textareas accept multi-line text input. Use them for messages, descriptions, or any extended text.
          </p>
          <ExampleBlock
            title="Basic Textarea"
            description="Multi-line text input with character count"
            preview={<TextareaDefaultPreview />}
            code={`import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export function TextareaDemo() {
  const [value, setValue] = useState("")
  
  return (
    <div className="space-y-3 w-full max-w-md">
      <Label htmlFor="textarea">Message</Label>
      <Textarea
        id="textarea"
        placeholder="Enter your message..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p className="text-xs text-muted-foreground">
        {value.length} characters
      </p>
    </div>
  )
}`}
          />
        </ContentSection>

        <ContentSection id="textarea-sizes" title="Sizes">
          <p className="text-muted-foreground mb-4">
            Adjust textarea height based on expected content volume.
          </p>
          <ExampleBlock
            title="Different Sizes"
            description="Small, medium, and large textarea variants"
            preview={<TextareaSizesPreview />}
            code={`// Control height with className
<Textarea className="resize-none h-20" placeholder="Small..." />
<Textarea placeholder="Medium..." />
<Textarea className="resize-none h-40" placeholder="Large..." />`}
          />
        </ContentSection>

        <ContentSection id="textarea-usage" title="Usage Guidelines">
          <DosDonts dos={textareaDosDonts.dos} donts={textareaDosDonts.donts} />
        </ContentSection>

        <ContentSection id="textarea-echo-usage" title="Echo usage">
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Text areas capture coaching notes and SOP descriptions, enabling team leads and compliance officers to document detailed feedback and configuration requirements. They're used in coaching workflows and SOP management interfaces.
            </p>
            <div className="space-y-2">
              <div className="border-l-2 border-primary pl-4 py-1">
                <p className="text-sm font-medium">Agent Coaching Notes</p>
                <p className="text-sm text-muted-foreground">Multi-line input for documenting detailed coaching feedback and action items for agents</p>
              </div>
              <div className="border-l-2 border-primary pl-4 py-1">
                <p className="text-sm font-medium">SOP Configuration & Comments</p>
                <p className="text-sm text-muted-foreground">Text areas for describing SOP step requirements and adding report comments</p>
              </div>
            </div>
          </div>
        </ContentSection>

        <ContentSection id="textarea-accessibility" title="Accessibility">
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Always pair with associated Label</li>
            <li>• Use htmlFor on Label to link to textarea</li>
            <li>• Provide placeholder or helper text</li>
            <li>• Show character limits if applicable</li>
            <li>• Support keyboard resize if appropriate</li>
          </ul>
        </ContentSection>

        <ContentSection id="textarea-api" title="API Reference">
          <PropsTable props={textareaProps} />
        </ContentSection>
      </div>
    ),
  },

  "label": {
    title: "Label",
    description: "A form label component for associating text with form inputs.",
    component: (
      <div className="space-y-12">
        <ContentSection id="label-default" title="Default">
          <p className="text-muted-foreground mb-4">
            Labels describe form inputs and should always be associated with their input using the htmlFor attribute.
          </p>
          <ExampleBlock
            title="Basic Label"
            description="Label associated with input field"
            preview={<LabelDefaultPreview />}
            code={`import { Label } from "@/components/ui/label"

export function LabelDemo() {
  return (
    <div>
      <Label htmlFor="email">Email Address</Label>
      <input
        id="email"
        type="email"
        placeholder="you@example.com"
      />
    </div>
  )
}`}
          />
        </ContentSection>

        <ContentSection id="label-variants" title="Variants">
          <p className="text-muted-foreground mb-4">
            Customize labels for different states and requirements.
          </p>
          <ExampleBlock
            title="Label States"
            description="Standard, required, and disabled label variants"
            preview={<LabelVariantsPreview />}
            code={`// Standard label
<Label>Standard Label</Label>

// Required label with indicator
<Label>
  Required Label <span className="text-red-600">*</span>
</Label>

// Disabled label
<Label>Disabled Label</Label>`}
          />
        </ContentSection>

        <ContentSection id="label-usage" title="Usage Guidelines">
          <DosDonts dos={labelDosDonts.dos} donts={labelDosDonts.donts} />
        </ContentSection>

        <ContentSection id="label-accessibility" title="Accessibility">
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Always use label with htmlFor attribute</li>
            <li>• Label improves keyboard navigation</li>
            <li>• Screen readers announce label text</li>
            <li>• Increases clickable area for inputs</li>
            <li>• Never hide labels, use placeholder instead</li>
          </ul>
        </ContentSection>

        <ContentSection id="label-api" title="API Reference">
          <PropsTable props={labelProps} />
        </ContentSection>
      </div>
    ),
  },

  "scroll-area": {
    title: "Scroll Area",
    description: "A container component that adds custom scrolling styles to overflowing content.",
    component: (
      <div className="space-y-12">
        <ContentSection id="scroll-area-default" title="Default">
          <p className="text-muted-foreground mb-4">
            Scroll areas wrap overflowing content with styled scrollbars. Perfect for lists and tables.
          </p>
          <ExampleBlock
            title="List Scrolling"
            description="Scrollable list of items"
            preview={<ScrollAreaDefaultPreview />}
            code={`import { ScrollArea } from "@/components/ui/scroll-area"

export function ScrollAreaDemo() {
  const items = Array.from({ length: 20 }, (_, i) => \`Item \${i + 1}\`)
  
  return (
    <ScrollArea className="h-48 w-64 border rounded-lg">
      <div className="p-4 space-y-2">
        {items.map((item) => (
          <div key={item} className="text-sm py-2 px-2 rounded hover:bg-muted">
            {item}
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}`}
          />
        </ContentSection>

        <ContentSection id="scroll-area-table" title="Table Scrolling">
          <p className="text-muted-foreground mb-4">
            Use scroll areas for horizontal or vertical scrolling tables.
          </p>
          <ExampleBlock
            title="Table Content"
            description="Vertically scrollable table"
            preview={<ScrollAreaTablePreview />}
            code={`<ScrollArea className="h-64 w-80 border rounded-lg">
  <div className="p-4">
    <table className="text-sm w-full">
      <thead>
        <tr className="border-b">
          <th>ID</th>
          <th>Name</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id} className="border-b">
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</ScrollArea>`}
          />
        </ContentSection>

        <ContentSection id="scroll-area-usage" title="Usage Guidelines">
          <DosDonts dos={scrollAreaDosDonts.dos} donts={scrollAreaDosDonts.donts} />
        </ContentSection>

        <ContentSection id="scroll-area-echo-usage" title="Echo usage">
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Scroll areas manage overflow content in tables and lists, enabling browsing of long agent lists, call transcripts, and extended SOP configurations. They maintain interface structure while handling variable-length content gracefully.
            </p>
            <div className="space-y-2">
              <div className="border-l-2 border-primary pl-4 py-1">
                <p className="text-sm font-medium">Agent Lists & Transcripts</p>
                <p className="text-sm text-muted-foreground">Scrollable containers for long agent lists and full call transcript display</p>
              </div>
              <div className="border-l-2 border-primary pl-4 py-1">
                <p className="text-sm font-medium">Extended SOP Step Lists</p>
                <p className="text-sm text-muted-foreground">Scrollable areas for displaying complete SOP process definitions with many steps</p>
              </div>
            </div>
          </div>
        </ContentSection>

        <ContentSection id="scroll-area-accessibility" title="Accessibility">
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Keyboard scrolling with arrow keys</li>
            <li>• Page Up/Down for larger jumps</li>
            <li>• Visible scrollbar indicators</li>
            <li>• Proper ARIA landmark roles</li>
            <li>• Focus management within scrollable area</li>
          </ul>
        </ContentSection>

        <ContentSection id="scroll-area-api" title="API Reference">
          <PropsTable props={scrollAreaProps} />
        </ContentSection>
      </div>
    ),
  },
}

export default batch3
