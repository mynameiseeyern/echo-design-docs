"use client"

import React, { useState } from "react"
import {
  ContentSection,
  ExampleBlock,
  DosDonts,
  PropsTable,
} from "@/components/doc-components"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { AlertCircle, Mail, Lock } from "lucide-react"

/* ============================================
   BUTTON COMPONENT
   ============================================ */
function ButtonDoc() {
  return (
    <>
      <ContentSection id="default" title="Default button">
        <p className="text-muted-foreground">
          Buttons are interactive elements that trigger actions or navigate
          to other pages. Use them for primary actions, form submissions, and
          navigation. The default button variant is suitable for most
          interactions.
        </p>
        <ExampleBlock
          preview={<Button>Click me</Button>}
          code={`import { Button } from "@/components/ui/button"

export function Demo() {
  return <Button>Click me</Button>
}`}
        />
      </ContentSection>

      <ContentSection id="variants" title="Button variants">
        <p className="text-muted-foreground mb-4">
          Choose the appropriate button variant based on the importance and
          context of the action.
        </p>
        <div className="space-y-4">
          <ExampleBlock
            title="Primary (default)"
            description="Use for the primary call-to-action in a section."
            preview={<Button>Primary action</Button>}
            code={`<Button>Primary action</Button>`}
          />
          <ExampleBlock
            title="Secondary"
            description="Use for secondary actions that complement the primary action."
            preview={<Button variant="secondary">Secondary action</Button>}
            code={`<Button variant="secondary">Secondary action</Button>`}
          />
          <ExampleBlock
            title="Outline"
            description="Use for tertiary actions that are less prominent."
            preview={<Button variant="outline">Outline action</Button>}
            code={`<Button variant="outline">Outline action</Button>`}
          />
          <ExampleBlock
            title="Ghost"
            description="Use for minimal actions within lists or tables."
            preview={<Button variant="ghost">Ghost action</Button>}
            code={`<Button variant="ghost">Ghost action</Button>`}
          />
          <ExampleBlock
            title="Link"
            description="Use for text-styled links that trigger actions."
            preview={<Button variant="link">Link action</Button>}
            code={`<Button variant="link">Link action</Button>`}
          />
          <ExampleBlock
            title="Destructive"
            description="Reserve for actions that delete or remove content."
            preview={<Button variant="destructive">Delete item</Button>}
            code={`<Button variant="destructive">Delete item</Button>`}
          />
        </div>
      </ContentSection>

      <ContentSection id="sizes" title="Button sizes">
        <p className="text-muted-foreground mb-4">
          Adjust button sizes to match the prominence of the action and the
          available space.
        </p>
        <div className="space-y-4">
          <ExampleBlock
            title="Small"
            preview={<Button size="sm">Small button</Button>}
            code={`<Button size="sm">Small button</Button>`}
          />
          <ExampleBlock
            title="Default"
            preview={<Button size="default">Default button</Button>}
            code={`<Button size="default">Default button</Button>`}
          />
          <ExampleBlock
            title="Large"
            preview={<Button size="lg">Large button</Button>}
            code={`<Button size="lg">Large button</Button>`}
          />
          <ExampleBlock
            title="Icon"
            preview={<Button size="icon">+</Button>}
            code={`<Button size="icon">+</Button>`}
          />
        </div>
      </ContentSection>

      <ContentSection id="states" title="Button states">
        <p className="text-muted-foreground mb-4">
          Buttons support various states including disabled and loading states.
        </p>
        <div className="space-y-4">
          <ExampleBlock
            title="Disabled state"
            preview={<Button disabled>Disabled button</Button>}
            code={`<Button disabled>Disabled button</Button>`}
          />
          <ExampleBlock
            title="With icon"
            preview={
              <Button>
                <Mail className="mr-2 h-4 w-4" />
                Send email
              </Button>
            }
            code={`import { Mail } from "lucide-react"

<Button>
  <Mail className="mr-2 h-4 w-4" />
  Send email
</Button>`}
          />
        </div>
      </ContentSection>

      <ContentSection id="usage" title="Usage guidelines">
        <DosDonts
          dos={[
            {
              description: "Use one primary button per section for the main action",
              preview: (
                <div className="space-y-2">
                  <Button className="w-full">Save changes</Button>
                  <Button variant="outline" className="w-full">
                    Cancel
                  </Button>
                </div>
              ),
            },
            {
              description: "Use descriptive action labels that indicate what will happen",
              preview: (
                <div className="space-y-2">
                  <Button>Download report</Button>
                </div>
              ),
            },
            {
              description: "Disable buttons when the action is unavailable",
              preview: (
                <div className="space-y-2">
                  <Button disabled>Publish (requires 3+ edits)</Button>
                </div>
              ),
            },
          ]}
          donts={[
            {
              description: "Don't use multiple buttons with the same visual weight",
              preview: (
                <div className="space-y-2">
                  <Button className="w-full">Delete</Button>
                  <Button className="w-full">Archive</Button>
                </div>
              ),
            },
            {
              description: "Don't use vague action labels like 'Submit' or 'OK'",
              preview: (
                <div className="space-y-2">
                  <Button>OK</Button>
                </div>
              ),
            },
            {
              description: "Don't use buttons for navigation when a link is more appropriate",
              preview: (
                <div className="space-y-2">
                  <Button>Go to settings</Button>
                </div>
              ),
            },
          ]}
        />
      </ContentSection>

      <ContentSection id="echo-usage" title="Echo usage">
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Buttons drive critical interactions in Echo dashboards and workflows. Primary buttons trigger key actions like exporting compliance reports or drilling into agent details, while destructive variants confirm removal of SOP configurations. Consistent button labeling helps QA managers and team leads navigate the platform efficiently.
          </p>
          <div className="space-y-2">
            <div className="border-l-2 border-primary pl-4 py-1">
              <p className="text-sm font-medium">Dashboard Actions</p>
              <p className="text-sm text-muted-foreground">Export reports, reset filters, apply date range selections</p>
            </div>
            <div className="border-l-2 border-primary pl-4 py-1">
              <p className="text-sm font-medium">Drill-down Navigation</p>
              <p className="text-sm text-muted-foreground">View details on agent performance tables, access step-by-step adherence reports</p>
            </div>
            <div className="border-l-2 border-primary pl-4 py-1">
              <p className="text-sm font-medium">SOP Configuration</p>
              <p className="text-sm text-muted-foreground">Destructive variant for removing SOP steps, saving new workflow configurations</p>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection id="accessibility" title="Accessibility">
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>
            • Use semantic HTML with the button element or appropriate ARIA
            roles
          </li>
          <li>
            • Provide clear, descriptive text that indicates what will happen
            when clicked
          </li>
          <li>• Ensure sufficient color contrast (minimum 4.5:1 ratio)</li>
          <li>• Support keyboard navigation with Tab, Enter, and Space keys</li>
          <li>
            • Use aria-disabled for custom button implementations instead of
            disabling form controls
          </li>
          <li>
            • Provide visual focus indicators for keyboard users (focus-visible)
          </li>
        </ul>
      </ContentSection>

      <ContentSection id="api" title="API reference">
        <PropsTable
          props={[
            {
              name: "variant",
              type: '"default" | "secondary" | "outline" | "ghost" | "link" | "destructive"',
              default: '"default"',
              description: "The visual style variant of the button",
            },
            {
              name: "size",
              type: '"default" | "sm" | "lg" | "icon"',
              default: '"default"',
              description: "The size of the button",
            },
            {
              name: "disabled",
              type: "boolean",
              default: "false",
              description: "Disable the button and prevent interactions",
            },
            {
              name: "asChild",
              type: "boolean",
              default: "false",
              description: "Render as a child element, useful for Next.js Link components",
            },
            {
              name: "className",
              type: "string",
              description: "Additional CSS classes to apply",
            },
          ]}
        />
      </ContentSection>
    </>
  )
}

/* ============================================
   BADGE COMPONENT
   ============================================ */
function BadgeDoc() {
  return (
    <>
      <ContentSection id="default" title="Default badge">
        <p className="text-muted-foreground">
          Badges are small, compact labels used to highlight attributes,
          status, or counts. They're ideal for tagging items, indicating
          status, and drawing attention to important information.
        </p>
        <ExampleBlock
          preview={<Badge>New</Badge>}
          code={`import { Badge } from "@/components/ui/badge"

export function Demo() {
  return <Badge>New</Badge>
}`}
        />
      </ContentSection>

      <ContentSection id="variants" title="Badge variants">
        <p className="text-muted-foreground mb-4">
          Choose badge variants to convey different meanings and visual
          hierarchy.
        </p>
        <div className="space-y-4">
          <ExampleBlock
            title="Default"
            description="Use for primary status indicators and important labels."
            preview={
              <div className="flex gap-2 flex-wrap">
                <Badge>Default</Badge>
                <Badge>New feature</Badge>
              </div>
            }
            code={`<Badge>Default</Badge>
<Badge>New feature</Badge>`}
          />
          <ExampleBlock
            title="Secondary"
            description="Use for secondary status with less visual emphasis."
            preview={
              <div className="flex gap-2 flex-wrap">
                <Badge variant="secondary">In progress</Badge>
                <Badge variant="secondary">Draft</Badge>
              </div>
            }
            code={`<Badge variant="secondary">In progress</Badge>
<Badge variant="secondary">Draft</Badge>`}
          />
          <ExampleBlock
            title="Outline"
            description="Use for subtle badges with visible borders."
            preview={
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline">Pending</Badge>
                <Badge variant="outline">Archived</Badge>
              </div>
            }
            code={`<Badge variant="outline">Pending</Badge>
<Badge variant="outline">Archived</Badge>`}
          />
          <ExampleBlock
            title="Destructive"
            description="Use for alert statuses or negative indicators."
            preview={
              <div className="flex gap-2 flex-wrap">
                <Badge variant="destructive">Error</Badge>
                <Badge variant="destructive">Critical</Badge>
              </div>
            }
            code={`<Badge variant="destructive">Error</Badge>
<Badge variant="destructive">Critical</Badge>`}
          />
        </div>
      </ContentSection>

      <ContentSection id="combinations" title="Badge combinations">
        <p className="text-muted-foreground mb-4">
          Use multiple badges together to convey complex information in a
          compact format.
        </p>
        <div className="space-y-4">
          <ExampleBlock
            title="With card"
            preview={
              <Card className="w-96">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>Component library</CardTitle>
                      <CardDescription>
                        A collection of reusable UI components
                      </CardDescription>
                    </div>
                    <Badge>Active</Badge>
                  </div>
                </CardHeader>
              </Card>
            }
            code={`<Card>
  <CardHeader>
    <div className="flex items-start justify-between">
      <div>
        <CardTitle>Component library</CardTitle>
        <CardDescription>A collection of reusable UI components</CardDescription>
      </div>
      <Badge>Active</Badge>
    </div>
  </CardHeader>
</Card>`}
          />
          <ExampleBlock
            title="Multiple tags"
            preview={
              <div className="flex gap-2 flex-wrap">
                <Badge>React</Badge>
                <Badge>TypeScript</Badge>
                <Badge variant="secondary">Tutorial</Badge>
                <Badge variant="outline">Popular</Badge>
              </div>
            }
            code={`<div className="flex gap-2 flex-wrap">
  <Badge>React</Badge>
  <Badge>TypeScript</Badge>
  <Badge variant="secondary">Tutorial</Badge>
  <Badge variant="outline">Popular</Badge>
</div>`}
          />
        </div>
      </ContentSection>

      <ContentSection id="usage" title="Usage guidelines">
        <DosDonts
          dos={[
            {
              description: "Use badges for quick status recognition",
              preview: (
                <div className="flex gap-2">
                  <Badge>In Stock</Badge>
                </div>
              ),
            },
            {
              description: "Combine related badges for comprehensive context",
              preview: (
                <div className="flex gap-2">
                  <Badge>Backend</Badge>
                  <Badge variant="secondary">Documentation</Badge>
                </div>
              ),
            },
            {
              description: "Use semantic variants for consistent meaning",
              preview: (
                <div className="flex gap-2">
                  <Badge variant="destructive">High priority</Badge>
                  <Badge>Medium priority</Badge>
                </div>
              ),
            },
          ]}
          donts={[
            {
              description: "Don't use badges for primary interactive elements",
              preview: (
                <div className="flex gap-2">
                  <Badge>Click to edit</Badge>
                </div>
              ),
            },
            {
              description: "Don't overload with too many badges in one area",
              preview: (
                <div className="flex gap-2 flex-wrap">
                  <Badge>Tag 1</Badge>
                  <Badge>Tag 2</Badge>
                  <Badge>Tag 3</Badge>
                  <Badge>Tag 4</Badge>
                  <Badge>Tag 5</Badge>
                  <Badge>Tag 6</Badge>
                </div>
              ),
            },
            {
              description: "Don't use badges for permanent important information",
              preview: (
                <div className="flex gap-2">
                  <Badge>Account status: Active</Badge>
                </div>
              ),
            },
          ]}
        />
      </ContentSection>

      <ContentSection id="echo-usage" title="Echo usage">
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Badges are THE most critical visual component in Echo, displaying adherence scores with a three-tier color system that instantly communicates compliance status. Green badges (&ge;67%) signal strong adherence, yellow (34-66%) flags moderate concerns, and red (&lt;34%) highlights urgent coaching needs. Beyond adherence, badges label call status, agent tier classifications, and compliance risk levels across all dashboards.
          </p>
          <div className="space-y-2">
            <div className="border-l-2 border-primary pl-4 py-1">
              <p className="text-sm font-medium">Adherence Scores</p>
              <p className="text-sm text-muted-foreground">Color-coded (green/yellow/red) on Agent Performance Snapshot tables and individual agent cards</p>
            </div>
            <div className="border-l-2 border-primary pl-4 py-1">
              <p className="text-sm font-medium">Status & Classification</p>
              <p className="text-sm text-muted-foreground">Call status tags, agent tier labels, compliance status indicators on report cards</p>
            </div>
            <div className="border-l-2 border-primary pl-4 py-1">
              <p className="text-sm font-medium">Risk Indicators</p>
              <p className="text-sm text-muted-foreground">Highlight identified compliance risks and deviation warnings in insight cards and trend charts</p>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection id="accessibility" title="Accessibility">
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>
            • Ensure color is not the only way to convey information; use text
            or icons
          </li>
          <li>
            • Maintain sufficient color contrast for readability (minimum 4.5:1)
          </li>
          <li>
            • Use aria-label or aria-describedby for context-dependent badges
          </li>
          <li>
            • Avoid using badges as buttons; they are decorative/informational
          </li>
          <li>
            • Include badges in logical reading order when using screen readers
          </li>
        </ul>
      </ContentSection>

      <ContentSection id="api" title="API reference">
        <PropsTable
          props={[
            {
              name: "variant",
              type: '"default" | "secondary" | "outline" | "destructive"',
              default: '"default"',
              description: "The visual style variant of the badge",
            },
            {
              name: "className",
              type: "string",
              description: "Additional CSS classes to apply",
            },
            {
              name: "children",
              type: "React.ReactNode",
              description: "The content of the badge",
            },
          ]}
        />
      </ContentSection>
    </>
  )
}

/* ============================================
   CARD COMPONENT
   ============================================ */
function CardDoc() {
  return (
    <>
      <ContentSection id="default" title="Default card">
        <p className="text-muted-foreground">
          Cards are container components that group related content and
          actions. They provide visual and structural hierarchy for organizing
          information and creating focused user experiences.
        </p>
        <ExampleBlock
          preview={
            <Card className="w-96">
              <CardHeader>
                <CardTitle>Card title</CardTitle>
                <CardDescription>Card description goes here</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card content with additional information.</p>
              </CardContent>
            </Card>
          }
          code={`import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Demo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card title</CardTitle>
        <CardDescription>Card description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content with additional information.</p>
      </CardContent>
    </Card>
  )
}`}
        />
      </ContentSection>

      <ContentSection id="variants" title="Card layouts">
        <p className="text-muted-foreground mb-4">
          Cards can be arranged and styled in various ways to suit different
          content types and layouts.
        </p>
        <div className="space-y-4">
          <ExampleBlock
            title="With header and footer"
            preview={
              <Card className="w-96">
                <CardHeader>
                  <CardTitle>Settings updated</CardTitle>
                  <CardDescription>
                    Your preferences have been saved
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    All changes will take effect immediately.
                  </p>
                </CardContent>
                <div className="px-6 py-4 border-t flex gap-2 justify-end">
                  <Button variant="outline">Cancel</Button>
                  <Button>Confirm</Button>
                </div>
              </Card>
            }
            code={`<Card>
  <CardHeader>
    <CardTitle>Settings updated</CardTitle>
    <CardDescription>Your preferences have been saved</CardDescription>
  </CardHeader>
  <CardContent>
    <p>All changes will take effect immediately.</p>
  </CardContent>
  <div className="px-6 py-4 border-t flex gap-2 justify-end">
    <Button variant="outline">Cancel</Button>
    <Button>Confirm</Button>
  </div>
</Card>`}
          />
          <ExampleBlock
            title="Minimal card"
            preview={
              <Card className="w-96">
                <CardContent className="pt-6">
                  <p>A card with just content, no header or footer.</p>
                </CardContent>
              </Card>
            }
            code={`<Card>
  <CardContent className="pt-6">
    <p>A card with just content, no header or footer.</p>
  </CardContent>
</Card>`}
          />
          <ExampleBlock
            title="Grid layout"
            preview={
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <Card key={i}>
                    <CardHeader>
                      <CardTitle className="text-base">Item {i}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Description for item {i}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            }
            code={`<div className="grid grid-cols-2 gap-4">
  {items.map((item) => (
    <Card key={item.id}>
      <CardHeader>
        <CardTitle>{item.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{item.description}</p>
      </CardContent>
    </Card>
  ))}
</div>`}
          />
        </div>
      </ContentSection>

      <ContentSection id="usage" title="Usage guidelines">
        <DosDonts
          dos={[
            {
              description: "Use cards to group related information and actions",
              preview: (
                <Card className="w-80">
                  <CardHeader>
                    <CardTitle>Create project</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label>Project name</Label>
                      <Input placeholder="My new project" />
                    </div>
                    <Button className="w-full">Create</Button>
                  </CardContent>
                </Card>
              ),
            },
            {
              description: "Use clear titles that describe the card content",
              preview: (
                <Card className="w-80">
                  <CardHeader>
                    <CardTitle>Team members</CardTitle>
                    <CardDescription>5 active members</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">Manage team access and roles</p>
                  </CardContent>
                </Card>
              ),
            },
          ]}
          donts={[
            {
              description: "Don't use cards for simple text content that doesn't need grouping",
              preview: (
                <Card className="w-80">
                  <CardContent className="pt-6">
                    <p>This is just a simple paragraph.</p>
                  </CardContent>
                </Card>
              ),
            },
            {
              description: "Don't use cards when a simpler component would work",
              preview: (
                <Card className="w-80">
                  <CardContent className="pt-6">
                    <Button className="w-full">Click me</Button>
                  </CardContent>
                </Card>
              ),
            },
          ]}
        />
      </ContentSection>

      <ContentSection id="echo-usage" title="Echo usage">
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Cards organize Echo's layered information architecture, from high-level KPI metrics to detailed insight cards. Dashboard cards surface key metrics like call coverage and average adherence at a glance, while Insight Cards on pilot reports flag specific findings with colored left-borders indicating severity. Agent summary cards consolidate performance data for quick team-lead reviews.
          </p>
          <div className="space-y-2">
            <div className="border-l-2 border-primary pl-4 py-1">
              <p className="text-sm font-medium">Dashboard Metrics</p>
              <p className="text-sm text-muted-foreground">Display KPIs like call coverage %, average adherence %, and QA efficiency</p>
            </div>
            <div className="border-l-2 border-primary pl-4 py-1">
              <p className="text-sm font-medium">Insight Cards</p>
              <p className="text-sm text-muted-foreground">Show flagged findings (identity verification shortcuts, security gaps, knowledge gaps) with colored left-border accents for severity</p>
            </div>
            <div className="border-l-2 border-primary pl-4 py-1">
              <p className="text-sm font-medium">Agent Summaries</p>
              <p className="text-sm text-muted-foreground">Consolidate agent name, total calls, adherence %, and lowest-scoring SOP step</p>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection id="accessibility" title="Accessibility">
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>
            • Use semantic HTML within cards (section or article elements)
          </li>
          <li>
            • Provide meaningful headings (CardTitle) that describe the card
            content
          </li>
          <li>
            • Ensure interactive elements within cards are keyboard accessible
          </li>
          <li>
            • Use aria-label or aria-describedby for complex card layouts
          </li>
          <li>
            • Maintain sufficient color contrast between card background and
            text
          </li>
        </ul>
      </ContentSection>

      <ContentSection id="api" title="API reference">
        <PropsTable
          props={[
            {
              name: "Card",
              type: "React.HTMLAttributes",
              description: "The container component for card content",
            },
            {
              name: "CardHeader",
              type: "React.HTMLAttributes",
              description: "Container for the card title and description",
            },
            {
              name: "CardTitle",
              type: "React.HTMLAttributes",
              description: "The main heading for the card",
            },
            {
              name: "CardDescription",
              type: "React.HTMLAttributes",
              description: "A subtitle or description below the title",
            },
            {
              name: "CardContent",
              type: "React.HTMLAttributes",
              description: "The main content area of the card",
            },
            {
              name: "CardFooter",
              type: "React.HTMLAttributes",
              description: "Optional footer section at the bottom of the card",
            },
          ]}
        />
      </ContentSection>
    </>
  )
}

/* ============================================
   CHECKBOX COMPONENT
   ============================================ */
function CheckboxDoc() {
  const [checked, setChecked] = useState(false)
  const [multiChecked, setMultiChecked] = useState({
    option1: true,
    option2: false,
    option3: true,
  })

  return (
    <>
      <ContentSection id="default" title="Default checkbox">
        <p className="text-muted-foreground">
          Checkboxes allow users to select one or more options from a set.
          They're ideal for toggling features, confirming actions, and
          selecting items in lists.
        </p>
        <ExampleBlock
          preview={
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={checked}
                onCheckedChange={(v) => setChecked(v === true)}
              />
              <Label htmlFor="terms">I agree to the terms and conditions</Label>
            </div>
          }
          code={`import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function Demo() {
  const [checked, setChecked] = useState(false)
  
  return (
    <div className="flex items-center space-x-2">
      <Checkbox 
        id="terms"
        checked={checked}
        onCheckedChange={setChecked}
      />
      <Label htmlFor="terms">I agree to the terms</Label>
    </div>
  )
}`}
        />
      </ContentSection>

      <ContentSection id="variants" title="Checkbox states">
        <p className="text-muted-foreground mb-4">
          Checkboxes support various states including checked, unchecked, and
          disabled.
        </p>
        <div className="space-y-4">
          <ExampleBlock
            title="Unchecked"
            preview={
              <div className="flex items-center space-x-2">
                <Checkbox id="unchecked" />
                <Label htmlFor="unchecked">Unchecked option</Label>
              </div>
            }
            code={`<div className="flex items-center space-x-2">
  <Checkbox id="unchecked" />
  <Label htmlFor="unchecked">Unchecked option</Label>
</div>`}
          />
          <ExampleBlock
            title="Checked"
            preview={
              <div className="flex items-center space-x-2">
                <Checkbox id="checked" defaultChecked />
                <Label htmlFor="checked">Checked option</Label>
              </div>
            }
            code={`<div className="flex items-center space-x-2">
  <Checkbox id="checked" defaultChecked />
  <Label htmlFor="checked">Checked option</Label>
</div>`}
          />
          <ExampleBlock
            title="Disabled"
            preview={
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="disabled-unchecked" disabled />
                  <Label htmlFor="disabled-unchecked">
                    Disabled unchecked
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="disabled-checked" disabled defaultChecked />
                  <Label htmlFor="disabled-checked">Disabled checked</Label>
                </div>
              </div>
            }
            code={`<div className="flex items-center space-x-2">
  <Checkbox id="disabled" disabled />
  <Label htmlFor="disabled">Disabled option</Label>
</div>
<div className="flex items-center space-x-2">
  <Checkbox id="disabled-checked" disabled defaultChecked />
  <Label htmlFor="disabled-checked">Disabled checked</Label>
</div>`}
          />
        </div>
      </ContentSection>

      <ContentSection id="combinations" title="Checkbox groups">
        <p className="text-muted-foreground mb-4">
          Use multiple checkboxes to create selection groups for complex forms.
        </p>
        <ExampleBlock
          title="Multiple selection"
          preview={
            <div className="space-y-3">
              {Object.entries(multiChecked).map(([key, value]) => (
                <div key={key} className="flex items-center space-x-2">
                  <Checkbox
                    id={key}
                    checked={value}
                    onCheckedChange={(checked) =>
                      setMultiChecked((prev) => ({ ...prev, [key]: checked }))
                    }
                  />
                  <Label htmlFor={key} className="capitalize">
                    {key.replace(/([A-Z])/g, " $1")}
                  </Label>
                </div>
              ))}
            </div>
          }
          code={`<div className="space-y-3">
  <div className="flex items-center space-x-2">
    <Checkbox id="option1" defaultChecked />
    <Label htmlFor="option1">Option 1</Label>
  </div>
  <div className="flex items-center space-x-2">
    <Checkbox id="option2" />
    <Label htmlFor="option2">Option 2</Label>
  </div>
  <div className="flex items-center space-x-2">
    <Checkbox id="option3" defaultChecked />
    <Label htmlFor="option3">Option 3</Label>
  </div>
</div>`}
        />
      </ContentSection>

      <ContentSection id="usage" title="Usage guidelines">
        <DosDonts
          dos={[
            {
              description: "Use checkboxes for independent selections",
              preview: (
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox defaultChecked />
                    <Label>Subscribe to newsletter</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox defaultChecked />
                    <Label>Receive notifications</Label>
                  </div>
                </div>
              ),
            },
            {
              description: "Always associate checkboxes with labels",
              preview: (
                <div className="flex items-center space-x-2">
                  <Checkbox id="associated" />
                  <Label htmlFor="associated">
                    Check this box to proceed
                  </Label>
                </div>
              ),
            },
          ]}
          donts={[
            {
              description: "Don't use checkboxes for mutually exclusive options; use radio buttons instead",
              preview: (
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox />
                    <Label>Male</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox />
                    <Label>Female</Label>
                  </div>
                </div>
              ),
            },
            {
              description: "Don't use checkboxes without accompanying labels",
              preview: (
                <div className="flex items-center space-x-2">
                  <Checkbox />
                </div>
              ),
            },
          ]}
        />
      </ContentSection>

      <ContentSection id="echo-usage" title="Echo usage">
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Checkboxes enable powerful multi-select filtering across Echo's dashboards and bulk actions on agent/call data. Users filter by queue, agent, date ranges, and SOP steps to narrow compliance reviews. Bulk checkboxes in call lists and SOP configuration allow QA managers to apply coaching insights or update workflow rules at scale.
          </p>
          <div className="space-y-2">
            <div className="border-l-2 border-primary pl-4 py-1">
              <p className="text-sm font-medium">Multi-select Filters</p>
              <p className="text-sm text-muted-foreground">Select specific queues, agents, date ranges, and SOP steps to refine dashboard views</p>
            </div>
            <div className="border-l-2 border-primary pl-4 py-1">
              <p className="text-sm font-medium">Bulk Actions</p>
              <p className="text-sm text-muted-foreground">Check multiple calls or agents to apply coaching insights or compliance interventions</p>
            </div>
            <div className="border-l-2 border-primary pl-4 py-1">
              <p className="text-sm font-medium">SOP Configuration</p>
              <p className="text-sm text-muted-foreground">Enable/disable SOP steps during workflow setup and configuration workflows</p>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection id="accessibility" title="Accessibility">
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>
            • Always associate checkboxes with a label using the htmlFor
            attribute
          </li>
          <li>
            • Use aria-label or aria-describedby when visual labels aren't
            available
          </li>
          <li>
            • Support keyboard navigation with Tab and Space key to toggle
          </li>
          <li>
            • Announce checked state to screen readers using aria-checked
          </li>
          <li>
            • Maintain focus visibility and sufficient color contrast ratios
          </li>
        </ul>
      </ContentSection>

      <ContentSection id="api" title="API reference">
        <PropsTable
          props={[
            {
              name: "checked",
              type: "boolean | 'indeterminate'",
              description: "The controlled checked state",
            },
            {
              name: "onCheckedChange",
              type: "(checked: boolean | 'indeterminate') => void",
              description: "Callback when the checkbox state changes",
            },
            {
              name: "disabled",
              type: "boolean",
              default: "false",
              description: "Disable the checkbox",
            },
            {
              name: "defaultChecked",
              type: "boolean",
              default: "false",
              description: "The initial checked state",
            },
            {
              name: "id",
              type: "string",
              description: "The unique identifier for associating with labels",
            },
            {
              name: "aria-label",
              type: "string",
              description: "Accessible label when visual label isn't available",
            },
          ]}
        />
      </ContentSection>
    </>
  )
}

/* ============================================
   INPUT COMPONENT
   ============================================ */
function InputDoc() {
  const [inputValue, setInputValue] = useState("")

  return (
    <>
      <ContentSection id="default" title="Default input">
        <p className="text-muted-foreground">
          Input fields are essential form elements for capturing user text
          data. They support various types and states to accommodate different
          input requirements and validation scenarios.
        </p>
        <ExampleBlock
          preview={
            <Input
              placeholder="Enter your name..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          }
          code={`import { Input } from "@/components/ui/input"

export function Demo() {
  const [value, setValue] = useState("")
  
  return (
    <Input
      placeholder="Enter your name..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )`}
        />
      </ContentSection>

      <ContentSection id="variants" title="Input types">
        <p className="text-muted-foreground mb-4">
          Use different input types to capture specific data formats and
          provide appropriate keyboards on mobile devices.
        </p>
        <div className="space-y-4">
          <ExampleBlock
            title="Text input"
            preview={<Input type="text" placeholder="Enter text..." />}
            code={`<Input type="text" placeholder="Enter text..." />`}
          />
          <ExampleBlock
            title="Email input"
            preview={<Input type="email" placeholder="name@example.com" />}
            code={`<Input type="email" placeholder="name@example.com" />`}
          />
          <ExampleBlock
            title="Password input"
            preview={<Input type="password" placeholder="••••••••" />}
            code={`<Input type="password" placeholder="••••••••" />`}
          />
          <ExampleBlock
            title="Number input"
            preview={<Input type="number" placeholder="0" />}
            code={`<Input type="number" placeholder="0" />`}
          />
          <ExampleBlock
            title="Search input"
            preview={<Input type="search" placeholder="Search..." />}
            code={`<Input type="search" placeholder="Search..." />`}
          />
          <ExampleBlock
            title="URL input"
            preview={<Input type="url" placeholder="https://example.com" />}
            code={`<Input type="url" placeholder="https://example.com" />`}
          />
        </div>
      </ContentSection>

      <ContentSection id="states" title="Input states">
        <p className="text-muted-foreground mb-4">
          Inputs support various states to provide visual feedback about
          validation and availability.
        </p>
        <div className="space-y-4">
          <ExampleBlock
            title="Disabled"
            preview={<Input disabled placeholder="Disabled input" />}
            code={`<Input disabled placeholder="Disabled input" />`}
          />
          <ExampleBlock
            title="With icon"
            preview={
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Email address"
                  className="pl-9"
                />
              </div>
            }
            code={`<div className="relative">
  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
  <Input
    type="email"
    placeholder="Email address"
    className="pl-9"
  />
</div>`}
          />
          <ExampleBlock
            title="With label"
            preview={
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>
            }
            code={`<div className="space-y-2">
  <Label htmlFor="email">Email address</Label>
  <Input id="email" type="email" placeholder="you@example.com" />
</div>`}
          />
        </div>
      </ContentSection>

      <ContentSection id="usage" title="Usage guidelines">
        <DosDonts
          dos={[
            {
              description: "Always pair inputs with descriptive labels",
              preview: (
                <div className="space-y-2 w-80">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" placeholder="Enter your username" />
                </div>
              ),
            },
            {
              description: "Use appropriate input types for better UX",
              preview: (
                <div className="space-y-2 w-80">
                  <Label htmlFor="phone">Phone number</Label>
                  <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                </div>
              ),
            },
            {
              description: "Provide helpful placeholder text",
              preview: (
                <Input placeholder="example@company.com" type="email" />
              ),
            },
          ]}
          donts={[
            {
              description: "Don't use placeholder as a substitute for labels",
              preview: <Input placeholder="Email address" />,
            },
            {
              description: "Don't use inputs for simple selections (use select)",
              preview: <Input placeholder="Choose a country..." />,
            },
          ]}
        />
      </ContentSection>

      <ContentSection id="echo-usage" title="Echo usage">
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Input fields in Echo support rapid navigation and configuration. QA managers search for specific calls by keyword or filter agent names from large team rosters, while compliance officers enter detailed SOP step descriptions during workflow setup. Real-time search helps users find insights within large datasets.
          </p>
          <div className="space-y-2">
            <div className="border-l-2 border-primary pl-4 py-1">
              <p className="text-sm font-medium">Call Search</p>
              <p className="text-sm text-muted-foreground">Search calls by keyword, call ID, or customer details</p>
            </div>
            <div className="border-l-2 border-primary pl-4 py-1">
              <p className="text-sm font-medium">Agent Filtering</p>
              <p className="text-sm text-muted-foreground">Filter agent names from performance tables and team overviews</p>
            </div>
            <div className="border-l-2 border-primary pl-4 py-1">
              <p className="text-sm font-medium">SOP Configuration</p>
              <p className="text-sm text-muted-foreground">Enter detailed descriptions and names for SOP steps during workflow configuration</p>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection id="accessibility" title="Accessibility">
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>
            • Always associate inputs with labels using the htmlFor attribute
          </li>
          <li>
            • Use appropriate input types (email, number, tel) for better mobile
            UX
          </li>
          <li>
            • Provide aria-label or aria-describedby for additional context
          </li>
          <li>
            • Use aria-invalid and aria-errormessage for error states
          </li>
          <li>
            • Support keyboard navigation and ensure focus visibility
          </li>
          <li>
            • Maintain sufficient color contrast for text and placeholders
          </li>
        </ul>
      </ContentSection>

      <ContentSection id="api" title="API reference">
        <PropsTable
          props={[
            {
              name: "type",
              type: '"text" | "email" | "password" | "number" | "search" | "tel" | "url" | "date" | "time"',
              default: '"text"',
              description: "The input type for data capture and validation",
            },
            {
              name: "placeholder",
              type: "string",
              description: "Hint text displayed when the input is empty (use labels instead)",
            },
            {
              name: "disabled",
              type: "boolean",
              default: "false",
              description: "Disable the input",
            },
            {
              name: "readOnly",
              type: "boolean",
              default: "false",
              description: "Make the input read-only (visible but not editable)",
            },
            {
              name: "required",
              type: "boolean",
              default: "false",
              description: "Mark the input as required",
            },
            {
              name: "value",
              type: "string",
              description: "The controlled value of the input",
            },
            {
              name: "onChange",
              type: "(event: ChangeEvent<HTMLInputElement>) => void",
              description: "Callback when the input value changes",
            },
            {
              name: "className",
              type: "string",
              description: "Additional CSS classes",
            },
          ]}
        />
      </ContentSection>
    </>
  )
}

/* ============================================
   SWITCH COMPONENT
   ============================================ */
function SwitchDoc() {
  const [enabled, setEnabled] = useState(false)
  const [notifications, setNotifications] = useState(true)

  return (
    <>
      <ContentSection id="default" title="Default switch">
        <p className="text-muted-foreground">
          Switches are toggle controls used to enable or disable features,
          settings, or states. They're ideal for binary choices and work well
          in forms and settings screens.
        </p>
        <ExampleBlock
          preview={
            <div className="flex items-center space-x-2">
              <Switch id="airplane" checked={enabled} onCheckedChange={setEnabled} />
              <Label htmlFor="airplane">Airplane mode</Label>
            </div>
          }
          code={`import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function Demo() {
  const [enabled, setEnabled] = useState(false)
  
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane" checked={enabled} onCheckedChange={setEnabled} />
      <Label htmlFor="airplane">Airplane mode</Label>
    </div>
  )
}`}
        />
      </ContentSection>

      <ContentSection id="variants" title="Switch states">
        <p className="text-muted-foreground mb-4">
          Switches support various states to indicate enabled, disabled, and
          interactive states.
        </p>
        <div className="space-y-4">
          <ExampleBlock
            title="Unchecked (off)"
            preview={
              <div className="flex items-center space-x-2">
                <Switch id="off" />
                <Label htmlFor="off">Feature disabled</Label>
              </div>
            }
            code={`<div className="flex items-center space-x-2">
  <Switch id="off" />
  <Label htmlFor="off">Feature disabled</Label>
</div>`}
          />
          <ExampleBlock
            title="Checked (on)"
            preview={
              <div className="flex items-center space-x-2">
                <Switch
                  id="on"
                  defaultChecked
                  checked={notifications}
                  onCheckedChange={setNotifications}
                />
                <Label htmlFor="on">Notifications enabled</Label>
              </div>
            }
            code={`<div className="flex items-center space-x-2">
  <Switch id="on" defaultChecked />
  <Label htmlFor="on">Feature enabled</Label>
</div>`}
          />
          <ExampleBlock
            title="Disabled"
            preview={
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Switch id="disabled-off" disabled />
                  <Label htmlFor="disabled-off">Disabled (off)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="disabled-on" disabled defaultChecked />
                  <Label htmlFor="disabled-on">Disabled (on)</Label>
                </div>
              </div>
            }
            code={`<div className="flex items-center space-x-2">
  <Switch id="disabled" disabled />
  <Label htmlFor="disabled">Disabled switch</Label>
</div>`}
          />
        </div>
      </ContentSection>

      <ContentSection id="combinations" title="Settings layout">
        <p className="text-muted-foreground mb-4">
          Switches work well in settings and preferences screens with
          descriptions.
        </p>
        <ExampleBlock
          title="Settings with descriptions"
          preview={
            <Card className="w-96">
              <CardHeader>
                <CardTitle>Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-sm">Notifications</p>
                    <p className="text-xs text-muted-foreground">
                      Receive email notifications
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-sm">Marketing emails</p>
                    <p className="text-xs text-muted-foreground">
                      Receive promotional offers
                    </p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-sm">Two-factor auth</p>
                    <p className="text-xs text-muted-foreground">
                      Enhanced security
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          }
          code={`<Card>
  <CardHeader>
    <CardTitle>Preferences</CardTitle>
  </CardHeader>
  <CardContent className="space-y-4">
    <div className="flex items-center justify-between">
      <div>
        <p className="font-medium">Notifications</p>
        <p className="text-sm text-muted-foreground">Receive email notifications</p>
      </div>
      <Switch defaultChecked />
    </div>
    {/* More settings... */}
  </CardContent>
</Card>`}
        />
      </ContentSection>

      <ContentSection id="usage" title="Usage guidelines">
        <DosDonts
          dos={[
            {
              description: "Use switches for immediate actions without saving",
              preview: (
                <div className="flex items-center space-x-2">
                  <Switch defaultChecked />
                  <Label>Dark mode (applies immediately)</Label>
                </div>
              ),
            },
            {
              description: "Label switches clearly with descriptive text",
              preview: (
                <div className="flex items-center space-x-2">
                  <Switch />
                  <Label>Enable two-factor authentication</Label>
                </div>
              ),
            },
            {
              description: "Use switches for binary yes/no or on/off choices",
              preview: (
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Switch defaultChecked />
                    <Label>WiFi enabled</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch />
                    <Label>Bluetooth enabled</Label>
                  </div>
                </div>
              ),
            },
          ]}
          donts={[
            {
              description: "Don't use switches when users need to save changes",
              preview: (
                <div className="flex items-center space-x-2">
                  <Switch />
                  <Label>Accept terms (save required)</Label>
                </div>
              ),
            },
            {
              description: "Don't use switches for multi-option selections",
              preview: (
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Switch />
                    <Label>Option A</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch />
                    <Label>Option B</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch />
                    <Label>Option C</Label>
                  </div>
                </div>
              ),
            },
          ]}
        />
      </ContentSection>

      <ContentSection id="echo-usage" title="Echo usage">
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Switches toggle key Echo platform features and display preferences without page reloads. QA managers use switches to enable auto-refresh on dashboards during live call analysis, toggle notifications for critical compliance risks, and show/hide columns in agent performance tables based on analysis focus.
          </p>
          <div className="space-y-2">
            <div className="border-l-2 border-primary pl-4 py-1">
              <p className="text-sm font-medium">Dashboard Features</p>
              <p className="text-sm text-muted-foreground">Enable auto-refresh for real-time metric updates, toggle notifications for compliance alerts</p>
            </div>
            <div className="border-l-2 border-primary pl-4 py-1">
              <p className="text-sm font-medium">Column Visibility</p>
              <p className="text-sm text-muted-foreground">Show/hide columns in agent performance tables (calls, adherence %, lowest step, tier)</p>
            </div>
            <div className="border-l-2 border-primary pl-4 py-1">
              <p className="text-sm font-medium">View Preferences</p>
              <p className="text-sm text-muted-foreground">Toggle between detailed and summary views, enable advanced filtering options</p>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection id="accessibility" title="Accessibility">
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>
            • Associate switches with labels using htmlFor and id attributes
          </li>
          <li>
            • Announce the switch role and current state to screen readers
          </li>
          <li>
            • Support keyboard navigation with Tab and Space keys
          </li>
          <li>
            • Use aria-label when visual labels are not available
          </li>
          <li>
            • Ensure sufficient color contrast and visible focus states
          </li>
        </ul>
      </ContentSection>

      <ContentSection id="api" title="API reference">
        <PropsTable
          props={[
            {
              name: "checked",
              type: "boolean",
              description: "The controlled checked state",
            },
            {
              name: "onCheckedChange",
              type: "(checked: boolean) => void",
              description: "Callback when the switch state changes",
            },
            {
              name: "disabled",
              type: "boolean",
              default: "false",
              description: "Disable the switch",
            },
            {
              name: "defaultChecked",
              type: "boolean",
              default: "false",
              description: "The initial checked state",
            },
            {
              name: "id",
              type: "string",
              description: "The unique identifier for label association",
            },
            {
              name: "aria-label",
              type: "string",
              description: "Accessible label for screen readers",
            },
          ]}
        />
      </ContentSection>
    </>
  )
}

/* ============================================
   TABS COMPONENT
   ============================================ */
function TabsDoc() {
  const [activeTab, setActiveTab] = useState("account")

  return (
    <>
      <ContentSection id="default" title="Default tabs">
        <p className="text-muted-foreground">
          Tabs organize content into separate views within the same context.
          They're ideal for grouping related information and reducing visual
          clutter on the page.
        </p>
        <ExampleBlock
          preview={
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
              </TabsList>
              <TabsContent value="account" className="space-y-4 pt-4">
                <p className="text-sm text-muted-foreground">
                  Manage your account settings and personal information.
                </p>
                <Button>Edit profile</Button>
              </TabsContent>
              <TabsContent value="security" className="space-y-4 pt-4">
                <p className="text-sm text-muted-foreground">
                  Update your security preferences and authentication methods.
                </p>
                <Button>Change password</Button>
              </TabsContent>
              <TabsContent value="notifications" className="space-y-4 pt-4">
                <p className="text-sm text-muted-foreground">
                  Control how you receive notifications.
                </p>
                <Button>Manage notifications</Button>
              </TabsContent>
            </Tabs>
          }
          code={`import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function Demo() {
  return (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <p>Manage your account settings...</p>
      </TabsContent>
      <TabsContent value="security">
        <p>Update security preferences...</p>
      </TabsContent>
      <TabsContent value="notifications">
        <p>Control notifications...</p>
      </TabsContent>
    </Tabs>
  )
}`}
        />
      </ContentSection>

      <ContentSection id="variants" title="Tab layouts">
        <p className="text-muted-foreground mb-4">
          Tabs can be arranged horizontally or vertically depending on space
          constraints and content organization.
        </p>
        <div className="space-y-4">
          <ExampleBlock
            title="Horizontal tabs"
            preview={
              <Tabs defaultValue="tab1">
                <TabsList>
                  <TabsTrigger value="tab1">Tab one</TabsTrigger>
                  <TabsTrigger value="tab2">Tab two</TabsTrigger>
                  <TabsTrigger value="tab3">Tab three</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" className="pt-4">
                  <p className="text-sm text-muted-foreground">
                    Content for tab one
                  </p>
                </TabsContent>
                <TabsContent value="tab2" className="pt-4">
                  <p className="text-sm text-muted-foreground">
                    Content for tab two
                  </p>
                </TabsContent>
                <TabsContent value="tab3" className="pt-4">
                  <p className="text-sm text-muted-foreground">
                    Content for tab three
                  </p>
                </TabsContent>
              </Tabs>
            }
            code={`<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab one</TabsTrigger>
    <TabsTrigger value="tab2">Tab two</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content one</TabsContent>
  <TabsContent value="tab2">Content two</TabsContent>
</Tabs>`}
          />
          <ExampleBlock
            title="Tabs with disabled state"
            preview={
              <Tabs defaultValue="enabled">
                <TabsList>
                  <TabsTrigger value="enabled">Enabled</TabsTrigger>
                  <TabsTrigger value="disabled" disabled>
                    Disabled
                  </TabsTrigger>
                  <TabsTrigger value="enabled2">Enabled</TabsTrigger>
                </TabsList>
                <TabsContent value="enabled" className="pt-4">
                  <p className="text-sm text-muted-foreground">
                    This tab is enabled
                  </p>
                </TabsContent>
                <TabsContent value="enabled2" className="pt-4">
                  <p className="text-sm text-muted-foreground">
                    This tab is also enabled
                  </p>
                </TabsContent>
              </Tabs>
            }
            code={`<Tabs defaultValue="enabled">
  <TabsList>
    <TabsTrigger value="enabled">Enabled</TabsTrigger>
    <TabsTrigger value="disabled" disabled>
      Disabled
    </TabsTrigger>
  </TabsList>
  <TabsContent value="enabled">Content</TabsContent>
</Tabs>`}
          />
        </div>
      </ContentSection>

      <ContentSection id="usage" title="Usage guidelines">
        <DosDonts
          dos={[
            {
              description: "Use tabs to organize related content within the same context",
              preview: (
                <Tabs defaultValue="overview">
                  <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="details">Details</TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview" className="pt-4">
                    <p className="text-sm text-muted-foreground">
                      Overview content
                    </p>
                  </TabsContent>
                  <TabsContent value="details" className="pt-4">
                    <p className="text-sm text-muted-foreground">
                      Detailed content
                    </p>
                  </TabsContent>
                </Tabs>
              ),
            },
            {
              description: "Use clear, concise tab labels",
              preview: (
                <Tabs defaultValue="files">
                  <TabsList>
                    <TabsTrigger value="files">Files</TabsTrigger>
                    <TabsTrigger value="history">History</TabsTrigger>
                  </TabsList>
                </Tabs>
              ),
            },
          ]}
          donts={[
            {
              description: "Don't use too many tabs; consider breaking content",
              preview: (
                <Tabs defaultValue="tab1">
                  <TabsList className="grid grid-cols-6 w-full">
                    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                    <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                    <TabsTrigger value="tab4">Tab 4</TabsTrigger>
                    <TabsTrigger value="tab5">Tab 5</TabsTrigger>
                    <TabsTrigger value="tab6">Tab 6</TabsTrigger>
                  </TabsList>
                </Tabs>
              ),
            },
            {
              description: "Don't use tabs for sequential navigation (use buttons instead)",
              preview: (
                <Tabs defaultValue="step1">
                  <TabsList>
                    <TabsTrigger value="step1">Step 1</TabsTrigger>
                    <TabsTrigger value="step2">Step 2</TabsTrigger>
                  </TabsList>
                </Tabs>
              ),
            },
          ]}
        />
      </ContentSection>

      <ContentSection id="echo-usage" title="Echo usage">
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Tabs organize Echo's multi-dimensional compliance data without overwhelming users. Queue management pages toggle between Chart and Table views, dashboard sections navigate between Overview/Agents/Steps/Trends, and report tabs switch between Summary, Detail, and Export views. Tabs keep related data grouped while supporting focused analysis workflows.
          </p>
          <div className="space-y-2">
            <div className="border-l-2 border-primary pl-4 py-1">
              <p className="text-sm font-medium">View Mode Toggle</p>
              <p className="text-sm text-muted-foreground">Switch between Chart and Table views on queue pages and trend analysis</p>
            </div>
            <div className="border-l-2 border-primary pl-4 py-1">
              <p className="text-sm font-medium">Section Navigation</p>
              <p className="text-sm text-muted-foreground">Navigate Overview/Agents/Steps/Trends sections on dashboards without page reloads</p>
            </div>
            <div className="border-l-2 border-primary pl-4 py-1">
              <p className="text-sm font-medium">Report Views</p>
              <p className="text-sm text-muted-foreground">Toggle between Summary, Detail, and Export tabs on adherence and compliance reports</p>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection id="accessibility" title="Accessibility">
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>
            • Use semantic HTML with proper ARIA roles (tablist, tab, tabpanel)
          </li>
          <li>
            • Support keyboard navigation (Arrow Keys to switch tabs, Home/End
            keys)
          </li>
          <li>
            • Announce the current tab and total number of tabs to screen
            readers
          </li>
          <li>
            • Ensure tab labels clearly describe the tab content
          </li>
          <li>
            • Maintain focus visibility and sufficient color contrast ratios
          </li>
        </ul>
      </ContentSection>

      <ContentSection id="api" title="API reference">
        <PropsTable
          props={[
            {
              name: "Tabs",
              type: "React.HTMLAttributes",
              description: "The root container component",
            },
            {
              name: "TabsList",
              type: "React.HTMLAttributes",
              description: "Container for all tab triggers",
            },
            {
              name: "TabsTrigger",
              type: "React.HTMLAttributes",
              description: "Individual tab button that switches content",
            },
            {
              name: "TabsContent",
              type: "React.HTMLAttributes",
              description: "The content panel for a tab",
            },
            {
              name: "value",
              type: "string",
              description: "The value identifying the active tab",
            },
            {
              name: "onValueChange",
              type: "(value: string) => void",
              description: "Callback when the active tab changes",
            },
            {
              name: "defaultValue",
              type: "string",
              description: "The initial active tab value",
            },
            {
              name: "disabled",
              type: "boolean",
              default: "false",
              description: "Disable a specific tab trigger",
            },
          ]}
        />
      </ContentSection>
    </>
  )
}

/* ============================================
   TOOLTIP COMPONENT
   ============================================ */
function TooltipDoc() {
  return (
    <>
      <ContentSection id="default" title="Default tooltip">
        <p className="text-muted-foreground">
          Tooltips provide contextual information when users hover over or
          focus on an element. They're ideal for clarifying actions, icons, and
          abbreviations without cluttering the interface.
        </p>
        <ExampleBlock
          preview={
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Hover me</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>This is a helpful tooltip message</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          }
          code={`import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function Demo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This is a helpful tooltip</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}`}
        />
      </ContentSection>

      <ContentSection id="variants" title="Tooltip positions">
        <p className="text-muted-foreground mb-4">
          Tooltips can be positioned around their trigger element to avoid
          overlapping content.
        </p>
        <div className="space-y-4">
          <ExampleBlock
            title="Top position"
            preview={
              <TooltipProvider>
                <div className="flex justify-center pt-8">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline">Top</Button>
                    </TooltipTrigger>
                    <TooltipContent side="top">
                      <p>Tooltip on top</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </TooltipProvider>
            }
            code={`<TooltipContent side="top">
  <p>Tooltip on top</p>
</TooltipContent>`}
          />
          <ExampleBlock
            title="Bottom position"
            preview={
              <TooltipProvider>
                <div className="flex justify-center">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline">Bottom</Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>Tooltip on bottom</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </TooltipProvider>
            }
            code={`<TooltipContent side="bottom">
  <p>Tooltip on bottom</p>
</TooltipContent>`}
          />
          <ExampleBlock
            title="Left position"
            preview={
              <TooltipProvider>
                <div className="flex justify-center px-8">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline">Left</Button>
                    </TooltipTrigger>
                    <TooltipContent side="left">
                      <p>Tooltip on left</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </TooltipProvider>
            }
            code={`<TooltipContent side="left">
  <p>Tooltip on left</p>
</TooltipContent>`}
          />
          <ExampleBlock
            title="Right position"
            preview={
              <TooltipProvider>
                <div className="flex justify-center px-8">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline">Right</Button>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      <p>Tooltip on right</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </TooltipProvider>
            }
            code={`<TooltipContent side="right">
  <p>Tooltip on right</p>
</TooltipContent>`}
          />
        </div>
      </ContentSection>

      <ContentSection id="combinations" title="Tooltip use cases">
        <p className="text-muted-foreground mb-4">
          Tooltips work well with icons, abbreviations, and actions.
        </p>
        <ExampleBlock
          title="With icon buttons"
          preview={
            <TooltipProvider>
              <div className="flex gap-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="icon" variant="outline">
                      💾
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Save (Ctrl+S)</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="icon" variant="outline">
                      🗑️
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Delete item</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="icon" variant="outline">
                      ⚙️
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Settings</TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          }
          code={`<TooltipProvider>
  <div className="flex gap-2">
    <Tooltip>
      <TooltipTrigger asChild>
        <Button size="icon" variant="outline">💾</Button>
      </TooltipTrigger>
      <TooltipContent>Save (Ctrl+S)</TooltipContent>
    </Tooltip>
  </div>
</TooltipProvider>`}
        />
      </ContentSection>

      <ContentSection id="usage" title="Usage guidelines">
        <DosDonts
          dos={[
            {
              description: "Use tooltips to clarify icon meanings and keyboard shortcuts",
              preview: (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button size="icon" variant="outline">
                        ?
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Help (F1)</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ),
            },
            {
              description: "Use concise, helpful tooltip text",
              preview: (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span>API</span>
                    </TooltipTrigger>
                    <TooltipContent>Application Programming Interface</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ),
            },
          ]}
          donts={[
            {
              description: "Don't use tooltips for critical information users must see",
              preview: (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="destructive">Delete</Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      This action cannot be undone
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ),
            },
            {
              description: "Don't use tooltips on touch devices (use long press)",
              preview: (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>Mobile tooltip</TooltipTrigger>
                    <TooltipContent>This won't work on touch</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ),
            },
          ]}
        />
      </ContentSection>

      <ContentSection id="echo-usage" title="Echo usage">
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Tooltips reduce cognitive load by clarifying Echo's specialized compliance terminology and metrics on hover. Tooltips explain adherence score thresholds (green/yellow/red) without interrupting analysis flow, reveal full SOP step names when truncated in dense tables, and display last-updated timestamps on dashboard KPIs. This approach keeps interfaces clean while enabling deep dives.
          </p>
          <div className="space-y-2">
            <div className="border-l-2 border-primary pl-4 py-1">
              <p className="text-sm font-medium">Metric Explanations</p>
              <p className="text-sm text-muted-foreground">Explain adherence %, call coverage, and QA efficiency thresholds on hover</p>
            </div>
            <div className="border-l-2 border-primary pl-4 py-1">
              <p className="text-sm font-medium">Truncated Content</p>
              <p className="text-sm text-muted-foreground">Display full SOP step names and agent names when truncated in performance tables</p>
            </div>
            <div className="border-l-2 border-primary pl-4 py-1">
              <p className="text-sm font-medium">Data Freshness</p>
              <p className="text-sm text-muted-foreground">Show last-updated timestamps and data refresh status on dashboard KPI cards</p>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection id="accessibility" title="Accessibility">
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>
            • Provide tooltips with aria-describedby pointing to unique IDs
          </li>
          <li>
            • Support both hover (mouse) and focus (keyboard) to reveal
            tooltips
          </li>
          <li>
            • Keep tooltip text concise and under 150 characters
          </li>
          <li>
            • Ensure tooltips don't obstruct other important content
          </li>
          <li>
            • Use proper color contrast for tooltip background and text
          </li>
          <li>
            • Dismiss tooltips when users move away or press Escape
          </li>
        </ul>
      </ContentSection>

      <ContentSection id="api" title="API reference">
        <PropsTable
          props={[
            {
              name: "TooltipProvider",
              type: "React.Provider",
              description: "Wrapper component required for tooltip functionality",
            },
            {
              name: "Tooltip",
              type: "React.HTMLAttributes",
              description: "Container for tooltip trigger and content",
            },
            {
              name: "TooltipTrigger",
              type: "React.HTMLAttributes",
              description: "The element that triggers the tooltip on hover/focus",
            },
            {
              name: "TooltipContent",
              type: "React.HTMLAttributes",
              description: "The tooltip content that appears on trigger",
            },
            {
              name: "side",
              type: '"top" | "right" | "bottom" | "left"',
              default: '"top"',
              description: "Position of the tooltip relative to trigger",
            },
            {
              name: "asChild",
              type: "boolean",
              default: "false",
              description: "Render as a child element (useful for button wrapping)",
            },
          ]}
        />
      </ContentSection>
    </>
  )
}

/* ============================================
   DIALOG COMPONENT
   ============================================ */
function DialogDoc() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <ContentSection id="default" title="Default dialog">
        <p className="text-muted-foreground">
          Dialogs are modal windows that focus user attention on a specific
          task or confirmation. They interrupt the main workflow and require
          user action to dismiss.
        </p>
        <ExampleBlock
          preview={
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button>Open dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. Please confirm before
                    proceeding.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex gap-2 justify-end">
                  <Button
                    variant="outline"
                    onClick={() => setIsOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button onClick={() => setIsOpen(false)}>Confirm</Button>
                </div>
              </DialogContent>
            </Dialog>
          }
          code={`import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export function Demo() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>Open dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>This action cannot be undone.</DialogDescription>
        </DialogHeader>
        <div className="flex gap-2 justify-end">
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setIsOpen(false)}>Confirm</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}`}
        />
      </ContentSection>

      <ContentSection id="variants" title="Dialog types">
        <p className="text-muted-foreground mb-4">
          Dialogs can be used for confirmations, forms, alerts, and more.
        </p>
        <div className="space-y-4">
          <ExampleBlock
            title="Confirmation dialog"
            preview={
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="destructive">Delete item</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Delete item?</DialogTitle>
                    <DialogDescription>
                      This will permanently delete the item. This action cannot
                      be undone.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex gap-2 justify-end">
                    <DialogTrigger asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogTrigger>
                    <Button variant="destructive">Delete</Button>
                  </div>
                </DialogContent>
              </Dialog>
            }
            code={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="destructive">Delete item</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Delete item?</DialogTitle>
      <DialogDescription>This cannot be undone.</DialogDescription>
    </DialogHeader>
    <div className="flex gap-2 justify-end">
      <DialogTrigger asChild>
        <Button variant="outline">Cancel</Button>
      </DialogTrigger>
      <Button variant="destructive">Delete</Button>
    </div>
  </DialogContent>
</Dialog>`}
          />
          <ExampleBlock
            title="Form dialog"
            preview={
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Create account</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Create account</DialogTitle>
                    <DialogDescription>
                      Fill in the information below to create a new account.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" />
                    </div>
                    <div className="flex gap-2 justify-end">
                      <DialogTrigger asChild>
                        <Button variant="outline">Cancel</Button>
                      </DialogTrigger>
                      <Button>Create account</Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            }
            code={`<Dialog>
  <DialogTrigger asChild>
    <Button>Create account</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Create account</DialogTitle>
      <DialogDescription>Fill in your details below.</DialogDescription>
    </DialogHeader>
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="you@example.com" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" />
      </div>
      <div className="flex gap-2 justify-end">
        <DialogTrigger asChild>
          <Button variant="outline">Cancel</Button>
        </DialogTrigger>
        <Button>Create account</Button>
      </div>
    </div>
  </DialogContent>
</Dialog>`}
          />
          <ExampleBlock
            title="Alert dialog"
            preview={
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">
                    <AlertCircle className="mr-2 h-4 w-4" />
                    Show alert
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Important notice</DialogTitle>
                    <DialogDescription>
                      Your session will expire in 5 minutes due to inactivity.
                      Click below to extend your session.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex gap-2 justify-end">
                    <Button variant="outline">Not now</Button>
                    <Button>Extend session</Button>
                  </div>
                </DialogContent>
              </Dialog>
            }
            code={`<Dialog>
  <DialogTrigger asChild>
    <Button>Show alert</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Important notice</DialogTitle>
      <DialogDescription>Your session expires in 5 minutes.</DialogDescription>
    </DialogHeader>
    <div className="flex gap-2 justify-end">
      <Button variant="outline">Not now</Button>
      <Button>Extend session</Button>
    </div>
  </DialogContent>
</Dialog>`}
          />
        </div>
      </ContentSection>

      <ContentSection id="usage" title="Usage guidelines">
        <DosDonts
          dos={[
            {
              description: "Use dialogs for important confirmations and critical information",
              preview: (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="destructive">Destructive action</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Confirm action</DialogTitle>
                      <DialogDescription>
                        This cannot be reversed
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              ),
            },
            {
              description: "Use clear, descriptive titles and descriptions",
              preview: (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Dialog</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        Save changes before closing?
                      </DialogTitle>
                      <DialogDescription>
                        You have unsaved changes that will be lost.
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              ),
            },
          ]}
          donts={[
            {
              description: "Don't use dialogs for non-critical information (use alerts instead)",
              preview: (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Show message</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>File saved successfully</DialogTitle>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              ),
            },
            {
              description: "Don't nest dialogs within dialogs",
              preview: <p className="text-sm text-muted-foreground">Avoid dialog nesting</p>,
            },
          ]}
        />
      </ContentSection>

      <ContentSection id="echo-usage" title="Echo usage">
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Dialogs provide focused, interruption-free workflows for critical Echo actions requiring confirmation or detailed input. QA managers confirm SOP configuration changes before applying to live workflows, view full call transcripts with adherence annotations, and confirm bulk actions on agent lists. Dialogs ensure high-risk operations cannot be missed or reversed accidentally.
          </p>
          <div className="space-y-2">
            <div className="border-l-2 border-primary pl-4 py-1">
              <p className="text-sm font-medium">Confirmation Dialogs</p>
              <p className="text-sm text-muted-foreground">Confirm SOP configuration changes, bulk coaching actions, and data exports</p>
            </div>
            <div className="border-l-2 border-primary pl-4 py-1">
              <p className="text-sm font-medium">Transcript Viewer</p>
              <p className="text-sm text-muted-foreground">Display full call transcripts with step-by-step adherence annotations and timestamps</p>
            </div>
            <div className="border-l-2 border-primary pl-4 py-1">
              <p className="text-sm font-medium">Export Workflow</p>
              <p className="text-sm text-muted-foreground">Confirm report export parameters before generating compliance datasets</p>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection id="accessibility" title="Accessibility">
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>
            • Use semantic HTML (dialog element or ARIA role="dialog")
          </li>
          <li>
            • Provide a clear, descriptive title that announces the dialog
            purpose
          </li>
          <li>
            • Focus should move to the dialog when opened
          </li>
          <li>
            • Support closing with Escape key
          </li>
          <li>
            • Trap keyboard focus within the dialog (prevent tabbing outside)
          </li>
          <li>
            • Announce dialog to screen readers as a modal or alert
          </li>
        </ul>
      </ContentSection>

      <ContentSection id="api" title="API reference">
        <PropsTable
          props={[
            {
              name: "Dialog",
              type: "React.HTMLAttributes",
              description: "The root container for dialog",
            },
            {
              name: "DialogTrigger",
              type: "React.HTMLAttributes",
              description: "The element that opens the dialog",
            },
            {
              name: "DialogContent",
              type: "React.HTMLAttributes",
              description: "The modal content container",
            },
            {
              name: "DialogHeader",
              type: "React.HTMLAttributes",
              description: "Container for title and description",
            },
            {
              name: "DialogTitle",
              type: "React.HTMLAttributes",
              description: "The dialog title",
            },
            {
              name: "DialogDescription",
              type: "React.HTMLAttributes",
              description: "The dialog description or subtitle",
            },
            {
              name: "open",
              type: "boolean",
              description: "The controlled open state of the dialog",
            },
            {
              name: "onOpenChange",
              type: "(open: boolean) => void",
              description: "Callback when dialog open state changes",
            },
          ]}
        />
      </ContentSection>
    </>
  )
}

/* ============================================
   ALERT COMPONENT (styled card-based alert)
   ============================================ */
function AlertDoc() {
  return (
    <>
      <ContentSection id="default" title="Default alert">
        <p className="text-muted-foreground">
          Alerts display important messages, warnings, errors, and success
          confirmations. They help users understand the outcome of their
          actions and provide guidance.
        </p>
        <ExampleBlock
          preview={
            <div className="border border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950 rounded-lg p-4 flex gap-3">
              <div className="text-blue-600 dark:text-blue-400 shrink-0 mt-0.5">
                ℹ️
              </div>
              <div>
                <h3 className="font-semibold text-sm text-blue-900 dark:text-blue-100">
                  Heads up!
                </h3>
                <p className="text-sm text-blue-800 dark:text-blue-200 mt-1">
                  This is an informational alert message.
                </p>
              </div>
            </div>
          }
          code={`<div className="border border-blue-200 bg-blue-50 rounded-lg p-4 flex gap-3">
  <div className="text-blue-600 shrink-0">ℹ️</div>
  <div>
    <h3 className="font-semibold text-sm">Heads up!</h3>
    <p className="text-sm text-blue-800 mt-1">This is an informational alert.</p>
  </div>
</div>`}
        />
      </ContentSection>

      <ContentSection id="variants" title="Alert variants">
        <p className="text-muted-foreground mb-4">
          Use different alert variants to convey the type and severity of
          information.
        </p>
        <div className="space-y-4">
          <ExampleBlock
            title="Success alert"
            preview={
              <div className="border border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950 rounded-lg p-4 flex gap-3">
                <div className="text-green-600 dark:text-green-400 shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-green-900 dark:text-green-100">
                    Success!
                  </h3>
                  <p className="text-sm text-green-800 dark:text-green-200 mt-1">
                    Your changes have been saved successfully.
                  </p>
                </div>
              </div>
            }
            code={`<div className="border border-green-200 bg-green-50 rounded-lg p-4 flex gap-3">
  <div className="text-green-600 shrink-0">✓</div>
  <div>
    <h3 className="font-semibold text-sm">Success!</h3>
    <p className="text-sm mt-1">Your changes have been saved.</p>
  </div>
</div>`}
          />
          <ExampleBlock
            title="Warning alert"
            preview={
              <div className="border border-yellow-200 bg-yellow-50 dark:border-yellow-900 dark:bg-yellow-950 rounded-lg p-4 flex gap-3">
                <div className="text-yellow-600 dark:text-yellow-400 shrink-0 mt-0.5">
                  ⚠️
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-yellow-900 dark:text-yellow-100">
                    Warning
                  </h3>
                  <p className="text-sm text-yellow-800 dark:text-yellow-200 mt-1">
                    This action requires caution. Please review before
                    proceeding.
                  </p>
                </div>
              </div>
            }
            code={`<div className="border border-yellow-200 bg-yellow-50 rounded-lg p-4 flex gap-3">
  <div className="text-yellow-600 shrink-0">⚠️</div>
  <div>
    <h3 className="font-semibold text-sm">Warning</h3>
    <p className="text-sm mt-1">Please review before proceeding.</p>
  </div>
</div>`}
          />
          <ExampleBlock
            title="Error alert"
            preview={
              <div className="border border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950 rounded-lg p-4 flex gap-3">
                <div className="text-red-600 dark:text-red-400 shrink-0 mt-0.5">
                  ✕
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-red-900 dark:text-red-100">
                    Error
                  </h3>
                  <p className="text-sm text-red-800 dark:text-red-200 mt-1">
                    Something went wrong. Please try again later.
                  </p>
                </div>
              </div>
            }
            code={`<div className="border border-red-200 bg-red-50 rounded-lg p-4 flex gap-3">
  <div className="text-red-600 shrink-0">✕</div>
  <div>
    <h3 className="font-semibold text-sm">Error</h3>
    <p className="text-sm mt-1">Something went wrong.</p>
  </div>
</div>`}
          />
          <ExampleBlock
            title="Destructive alert"
            preview={
              <div className="border border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950 rounded-lg p-4 flex gap-3">
                <div className="text-red-600 dark:text-red-400 shrink-0 mt-0.5">
                  <AlertCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-red-900 dark:text-red-100">
                    Danger zone
                  </h3>
                  <p className="text-sm text-red-800 dark:text-red-200 mt-1">
                    This action will permanently delete your account and cannot
                    be reversed.
                  </p>
                </div>
              </div>
            }
            code={`<div className="border border-red-200 bg-red-50 rounded-lg p-4 flex gap-3">
  <AlertCircle className="h-5 w-5 text-red-600" />
  <div>
    <h3 className="font-semibold text-sm">Danger zone</h3>
    <p className="text-sm mt-1">This action cannot be reversed.</p>
  </div>
</div>`}
          />
        </div>
      </ContentSection>

      <ContentSection id="combinations" title="Alerts in context">
        <p className="text-muted-foreground mb-4">
          Alerts work best when positioned prominently in forms and workflows.
        </p>
        <ExampleBlock
          title="Alert in form"
          preview={
            <Card className="w-96">
              <CardHeader>
                <CardTitle>Update password</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border border-yellow-200 bg-yellow-50 dark:border-yellow-900 dark:bg-yellow-950 rounded-lg p-3 flex gap-2">
                  <div className="text-yellow-600 dark:text-yellow-400 shrink-0">
                    ⚠️
                  </div>
                  <p className="text-sm text-yellow-800 dark:text-yellow-200">
                    Your password will expire in 7 days
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="current">Current password</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new">New password</Label>
                  <Input id="new" type="password" />
                </div>
                <Button className="w-full">Update password</Button>
              </CardContent>
            </Card>
          }
          code={`<Card>
  <CardHeader>
    <CardTitle>Update password</CardTitle>
  </CardHeader>
  <CardContent className="space-y-4">
    <div className="border border-yellow-200 bg-yellow-50 rounded-lg p-3">
      <p className="text-sm">Your password will expire in 7 days</p>
    </div>
    {/* Form fields... */}
  </CardContent>
</Card>`}
        />
      </ContentSection>

      <ContentSection id="usage" title="Usage guidelines">
        <DosDonts
          dos={[
            {
              description: "Use alerts for important messages that require attention",
              preview: (
                <div className="border border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950 rounded-lg p-4 flex gap-3">
                  <div className="text-blue-600 dark:text-blue-400">ℹ️</div>
                  <div>
                    <h3 className="font-semibold text-sm">Note</h3>
                    <p className="text-sm mt-1">
                      This is important information
                    </p>
                  </div>
                </div>
              ),
            },
            {
              description: "Use appropriate icons and colors for each variant",
              preview: (
                <div className="space-y-2">
                  <div className="border border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950 rounded-lg p-3 flex gap-2">
                    <div className="text-green-600">✓</div>
                    <p className="text-sm">Success message</p>
                  </div>
                  <div className="border border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950 rounded-lg p-3 flex gap-2">
                    <div className="text-red-600">✕</div>
                    <p className="text-sm">Error message</p>
                  </div>
                </div>
              ),
            },
          ]}
          donts={[
            {
              description: "Don't use alerts for temporary notifications (use toast instead)",
              preview: (
                <div className="border border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950 rounded-lg p-4">
                  <p className="text-sm">Temporary notification</p>
                </div>
              ),
            },
            {
              description: "Don't overuse alerts; prioritize important messages",
              preview: (
                <div className="space-y-2">
                  <div className="border border-yellow-200 bg-yellow-50 dark:border-yellow-900 dark:bg-yellow-950 rounded-lg p-3">
                    <p className="text-sm">Alert 1</p>
                  </div>
                  <div className="border border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950 rounded-lg p-3">
                    <p className="text-sm">Alert 2</p>
                  </div>
                  <div className="border border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950 rounded-lg p-3">
                    <p className="text-sm">Alert 3</p>
                  </div>
                </div>
              ),
            },
          ]}
        />
      </ContentSection>

      <ContentSection id="echo-usage" title="Echo usage">
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Alerts keep users informed of critical Echo events and status changes without requiring action. Compliance risk notifications flag adherence shortfalls or deviation patterns that require investigation, while system status alerts confirm data processing completion or integration errors. Strategic alert placement ensures compliance officers and team leads stay aligned on platform health.
          </p>
          <div className="space-y-2">
            <div className="border-l-2 border-primary pl-4 py-1">
              <p className="text-sm font-medium">Compliance Risks</p>
              <p className="text-sm text-muted-foreground">Notify of adherence shortfalls, repeated violations, and flagged coaching opportunities</p>
            </div>
            <div className="border-l-2 border-primary pl-4 py-1">
              <p className="text-sm font-medium">System Status</p>
              <p className="text-sm text-muted-foreground">Inform of data processing completion, integration errors, and platform maintenance</p>
            </div>
            <div className="border-l-2 border-primary pl-4 py-1">
              <p className="text-sm font-medium">Deviation Warnings</p>
              <p className="text-sm text-muted-foreground">Alert when SOP adherence falls below thresholds or trends worsen significantly</p>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection id="accessibility" title="Accessibility">
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>
            • Use semantic HTML roles (alert, status, or region)
          </li>
          <li>
            • Ensure color is not the only way to convey alert type
          </li>
          <li>
            • Use aria-label or aria-live regions for dynamic alerts
          </li>
          <li>
            • Maintain sufficient color contrast ratios (minimum 4.5:1)
          </li>
          <li>
            • Include icon + text to convey the alert meaning
          </li>
          <li>
            • Place alerts where they're visible without scrolling
          </li>
        </ul>
      </ContentSection>

      <ContentSection id="api" title="Alert patterns">
        <PropsTable
          props={[
            {
              name: "role",
              type: '"alert" | "status"',
              default: '"alert"',
              description: "ARIA role for screen reader announcement",
            },
            {
              name: "variant",
              type: '"default" | "success" | "warning" | "error" | "destructive"',
              default: '"default"',
              description: "Visual style matching the alert type",
            },
            {
              name: "icon",
              type: "React.ReactNode",
              description: "Icon element to indicate alert type",
            },
            {
              name: "title",
              type: "string",
              description: "Short title describing the alert",
            },
            {
              name: "description",
              type: "string",
              description: "Detailed message explaining the alert",
            },
          ]}
        />
      </ContentSection>
    </>
  )
}

/* ============================================
   EXPORT BATCH RECORD
   ============================================ */

const batch1: Record<
  string,
  { title: string; description: string; component: React.ReactNode }
> = {
  button: {
    title: "Button",
    description: "A clickable element used to trigger actions, form submissions, and navigation. Supports multiple variants and sizes.",
    component: <ButtonDoc />,
  },
  badge: {
    title: "Badge",
    description: "A small label for counts, status indicators, and tags. Compact and ideal for inline highlighting.",
    component: <BadgeDoc />,
  },
  card: {
    title: "Card",
    description: "A container component that groups related content and actions. Provides visual hierarchy and focus.",
    component: <CardDoc />,
  },
  checkbox: {
    title: "Checkbox",
    description: "An input control for binary selections and independent options. Users can select one or multiple items.",
    component: <CheckboxDoc />,
  },
  input: {
    title: "Input",
    description: "A form field for capturing text and data. Supports multiple types and validation states.",
    component: <InputDoc />,
  },
  switch: {
    title: "Switch",
    description: "A toggle control for enabling or disabling features. Ideal for settings and preferences.",
    component: <SwitchDoc />,
  },
  tabs: {
    title: "Tabs",
    description: "Organize content into separate views within the same context. Reduces visual clutter effectively.",
    component: <TabsDoc />,
  },
  tooltip: {
    title: "Tooltip",
    description: "Contextual information displayed on hover or focus. Clarifies actions, icons, and abbreviations.",
    component: <TooltipDoc />,
  },
  dialog: {
    title: "Dialog",
    description: "A modal window that focuses user attention on specific tasks. Interrupts workflow for important confirmations.",
    component: <DialogDoc />,
  },
  alert: {
    title: "Alert",
    description: "Displays important messages, warnings, errors, and confirmations. Guides users about action outcomes.",
    component: <AlertDoc />,
  },
}

export default batch1
