interface DocContent {
  title: string
  description: string
  html: string
}

const batch1: Record<string, DocContent> = {}

batch1["accordion"] = {
  title: "Accordion",
  description: "A vertically stacked set of interactive headings that reveal or hide content sections.",
  html: `
    <div class="space-y-12 p-8">
      <div>
        <h2 class="text-2xl font-bold mb-6">Preview</h2>
        <div class="border border-border rounded-lg p-6 space-y-2 bg-card">
          <div class="border border-border rounded">
            <button class="w-full px-4 py-3 text-left font-semibold hover:bg-muted/30 flex justify-between items-center">
              <span>Accordion Item 1</span>
              <span class="text-muted-foreground/60">▼</span>
            </button>
            <div class="px-4 py-3 border-t border-border bg-muted/30 text-foreground/80">
              Content for the first accordion item. This expands and collapses to reveal or hide information.
            </div>
          </div>
          <div class="border border-border rounded">
            <button class="w-full px-4 py-3 text-left font-semibold hover:bg-muted/30 flex justify-between items-center">
              <span>Accordion Item 2</span>
              <span class="text-muted-foreground/60">►</span>
            </button>
          </div>
          <div class="border border-border rounded">
            <button class="w-full px-4 py-3 text-left font-semibold hover:bg-muted/30 flex justify-between items-center">
              <span>Accordion Item 3</span>
              <span class="text-muted-foreground/60">►</span>
            </button>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Purpose & Rationale</h3>
        <p class="text-foreground/80">Accordions organize content hierarchically and save vertical space by allowing users to expand only the sections they need. Use when you have multiple related sections of content where showing all at once would overwhelm the interface.</p>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Anatomy</h3>
        <div class="bg-muted p-4 rounded space-y-3">
          <div class="flex items-start gap-4">
            <div class="bg-primary text-card px-3 py-1 rounded text-sm font-mono whitespace-nowrap">AccordionItem</div>
            <span class="text-foreground/80">Container for each accordion section</span>
          </div>
          <div class="flex items-start gap-4">
            <div class="bg-primary text-card px-3 py-1 rounded text-sm font-mono whitespace-nowrap">AccordionTrigger</div>
            <span class="text-foreground/80">The clickable header that toggles content visibility</span>
          </div>
          <div class="flex items-start gap-4">
            <div class="bg-primary text-card px-3 py-1 rounded text-sm font-mono whitespace-nowrap">AccordionContent</div>
            <span class="text-foreground/80">The expandable content section</span>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Variants</h3>
        <ul class="space-y-2 text-foreground/80">
          <li>• <strong>Single</strong> - Only one item can be open at a time</li>
          <li>• <strong>Multiple</strong> - Multiple items can be open simultaneously</li>
          <li>• <strong>Bordered</strong> - Items have visible borders (default)</li>
          <li>• <strong>Seamless</strong> - No borders, minimal styling</li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Code Example</h3>
        <pre class="bg-foreground text-muted-foreground p-4 rounded overflow-auto text-sm"><code>import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'

export function AccordionDemo() {
  return (
    &lt;Accordion type="single" collapsible&gt;
      &lt;AccordionItem value="item-1"&gt;
        &lt;AccordionTrigger&gt;Is it accessible?&lt;/AccordionTrigger&gt;
        &lt;AccordionContent&gt;
          Yes. It adheres to the WAI-ARIA design pattern.
        &lt;/AccordionContent&gt;
      &lt;/AccordionItem&gt;
    &lt;/Accordion&gt;
  )
}</code></pre>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Do's and Don'ts</h3>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-green-50 border border-green-200 p-4 rounded">
            <h4 class="font-bold text-green-900 mb-2">Do's</h4>
            <ul class="space-y-1 text-sm text-green-800">
              <li>✓ Use clear, concise trigger labels</li>
              <li>✓ Keep content organized hierarchically</li>
              <li>✓ Use for 4+ related sections</li>
            </ul>
          </div>
          <div class="bg-red-50 border border-red-200 p-4 rounded">
            <h4 class="font-bold text-red-900 mb-2">Don'ts</h4>
            <ul class="space-y-1 text-sm text-red-800">
              <li>✗ Don't nest accordions too deeply</li>
              <li>✗ Don't hide critical information</li>
              <li>✗ Don't use for simple yes/no toggles</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Accessibility</h3>
        <ul class="space-y-2 text-foreground/80">
          <li>• Uses semantic HTML with proper button roles</li>
          <li>• Keyboard navigation with arrow keys supported</li>
          <li>• aria-expanded attribute indicates state</li>
          <li>• Proper focus management and visual indicators</li>
          <li>• Screen reader announcements for state changes</li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Content & Style Guidelines</h3>
        <div class="bg-blue-50 p-4 rounded text-foreground/80 space-y-2">
          <p><strong>Content:</strong> Keep trigger text short (2-5 words). Content should be substantial enough to warrant hiding.</p>
          <p><strong>Style:</strong> Use consistent padding and border styling. Ensure sufficient color contrast for trigger text and icons.</p>
          <p><strong>Animation:</strong> Default smooth 200ms transitions for expand/collapse.</p>
        </div>
      </div>
    </div>
  `,
}

batch1["alert"] = {
  title: "Alert",
  description: "A callout component for displaying important messages and information to users.",
  html: `
    <div class="space-y-12 p-8">
      <div>
        <h2 class="text-2xl font-bold mb-6">Preview</h2>
        <div class="space-y-4">
          <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 flex gap-3">
            <span class="text-blue-600 text-lg">ℹ</span>
            <div>
              <h4 class="font-semibold text-blue-900">Heads up!</h4>
              <p class="text-blue-800 text-sm">This is an informational alert with helpful context.</p>
            </div>
          </div>
          <div class="bg-amber-50 border border-amber-200 rounded-lg p-4 flex gap-3">
            <span class="text-amber-600 text-lg">⚠</span>
            <div>
              <h4 class="font-semibold text-amber-900">Warning</h4>
              <p class="text-amber-800 text-sm">This action requires your attention before proceeding.</p>
            </div>
          </div>
          <div class="bg-red-50 border border-red-200 rounded-lg p-4 flex gap-3">
            <span class="text-red-600 text-lg">✕</span>
            <div>
              <h4 class="font-semibold text-red-900">Error</h4>
              <p class="text-red-800 text-sm">Something went wrong. Please check your input and try again.</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Purpose & Rationale</h3>
        <p class="text-foreground/80">Alerts draw attention to important information that users need to see and understand. They work best for system messages, validation feedback, and contextual warnings that require acknowledgment.</p>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Anatomy</h3>
        <div class="bg-muted p-4 rounded space-y-3">
          <div class="flex items-start gap-4">
            <div class="bg-primary text-card px-3 py-1 rounded text-sm font-mono whitespace-nowrap">Icon</div>
            <span class="text-foreground/80">Visual indicator of alert type</span>
          </div>
          <div class="flex items-start gap-4">
            <div class="bg-primary text-card px-3 py-1 rounded text-sm font-mono whitespace-nowrap">Title</div>
            <span class="text-foreground/80">Bold headline summarizing the alert</span>
          </div>
          <div class="flex items-start gap-4">
            <div class="bg-primary text-card px-3 py-1 rounded text-sm font-mono whitespace-nowrap">Description</div>
            <span class="text-foreground/80">Detailed message explaining context or action</span>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Variants</h3>
        <ul class="space-y-2 text-foreground/80">
          <li>• <strong>Default</strong> - Neutral blue for general information</li>
          <li>• <strong>Destructive</strong> - Red for errors and critical issues</li>
          <li>• <strong>Warning</strong> - Amber for cautions and warnings</li>
          <li>• <strong>Success</strong> - Green for confirmations</li>
          <li>• <strong>Info</strong> - Blue for helpful information</li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Code Example</h3>
        <pre class="bg-foreground text-muted-foreground p-4 rounded overflow-auto text-sm"><code>import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'

export function AlertDemo() {
  return (
    &lt;Alert&gt;
      &lt;AlertTitle&gt;Heads up!&lt;/AlertTitle&gt;
      &lt;AlertDescription&gt;
        You can add components and dependencies to your app using the cli.
      &lt;/AlertDescription&gt;
    &lt;/Alert&gt;
  )
}</code></pre>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Do's and Don'ts</h3>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-green-50 border border-green-200 p-4 rounded">
            <h4 class="font-bold text-green-900 mb-2">Do's</h4>
            <ul class="space-y-1 text-sm text-green-800">
              <li>✓ Use appropriate color for message type</li>
              <li>✓ Keep message concise and actionable</li>
              <li>✓ Use icons that match the alert type</li>
            </ul>
          </div>
          <div class="bg-red-50 border border-red-200 p-4 rounded">
            <h4 class="font-bold text-red-900 mb-2">Don'ts</h4>
            <ul class="space-y-1 text-sm text-red-800">
              <li>✗ Don't overuse alerts - use sparingly</li>
              <li>✗ Don't use alerts for non-critical info</li>
              <li>✗ Don't mix multiple alert types on one page</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Accessibility</h3>
        <ul class="space-y-2 text-foreground/80">
          <li>• role="alert" ensures screen readers announce immediately</li>
          <li>• Color is not the only indicator of alert type - includes icon</li>
          <li>• Proper color contrast ratios meet WCAG AA standards</li>
          <li>• Text alternatives for icon-only content</li>
          <li>• Sufficient whitespace for readability</li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Content & Style Guidelines</h3>
        <div class="bg-blue-50 p-4 rounded text-foreground/80 space-y-2">
          <p><strong>Content:</strong> Start with the most important information. Keep descriptions under 2-3 sentences.</p>
          <p><strong>Style:</strong> Use brand colors with sufficient contrast. Icons should be 20-24px for visibility.</p>
          <p><strong>Placement:</strong> Position alerts prominently, typically at the top of content or near related fields.</p>
        </div>
      </div>
    </div>
  `,
}

batch1["avatar"] = {
  title: "Avatar",
  description: "A component for displaying user profile images with automatic fallback to initials.",
  html: `
    <div class="space-y-12 p-8">
      <div>
        <h2 class="text-2xl font-bold mb-6">Preview</h2>
        <div class="space-y-6">
          <div>
            <h4 class="text-sm font-semibold text-muted-foreground mb-3">Image Avatar</h4>
            <div class="flex gap-4">
              <div class="w-10 h-10 rounded-full bg-muted-foreground/40 flex items-center justify-center text-sm font-semibold text-card overflow-hidden">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%234F46E5'/%3E%3Ctext x='50' y='60' font-size='50' font-weight='bold' text-anchor='middle' fill='white'%3EJD%3C/text%3E%3C/svg%3E" alt="JD" class="w-full h-full object-cover" />
              </div>
              <div class="w-12 h-12 rounded-full bg-muted-foreground/40 flex items-center justify-center text-sm font-semibold text-card overflow-hidden">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%3310B981'/%3E%3Ctext x='50' y='60' font-size='50' font-weight='bold' text-anchor='middle' fill='white'%3ESM%3C/text%3E%3C/svg%3E" alt="SM" class="w-full h-full object-cover" />
              </div>
              <div class="w-14 h-14 rounded-full bg-muted-foreground/40 flex items-center justify-center text-base font-semibold text-card overflow-hidden">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23F59E0B'/%3E%3Ctext x='50' y='60' font-size='50' font-weight='bold' text-anchor='middle' fill='white'%3EAK%3C/text%3E%3C/svg%3E" alt="AK" class="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          <div>
            <h4 class="text-sm font-semibold text-muted-foreground mb-3">Fallback Avatars (Initials)</h4>
            <div class="flex gap-4">
              <div class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-sm font-semibold text-card">JD</div>
              <div class="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-sm font-semibold text-card">SM</div>
              <div class="w-14 h-14 rounded-full bg-amber-500 flex items-center justify-center text-base font-semibold text-card">AK</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Purpose & Rationale</h3>
        <p class="text-foreground/80">Avatars provide visual identification for users throughout the interface. They work as profile indicators, comments, team member lists, and user mentions. The fallback to initials ensures a complete identity is always visible.</p>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Anatomy</h3>
        <div class="bg-muted p-4 rounded space-y-3">
          <div class="flex items-start gap-4">
            <div class="bg-primary text-card px-3 py-1 rounded text-sm font-mono whitespace-nowrap">AvatarImage</div>
            <span class="text-foreground/80">The user's profile image or photo</span>
          </div>
          <div class="flex items-start gap-4">
            <div class="bg-primary text-card px-3 py-1 rounded text-sm font-mono whitespace-nowrap">AvatarFallback</div>
            <span class="text-foreground/80">Fallback content, typically user initials</span>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Variants</h3>
        <ul class="space-y-2 text-foreground/80">
          <li>• <strong>Small</strong> - 32px for inline mentions and compact lists</li>
          <li>• <strong>Medium</strong> - 48px for comments and standard contexts</li>
          <li>• <strong>Large</strong> - 64px+ for profile headers and hero sections</li>
          <li>• <strong>Squared</strong> - Rounded corners for alternative styling</li>
          <li>• <strong>Badge</strong> - Avatar with online/status indicator</li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Code Example</h3>
        <pre class="bg-foreground text-muted-foreground p-4 rounded overflow-auto text-sm"><code>import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

export function AvatarDemo() {
  return (
    &lt;Avatar&gt;
      &lt;AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" /&gt;
      &lt;AvatarFallback&gt;CN&lt;/AvatarFallback&gt;
    &lt;/Avatar&gt;
  )
}</code></pre>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Do's and Don'ts</h3>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-green-50 border border-green-200 p-4 rounded">
            <h4 class="font-bold text-green-900 mb-2">Do's</h4>
            <ul class="space-y-1 text-sm text-green-800">
              <li>✓ Provide meaningful fallback initials</li>
              <li>✓ Use consistent sizing in contexts</li>
              <li>✓ Optimize image sizes for fast loading</li>
            </ul>
          </div>
          <div class="bg-red-50 border border-red-200 p-4 rounded">
            <h4 class="font-bold text-red-900 mb-2">Don'ts</h4>
            <ul class="space-y-1 text-sm text-red-800">
              <li>✗ Don't use non-square aspect ratio images</li>
              <li>✗ Don't make avatars too small to distinguish</li>
              <li>✗ Don't skip fallback content</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Accessibility</h3>
        <ul class="space-y-2 text-foreground/80">
          <li>• Always include alt text for images</li>
          <li>• Sufficient color contrast for initials on background</li>
          <li>• Semantic HTML with proper image attributes</li>
          <li>• Works with or without images loaded</li>
          <li>• Clear indication of online/offline status if applicable</li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Content & Style Guidelines</h3>
        <div class="bg-blue-50 p-4 rounded text-foreground/80 space-y-2">
          <p><strong>Images:</strong> Use square images (1:1 aspect ratio). Recommended minimum 128x128px for quality at all sizes.</p>
          <p><strong>Fallback:</strong> Use user's first and last name initials, uppercase and left-aligned.</p>
          <p><strong>Colors:</strong> Use a consistent color palette for initials backgrounds, cycling through brand colors.</p>
        </div>
      </div>
    </div>
  `,
}

batch1["button-group"] = {
  title: "Button Group",
  description: "A component that groups related buttons together with shared styling and spacing.",
  html: `
    <div class="space-y-12 p-8">
      <div>
        <h2 class="text-2xl font-bold mb-6">Preview</h2>
        <div class="space-y-4">
          <div>
            <h4 class="text-sm font-semibold text-muted-foreground mb-3">Horizontal Button Group</h4>
            <div class="flex border border-border rounded-lg overflow-hidden bg-card">
              <button class="px-4 py-2 border-r border-border hover:bg-muted/30 font-medium text-sm">List View</button>
              <button class="px-4 py-2 border-r border-border hover:bg-muted/30 font-medium text-sm">Grid View</button>
              <button class="px-4 py-2 hover:bg-muted/30 font-medium text-sm">Table View</button>
            </div>
          </div>
          <div>
            <h4 class="text-sm font-semibold text-muted-foreground mb-3">With Icon Buttons</h4>
            <div class="flex border border-border rounded-lg overflow-hidden bg-card">
              <button class="px-3 py-2 border-r border-border hover:bg-muted/30 text-lg">←</button>
              <button class="px-3 py-2 border-r border-border hover:bg-muted/30 text-lg">↓</button>
              <button class="px-3 py-2 border-r border-border hover:bg-muted/30 text-lg">↑</button>
              <button class="px-3 py-2 hover:bg-muted/30 text-lg">→</button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Purpose & Rationale</h3>
        <p class="text-foreground/80">Button groups logically organize mutually exclusive actions or related functions. They improve visual hierarchy and reduce cognitive load by showing users that buttons are connected and part of the same interaction.</p>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Anatomy</h3>
        <div class="bg-muted p-4 rounded space-y-3">
          <div class="flex items-start gap-4">
            <div class="bg-primary text-card px-3 py-1 rounded text-sm font-mono whitespace-nowrap">Button Group</div>
            <span class="text-foreground/80">Container with flex layout and shared border</span>
          </div>
          <div class="flex items-start gap-4">
            <div class="bg-primary text-card px-3 py-1 rounded text-sm font-mono whitespace-nowrap">Button</div>
            <span class="text-foreground/80">Individual button with shared styling</span>
          </div>
          <div class="flex items-start gap-4">
            <div class="bg-primary text-card px-3 py-1 rounded text-sm font-mono whitespace-nowrap">Separator</div>
            <span class="text-foreground/80">Divider between buttons</span>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Variants</h3>
        <ul class="space-y-2 text-foreground/80">
          <li>• <strong>Horizontal</strong> - Buttons arranged left to right (default)</li>
          <li>• <strong>Vertical</strong> - Buttons stacked top to bottom</li>
          <li>• <strong>Segmented</strong> - One button can be active/selected</li>
          <li>• <strong>Exclusive</strong> - Only one button can be active at a time</li>
          <li>• <strong>Multiple Select</strong> - Multiple buttons can be active</li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Code Example</h3>
        <pre class="bg-foreground text-muted-foreground p-4 rounded overflow-auto text-sm"><code>import { ButtonGroup, Button } from '@/components/ui/button-group'

export function ButtonGroupDemo() {
  return (
    &lt;ButtonGroup&gt;
      &lt;Button&gt;List View&lt;/Button&gt;
      &lt;Button&gt;Grid View&lt;/Button&gt;
      &lt;Button&gt;Table View&lt;/Button&gt;
    &lt;/ButtonGroup&gt;
  )
}</code></pre>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Do's and Don'ts</h3>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-green-50 border border-green-200 p-4 rounded">
            <h4 class="font-bold text-green-900 mb-2">Do's</h4>
            <ul class="space-y-1 text-sm text-green-800">
              <li>✓ Limit to 2-5 related buttons</li>
              <li>✓ Use clear, concise labels</li>
              <li>✓ Show active state clearly</li>
            </ul>
          </div>
          <div class="bg-red-50 border border-red-200 p-4 rounded">
            <h4 class="font-bold text-red-900 mb-2">Don'ts</h4>
            <ul class="space-y-1 text-sm text-red-800">
              <li>✗ Don't group unrelated actions</li>
              <li>✗ Don't use for navigation</li>
              <li>✗ Don't use very long button labels</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Accessibility</h3>
        <ul class="space-y-2 text-foreground/80">
          <li>• Proper button semantics with role="group"</li>
          <li>• Clear focus indicators for keyboard navigation</li>
          <li>• aria-pressed attribute for toggle states</li>
          <li>• Visual indication of selected/active state</li>
          <li>• Support for arrow key navigation between buttons</li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Content & Style Guidelines</h3>
        <div class="bg-blue-50 p-4 rounded text-foreground/80 space-y-2">
          <p><strong>Buttons:</strong> Use parallel labels like "List / Grid / Table" or "Edit / Delete / Share".</p>
          <p><strong>Active State:</strong> Apply primary color or background to indicate selection. Maintain same button size for consistency.</p>
          <p><strong>Spacing:</strong> No gap between buttons; borders create visual separation.</p>
        </div>
      </div>
    </div>
  `,
}

batch1["carousel"] = {
  title: "Carousel",
  description: "A slideshow component for displaying multiple items with navigation controls and indicators.",
  html: `
    <div class="space-y-12 p-8">
      <div>
        <h2 class="text-2xl font-bold mb-6">Preview</h2>
        <div class="w-full max-w-2xl mx-auto">
          <div class="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg h-64 flex items-center justify-center text-card text-2xl font-bold mb-4">
            Slide 1 of 5
          </div>
          <div class="flex justify-between items-center">
            <button class="px-4 py-2 border border-border rounded hover:bg-muted font-semibold">← Previous</button>
            <div class="flex gap-2">
              <button class="w-3 h-3 rounded-full bg-primary"></button>
              <button class="w-3 h-3 rounded-full bg-muted-foreground/40 hover:bg-muted-foreground/60"></button>
              <button class="w-3 h-3 rounded-full bg-muted-foreground/40 hover:bg-muted-foreground/60"></button>
              <button class="w-3 h-3 rounded-full bg-muted-foreground/40 hover:bg-muted-foreground/60"></button>
              <button class="w-3 h-3 rounded-full bg-muted-foreground/40 hover:bg-muted-foreground/60"></button>
            </div>
            <button class="px-4 py-2 border border-border rounded hover:bg-muted font-semibold">Next →</button>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Purpose & Rationale</h3>
        <p class="text-foreground/80">Carousels efficiently display multiple items in a contained space. They're ideal for showcasing products, testimonials, or sequential content where users can browse through items without leaving the page.</p>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Anatomy</h3>
        <div class="bg-muted p-4 rounded space-y-3">
          <div class="flex items-start gap-4">
            <div class="bg-primary text-card px-3 py-1 rounded text-sm font-mono whitespace-nowrap">CarouselContent</div>
            <span class="text-foreground/80">Container for carousel items</span>
          </div>
          <div class="flex items-start gap-4">
            <div class="bg-primary text-card px-3 py-1 rounded text-sm font-mono whitespace-nowrap">CarouselItem</div>
            <span class="text-foreground/80">Individual slide or card</span>
          </div>
          <div class="flex items-start gap-4">
            <div class="bg-primary text-card px-3 py-1 rounded text-sm font-mono whitespace-nowrap">CarouselPrevious</div>
            <span class="text-foreground/80">Navigation button for previous slide</span>
          </div>
          <div class="flex items-start gap-4">
            <div class="bg-primary text-card px-3 py-1 rounded text-sm font-mono whitespace-nowrap">CarouselNext</div>
            <span class="text-foreground/80">Navigation button for next slide</span>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Variants</h3>
        <ul class="space-y-2 text-foreground/80">
          <li>• <strong>Manual Navigation</strong> - User controls via arrows (default)</li>
          <li>• <strong>Auto-play</strong> - Automatically cycles through slides</li>
          <li>• <strong>Visible Items</strong> - Show multiple items at once with scrolling</li>
          <li>• <strong>Full-width</strong> - Carousel extends edge to edge</li>
          <li>• <strong>Thumbnail Navigation</strong> - Select slides via preview thumbnails</li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Code Example</h3>
        <pre class="bg-foreground text-muted-foreground p-4 rounded overflow-auto text-sm"><code>import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel'

export function CarouselDemo() {
  return (
    &lt;Carousel&gt;
      &lt;CarouselContent&gt;
        &lt;CarouselItem&gt;
          &lt;div class="bg-blue-500 h-64 flex items-center justify-center"&gt;Slide 1&lt;/div&gt;
        &lt;/CarouselItem&gt;
        &lt;CarouselItem&gt;
          &lt;div class="bg-blue-500 h-64 flex items-center justify-center"&gt;Slide 2&lt;/div&gt;
        &lt;/CarouselItem&gt;
      &lt;/CarouselContent&gt;
      &lt;CarouselPrevious /&gt;
      &lt;CarouselNext /&gt;
    &lt;/Carousel&gt;
  )
}</code></pre>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Do's and Don'ts</h3>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-green-50 border border-green-200 p-4 rounded">
            <h4 class="font-bold text-green-900 mb-2">Do's</h4>
            <ul class="space-y-1 text-sm text-green-800">
              <li>✓ Provide clear navigation controls</li>
              <li>✓ Show slide indicators/dots</li>
              <li>✓ Allow keyboard arrow navigation</li>
            </ul>
          </div>
          <div class="bg-red-50 border border-red-200 p-4 rounded">
            <h4 class="font-bold text-red-900 mb-2">Don'ts</h4>
            <ul class="space-y-1 text-sm text-red-800">
              <li>✗ Don't auto-play indefinitely</li>
              <li>✗ Don't use carousel for critical content</li>
              <li>✗ Don't make it hard to pause/navigate</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Accessibility</h3>
        <ul class="space-y-2 text-foreground/80">
          <li>• Keyboard navigation with arrow keys</li>
          <li>• Pause auto-play on hover or focus</li>
          <li>• Clear focus indicators for controls</li>
          <li>• aria-live regions for slide changes</li>
          <li>• Meaningful alt text for carousel content</li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Content & Style Guidelines</h3>
        <div class="bg-blue-50 p-4 rounded text-foreground/80 space-y-2">
          <p><strong>Content:</strong> Keep items visually consistent. Avoid vastly different sizes or aspect ratios between slides.</p>
          <p><strong>Navigation:</strong> Place controls outside or with transparent overlays. Clearly label Previous/Next buttons.</p>
          <p><strong>Animation:</strong> Use smooth transitions (300-500ms). Avoid jarring movements.</p>
        </div>
      </div>
    </div>
  `,
}

batch1["chart"] = {
  title: "Chart",
  description: "A data visualization wrapper component for building responsive charts using Recharts.",
  html: `
    <div class="space-y-12 p-8">
      <div>
        <h2 class="text-2xl font-bold mb-6">Preview</h2>
        <div class="space-y-6">
          <div>
            <h4 class="text-sm font-semibold text-muted-foreground mb-3">Chart Color Tokens</h4>
            <div class="grid grid-cols-5 gap-3">
              <div class="space-y-2">
                <div class="w-full h-16 rounded-lg" style="background-color: #3b82f6;"></div>
                <div class="text-xs text-muted-foreground font-mono">--chart-1</div>
              </div>
              <div class="space-y-2">
                <div class="w-full h-16 rounded-lg" style="background-color: #ef4444;"></div>
                <div class="text-xs text-muted-foreground font-mono">--chart-2</div>
              </div>
              <div class="space-y-2">
                <div class="w-full h-16 rounded-lg" style="background-color: #10b981;"></div>
                <div class="text-xs text-muted-foreground font-mono">--chart-3</div>
              </div>
              <div class="space-y-2">
                <div class="w-full h-16 rounded-lg" style="background-color: #f59e0b;"></div>
                <div class="text-xs text-muted-foreground font-mono">--chart-4</div>
              </div>
              <div class="space-y-2">
                <div class="w-full h-16 rounded-lg" style="background-color: #8b5cf6;"></div>
                <div class="text-xs text-muted-foreground font-mono">--chart-5</div>
              </div>
            </div>
          </div>
          <div class="border border-border rounded-lg p-6">
            <h4 class="text-sm font-semibold text-foreground/80 mb-4">Sample Chart Structure</h4>
            <svg class="w-full h-64" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
              <!-- Grid lines -->
              <line x1="50" y1="250" x2="350" y2="250" stroke="#e5e7eb" stroke-width="1"/>
              <line x1="50" y1="200" x2="350" y2="200" stroke="#e5e7eb" stroke-width="1"/>
              <line x1="50" y1="150" x2="350" y2="150" stroke="#e5e7eb" stroke-width="1"/>
              <line x1="50" y1="100" x2="350" y2="100" stroke="#e5e7eb" stroke-width="1"/>
              <!-- Bars -->
              <rect x="80" y="180" width="30" height="70" fill="#3b82f6"/>
              <rect x="130" y="120" width="30" height="130" fill="#ef4444"/>
              <rect x="180" y="160" width="30" height="90" fill="#10b981"/>
              <rect x="230" y="140" width="30" height="110" fill="#f59e0b"/>
              <rect x="280" y="100" width="30" height="150" fill="#8b5cf6"/>
              <!-- Axes -->
              <line x1="50" y1="50" x2="50" y2="250" stroke="#374151" stroke-width="2"/>
              <line x1="50" y1="250" x2="350" y2="250" stroke="#374151" stroke-width="2"/>
            </svg>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Purpose & Rationale</h3>
        <p class="text-foreground/80">Charts transform complex data into visual insights. This wrapper component provides consistent styling, responsive sizing, and brand-aligned colors for all chart types. It abstracts Recharts complexity while maintaining flexibility.</p>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Anatomy</h3>
        <div class="bg-muted p-4 rounded space-y-3">
          <div class="flex items-start gap-4">
            <div class="bg-primary text-card px-3 py-1 rounded text-sm font-mono whitespace-nowrap">ChartContainer</div>
            <span class="text-foreground/80">Responsive wrapper with proper sizing</span>
          </div>
          <div class="flex items-start gap-4">
            <div class="bg-primary text-card px-3 py-1 rounded text-sm font-mono whitespace-nowrap">ChartConfig</div>
            <span class="text-foreground/80">Configuration object for chart tokens</span>
          </div>
          <div class="flex items-start gap-4">
            <div class="bg-primary text-card px-3 py-1 rounded text-sm font-mono whitespace-nowrap">Chart Colors</div>
            <span class="text-foreground/80">5 brand-aligned colors (--chart-1 through --chart-5)</span>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Variants</h3>
        <ul class="space-y-2 text-foreground/80">
          <li>• <strong>Line Chart</strong> - Trend data over time</li>
          <li>• <strong>Bar Chart</strong> - Comparing values across categories</li>
          <li>• <strong>Pie/Donut Chart</strong> - Part-to-whole relationships</li>
          <li>• <strong>Area Chart</strong> - Stacked area for multiple series</li>
          <li>• <strong>Scatter Plot</strong> - Correlation visualization</li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Code Example</h3>
        <pre class="bg-foreground text-muted-foreground p-4 rounded overflow-auto text-sm"><code>import { ChartContainer, ChartConfig } from '@/components/ui/chart'
import { BarChart, Bar, XAxis, YAxis } from 'recharts'

const chartData = [
  { month: 'Jan', revenue: 4000 },
  { month: 'Feb', revenue: 3000 },
]

const chartConfig = {
  revenue: {
    label: 'Revenue',
    color: 'var(--chart-1)',
  },
}

export function ChartDemo() {
  return (
    &lt;ChartContainer config={chartConfig}&gt;
      &lt;BarChart data={chartData}&gt;
        &lt;XAxis dataKey="month" /&gt;
        &lt;Bar dataKey="revenue" fill="var(--chart-1)" /&gt;
      &lt;/BarChart&gt;
    &lt;/ChartContainer&gt;
  )
}</code></pre>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Do's and Don'ts</h3>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-green-50 border border-green-200 p-4 rounded">
            <h4 class="font-bold text-green-900 mb-2">Do's</h4>
            <ul class="space-y-1 text-sm text-green-800">
              <li>✓ Use consistent colors from chart tokens</li>
              <li>✓ Include clear axis labels and legends</li>
              <li>✓ Provide data context and sources</li>
            </ul>
          </div>
          <div class="bg-red-50 border border-red-200 p-4 rounded">
            <h4 class="font-bold text-red-900 mb-2">Don'ts</h4>
            <ul class="space-y-1 text-sm text-red-800">
              <li>✗ Don't use more than 5 data series</li>
              <li>✗ Don't distort scales for dramatic effect</li>
              <li>✗ Don't forget accessibility labels</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Accessibility</h3>
        <ul class="space-y-2 text-foreground/80">
          <li>• Descriptive title and caption for each chart</li>
          <li>• Data table alternative available</li>
          <li>• Color isn't the only way to differentiate data</li>
          <li>• Legend with proper labels for all series</li>
          <li>• High contrast ratio for text on charts</li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Content & Style Guidelines</h3>
        <div class="bg-blue-50 p-4 rounded text-foreground/80 space-y-2">
          <p><strong>Colors:</strong> Use chart color tokens (1-5) in order. Don't mix with UI colors. Maintain 7:1 contrast minimum.</p>
          <p><strong>Labels:</strong> Include clear axis titles, legend, and data source. Abbreviate long labels intelligently.</p>
          <p><strong>Responsiveness:</strong> Charts should resize fluidly. Rotate labels if needed on small screens.</p>
        </div>
      </div>
    </div>
  `,
}

batch1["collapsible"] = {
  title: "Collapsible",
  description: "A simple component that expands and collapses content sections with a trigger button.",
  html: `
    <div class="space-y-12 p-8">
      <div>
        <h2 class="text-2xl font-bold mb-6">Preview</h2>
        <div class="space-y-3 max-w-md">
          <div class="border border-border rounded-lg">
            <button class="w-full px-4 py-3 text-left font-semibold hover:bg-muted/30 flex justify-between items-center">
              <span>Are you sure you want to delete?</span>
              <span class="text-muted-foreground/60">▼</span>
            </button>
            <div class="px-4 py-3 border-t border-border bg-muted/30 space-y-3">
              <p class="text-foreground/80 text-sm">This action cannot be undone. This will permanently delete your account and remove all associated data.</p>
              <div class="flex gap-2">
                <button class="px-3 py-2 bg-red-600 text-card rounded text-sm hover:bg-red-700">Delete</button>
                <button class="px-3 py-2 border border-border rounded text-sm hover:bg-muted">Cancel</button>
              </div>
            </div>
          </div>
          <div class="border border-border rounded-lg">
            <button class="w-full px-4 py-3 text-left font-semibold hover:bg-muted/30 flex justify-between items-center">
              <span>Show advanced settings</span>
              <span class="text-muted-foreground/60">►</span>
            </button>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Purpose & Rationale</h3>
        <p class="text-foreground/80">Collapsibles hide supplementary content behind a trigger to keep interfaces clean. Unlike accordions, they work independently and don't automatically close when others open, making them ideal for single expandable sections.</p>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Anatomy</h3>
        <div class="bg-muted p-4 rounded space-y-3">
          <div class="flex items-start gap-4">
            <div class="bg-primary text-card px-3 py-1 rounded text-sm font-mono whitespace-nowrap">Collapsible</div>
            <span class="text-foreground/80">Root container managing state</span>
          </div>
          <div class="flex items-start gap-4">
            <div class="bg-primary text-card px-3 py-1 rounded text-sm font-mono whitespace-nowrap">CollapsibleTrigger</div>
            <span class="text-foreground/80">Button that toggles content visibility</span>
          </div>
          <div class="flex items-start gap-4">
            <div class="bg-primary text-card px-3 py-1 rounded text-sm font-mono whitespace-nowrap">CollapsibleContent</div>
            <span class="text-foreground/80">Content that expands and collapses</span>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Variants</h3>
        <ul class="space-y-2 text-foreground/80">
          <li>• <strong>Default</strong> - Starts closed, opens on click</li>
          <li>• <strong>Open by Default</strong> - Starts expanded</li>
          <li>• <strong>Disabled</strong> - Cannot be toggled</li>
          <li>• <strong>With Icon</strong> - Includes chevron or arrow icon</li>
          <li>• <strong>Custom Animation</strong> - Adjustable transition speed</li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Code Example</h3>
        <pre class="bg-foreground text-muted-foreground p-4 rounded overflow-auto text-sm"><code>import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible'

export function CollapsibleDemo() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    &lt;Collapsible open={isOpen} onOpenChange={setIsOpen}&gt;
      &lt;CollapsibleTrigger&gt;Can I use this in my project?&lt;/CollapsibleTrigger&gt;
      &lt;CollapsibleContent&gt;
        Yes. Free for personal and commercial use.
      &lt;/CollapsibleContent&gt;
    &lt;/Collapsible&gt;
  )
}</code></pre>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Do's and Don'ts</h3>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-green-50 border border-green-200 p-4 rounded">
            <h4 class="font-bold text-green-900 mb-2">Do's</h4>
            <ul class="space-y-1 text-sm text-green-800">
              <li>✓ Use clear trigger language</li>
              <li>✓ Indicate open/closed state visually</li>
              <li>✓ Support keyboard interaction</li>
            </ul>
          </div>
          <div class="bg-red-50 border border-red-200 p-4 rounded">
            <h4 class="font-bold text-red-900 mb-2">Don'ts</h4>
            <ul class="space-y-1 text-sm text-red-800">
              <li>✗ Don't hide critical information</li>
              <li>✗ Don't animate aggressively</li>
              <li>✗ Don't use unclear icons</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Accessibility</h3>
        <ul class="space-y-2 text-foreground/80">
          <li>• Semantic button element for trigger</li>
          <li>• aria-expanded attribute reflects state</li>
          <li>• aria-controls links trigger to content</li>
          <li>• Keyboard navigation fully supported</li>
          <li>• Focus visible and keyboard accessible</li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Content & Style Guidelines</h3>
        <div class="bg-blue-50 p-4 rounded text-foreground/80 space-y-2">
          <p><strong>Trigger:</strong> Use action verbs like "Show", "Reveal", or questions like "Need help?". Keep text short.</p>
          <p><strong>Content:</strong> Provide meaningful supplementary information. Suitable for advanced options or warnings.</p>
          <p><strong>Animation:</strong> Smooth 200ms transitions work best. Avoid instant expand/collapse.</p>
        </div>
      </div>
    </div>
  `,
}

batch1["context-menu"] = {
  title: "Context Menu",
  description: "A menu that appears on right-click, providing contextual actions for an element.",
  html: `
    <div class="space-y-12 p-8">
      <div>
        <h2 class="text-2xl font-bold mb-6">Preview</h2>
        <div class="space-y-4">
          <p class="text-sm text-muted-foreground">Right-click on the target area below:</p>
          <div class="border-2 border-dashed border-border rounded-lg p-8 text-center text-muted-foreground bg-muted/30 min-h-48 flex items-center justify-center">
            <div class="text-lg font-semibold">Right-click target area</div>
          </div>
          <div class="border border-border rounded-lg bg-card shadow-lg inline-block">
            <div class="px-2 py-1 text-xs text-muted-foreground border-b border-border px-3 py-1.5">Context Menu</div>
            <div class="divide-y divide-border">
              <button class="w-full text-left px-3 py-2 hover:bg-muted text-sm">Edit</button>
              <button class="w-full text-left px-3 py-2 hover:bg-muted text-sm">Duplicate</button>
              <button class="w-full text-left px-3 py-2 hover:bg-muted text-sm">Copy</button>
              <button class="w-full text-left px-3 py-2 hover:bg-muted text-sm">Share</button>
              <div class="border-t border-border"></div>
              <button class="w-full text-left px-3 py-2 hover:bg-red-50 text-sm text-red-600">Delete</button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Purpose & Rationale</h3>
        <p class="text-foreground/80">Context menus provide quick access to relevant actions without cluttering the main interface. They appear where users click, making actions discoverable while maintaining focus on the content.</p>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Anatomy</h3>
        <div class="bg-muted p-4 rounded space-y-3">
          <div class="flex items-start gap-4">
            <div class="bg-primary text-card px-3 py-1 rounded text-sm font-mono whitespace-nowrap">ContextMenu</div>
            <span class="text-foreground/80">Root container for the context menu</span>
          </div>
          <div class="flex items-start gap-4">
            <div class="bg-primary text-card px-3 py-1 rounded text-sm font-mono whitespace-nowrap">ContextMenuTrigger</div>
            <span class="text-foreground/80">Element that triggers menu on right-click</span>
          </div>
          <div class="flex items-start gap-4">
            <div class="bg-primary text-card px-3 py-1 rounded text-sm font-mono whitespace-nowrap">ContextMenuContent</div>
            <span class="text-foreground/80">The menu popup with items</span>
          </div>
          <div class="flex items-start gap-4">
            <div class="bg-primary text-card px-3 py-1 rounded text-sm font-mono whitespace-nowrap">ContextMenuItem</div>
            <span class="text-foreground/80">Individual menu item</span>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Variants</h3>
        <ul class="space-y-2 text-foreground/80">
          <li>• <strong>Basic Menu</strong> - Simple list of actions</li>
          <li>• <strong>With Separators</strong> - Group related items</li>
          <li>• <strong>With Icons</strong> - Visual indicators for actions</li>
          <li>• <strong>With Disabled Items</strong> - Unavailable actions shown as disabled</li>
          <li>• <strong>Submenu</strong> - Nested menu items</li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Code Example</h3>
        <pre class="bg-foreground text-muted-foreground p-4 rounded overflow-auto text-sm"><code>import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem } from '@/components/ui/context-menu'

export function ContextMenuDemo() {
  return (
    &lt;ContextMenu&gt;
      &lt;ContextMenuTrigger&gt;Right click here&lt;/ContextMenuTrigger&gt;
      &lt;ContextMenuContent&gt;
        &lt;ContextMenuItem&gt;Edit&lt;/ContextMenuItem&gt;
        &lt;ContextMenuItem&gt;Duplicate&lt;/ContextMenuItem&gt;
        &lt;ContextMenuItem&gt;Delete&lt;/ContextMenuItem&gt;
      &lt;/ContextMenuContent&gt;
    &lt;/ContextMenu&gt;
  )
}</code></pre>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Do's and Don'ts</h3>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-green-50 border border-green-200 p-4 rounded">
            <h4 class="font-bold text-green-900 mb-2">Do's</h4>
            <ul class="space-y-1 text-sm text-green-800">
              <li>✓ Limit to 5-8 contextual items</li>
              <li>✓ Show only relevant actions</li>
              <li>✓ Use separators to group items</li>
            </ul>
          </div>
          <div class="bg-red-50 border border-red-200 p-4 rounded">
            <h4 class="font-bold text-red-900 mb-2">Don'ts</h4>
            <ul class="space-y-1 text-sm text-red-800">
              <li>✗ Don't duplicate main menu actions</li>
              <li>✗ Don't show destructive actions first</li>
              <li>✗ Don't use unclear icons</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Accessibility</h3>
        <ul class="space-y-2 text-foreground/80">
          <li>• Keyboard alternative: expose same actions elsewhere</li>
          <li>• role="menu" for semantic structure</li>
          <li>• Arrow key navigation between items</li>
          <li>• Clear focus indicators</li>
          <li>• Escape key closes menu</li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Content & Style Guidelines</h3>
        <div class="bg-blue-50 p-4 rounded text-foreground/80 space-y-2">
          <p><strong>Items:</strong> Use short action verbs. Order by frequency of use or logical grouping.</p>
          <p><strong>Destructive Actions:</strong> Place delete/remove at bottom, with red color for warning.</p>
          <p><strong>Position:</strong> Menu appears near cursor. Adjust if near viewport edge.</p>
        </div>
      </div>
    </div>
  `,
}

batch1["data-table"] = {
  title: "Data Table",
  description: "A rich data table component with sorting, filtering, and pagination capabilities.",
  html: `
    <div class="space-y-12 p-8">
      <div>
        <h2 class="text-2xl font-bold mb-6">Preview</h2>
        <div class="space-y-4">
          <div class="flex justify-between items-center mb-4">
            <input type="text" placeholder="Search tasks..." class="px-3 py-2 border border-border rounded-lg text-sm" />
            <select class="px-3 py-2 border border-border rounded-lg text-sm">
              <option>Status</option>
              <option>Pending</option>
              <option>Completed</option>
            </select>
          </div>
          <div class="border border-border rounded-lg overflow-hidden">
            <table class="w-full text-sm">
              <thead class="bg-muted border-b border-border">
                <tr>
                  <th class="px-4 py-3 text-left font-semibold text-foreground/80">Task</th>
                  <th class="px-4 py-3 text-left font-semibold text-foreground/80">Status <span class="text-xs">▼</span></th>
                  <th class="px-4 py-3 text-left font-semibold text-foreground/80">Due Date</th>
                  <th class="px-4 py-3 text-left font-semibold text-foreground/80">Assigned To</th>
                  <th class="px-4 py-3 text-left font-semibold text-foreground/80">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-border hover:bg-muted/30">
                  <td class="px-4 py-3 text-foreground">Design new landing page</td>
                  <td class="px-4 py-3"><span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">In Progress</span></td>
                  <td class="px-4 py-3 text-muted-foreground">Mar 15, 2026</td>
                  <td class="px-4 py-3 text-muted-foreground">Sarah</td>
                  <td class="px-4 py-3 text-primary cursor-pointer">Edit</td>
                </tr>
                <tr class="border-b border-border hover:bg-muted/30 bg-muted/30">
                  <td class="px-4 py-3 text-foreground">Review pull requests</td>
                  <td class="px-4 py-3"><span class="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Completed</span></td>
                  <td class="px-4 py-3 text-muted-foreground">Mar 10, 2026</td>
                  <td class="px-4 py-3 text-muted-foreground">John</td>
                  <td class="px-4 py-3 text-primary cursor-pointer">Edit</td>
                </tr>
                <tr class="border-b border-border hover:bg-muted/30">
                  <td class="px-4 py-3 text-foreground">Fix critical bug in auth</td>
                  <td class="px-4 py-3"><span class="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">Pending</span></td>
                  <td class="px-4 py-3 text-muted-foreground">Mar 12, 2026</td>
                  <td class="px-4 py-3 text-muted-foreground">Mike</td>
                  <td class="px-4 py-3 text-primary cursor-pointer">Edit</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-muted-foreground">Showing 3 of 12 tasks</span>
            <div class="flex gap-2">
              <button class="px-3 py-2 border border-border rounded text-sm hover:bg-muted/30">← Previous</button>
              <button class="px-3 py-2 border border-border rounded text-sm hover:bg-muted/30">Next →</button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Purpose & Rationale</h3>
        <p class="text-foreground/80">Data tables display structured information in rows and columns. With sorting, filtering, and pagination, they enable users to explore, analyze, and manage datasets effectively while keeping performance optimal.</p>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Anatomy</h3>
        <div class="bg-muted p-4 rounded space-y-3">
          <div class="flex items-start gap-4">
            <div class="bg-primary text-card px-3 py-1 rounded text-sm font-mono whitespace-nowrap">Table</div>
            <span class="text-foreground/80">Root table element</span>
          </div>
          <div class="flex items-start gap-4">
            <div class="bg-primary text-card px-3 py-1 rounded text-sm font-mono whitespace-nowrap">TableHeader</div>
            <span class="text-foreground/80">Header section with column names</span>
          </div>
          <div class="flex items-start gap-4">
            <div class="bg-primary text-card px-3 py-1 rounded text-sm font-mono whitespace-nowrap">TableBody</div>
            <span class="text-foreground/80">Container for data rows</span>
          </div>
          <div class="flex items-start gap-4">
            <div class="bg-primary text-card px-3 py-1 rounded text-sm font-mono whitespace-nowrap">TableRow</div>
            <span class="text-foreground/80">Individual row of data</span>
          </div>
          <div class="flex items-start gap-4">
            <div class="bg-primary text-card px-3 py-1 rounded text-sm font-mono whitespace-nowrap">TableCell</div>
            <span class="text-foreground/80">Individual cell in a row</span>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Variants</h3>
        <ul class="space-y-2 text-foreground/80">
          <li>• <strong>Sortable Columns</strong> - Click headers to sort ascending/descending</li>
          <li>• <strong>Filterable</strong> - Search and filter columns</li>
          <li>• <strong>Paginated</strong> - Show subset of rows with navigation</li>
          <li>• <strong>Selectable Rows</strong> - Checkboxes for bulk actions</li>
          <li>• <strong>Expandable Rows</strong> - Reveal details on click</li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Code Example</h3>
        <pre class="bg-foreground text-muted-foreground p-4 rounded overflow-auto text-sm"><code>import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table'

export function TableDemo() {
  return (
    &lt;Table&gt;
      &lt;TableHeader&gt;
        &lt;TableRow&gt;
          &lt;TableHead&gt;Name&lt;/TableHead&gt;
          &lt;TableHead&gt;Status&lt;/TableHead&gt;
          &lt;TableHead&gt;Amount&lt;/TableHead&gt;
        &lt;/TableRow&gt;
      &lt;/TableHeader&gt;
      &lt;TableBody&gt;
        &lt;TableRow&gt;
          &lt;TableCell&gt;Paid&lt;/TableCell&gt;
          &lt;TableCell&gt;Completed&lt;/TableCell&gt;
          &lt;TableCell&gt;$250.00&lt;/TableCell&gt;
        &lt;/TableRow&gt;
      &lt;/TableBody&gt;
    &lt;/Table&gt;
  )
}</code></pre>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Do's and Don'ts</h3>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-green-50 border border-green-200 p-4 rounded">
            <h4 class="font-bold text-green-900 mb-2">Do's</h4>
            <ul class="space-y-1 text-sm text-green-800">
              <li>✓ Use clear, concise column headers</li>
              <li>✓ Alternate row colors for readability</li>
              <li>✓ Provide sorting and filtering</li>
            </ul>
          </div>
          <div class="bg-red-50 border border-red-200 p-4 rounded">
            <h4 class="font-bold text-red-900 mb-2">Don'ts</h4>
            <ul class="space-y-1 text-sm text-red-800">
              <li>✗ Don't show too many columns</li>
              <li>✗ Don't make rows too tall</li>
              <li>✗ Don't hide critical information</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Accessibility</h3>
        <ul class="space-y-2 text-foreground/80">
          <li>• Semantic HTML with proper table structure</li>
          <li>• Table caption or aria-label for context</li>
          <li>• Column headers with scope attribute</li>
          <li>• Sortable indicators clearly labeled</li>
          <li>• Responsive behavior on small screens</li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-3">Content & Style Guidelines</h3>
        <div class="bg-blue-50 p-4 rounded text-foreground/80 space-y-2">
          <p><strong>Columns:</strong> Show 4-8 columns maximum. Use horizontal scroll for wider tables. Prioritize important columns.</p>
          <p><strong>Row Styling:</strong> Alternating backgrounds (white/light gray) improve readability. Hover state shows interactivity.</p>
          <p><strong>Pagination:</strong> Show 10-50 rows per page depending on context. Display total count and current range.</p>
        </div>
      </div>
    </div>
  `,
}

export default batch1
