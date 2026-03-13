# New Component Usage Examples

## ExampleBlock Component

The `ExampleBlock` component displays a live preview with toggleable code.

### Basic Usage
```tsx
import { ExampleBlock } from "@/components/doc-components"
import { Button } from "@/components/ui/button"

export function ButtonExamples() {
  return (
    <ExampleBlock
      title="Primary Button"
      description="The default primary button style"
      preview={<Button>Click me</Button>}
      code={`import { Button } from "@/components/ui/button"\n\nexport function MyComponent() {\n  return <Button>Click me</Button>\n}`}
    />
  )
}
```

### Features
- **title**: Optional header title
- **description**: Optional subtitle
- **preview**: React component to display
- **code**: Code string (plain text)
- Code section is collapsible (default closed)
- Copy button automatically appears in code section
- Success feedback "Copied!" shown for 2 seconds

---

## DosDonts Component

Display do and don't examples side by side.

### Basic Usage
```tsx
import { DosDonts } from "@/components/doc-components"

export function ButtonGuidelines() {
  return (
    <DosDonts
      dos={[
        {
          description: "Use clear, action-oriented labels",
          preview: <Button>Save Document</Button>
        },
        {
          description: "Provide visual feedback on interaction",
          preview: <Button className="opacity-70">Saving...</Button>
        }
      ]}
      donts={[
        {
          description: "Avoid vague labels like 'Click here'",
          preview: <Button>Click here</Button>
        },
        {
          description: "Don't disable without explanation",
          preview: <Button disabled>Submit</Button>
        }
      ]}
    />
  )
}
```

### Features
- Side-by-side layout (stacks on mobile)
- Green checkmark for "Do" column
- Red X for "Don't" column
- Optional preview areas with semi-transparent styling for don'ts
- Clean visual separation

---

## ContentSection Component

Wrapper for sections with proper TOC integration.

### Basic Usage
```tsx
import { ContentSection } from "@/components/doc-components"

export function ButtonDocumentation() {
  return (
    <>
      <ContentSection id="anatomy" title="Anatomy">
        <Anatomy
          items={{
            "Label": "The button text",
            "Icon": "Optional icon element",
            "Loader": "Loading indicator"
          }}
        />
      </ContentSection>

      <ContentSection id="variants" title="Variants">
        {/* Component variants */}
      </ContentSection>
    </>
  )
}
```

### Features
- Automatic scroll-margin-top for fixed headers
- ID anchoring for TOC links
- Clean section spacing

---

## ComponentPageTabs Component

Navigation tabs for Examples, Usage, and Code sections.

### Basic Usage
```tsx
import { ComponentPageTabs } from "@/components/doc-components"

export function ButtonDocPage() {
  const activeTab = "examples" // or "usage", "code"
  
  return (
    <>
      <ComponentPageTabs activeTab={activeTab} slug="button" />
      
      {/* Tab content */}
      {activeTab === "examples" && <Examples />}
      {activeTab === "usage" && <Usage />}
      {activeTab === "code" && <Code />}
    </>
  )
}
```

### Features
- Three built-in tabs: Examples, Usage, Code
- Active tab shows bottom border in primary color
- URL-based navigation

---

## PropsTable Component

Display component API documentation.

### Basic Usage
```tsx
import { PropsTable } from "@/components/doc-components"

export function ButtonPropsTable() {
  return (
    <PropsTable
      props={[
        {
          name: "variant",
          type: '"default" | "primary" | "secondary" | "ghost" | "destructive"',
          default: '"default"',
          description: "The visual style of the button"
        },
        {
          name: "size",
          type: '"sm" | "md" | "lg"',
          default: '"md"',
          description: "The button size"
        },
        {
          name: "disabled",
          type: "boolean",
          default: "false",
          description: "Whether the button is disabled"
        },
        {
          name: "children",
          type: "React.ReactNode",
          description: "Button content"
        }
      ]}
    />
  )
}
```

### Features
- Monospace code styling for property names and types
- Hover effects on rows
- Responsive scrolling on small screens
- Clean table layout with borders

---

## TableOfContents Component

Auto-generated right sidebar for page navigation.

### Usage
The TableOfContents component is automatically integrated in doc pages:

```tsx
// In src/app/docs/[slug]/client-page.tsx
import { TableOfContents, type TOCItem } from "@/components/table-of-contents"

export function ClientDocPage({ content }: ClientDocPageProps) {
  const [tocItems, setTocItems] = useState<TOCItem[]>([])

  useEffect(() => {
    // Extract headings from document
    const headings = document.querySelectorAll("h2, h3")
    const items: TOCItem[] = []
    
    headings.forEach((heading, index) => {
      if (!heading.id) heading.id = `heading-${index}`
      items.push({
        id: heading.id,
        title: heading.textContent || "",
        level: parseInt(heading.tagName[1])
      })
    })
    
    setTocItems(items)
  }, [])

  return (
    <div className="flex gap-8">
      <main>{/* content */}</main>
      {tocItems.length > 0 && <TableOfContents items={tocItems} />}
    </div>
  )
}
```

### Features
- Automatically highlights the currently visible section
- Smooth scrolling to sections on click
- Shows h2 and h3 level headings
- Sticky positioning (stays visible while scrolling)
- Uses Intersection Observer for efficient monitoring

---

## Complete Example

Here's a complete example of a component documentation page:

```tsx
// src/lib/docs-content.tsx (excerpt)

export function createButtonDocs(): DocContent {
  return {
    title: "Button",
    description: "A flexible button component for triggering actions",
    component: (
      <div className="space-y-12">
        <ContentSection id="overview" title="Overview">
          <p className="text-muted-foreground">
            The Button component is a fundamental interactive element. Use it
            to trigger actions or navigation.
          </p>
        </ContentSection>

        <ContentSection id="examples" title="Examples">
          <ExampleBlock
            title="Basic Button"
            preview={<Button>Default Button</Button>}
            code={`<Button>Default Button</Button>`}
          />

          <ExampleBlock
            title="Button Variants"
            preview={
              <div className="flex gap-2">
                <Button>Default</Button>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
              </div>
            }
            code={`<Button>Default</Button>
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>`}
          />
        </ContentSection>

        <ContentSection id="guidelines" title="Guidelines">
          <DosDonts
            dos={[
              { description: "Use clear labels that describe the action" },
              { description: "Keep button text concise (1-2 words)" },
              { description: "Use primary style for main actions" }
            ]}
            donts={[
              { description: "Use vague labels like 'Click here'" },
              { description: "Create buttons that are too small to click" },
              { description: "Use multiple primary buttons on one page" }
            ]}
          />
        </ContentSection>

        <ContentSection id="api" title="API Reference">
          <PropsTable
            props={[
              {
                name: "variant",
                type: '"default" | "primary" | "secondary"',
                default: '"default"',
                description: "Visual style of the button"
              },
              {
                name: "size",
                type: '"sm" | "md" | "lg"',
                default: '"md"',
                description: "Button size"
              }
            ]}
          />
        </ContentSection>
      </div>
    )
  }
}
```

This page would automatically:
1. Display in the 3-column layout with sidebar and TOC
2. Generate table of contents from h2/h3 headings
3. Show the overview section with text
4. Display interactive examples with toggleable code
5. Show do's and don'ts comparison
6. Display the API props table
7. Allow smooth scrolling between sections

---

## Styling Notes

### Dark Mode
All components automatically support dark mode through the `.dark` class:
- Light mode colors automatically inverse in dark mode
- Use `dark:` prefix for mode-specific styles if needed
- Theme variables are defined in `globals.css`

### Colors
- Primary: `hsl(253 85% 61%)` (#6a47f0)
- Success: Green colors for "Do" sections
- Warning/Error: Red colors for "Don't" sections
- Muted text: `hsl(240 4% 46%)` for secondary content

### Responsive
- Sidebar: Hidden below `lg` breakpoint
- TOC: Hidden below `xl` breakpoint
- Tables: Horizontal scroll on small screens
- Do's/Don'ts: Stack vertically below `md` breakpoint
