"use client"

import React, { useState } from "react"
import { ContentSection, ExampleBlock, DosDonts, PropsTable } from "@/components/doc-components"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, ChevronDown, Loader } from "lucide-react"

/* ============================================
   ACCORDION DOCS
   ============================================ */

function AccordionDocs() {
  return (
    <>
      <ContentSection id="accordion-default" title="Default Example">
        <ExampleBlock
          title="Basic Accordion"
          description="Single selection accordion with default value"
          preview={
            <div className="w-full max-w-md">
              <Accordion type="single" collapsible defaultValue="item-1">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is React?</AccordionTrigger>
                  <AccordionContent>
                    React is a JavaScript library for building user interfaces with reusable components and efficient rendering through a virtual DOM.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How does state management work?</AccordionTrigger>
                  <AccordionContent>
                    State is managed using hooks like useState and useContext, allowing components to maintain and share data throughout their lifecycle.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>What are React Hooks?</AccordionTrigger>
                  <AccordionContent>
                    Hooks are functions that let you use state and other React features in functional components, such as useState, useEffect, and useContext.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          }
          code={`import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function AccordionExample() {
  return (
    <Accordion type="single" collapsible defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is React?</AccordionTrigger>
        <AccordionContent>
          React is a JavaScript library for building user interfaces...
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How does state management work?</AccordionTrigger>
        <AccordionContent>
          State is managed using hooks like useState and useContext...
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}`}
        />
      </ContentSection>

      <ContentSection id="accordion-variants" title="Variants">
        <ExampleBlock
          title="Multiple Selection"
          description="Allow multiple accordion items open simultaneously"
          preview={
            <div className="w-full max-w-md">
              <Accordion type="multiple">
                <AccordionItem value="feature-1">
                  <AccordionTrigger>Performance Optimized</AccordionTrigger>
                  <AccordionContent>
                    React uses virtual DOM and diffing algorithms to minimize real DOM updates, improving application performance significantly.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="feature-2">
                  <AccordionTrigger>Developer Experience</AccordionTrigger>
                  <AccordionContent>
                    Modern tooling and hot module reloading enable faster development cycles and easier debugging with helpful error messages.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          }
          code={`<Accordion type="multiple">
  <AccordionItem value="feature-1">
    <AccordionTrigger>Performance Optimized</AccordionTrigger>
    <AccordionContent>
      React uses virtual DOM and diffing algorithms...
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
        />
      </ContentSection>

      <ContentSection id="accordion-usage" title="Usage Guidelines">
        <DosDonts
          dos={[
            { description: "Use for FAQs and frequently asked questions" }, { description: "Keep titles concise and descriptive" }, { description: "Use single selection for mutually exclusive content" }, { description: "Provide clear visual hierarchy" }, { description: "Ensure sufficient spacing between items" }]}
          donts={[
            { description: "Don't nest accordions too deeply" }, { description: "Avoid vague or ambiguous titles" }, { description: "Don't use for linear, sequential content" }, { description: "Avoid overly long content blocks" }, { description: "Don't hide critical information by default" }]}
        />
      </ContentSection>

      <ContentSection id="accordion-accessibility" title="Accessibility">
        <div className="space-y-4">
          <p className="text-muted-foreground">
            The Accordion component includes built-in accessibility features:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>ARIA roles and attributes automatically applied</li>
            <li>Keyboard navigation: Tab to focus, Space/Enter to toggle, Arrow keys to navigate</li>
            <li>Screen reader support for expanded/collapsed state</li>
            <li>Focus management within accordion items</li>
            <li>Semantic HTML structure with proper heading hierarchy</li>
          </ul>
        </div>
      </ContentSection>

      <ContentSection id="accordion-api" title="API Reference">
        <PropsTable props={[
            {
              name: "Accordion",
              props: [
                { name: "type", type: "'single' | 'multiple'", description: "Allow one or multiple items open" },
                { name: "collapsible", type: "boolean", description: "Allow closing all items when type='single'" },
                { name: "defaultValue", type: "string | string[]", description: "Default open item(s)" },
                { name: "value", type: "string | string[]", description: "Controlled open item(s)" },
                { name: "onValueChange", type: "function", description: "Callback when value changes" }
              ]
            },
            {
              name: "AccordionItem",
              props: [
                { name: "value", type: "string", description: "Unique identifier for the item" },
                { name: "disabled", type: "boolean", description: "Disable this accordion item" }
              ]
            },
            {
              name: "AccordionTrigger",
              props: [
                { name: "children", type: "React.ReactNode", description: "Trigger label content" }
              ]
            },
            {
              name: "AccordionContent",
              props: [
                { name: "children", type: "React.ReactNode", description: "Accordion body content" }
              ]
            }
          ]} />
      </ContentSection>
    </>
  )
}

/* ============================================
   AVATAR DOCS
   ============================================ */

function AvatarDocs() {
  return (
    <>
      <ContentSection id="avatar-default" title="Default Example">
        <ExampleBlock
          title="Avatar with Image"
          description="Avatar displaying user image with fallback"
          preview={
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alice" alt="Alice" />
                <AvatarFallback>AL</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <p className="font-semibold">Alice Johnson</p>
                <p className="text-sm text-muted-foreground">Product Designer</p>
              </div>
            </div>
          }
          code={`import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AvatarExample() {
  return (
    <Avatar>
      <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alice" />
      <AvatarFallback>AL</AvatarFallback>
    </Avatar>
  )
}`}
        />
      </ContentSection>

      <ContentSection id="avatar-variants" title="Variants">
        <ExampleBlock
          title="Avatar Fallbacks"
          description="Various fallback styles when image fails to load"
          preview={
            <div className="flex items-center gap-8">
              <div className="flex flex-col items-center gap-2">
                <Avatar>
                  <AvatarImage src="" alt="No Image" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <p className="text-xs text-muted-foreground">Initials</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Avatar>
                  <AvatarImage src="" alt="No Image" />
                  <AvatarFallback>👤</AvatarFallback>
                </Avatar>
                <p className="text-xs text-muted-foreground">Icon</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Avatar>
                  <AvatarImage src="" alt="No Image" />
                  <AvatarFallback>User</AvatarFallback>
                </Avatar>
                <p className="text-xs text-muted-foreground">Text</p>
              </div>
            </div>
          }
          code={`<div className="flex gap-4">
  <Avatar>
    <AvatarImage src="" />
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarImage src="" />
    <AvatarFallback>👤</AvatarFallback>
  </Avatar>
</div>`}
        />

        <ExampleBlock
          title="Avatar Groups"
          description="Multiple avatars displayed together for team contexts"
          preview={
            <div className="flex items-center gap-1">
              {["Alice", "Bob", "Carol", "David"].map((name, idx) => (
                <div key={idx} className="relative z-10" style={{ marginLeft: idx > 0 ? "-12px" : "0" }}>
                  <Avatar>
                    <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`} alt={name} />
                    <AvatarFallback>{name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                </div>
              ))}
              <span className="ml-2 text-sm text-muted-foreground">+4 more</span>
            </div>
          }
          code={`<div className="flex items-center gap-1">
  {users.map((user, idx) => (
    <Avatar key={idx} className="-ml-3">
      <AvatarImage src={user.avatar} />
      <AvatarFallback>{user.initials}</AvatarFallback>
    </Avatar>
  ))}
</div>`}
        />
      </ContentSection>

      <ContentSection id="avatar-usage" title="Usage Guidelines">
        <DosDonts
          dos={[
            { description: "Use initials as fallback for professional contexts" }, { description: "Always provide alt text for accessibility" }, { description: "Keep avatar sizes consistent within a context" }, { description: "Use for user identification in lists and profiles" }, { description: "Ensure fallback is always readable" }]}
          donts={[
            { description: "Don't use avatars for non-user entities without clear context" }, { description: "Avoid overly large avatar sizes for inline usage" }, { description: "Don't forget to load images from secure sources" }, { description: "Avoid placeholder text in fallbacks" }, { description: "Don't skip alt text even for fallbacks" }]}
        />
      </ContentSection>

      <ContentSection id="avatar-accessibility" title="Accessibility">
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Avatar components prioritize accessible presentation:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Images include alt attributes describing the user</li>
            <li>Fallback text is always visible and readable</li>
            <li>Sufficient color contrast between text and background</li>
            <li>Circular shape recognizable across different sizes</li>
            <li>Can be paired with visible labels and names</li>
          </ul>
        </div>
      </ContentSection>

      <ContentSection id="avatar-api" title="API Reference">
        <PropsTable props={[
            {
              name: "Avatar",
              props: [
                { name: "className", type: "string", description: "CSS class for styling" },
                { name: "children", type: "React.ReactNode", description: "AvatarImage and AvatarFallback" }
              ]
            },
            {
              name: "AvatarImage",
              props: [
                { name: "src", type: "string", description: "Image source URL" },
                { name: "alt", type: "string", description: "Alt text for accessibility" }
              ]
            },
            {
              name: "AvatarFallback",
              props: [
                { name: "children", type: "React.ReactNode", description: "Fallback content (initials, emoji, etc.)" }
              ]
            }
          ]} />
      </ContentSection>
    </>
  )
}

/* ============================================
   COLLAPSIBLE DOCS
   ============================================ */

function CollapsibleDocs() {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpen2, setIsOpen2] = useState(true)

  return (
    <>
      <ContentSection id="collapsible-default" title="Default Example">
        <ExampleBlock
          title="Basic Collapsible"
          description="Expandable content section with toggle control"
          preview={
            <div className="w-full max-w-md">
              <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Advanced Settings</h3>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent className="space-y-3 pt-4">
                  <div className="space-y-2">
                    <Label>Enable notifications</Label>
                    <Checkbox id="notif" defaultChecked />
                  </div>
                  <div className="space-y-2">
                    <Label>API Key</Label>
                    <input type="password" className="w-full px-3 py-2 border rounded-md" placeholder="••••••••" />
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          }
          code={`import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export function CollapsibleExample() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger>Advanced Settings</CollapsibleTrigger>
      <CollapsibleContent>
        <div>Configuration options...</div>
      </CollapsibleContent>
    </Collapsible>
  )
}`}
        />
      </ContentSection>

      <ContentSection id="collapsible-variants" title="Variants">
        <ExampleBlock
          title="Controlled Collapsible"
          description="Collapsible with pre-opened state"
          preview={
            <div className="w-full max-w-md space-y-4">
              <Collapsible open={isOpen2} onOpenChange={setIsOpen2}>
                <div className="flex items-center justify-between bg-muted p-3 rounded-lg">
                  <h3 className="font-semibold text-sm">System Requirements</h3>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <ChevronDown className={`h-4 w-4 transition-transform ${isOpen2 ? "rotate-180" : ""}`} />
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent className="p-3 text-sm space-y-2 text-muted-foreground">
                  <p>Node.js 18+</p>
                  <p>TypeScript 4.9+</p>
                  <p>React 18+</p>
                </CollapsibleContent>
              </Collapsible>
            </div>
          }
          code={`<Collapsible open={isOpen} onOpenChange={setIsOpen}>
  <CollapsibleTrigger className="font-semibold">
    System Requirements
  </CollapsibleTrigger>
  <CollapsibleContent className="pt-4">
    <ul className="space-y-2 text-sm">
      <li>Node.js 18+</li>
      <li>TypeScript 4.9+</li>
    </ul>
  </CollapsibleContent>
</Collapsible>`}
        />
      </ContentSection>

      <ContentSection id="collapsible-usage" title="Usage Guidelines">
        <DosDonts
          dos={[
            { description: "Use for optional or supplementary information" }, { description: "Provide clear, descriptive trigger labels" }, { description: "Animate height changes for better UX" }, { description: "Remember open/closed state if appropriate" }, { description: "Keep collapsed content self-contained" }]}
          donts={[
            { description: "Don't hide essential information behind collapse" }, { description: "Avoid multiple nested collapsibles" }, { description: "Don't use vague trigger labels" }, { description: "Avoid sudden content appearance without animation" }, { description: "Don't load content asynchronously without feedback" }]}
        />
      </ContentSection>

      <ContentSection id="collapsible-accessibility" title="Accessibility">
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Collapsible components provide essential accessibility features:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>ARIA expanded attribute indicates open/closed state</li>
            <li>Keyboard navigation: Tab to trigger, Space/Enter to toggle</li>
            <li>Screen readers announce expanded state</li>
            <li>Focus trap within collapsible content when open</li>
            <li>Proper heading hierarchy maintained</li>
          </ul>
        </div>
      </ContentSection>

      <ContentSection id="collapsible-api" title="API Reference">
        <PropsTable props={[
            {
              name: "Collapsible",
              props: [
                { name: "open", type: "boolean", description: "Controlled open state" },
                { name: "onOpenChange", type: "function", description: "Callback when open state changes" },
                { name: "disabled", type: "boolean", description: "Disable the collapsible" }
              ]
            },
            {
              name: "CollapsibleTrigger",
              props: [
                { name: "asChild", type: "boolean", description: "Render as child of another component" },
                { name: "children", type: "React.ReactNode", description: "Trigger content" }
              ]
            },
            {
              name: "CollapsibleContent",
              props: [
                { name: "children", type: "React.ReactNode", description: "Content to collapse/expand" }
              ]
            }
          ]} />
      </ContentSection>
    </>
  )
}

/* ============================================
   SELECT DOCS
   ============================================ */

function SelectDocs() {
  const [value, setValue] = useState("")

  return (
    <>
      <ContentSection id="select-default" title="Default Example">
        <ExampleBlock
          title="Basic Select"
          description="Dropdown selection with default placeholder"
          preview={
            <div className="w-full max-w-xs">
              <Select value={value} onValueChange={setValue}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a framework..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="react">React</SelectItem>
                  <SelectItem value="vue">Vue</SelectItem>
                  <SelectItem value="angular">Angular</SelectItem>
                  <SelectItem value="svelte">Svelte</SelectItem>
                </SelectContent>
              </Select>
              {value && <p className="text-sm text-muted-foreground mt-2">Selected: {value}</p>}
            </div>
          }
          code={`import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function SelectExample() {
  const [value, setValue] = useState("")
  
  return (
    <Select value={value} onValueChange={setValue}>
      <SelectTrigger>
        <SelectValue placeholder="Select an option..." />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
      </SelectContent>
    </Select>
  )
}`}
        />
      </ContentSection>

      <ContentSection id="select-variants" title="Variants">
        <ExampleBlock
          title="Disabled Select Item"
          description="Select with some options disabled"
          preview={
            <div className="w-full max-w-xs">
              <Select defaultValue="">
                <SelectTrigger>
                  <SelectValue placeholder="Choose a country..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="usa">United States</SelectItem>
                  <SelectItem value="canada">Canada</SelectItem>
                  <SelectItem value="mexico" disabled>Mexico (Currently Unavailable)</SelectItem>
                  <SelectItem value="br">Brazil</SelectItem>
                </SelectContent>
              </Select>
            </div>
          }
          code={`<Select>
  <SelectTrigger>
    <SelectValue placeholder="Choose..." />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="usa">United States</SelectItem>
    <SelectItem value="disabled" disabled>Not Available</SelectItem>
  </SelectContent>
</Select>`}
        />
      </ContentSection>

      <ContentSection id="select-usage" title="Usage Guidelines">
        <DosDonts
          dos={[
            { description: "Use clear, descriptive option labels" }, { description: "Provide a meaningful placeholder" }, { description: "Group related options when needed" }, { description: "Sort options logically (alphabetical, frequency, etc.)" }, { description: "Show selected value clearly" }]}
          donts={[
            { description: "Don't use vague option names" }, { description: "Avoid too many options (consider search)" }, { description: "Don't change options without user action" }, { description: "Avoid mixing different option types" }, { description: "Don't hide the selected value" }]}
        />
      </ContentSection>

      <ContentSection id="select-accessibility" title="Accessibility">
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Select components include comprehensive accessibility:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Semantic HTML select element with proper ARIA roles</li>
            <li>Keyboard navigation: Arrow keys, Space/Enter, Escape</li>
            <li>Screen reader announces options and selected value</li>
            <li>Type-ahead search support within dropdown</li>
            <li>Disabled state properly communicated</li>
          </ul>
        </div>
      </ContentSection>

      <ContentSection id="select-api" title="API Reference">
        <PropsTable props={[
            {
              name: "Select",
              props: [
                { name: "value", type: "string", description: "Current selected value" },
                { name: "onValueChange", type: "function", description: "Callback when selection changes" },
                { name: "defaultValue", type: "string", description: "Default selected value" },
                { name: "disabled", type: "boolean", description: "Disable the entire select" }
              ]
            },
            {
              name: "SelectTrigger",
              props: [
                { name: "children", type: "React.ReactNode", description: "Trigger content (usually SelectValue)" }
              ]
            },
            {
              name: "SelectContent",
              props: [
                { name: "children", type: "React.ReactNode", description: "SelectItem components" }
              ]
            },
            {
              name: "SelectItem",
              props: [
                { name: "value", type: "string", description: "Item value" },
                { name: "disabled", type: "boolean", description: "Disable this option" },
                { name: "children", type: "React.ReactNode", description: "Item label" }
              ]
            }
          ]} />
      </ContentSection>
    </>
  )
}

/* ============================================
   SLIDER DOCS
   ============================================ */

function SliderDocs() {
  const [value, setValue] = useState([50])
  const [rangeValue, setRangeValue] = useState([25, 75])

  return (
    <>
      <ContentSection id="slider-default" title="Default Example">
        <ExampleBlock
          title="Single Value Slider"
          description="Basic slider with single value selection"
          preview={
            <div className="w-full max-w-md space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <Label>Volume</Label>
                  <span className="text-sm font-semibold">{value[0]}%</span>
                </div>
                <Slider value={value} onValueChange={setValue} max={100} step={1} />
              </div>
            </div>
          }
          code={`import { Slider } from "@/components/ui/slider"

export function SliderExample() {
  const [value, setValue] = useState([50])
  
  return (
    <div>
      <Label>Volume: {value[0]}%</Label>
      <Slider value={value} onValueChange={setValue} max={100} step={1} />
    </div>
  )
}`}
        />
      </ContentSection>

      <ContentSection id="slider-variants" title="Variants">
        <ExampleBlock
          title="Range Slider"
          description="Slider with two values for range selection"
          preview={
            <div className="w-full max-w-md space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <Label>Price Range</Label>
                  <span className="text-sm font-semibold">${rangeValue[0]} - ${rangeValue[1]}</span>
                </div>
                <Slider value={rangeValue} onValueChange={setRangeValue} max={100} min={0} step={1} />
              </div>
            </div>
          }
          code={`<div>
  <Label>Price Range: ${rangeValue[0]} - ${rangeValue[1]}</Label>
  <Slider 
    value={rangeValue} 
    onValueChange={setRangeValue} 
    max={100}
    step={1}
  />
</div>`}
        />
      </ContentSection>

      <ContentSection id="slider-usage" title="Usage Guidelines">
        <DosDonts
          dos={[
            { description: "Display current value next to slider" }, { description: "Use appropriate min/max values for context" }, { description: "Show unit labels clearly" }, { description: "Provide keyboard input as alternative" }, { description: "Update preview in real-time as user drags" }]}
          donts={[
            { description: "Don't hide the current value" }, { description: "Avoid too many slider steps (confusing UX)" }, { description: "Don't forget unit labels (px, $, %, etc.)" }, { description: "Avoid sliders with unclear ranges" }, { description: "Don't disable dragging feedback" }]}
        />
      </ContentSection>

      <ContentSection id="slider-accessibility" title="Accessibility">
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Slider components offer accessible input methods:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>ARIA slider role with proper attributes</li>
            <li>Keyboard support: Arrow keys to adjust value, Page Up/Down for larger steps</li>
            <li>Screen reader announces current value and range</li>
            <li>Touch-friendly with adequate target size</li>
            <li>Focus indicator visible on slider thumb</li>
          </ul>
        </div>
      </ContentSection>

      <ContentSection id="slider-api" title="API Reference">
        <PropsTable props={[
            {
              name: "Slider",
              props: [
                { name: "value", type: "number[]", description: "Current value(s)" },
                { name: "onValueChange", type: "function", description: "Callback when value changes" },
                { name: "min", type: "number", description: "Minimum value (default: 0)" },
                { name: "max", type: "number", description: "Maximum value (default: 100)" },
                { name: "step", type: "number", description: "Increment step" },
                { name: "orientation", type: "'horizontal' | 'vertical'", description: "Slider direction" },
                { name: "disabled", type: "boolean", description: "Disable the slider" }
              ]
            }
          ]} />
      </ContentSection>
    </>
  )
}

/* ============================================
   TOGGLE DOCS
   ============================================ */

function ToggleDocs() {
  const [pressed, setPressed] = useState(false)
  const [alignment, setAlignment] = useState("")

  return (
    <>
      <ContentSection id="toggle-default" title="Default Example">
        <ExampleBlock
          title="Basic Toggle"
          description="Simple toggle button for boolean states"
          preview={
            <div className="flex items-center gap-4">
              <Toggle pressed={pressed} onPressedChange={setPressed}>
                <Bold className="h-4 w-4" />
              </Toggle>
              <span className="text-sm text-muted-foreground">
                Bold {pressed ? "enabled" : "disabled"}
              </span>
            </div>
          }
          code={`import { Toggle } from "@/components/ui/toggle"
import { Bold } from "lucide-react"

export function ToggleExample() {
  const [pressed, setPressed] = useState(false)
  
  return (
    <Toggle pressed={pressed} onPressedChange={setPressed}>
      <Bold className="h-4 w-4" />
    </Toggle>
  )
}`}
        />
      </ContentSection>

      <ContentSection id="toggle-variants" title="Variants">
        <ExampleBlock
          title="Toggle Variants"
          description="Different visual variants for toggles"
          preview={
            <div className="flex gap-2">
              <Toggle variant="default">
                <Bold className="h-4 w-4" />
              </Toggle>
              <Toggle variant="outline">
                <Italic className="h-4 w-4" />
              </Toggle>
              <Toggle variant="default" size="sm">
                <Underline className="h-4 w-4" />
              </Toggle>
              <Toggle variant="default" size="lg">
                <Bold className="h-4 w-4" />
              </Toggle>
            </div>
          }
          code={`<Toggle variant="default"><Bold /></Toggle>
<Toggle variant="outline"><Italic /></Toggle>
<Toggle size="sm"><Underline /></Toggle>
<Toggle size="lg"><Bold /></Toggle>`}
        />
      </ContentSection>

      <ContentSection id="toggle-usage" title="Usage Guidelines">
        <DosDonts
          dos={[
            { description: "Use for binary on/off states" }, { description: "Provide clear icons that indicate state" }, { description: "Show active/inactive states distinctly" }, { description: "Use consistent size within context" }, { description: "Add labels or tooltips for clarity" }]}
          donts={[
            { description: "Don't use vague or unclear icons" }, { description: "Avoid making active state ambiguous" }, { description: "Don't mix different toggle styles" }, { description: "Avoid placing toggles where they're easily missed" }, { description: "Don't forget to indicate state change" }]}
        />
      </ContentSection>

      <ContentSection id="toggle-accessibility" title="Accessibility">
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Toggle buttons provide accessible state feedback:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>ARIA pressed attribute indicates toggle state</li>
            <li>Keyboard accessible: Tab to focus, Space/Enter to toggle</li>
            <li>Screen readers announce pressed/unpressed state</li>
            <li>Focus indicator clearly visible</li>
            <li>Works with or without accompanying label</li>
          </ul>
        </div>
      </ContentSection>

      <ContentSection id="toggle-api" title="API Reference">
        <PropsTable props={[
            {
              name: "Toggle",
              props: [
                { name: "pressed", type: "boolean", description: "Toggle state" },
                { name: "onPressedChange", type: "function", description: "Callback when pressed state changes" },
                { name: "variant", type: "'default' | 'outline'", description: "Visual style" },
                { name: "size", type: "'default' | 'sm' | 'lg'", description: "Size of toggle" },
                { name: "disabled", type: "boolean", description: "Disable the toggle" }
              ]
            }
          ]} />
      </ContentSection>
    </>
  )
}

/* ============================================
   TOGGLE GROUP DOCS
   ============================================ */

function ToggleGroupDocs() {
  const [alignment, setAlignment] = useState("")
  const [formats, setFormats] = useState<string[]>([])

  return (
    <>
      <ContentSection id="toggle-group-default" title="Default Example">
        <ExampleBlock
          title="Single Selection Toggle Group"
          description="Toggle group with only one item selectable at a time"
          preview={
            <div className="space-y-4">
              <Label>Text Alignment</Label>
              <ToggleGroup type="single" value={alignment} onValueChange={setAlignment}>
                <ToggleGroupItem value="left">
                  <AlignLeft className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="center">
                  <AlignCenter className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="right">
                  <AlignRight className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
              {alignment && <p className="text-sm text-muted-foreground">Alignment: {alignment}</p>}
            </div>
          }
          code={`import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { AlignLeft, AlignCenter, AlignRight } from "lucide-react"

export function ToggleGroupExample() {
  const [alignment, setAlignment] = useState("")
  
  return (
    <ToggleGroup type="single" value={alignment} onValueChange={setAlignment}>
      <ToggleGroupItem value="left"><AlignLeft /></ToggleGroupItem>
      <ToggleGroupItem value="center"><AlignCenter /></ToggleGroupItem>
      <ToggleGroupItem value="right"><AlignRight /></ToggleGroupItem>
    </ToggleGroup>
  )
}`}
        />
      </ContentSection>

      <ContentSection id="toggle-group-variants" title="Variants">
        <ExampleBlock
          title="Multiple Selection Toggle Group"
          description="Toggle group allowing multiple selections"
          preview={
            <div className="space-y-4">
              <Label>Text Formatting</Label>
              <ToggleGroup type="multiple" value={formats} onValueChange={setFormats}>
                <ToggleGroupItem value="bold">
                  <Bold className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic">
                  <Italic className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline">
                  <Underline className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
              {formats.length > 0 && (
                <p className="text-sm text-muted-foreground">Selected: {formats.join(", ")}</p>
              )}
            </div>
          }
          code={`<ToggleGroup type="multiple" value={formats} onValueChange={setFormats}>
  <ToggleGroupItem value="bold"><Bold /></ToggleGroupItem>
  <ToggleGroupItem value="italic"><Italic /></ToggleGroupItem>
  <ToggleGroupItem value="underline"><Underline /></ToggleGroupItem>
</ToggleGroup>`}
        />
      </ContentSection>

      <ContentSection id="toggle-group-usage" title="Usage Guidelines">
        <DosDonts
          dos={[
            { description: "Use single type for mutually exclusive options" }, { description: "Use multiple type for independent selections" }, { description: "Provide clear, distinct icons for each option" }, { description: "Show selected state clearly" }, { description: "Group related toggle items together" }]}
          donts={[
            { description: "Don't mix single and multiple types in same group" }, { description: "Avoid too many toggle items in one group (5+)" }, { description: "Don't use similar icons that confuse users" }, { description: "Avoid unclear or ambiguous toggle purposes" }, { description: "Don't hide toggle purpose behind icons alone" }]}
        />
      </ContentSection>

      <ContentSection id="toggle-group-accessibility" title="Accessibility">
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Toggle groups provide accessible multi-selection:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>ARIA role and attributes for toggle group</li>
            <li>Each item announces selected/unselected state</li>
            <li>Keyboard navigation: Arrow keys between items, Space/Enter to toggle</li>
            <li>Screen readers announce group purpose and item selection</li>
            <li>Focus management within toggle group</li>
          </ul>
        </div>
      </ContentSection>

      <ContentSection id="toggle-group-api" title="API Reference">
        <PropsTable props={[
            {
              name: "ToggleGroup",
              props: [
                { name: "type", type: "'single' | 'multiple'", description: "Single or multiple selection" },
                { name: "value", type: "string | string[]", description: "Selected value(s)" },
                { name: "onValueChange", type: "function", description: "Callback when selection changes" },
                { name: "disabled", type: "boolean", description: "Disable all items" }
              ]
            },
            {
              name: "ToggleGroupItem",
              props: [
                { name: "value", type: "string", description: "Item value" },
                { name: "disabled", type: "boolean", description: "Disable this item" },
                { name: "children", type: "React.ReactNode", description: "Item content (icon, text, etc.)" }
              ]
            }
          ]} />
      </ContentSection>
    </>
  )
}

/* ============================================
   RADIO GROUP DOCS
   ============================================ */

function RadioGroupDocs() {
  const [size, setSize] = useState("medium")

  return (
    <>
      <ContentSection id="radio-group-default" title="Default Example">
        <ExampleBlock
          title="Basic Radio Group"
          description="Single selection from multiple options"
          preview={
            <div className="space-y-4">
              <Label className="text-base">Select a size</Label>
              <RadioGroup value={size} onValueChange={setSize}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="small" id="small" />
                  <Label htmlFor="small">Small</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="medium" id="medium" />
                  <Label htmlFor="medium">Medium</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="large" id="large" />
                  <Label htmlFor="large">Large</Label>
                </div>
              </RadioGroup>
              <p className="text-sm text-muted-foreground">Selected: {size}</p>
            </div>
          }
          code={`import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export function RadioGroupExample() {
  const [size, setSize] = useState("medium")
  
  return (
    <RadioGroup value={size} onValueChange={setSize}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="small" id="small" />
        <Label htmlFor="small">Small</Label>
      </div>
    </RadioGroup>
  )
}`}
        />
      </ContentSection>

      <ContentSection id="radio-group-variants" title="Variants">
        <ExampleBlock
          title="Radio Group with Description"
          description="Radio items with descriptive labels"
          preview={
            <div className="space-y-4">
              <Label className="text-base">Subscription Plan</Label>
              <RadioGroup defaultValue="pro">
                <div className="flex items-start space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-muted">
                  <RadioGroupItem value="starter" id="starter" className="mt-1" />
                  <div className="flex-1">
                    <Label htmlFor="starter" className="font-semibold cursor-pointer">Starter</Label>
                    <p className="text-sm text-muted-foreground">Perfect for getting started</p>
                  </div>
                  <span className="font-semibold">$9/mo</span>
                </div>
                <div className="flex items-start space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-muted">
                  <RadioGroupItem value="pro" id="pro" className="mt-1" />
                  <div className="flex-1">
                    <Label htmlFor="pro" className="font-semibold cursor-pointer">Professional</Label>
                    <p className="text-sm text-muted-foreground">For growing teams</p>
                  </div>
                  <span className="font-semibold">$29/mo</span>
                </div>
              </RadioGroup>
            </div>
          }
          code={`<RadioGroup defaultValue="pro">
  <div className="border rounded-lg p-4">
    <RadioGroupItem value="starter" id="starter" />
    <Label htmlFor="starter">Starter - $9/mo</Label>
    <p className="text-sm text-muted-foreground">For getting started</p>
  </div>
</RadioGroup>`}
        />
      </ContentSection>

      <ContentSection id="radio-group-usage" title="Usage Guidelines">
        <DosDonts
          dos={[
            { description: "Use for single selection from mutually exclusive options" }, { description: "Always pair RadioGroupItem with Label" }, { description: "Use htmlFor attribute to link labels" }, { description: "Provide clear, concise option labels" }, { description: "Group related radio items together" }]}
          donts={[
            { description: "Don't use radio groups for multiple selections (use checkboxes)" }, { description: "Avoid too many radio options (consider select or radiogroup)" }, { description: "Don't make option labels unclear or ambiguous" }, { description: "Avoid changing options after user selection" }, { description: "Don't disable all options without explanation" }]}
        />
      </ContentSection>

      <ContentSection id="radio-group-accessibility" title="Accessibility">
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Radio groups provide accessible single selection:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>ARIA role="radiogroup" on the container</li>
            <li>Each radio has role="radio" with aria-checked attribute</li>
            <li>Keyboard navigation: Arrow keys to move, Space to select</li>
            <li>Labels properly associated via htmlFor attribute</li>
            <li>Screen reader announces selected option and group context</li>
          </ul>
        </div>
      </ContentSection>

      <ContentSection id="radio-group-api" title="API Reference">
        <PropsTable props={[
            {
              name: "RadioGroup",
              props: [
                { name: "value", type: "string", description: "Currently selected value" },
                { name: "onValueChange", type: "function", description: "Callback when selection changes" },
                { name: "defaultValue", type: "string", description: "Default selected value" },
                { name: "disabled", type: "boolean", description: "Disable all items" }
              ]
            },
            {
              name: "RadioGroupItem",
              props: [
                { name: "value", type: "string", description: "Item value" },
                { name: "id", type: "string", description: "For label htmlFor binding" },
                { name: "disabled", type: "boolean", description: "Disable this item" }
              ]
            }
          ]} />
      </ContentSection>
    </>
  )
}

/* ============================================
   SEPARATOR DOCS
   ============================================ */

function SeparatorDocs() {
  return (
    <>
      <ContentSection id="separator-default" title="Default Example">
        <ExampleBlock
          title="Horizontal Separator"
          description="Basic horizontal divider line"
          preview={
            <div className="w-full max-w-md space-y-4">
              <div>
                <h3 className="font-semibold text-sm">Section One</h3>
                <p className="text-sm text-muted-foreground">Content goes here</p>
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold text-sm">Section Two</h3>
                <p className="text-sm text-muted-foreground">More content here</p>
              </div>
            </div>
          }
          code={`import { Separator } from "@/components/ui/separator"

export function SeparatorExample() {
  return (
    <div>
      <h3>Section One</h3>
      <p>Content...</p>
      <Separator />
      <h3>Section Two</h3>
      <p>Content...</p>
    </div>
  )
}`}
        />
      </ContentSection>

      <ContentSection id="separator-variants" title="Variants">
        <ExampleBlock
          title="Vertical Separator"
          description="Vertical divider for side-by-side layouts"
          preview={
            <div className="flex items-center gap-4 w-full max-w-md h-24">
              <div className="flex-1">
                <h3 className="font-semibold text-sm">Left Column</h3>
                <p className="text-xs text-muted-foreground">Content area</p>
              </div>
              <Separator orientation="vertical" />
              <div className="flex-1">
                <h3 className="font-semibold text-sm">Right Column</h3>
                <p className="text-xs text-muted-foreground">Content area</p>
              </div>
            </div>
          }
          code={`<div className="flex gap-4">
  <div>Left Column</div>
  <Separator orientation="vertical" />
  <div>Right Column</div>
</div>`}
        />

        <ExampleBlock
          title="Separator with Text"
          description="Separator with centered text label"
          preview={
            <div className="w-full max-w-md space-y-4">
              <div className="relative">
                <Separator />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-2 text-sm text-muted-foreground">
                  OR
                </span>
              </div>
              <p className="text-sm text-center text-muted-foreground">Continue with alternative method</p>
            </div>
          }
          code={`<div className="relative">
  <Separator />
  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-2 text-sm">
    OR
  </span>
</div>`}
        />
      </ContentSection>

      <ContentSection id="separator-usage" title="Usage Guidelines">
        <DosDonts
          dos={[
            { description: "Use to separate distinct sections or content areas" }, { description: "Apply subtle styling that doesn't overwhelm content" }, { description: "Use for visual hierarchy and organization" }, { description: "Employ consistent separator width and color" }, { description: "Consider using decorative separators sparingly" }]}
          donts={[
            { description: "Don't overuse separators throughout page" }, { description: "Avoid making separators too prominent" }, { description: "Don't use instead of proper spacing/padding" }, { description: "Avoid unclear purpose for decorative separators" }, { description: "Don't ignore semantic meaning of separated content" }]}
        />
      </ContentSection>

      <ContentSection id="separator-accessibility" title="Accessibility">
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Separators have minimal but important accessibility considerations:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Use role="separator" for semantic HTML when appropriate</li>
            <li>Set aria-orientation to match visual orientation</li>
            <li>Mark as decorative (aria-hidden="true") when purely visual</li>
            <li>Use sufficient contrast ratio (3:1) from background</li>
            <li>Don't rely solely on separator for meaningful layout information</li>
          </ul>
        </div>
      </ContentSection>

      <ContentSection id="separator-api" title="API Reference">
        <PropsTable props={[
            {
              name: "Separator",
              props: [
                { name: "orientation", type: "'horizontal' | 'vertical'", description: "Direction of separator" },
                { name: "decorative", type: "boolean", description: "Hide from assistive tech if purely visual" },
                { name: "className", type: "string", description: "CSS class for custom styling" }
              ]
            }
          ]} />
      </ContentSection>
    </>
  )
}

/* ============================================
   PROGRESS DOCS
   ============================================ */

function ProgressDocs() {
  const [progress, setProgress] = useState(35)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0
        return prev + 5
      })
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <ContentSection id="progress-default" title="Default Example">
        <ExampleBlock
          title="Basic Progress Bar"
          description="Linear progress indicator showing completion percentage"
          preview={
            <div className="w-full max-w-md space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <Label>File Upload</Label>
                  <span className="text-sm font-semibold">{progress}%</span>
                </div>
                <Progress value={progress} />
              </div>
            </div>
          }
          code={`import { Progress } from "@/components/ui/progress"

export function ProgressExample() {
  const [progress, setProgress] = useState(35)
  
  return (
    <div>
      <Label>File Upload: {progress}%</Label>
      <Progress value={progress} />
    </div>
  )
}`}
        />
      </ContentSection>

      <ContentSection id="progress-variants" title="Variants">
        <ExampleBlock
          title="Multiple Progress States"
          description="Different progress bar states"
          preview={
            <div className="w-full max-w-md space-y-6">
              <div>
                <Label className="text-sm">Just Started (25%)</Label>
                <Progress value={25} className="mt-2" />
              </div>
              <div>
                <Label className="text-sm">Halfway (50%)</Label>
                <Progress value={50} className="mt-2" />
              </div>
              <div>
                <Label className="text-sm">Almost Done (85%)</Label>
                <Progress value={85} className="mt-2" />
              </div>
              <div>
                <Label className="text-sm">Completed (100%)</Label>
                <Progress value={100} className="mt-2" />
              </div>
            </div>
          }
          code={`<Progress value={25} />
<Progress value={50} />
<Progress value={85} />
<Progress value={100} />`}
        />
      </ContentSection>

      <ContentSection id="progress-usage" title="Usage Guidelines">
        <DosDonts
          dos={[ { description: "Always show a percentage or description" }, { description: "Use for long-running operations and uploads" }, { description: "Update progress in real-time for accuracy" }, { description: "Show estimated time remaining when available" }, { description: "Use appropriate colors to indicate status" }]}
          donts={[
            { description: "Don't forget to display percentage value" }, { description: "Avoid silent progress (always show feedback)" }, { description: "Don't use for instant operations" }, { description: "Avoid false progress increments" }, { description: "Don't hide progress indicators during loading" }]}
        />
      </ContentSection>

      <ContentSection id="progress-accessibility" title="Accessibility">
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Progress bars provide accessible status feedback:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>ARIA progressbar role with aria-valuenow</li>
            <li>aria-valuemin and aria-valuemax define range</li>
            <li>aria-label or aria-labelledby describes operation</li>
            <li>Color not sole indicator (value text required)</li>
            <li>Updates announced to screen readers via live region</li>
          </ul>
        </div>
      </ContentSection>

      <ContentSection id="progress-api" title="API Reference">
        <PropsTable props={[
            {
              name: "Progress",
              props: [
                { name: "value", type: "number (0-100)", description: "Completion percentage" },
                { name: "className", type: "string", description: "CSS class for custom styling" },
                { name: "aria-label", type: "string", description: "Accessible label for progress" },
                { name: "aria-labelledby", type: "string", description: "ID of element labeling progress" }
              ]
            }
          ]} />
      </ContentSection>
    </>
  )
}

/* ============================================
   BATCH 2 EXPORT
   ============================================ */

const batch2: Record<
  string,
  { title: string; description: string; component: React.ReactNode }
> = {
  accordion: {
    title: "Accordion",
    description: "Collapsible content panels for organizing information hierarchically",
    component: <AccordionDocs />
  },
  avatar: {
    title: "Avatar",
    description: "User profile picture component with image fallback support",
    component: <AvatarDocs />
  },
  collapsible: {
    title: "Collapsible",
    description: "Expandable/collapsible content section with toggle control",
    component: <CollapsibleDocs />
  },
  select: {
    title: "Select",
    description: "Dropdown select menu for choosing from predefined options",
    component: <SelectDocs />
  },
  slider: {
    title: "Slider",
    description: "Range input component for selecting values with dragging interaction",
    component: <SliderDocs />
  },
  toggle: {
    title: "Toggle",
    description: "Button that toggles between two states (on/off, pressed/unpressed)",
    component: <ToggleDocs />
  },
  "toggle-group": {
    title: "Toggle Group",
    description: "Set of toggle buttons for single or multiple selection",
    component: <ToggleGroupDocs />
  },
  "radio-group": {
    title: "Radio Group",
    description: "Group of radio buttons for single selection from multiple options",
    component: <RadioGroupDocs />
  },
  separator: {
    title: "Separator",
    description: "Visual divider for separating content sections horizontally or vertically",
    component: <SeparatorDocs />
  },
  progress: {
    title: "Progress",
    description: "Linear progress bar indicating completion percentage of a task",
    component: <ProgressDocs />
  }
}

export default batch2
