interface DocContent {
  title: string
  description: string
  html: string
}

const batch4: Record<string, DocContent> = {}

batch4["sheet"] = {
  title: "Sheet",
  description: "A side panel overlay component that slides in from the edges, typically used for navigation, filters, or detailed content without full page navigation.",
  html: `
<div class="space-y-8 p-6">
  <!-- Preview Section -->
  <div class="border border-border rounded-lg p-8 bg-background">
    <h3 class="text-lg font-semibold mb-4">Preview</h3>
    <div class="relative h-64 bg-gradient-to-b from-muted to-muted/50 rounded-lg overflow-hidden">
      <div class="absolute inset-0 flex items-center justify-center text-muted-foreground">
        <div class="text-center space-y-2">
          <p class="text-sm">Click to open sheet panel →</p>
          <button class="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
            Open Sheet
          </button>
        </div>
      </div>
      <!-- Sheet sliding from right -->
      <div class="absolute right-0 top-0 bottom-0 w-80 bg-background border-l border-border shadow-lg transform translate-x-0 transition-transform">
        <div class="p-6 space-y-4">
          <div class="space-y-2">
            <h2 class="text-2xl font-bold">Sheet Title</h2>
            <p class="text-sm text-muted-foreground">This is the sheet description and content area.</p>
          </div>
          <div class="space-y-3">
            <input type="text" placeholder="Input field" class="w-full px-3 py-2 border border-border rounded-md text-sm" />
            <input type="text" placeholder="Another field" class="w-full px-3 py-2 border border-border rounded-md text-sm" />
          </div>
        </div>
        <div class="absolute bottom-0 left-0 right-0 p-6 border-t border-border bg-muted flex gap-2 justify-end">
          <button class="px-4 py-2 border border-border rounded-md text-sm hover:bg-muted">Cancel</button>
          <button class="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm hover:bg-primary/90">Save</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Purpose & Rationale -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Purpose & Rationale</h3>
    <p class="text-sm text-muted-foreground">The Sheet component provides an overlay panel that slides in from the sides, allowing users to interact with content without losing context of the main page. It's ideal for filters, settings, detailed forms, or navigation that needs to be quickly accessed and dismissed.</p>
  </div>

  <!-- Anatomy -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Anatomy</h3>
    <div class="space-y-2 font-mono text-sm bg-muted p-4 rounded-lg">
      <div class="flex items-center gap-3">
        <span class="text-primary">├─</span>
        <span><span class="font-semibold">Sheet</span> - Root container</span>
      </div>
      <div class="flex items-center gap-3 ml-4">
        <span class="text-primary">├─</span>
        <span><span class="font-semibold">SheetTrigger</span> - Button to open</span>
      </div>
      <div class="flex items-center gap-3 ml-4">
        <span class="text-primary">├─</span>
        <span><span class="font-semibold">SheetContent</span> - Sliding panel</span>
      </div>
      <div class="flex items-center gap-3 ml-8">
        <span class="text-primary">├─</span>
        <span><span class="font-semibold">SheetHeader</span> - Top content area</span>
      </div>
      <div class="flex items-center gap-3 ml-12">
        <span class="text-primary">├─</span>
        <span><span class="font-semibold">SheetTitle</span> - Header title</span>
      </div>
      <div class="flex items-center gap-3 ml-12">
        <span class="text-primary">└─</span>
        <span><span class="font-semibold">SheetDescription</span> - Header description</span>
      </div>
      <div class="flex items-center gap-3 ml-8">
        <span class="text-primary">└─</span>
        <span><span class="font-semibold">SheetFooter</span> - Bottom action buttons</span>
      </div>
    </div>
  </div>

  <!-- Variants -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Variants</h3>
    <div class="grid grid-cols-3 gap-4">
      <div class="border border-border rounded-lg p-4">
        <p class="text-xs font-semibold mb-3">From Right</p>
        <div class="bg-muted h-24 rounded flex items-center justify-center text-xs text-muted-foreground">→ Slides right</div>
      </div>
      <div class="border border-border rounded-lg p-4">
        <p class="text-xs font-semibold mb-3">From Left</p>
        <div class="bg-muted h-24 rounded flex items-center justify-center text-xs text-muted-foreground">← Slides left</div>
      </div>
      <div class="border border-border rounded-lg p-4">
        <p class="text-xs font-semibold mb-3">From Top</p>
        <div class="bg-muted h-24 rounded flex items-center justify-center text-xs text-muted-foreground">↓ Slides down</div>
      </div>
    </div>
  </div>

  <!-- Code Example -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Code Example</h3>
    <pre class="bg-muted p-4 rounded-lg overflow-x-auto"><code class="text-xs font-mono">&lt;Sheet&gt;
  &lt;SheetTrigger asChild&gt;
    &lt;button&gt;Open Sheet&lt;/button&gt;
  &lt;/SheetTrigger&gt;
  &lt;SheetContent side="right"&gt;
    &lt;SheetHeader&gt;
      &lt;SheetTitle&gt;Edit Profile&lt;/SheetTitle&gt;
      &lt;SheetDescription&gt;Make changes to your profile here&lt;/SheetDescription&gt;
    &lt;/SheetHeader&gt;
    &lt;div class="space-y-4"&gt;
      &lt;input type="text" placeholder="Name" /&gt;
    &lt;/div&gt;
    &lt;SheetFooter&gt;
      &lt;button&gt;Cancel&lt;/button&gt;
      &lt;button&gt;Save&lt;/button&gt;
    &lt;/SheetFooter&gt;
  &lt;/SheetContent&gt;
&lt;/Sheet&gt;</code></pre>
  </div>

  <!-- Do's and Don'ts -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Do's and Don'ts</h3>
    <div class="grid grid-cols-2 gap-4">
      <div class="border border-green-200 bg-green-50 rounded-lg p-4 space-y-2">
        <p class="font-semibold text-sm text-green-900">Do's</p>
        <ul class="text-xs space-y-1 text-green-800">
          <li>✓ Use for secondary tasks and filters</li>
          <li>✓ Keep content focused and minimal</li>
          <li>✓ Always provide a close button or escape key</li>
          <li>✓ Use consistent side positioning</li>
        </ul>
      </div>
      <div class="border border-red-200 bg-red-50 rounded-lg p-4 space-y-2">
        <p class="font-semibold text-sm text-red-900">Don'ts</p>
        <ul class="text-xs space-y-1 text-red-800">
          <li>✗ Don't nest multiple sheets</li>
          <li>✗ Don't use for primary navigation</li>
          <li>✗ Don't make content too wide or tall</li>
          <li>✗ Don't hide critical information in sheets</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Accessibility -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Accessibility</h3>
    <ul class="text-sm space-y-2 text-muted-foreground list-disc list-inside">
      <li>Trap focus within the sheet when open</li>
      <li>Close on Escape key press</li>
      <li>Use semantic HTML and proper heading hierarchy</li>
      <li>Ensure adequate color contrast for text</li>
      <li>Provide aria-labelledby for title reference</li>
      <li>Support keyboard navigation within content</li>
      <li>Announce sheet opening/closing to screen readers</li>
    </ul>
  </div>

  <!-- Content & Style Guidelines -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Content & Style Guidelines</h3>
    <ul class="text-sm space-y-2 text-muted-foreground list-disc list-inside">
      <li>Use clear, concise titles that describe the sheet purpose</li>
      <li>Keep descriptions brief (one sentence recommended)</li>
      <li>Maintain consistent padding and spacing (24px recommended)</li>
      <li>Use bg-background for the panel and border-border for dividers</li>
      <li>Align action buttons to the bottom right in SheetFooter</li>
      <li>Use primary actions prominently, secondary actions subtly</li>
      <li>Standard width: 384px (medium) to 480px (large)</li>
    </ul>
  </div>
</div>
  `
}

batch4["sidebar"] = {
  title: "Sidebar",
  description: "A vertical navigation component for application layouts, featuring grouped menu items with icons, labels, and collapsible sections.",
  html: `
<div class="space-y-8 p-6">
  <!-- Preview Section -->
  <div class="border border-border rounded-lg p-8 bg-background">
    <h3 class="text-lg font-semibold mb-4">Preview</h3>
    <div class="flex h-96 gap-4">
      <!-- Sidebar -->
      <div class="w-64 border border-border rounded-lg bg-muted/30 p-4 space-y-4">
        <!-- Header -->
        <div class="flex items-center gap-2 px-2 py-3 border-b border-border pb-4">
          <div class="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-primary-foreground font-bold text-sm">E</div>
          <span class="font-bold text-foreground">Echo</span>
        </div>
        <!-- Content -->
        <div class="space-y-6">
          <!-- Group 1 -->
          <div class="space-y-2">
            <p class="text-xs font-semibold uppercase text-muted-foreground px-2">Main</p>
            <div class="space-y-1">
              <div class="flex items-center gap-3 px-3 py-2 rounded-md bg-primary text-primary-foreground cursor-pointer">
                <span class="text-sm">🏠</span>
                <span class="text-sm font-medium">Dashboard</span>
              </div>
              <div class="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted cursor-pointer">
                <span class="text-sm">📊</span>
                <span class="text-sm">Analytics</span>
              </div>
              <div class="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted cursor-pointer">
                <span class="text-sm">⚙️</span>
                <span class="text-sm">Settings</span>
              </div>
            </div>
          </div>
          <!-- Group 2 -->
          <div class="space-y-2">
            <p class="text-xs font-semibold uppercase text-muted-foreground px-2">Tools</p>
            <div class="space-y-1">
              <div class="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted cursor-pointer">
                <span class="text-sm">📁</span>
                <span class="text-sm">Files</span>
              </div>
              <div class="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted cursor-pointer">
                <span class="text-sm">👥</span>
                <span class="text-sm">Team</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Main Content Area -->
      <div class="flex-1 border border-border rounded-lg bg-muted/10 flex items-center justify-center text-muted-foreground">
        <p class="text-center">Main Content Area</p>
      </div>
    </div>
  </div>

  <!-- Purpose & Rationale -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Purpose & Rationale</h3>
    <p class="text-sm text-muted-foreground">The Sidebar component provides a persistent vertical navigation structure for applications. It organizes navigation into logical groups, displays the application identity, and allows users to quickly navigate between major sections without losing their current context.</p>
  </div>

  <!-- Anatomy -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Anatomy</h3>
    <div class="space-y-2 font-mono text-sm bg-muted p-4 rounded-lg">
      <div class="flex items-center gap-3">
        <span class="text-primary">├─</span>
        <span><span class="font-semibold">Sidebar</span> - Root container</span>
      </div>
      <div class="flex items-center gap-3 ml-4">
        <span class="text-primary">├─</span>
        <span><span class="font-semibold">SidebarHeader</span> - Logo and branding</span>
      </div>
      <div class="flex items-center gap-3 ml-4">
        <span class="text-primary">├─</span>
        <span><span class="font-semibold">SidebarContent</span> - Main navigation items</span>
      </div>
      <div class="flex items-center gap-3 ml-8">
        <span class="text-primary">├─</span>
        <span><span class="font-semibold">SidebarGroup</span> - Grouped menu section</span>
      </div>
      <div class="flex items-center gap-3 ml-12">
        <span class="text-primary">├─</span>
        <span><span class="font-semibold">SidebarGroupLabel</span> - Group title</span>
      </div>
      <div class="flex items-center gap-3 ml-12">
        <span class="text-primary">├─</span>
        <span><span class="font-semibold">SidebarMenu</span> - Menu list</span>
      </div>
      <div class="flex items-center gap-3 ml-16">
        <span class="text-primary">└─</span>
        <span><span class="font-semibold">SidebarMenuItem</span> - Individual menu item</span>
      </div>
    </div>
  </div>

  <!-- Variants -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Variants</h3>
    <div class="grid grid-cols-3 gap-4">
      <div class="border border-border rounded-lg p-4">
        <p class="text-xs font-semibold mb-3">Expanded</p>
        <div class="space-y-2">
          <div class="h-3 bg-primary rounded w-20"></div>
          <div class="h-2 bg-muted rounded w-24"></div>
          <div class="h-2 bg-muted rounded w-28"></div>
        </div>
      </div>
      <div class="border border-border rounded-lg p-4">
        <p class="text-xs font-semibold mb-3">Collapsed</p>
        <div class="space-y-2">
          <div class="w-6 h-6 bg-primary rounded mx-auto"></div>
          <div class="w-5 h-5 bg-muted rounded mx-auto"></div>
          <div class="w-5 h-5 bg-muted rounded mx-auto"></div>
        </div>
      </div>
      <div class="border border-border rounded-lg p-4">
        <p class="text-xs font-semibold mb-3">Dark Theme</p>
        <div class="bg-slate-800 p-2 rounded space-y-1">
          <div class="h-2 bg-slate-600 rounded w-20"></div>
          <div class="h-2 bg-slate-700 rounded w-24"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Code Example -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Code Example</h3>
    <pre class="bg-muted p-4 rounded-lg overflow-x-auto"><code class="text-xs font-mono">&lt;Sidebar&gt;
  &lt;SidebarHeader&gt;
    &lt;div class="flex items-center gap-2"&gt;
      &lt;div class="w-8 h-8 bg-primary rounded-md"&gt;&lt;/div&gt;
      &lt;span class="font-bold"&gt;Echo&lt;/span&gt;
    &lt;/div&gt;
  &lt;/SidebarHeader&gt;
  &lt;SidebarContent&gt;
    &lt;SidebarGroup&gt;
      &lt;SidebarGroupLabel&gt;Main&lt;/SidebarGroupLabel&gt;
      &lt;SidebarMenu&gt;
        &lt;SidebarMenuItem&gt;
          &lt;a href="/dashboard" class="flex items-center gap-3"&gt;
            &lt;span&gt;🏠&lt;/span&gt;
            &lt;span&gt;Dashboard&lt;/span&gt;
          &lt;/a&gt;
        &lt;/SidebarMenuItem&gt;
      &lt;/SidebarMenu&gt;
    &lt;/SidebarGroup&gt;
  &lt;/SidebarContent&gt;
&lt;/Sidebar&gt;</code></pre>
  </div>

  <!-- Do's and Don'ts -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Do's and Don'ts</h3>
    <div class="grid grid-cols-2 gap-4">
      <div class="border border-green-200 bg-green-50 rounded-lg p-4 space-y-2">
        <p class="font-semibold text-sm text-green-900">Do's</p>
        <ul class="text-xs space-y-1 text-green-800">
          <li>✓ Limit menu items to 6-8 per group</li>
          <li>✓ Use consistent icon styles</li>
          <li>✓ Highlight active navigation item</li>
          <li>✓ Keep labels short and descriptive</li>
          <li>✓ Support collapsible groups for many items</li>
        </ul>
      </div>
      <div class="border border-red-200 bg-red-50 rounded-lg p-4 space-y-2">
        <p class="font-semibold text-sm text-red-900">Don'ts</p>
        <ul class="text-xs space-y-1 text-red-800">
          <li>✗ Don't clutter with too many groups</li>
          <li>✗ Don't use only icons without labels</li>
          <li>✗ Don't make sidebar too wide</li>
          <li>✗ Don't hide critical navigation items</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Accessibility -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Accessibility</h3>
    <ul class="text-sm space-y-2 text-muted-foreground list-disc list-inside">
      <li>Use semantic nav element for sidebar</li>
      <li>Mark current page with aria-current="page"</li>
      <li>Provide text labels alongside icons</li>
      <li>Ensure sufficient color contrast for active state</li>
      <li>Support keyboard navigation through menu items</li>
      <li>Use proper heading levels for group labels</li>
      <li>Support focus visible states for keyboard users</li>
    </ul>
  </div>

  <!-- Content & Style Guidelines -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Content & Style Guidelines</h3>
    <ul class="text-sm space-y-2 text-muted-foreground list-disc list-inside">
      <li>Standard width: 256px (16rem) for expanded state</li>
      <li>Use clear, action-oriented labels (Dashboard, Settings, etc.)</li>
      <li>Group related items with spacing and labels</li>
      <li>Display company/app logo at the top in SidebarHeader</li>
      <li>Active item uses bg-primary, inactive uses text-muted-foreground</li>
      <li>Hover state: bg-muted or bg-primary/10</li>
      <li>Support collapsible state showing only icons at 80px width</li>
    </ul>
  </div>
</div>
  `
}

batch4["skeleton"] = {
  title: "Skeleton",
  description: "A loading placeholder component that displays animated shimmer bars to indicate content is loading, improving perceived performance.",
  html: `
<div class="space-y-8 p-6">
  <!-- Preview Section -->
  <div class="border border-border rounded-lg p-8 bg-background">
    <h3 class="text-lg font-semibold mb-4">Preview</h3>
    <div class="space-y-6">
      <!-- Text Line Skeleton -->
      <div class="space-y-2">
        <p class="text-xs font-semibold text-muted-foreground mb-3">Text Content Loading</p>
        <div class="space-y-2">
          <div class="h-4 bg-muted animate-pulse rounded w-3/4"></div>
          <div class="h-4 bg-muted animate-pulse rounded w-full"></div>
          <div class="h-4 bg-muted animate-pulse rounded w-5/6"></div>
        </div>
      </div>

      <!-- Avatar Skeleton -->
      <div class="space-y-2">
        <p class="text-xs font-semibold text-muted-foreground mb-3">User Avatar Loading</p>
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 bg-muted animate-pulse rounded-full"></div>
          <div class="space-y-2 flex-1">
            <div class="h-4 bg-muted animate-pulse rounded w-32"></div>
            <div class="h-3 bg-muted animate-pulse rounded w-48"></div>
          </div>
        </div>
      </div>

      <!-- Card Skeleton -->
      <div class="space-y-2">
        <p class="text-xs font-semibold text-muted-foreground mb-3">Card Content Loading</p>
        <div class="border border-border rounded-lg p-4 space-y-3">
          <div class="h-6 bg-muted animate-pulse rounded w-1/2"></div>
          <div class="space-y-2">
            <div class="h-4 bg-muted animate-pulse rounded"></div>
            <div class="h-4 bg-muted animate-pulse rounded w-5/6"></div>
          </div>
          <div class="h-24 bg-muted animate-pulse rounded mt-4"></div>
        </div>
      </div>

      <!-- List Skeleton -->
      <div class="space-y-2">
        <p class="text-xs font-semibold text-muted-foreground mb-3">List Items Loading</p>
        <div class="space-y-3">
          <div class="flex gap-3">
            <div class="w-10 h-10 bg-muted animate-pulse rounded flex-shrink-0"></div>
            <div class="flex-1 space-y-2">
              <div class="h-4 bg-muted animate-pulse rounded w-40"></div>
              <div class="h-3 bg-muted animate-pulse rounded w-32"></div>
            </div>
          </div>
          <div class="flex gap-3">
            <div class="w-10 h-10 bg-muted animate-pulse rounded flex-shrink-0"></div>
            <div class="flex-1 space-y-2">
              <div class="h-4 bg-muted animate-pulse rounded w-40"></div>
              <div class="h-3 bg-muted animate-pulse rounded w-32"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Purpose & Rationale -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Purpose & Rationale</h3>
    <p class="text-sm text-muted-foreground">Skeleton screens reduce perceived loading time by displaying placeholder content while actual data loads. They provide visual continuity and a polished user experience, preventing the jarring effect of blank spaces suddenly filling with content.</p>
  </div>

  <!-- Anatomy -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Anatomy</h3>
    <div class="space-y-2 font-mono text-sm bg-muted p-4 rounded-lg">
      <div class="flex items-center gap-3">
        <span class="text-primary">├─</span>
        <span><span class="font-semibold">Skeleton</span> - Simple div container</span>
      </div>
      <div class="flex items-center gap-3 ml-4">
        <span class="text-primary">├─</span>
        <span><span class="font-semibold">bg-muted</span> - Background color</span>
      </div>
      <div class="flex items-center gap-3 ml-4">
        <span class="text-primary">├─</span>
        <span><span class="font-semibold">animate-pulse</span> - Pulsing animation</span>
      </div>
      <div class="flex items-center gap-3 ml-4">
        <span class="text-primary">└─</span>
        <span><span class="font-semibold">rounded</span> - Border radius</span>
      </div>
    </div>
  </div>

  <!-- Variants -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Variants</h3>
    <div class="grid grid-cols-4 gap-4">
      <div class="border border-border rounded-lg p-4">
        <p class="text-xs font-semibold mb-3">Line</p>
        <div class="h-4 bg-muted animate-pulse rounded w-full"></div>
      </div>
      <div class="border border-border rounded-lg p-4">
        <p class="text-xs font-semibold mb-3">Circle</p>
        <div class="w-12 h-12 bg-muted animate-pulse rounded-full mx-auto"></div>
      </div>
      <div class="border border-border rounded-lg p-4">
        <p class="text-xs font-semibold mb-3">Square</p>
        <div class="w-16 h-16 bg-muted animate-pulse rounded mx-auto"></div>
      </div>
      <div class="border border-border rounded-lg p-4">
        <p class="text-xs font-semibold mb-3">Rectangle</p>
        <div class="w-full h-20 bg-muted animate-pulse rounded"></div>
      </div>
    </div>
  </div>

  <!-- Code Example -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Code Example</h3>
    <pre class="bg-muted p-4 rounded-lg overflow-x-auto"><code class="text-xs font-mono">&lt;!-- Simple text skeleton --&gt;
&lt;div class="h-4 bg-muted animate-pulse rounded"&gt;&lt;/div&gt;

&lt;!-- Avatar skeleton --&gt;
&lt;div class="w-12 h-12 bg-muted animate-pulse rounded-full"&gt;&lt;/div&gt;

&lt;!-- Card skeleton --&gt;
&lt;div class="border border-border rounded-lg p-4"&gt;
  &lt;div class="h-6 bg-muted animate-pulse rounded mb-3"&gt;&lt;/div&gt;
  &lt;div class="h-4 bg-muted animate-pulse rounded mb-2"&gt;&lt;/div&gt;
  &lt;div class="h-20 bg-muted animate-pulse rounded"&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
  </div>

  <!-- Do's and Don'ts -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Do's and Don'ts</h3>
    <div class="grid grid-cols-2 gap-4">
      <div class="border border-green-200 bg-green-50 rounded-lg p-4 space-y-2">
        <p class="font-semibold text-sm text-green-900">Do's</p>
        <ul class="text-xs space-y-1 text-green-800">
          <li>✓ Match skeleton layout to final content</li>
          <li>✓ Use muted background color</li>
          <li>✓ Add pulsing animation for visual feedback</li>
          <li>✓ Remove skeleton when content loads</li>
        </ul>
      </div>
      <div class="border border-red-200 bg-red-50 rounded-lg p-4 space-y-2">
        <p class="font-semibold text-sm text-red-900">Don'ts</p>
        <ul class="text-xs space-y-1 text-red-800">
          <li>✗ Don't use placeholder text in skeleton</li>
          <li>✗ Don't use bright colors for skeleton</li>
          <li>✗ Don't display skeleton indefinitely</li>
          <li>✗ Don't use for errors or empty states</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Accessibility -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Accessibility</h3>
    <ul class="text-sm space-y-2 text-muted-foreground list-disc list-inside">
      <li>Add aria-busy="true" to container during loading</li>
      <li>Use aria-label to describe what is loading</li>
      <li>Maintain document structure even in skeleton state</li>
      <li>Keep animation subtle to avoid motion sickness</li>
      <li>Provide prefers-reduced-motion support</li>
      <li>Announce when content has loaded</li>
    </ul>
  </div>

  <!-- Content & Style Guidelines -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Content & Style Guidelines</h3>
    <ul class="text-sm space-y-2 text-muted-foreground list-disc list-inside">
      <li>Use bg-muted color (typically 100-150 on grayscale)</li>
      <li>Apply animate-pulse class for gentle opacity animation</li>
      <li>Match skeleton dimensions to expected content</li>
      <li>Use rounded corners to match final component style</li>
      <li>Space skeletons like the actual content will be spaced</li>
      <li>Load time should not exceed 3-5 seconds without feedback</li>
      <li>Consider using multiple skeleton variations for complex layouts</li>
    </ul>
  </div>
</div>
  `
}

batch4["slider"] = {
  title: "Slider",
  description: "A range input component that allows users to select a value or range within a defined minimum and maximum, with visual track indication.",
  html: `
<div class="space-y-8 p-6">
  <!-- Preview Section -->
  <div class="border border-border rounded-lg p-8 bg-background">
    <h3 class="text-lg font-semibold mb-4">Preview</h3>
    <div class="space-y-8">
      <!-- Single Slider -->
      <div class="space-y-2">
        <p class="text-xs font-semibold text-muted-foreground mb-2">Single Value Slider</p>
        <div class="space-y-3">
          <div class="px-2">
            <div class="relative h-2 bg-muted rounded-full">
              <div class="absolute h-2 bg-primary rounded-full left-0" style="width: 60%;"></div>
              <div class="absolute w-5 h-5 bg-primary border-2 border-background rounded-full shadow" style="left: calc(60% - 10px); top: 50%; transform: translateY(-50%);"></div>
            </div>
          </div>
          <p class="text-sm text-muted-foreground text-center">Value: 60 / 100</p>
        </div>
      </div>

      <!-- Range Slider -->
      <div class="space-y-2">
        <p class="text-xs font-semibold text-muted-foreground mb-2">Range Slider</p>
        <div class="space-y-3">
          <div class="px-2">
            <div class="relative h-2 bg-muted rounded-full">
              <div class="absolute h-2 bg-primary rounded-full" style="left: 25%; right: calc(100% - 75%);"></div>
              <div class="absolute w-5 h-5 bg-primary border-2 border-background rounded-full shadow" style="left: calc(25% - 10px); top: 50%; transform: translateY(-50%);"></div>
              <div class="absolute w-5 h-5 bg-primary border-2 border-background rounded-full shadow" style="left: calc(75% - 10px); top: 50%; transform: translateY(-50%);"></div>
            </div>
          </div>
          <p class="text-sm text-muted-foreground text-center">Range: 25 - 75 / 100</p>
        </div>
      </div>

      <!-- Vertical Slider -->
      <div class="space-y-2">
        <p class="text-xs font-semibold text-muted-foreground mb-2">Vertical Slider</p>
        <div class="flex items-end gap-6 h-40">
          <div class="relative w-2 h-32 bg-muted rounded-full ml-4">
            <div class="absolute w-2 bg-primary rounded-full bottom-0" style="height: 45%;"></div>
            <div class="absolute w-5 h-5 bg-primary border-2 border-background rounded-full shadow left-1/2 transform -translate-x-1/2" style="top: calc(55% - 10px);"></div>
          </div>
          <p class="text-sm text-muted-foreground mb-2">45%</p>
        </div>
      </div>

      <!-- Steps Slider -->
      <div class="space-y-2">
        <p class="text-xs font-semibold text-muted-foreground mb-2">Stepped Slider</p>
        <div class="space-y-3">
          <div class="px-2">
            <div class="relative h-2 bg-muted rounded-full">
              <div class="absolute h-2 bg-primary rounded-full left-0" style="width: 80%;"></div>
              <div class="absolute w-5 h-5 bg-primary border-2 border-background rounded-full shadow" style="left: calc(80% - 10px); top: 50%; transform: translateY(-50%);"></div>
              <!-- Step markers -->
              <div class="absolute w-2 h-2 bg-border rounded-full" style="left: 0; top: 50%; transform: translate(-50%, -50%);"></div>
              <div class="absolute w-2 h-2 bg-border rounded-full" style="left: 25%; top: 50%; transform: translate(-50%, -50%);"></div>
              <div class="absolute w-2 h-2 bg-border rounded-full" style="left: 50%; top: 50%; transform: translate(-50%, -50%);"></div>
              <div class="absolute w-2 h-2 bg-border rounded-full" style="left: 75%; top: 50%; transform: translate(-50%, -50%);"></div>
              <div class="absolute w-2 h-2 bg-border rounded-full" style="right: 0; top: 50%; transform: translate(50%, -50%);"></div>
            </div>
          </div>
          <p class="text-sm text-muted-foreground text-center">Snaps to 0, 25, 50, 75, 100</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Purpose & Rationale -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Purpose & Rationale</h3>
    <p class="text-sm text-muted-foreground">The Slider component enables intuitive selection of continuous values or ranges through a direct manipulation interface. Unlike text inputs, sliders show the entire range at once and provide immediate visual feedback, making them ideal for settings like volume, brightness, price ranges, and date ranges.</p>
  </div>

  <!-- Anatomy -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Anatomy</h3>
    <div class="space-y-2 font-mono text-sm bg-muted p-4 rounded-lg">
      <div class="flex items-center gap-3">
        <span class="text-primary">├─</span>
        <span><span class="font-semibold">Slider</span> - Root container</span>
      </div>
      <div class="flex items-center gap-3 ml-4">
        <span class="text-primary">├─</span>
        <span><span class="font-semibold">Track</span> - Background rail</span>
      </div>
      <div class="flex items-center gap-3 ml-4">
        <span class="text-primary">├─</span>
        <span><span class="font-semibold">Range</span> - Filled portion</span>
      </div>
      <div class="flex items-center gap-3 ml-4">
        <span class="text-primary">└─</span>
        <span><span class="font-semibold">Thumb</span> - Draggable handle</span>
      </div>
    </div>
  </div>

  <!-- Variants -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Variants</h3>
    <div class="grid grid-cols-2 gap-4">
      <div class="border border-border rounded-lg p-4">
        <p class="text-xs font-semibold mb-3">Single</p>
        <div class="relative h-2 bg-muted rounded-full">
          <div class="absolute h-2 bg-primary rounded-full left-0" style="width: 50%;"></div>
          <div class="absolute w-4 h-4 bg-primary border border-background rounded-full" style="left: 50%; transform: translateX(-50%) translateY(-50%); top: 50%;"></div>
        </div>
      </div>
      <div class="border border-border rounded-lg p-4">
        <p class="text-xs font-semibold mb-3">Range</p>
        <div class="relative h-2 bg-muted rounded-full">
          <div class="absolute h-2 bg-primary rounded-full" style="left: 30%; right: calc(100% - 70%);"></div>
          <div class="absolute w-4 h-4 bg-primary border border-background rounded-full" style="left: 30%; transform: translateX(-50%) translateY(-50%); top: 50%;"></div>
          <div class="absolute w-4 h-4 bg-primary border border-background rounded-full" style="left: 70%; transform: translateX(-50%) translateY(-50%); top: 50%;"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Code Example -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Code Example</h3>
    <pre class="bg-muted p-4 rounded-lg overflow-x-auto"><code class="text-xs font-mono">&lt;Slider
  min={0}
  max={100}
  step={1}
  value={[60]}
  onValueChange={(value) =&gt; setValue(value[0])}
  className="w-full"
/&gt;

&lt;!-- Range slider --&gt;
&lt;Slider
  min={0}
  max={100}
  step={5}
  value={[25, 75]}
  onValueChange={setRange}
/&gt;</code></pre>
  </div>

  <!-- Do's and Don'ts -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Do's and Don'ts</h3>
    <div class="grid grid-cols-2 gap-4">
      <div class="border border-green-200 bg-green-50 rounded-lg p-4 space-y-2">
        <p class="font-semibold text-sm text-green-900">Do's</p>
        <ul class="text-xs space-y-1 text-green-800">
          <li>✓ Show current value clearly</li>
          <li>✓ Make track at least 4px tall</li>
          <li>✓ Use thumb radius of 10px or larger</li>
          <li>✓ Support keyboard arrow keys</li>
          <li>✓ Use step increments for precision</li>
        </ul>
      </div>
      <div class="border border-red-200 bg-red-50 rounded-lg p-4 space-y-2">
        <p class="font-semibold text-sm text-red-900">Don'ts</p>
        <ul class="text-xs space-y-1 text-red-800">
          <li>✗ Don't hide min/max values</li>
          <li>✗ Don't use tiny track or thumb</li>
          <li>✗ Don't change range without user action</li>
          <li>✗ Don't require exact values</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Accessibility -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Accessibility</h3>
    <ul class="text-sm space-y-2 text-muted-foreground list-disc list-inside">
      <li>Use input type="range" for native keyboard support</li>
      <li>Provide aria-label or aria-labelledby</li>
      <li>Support arrow keys for value adjustment</li>
      <li>Announce current value to screen readers</li>
      <li>Use aria-valuemin, aria-valuemax, aria-valuenow</li>
      <li>Ensure minimum touch target of 44x44px</li>
      <li>Provide visual focus indicator</li>
    </ul>
  </div>

  <!-- Content & Style Guidelines -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Content & Style Guidelines</h3>
    <ul class="text-sm space-y-2 text-muted-foreground list-disc list-inside">
      <li>Track height: 4-8px, use bg-muted</li>
      <li>Range/filled portion: use bg-primary</li>
      <li>Thumb: 16-20px diameter with bg-primary</li>
      <li>Border thumb with border-background for contrast</li>
      <li>Add box-shadow to thumb for depth</li>
      <li>Display current value near or above slider</li>
      <li>Min/max labels should be small and muted</li>
    </ul>
  </div>
</div>
  `
}

batch4["sonner"] = {
  title: "Sonner",
  description: "A toast notification system for displaying brief, non-intrusive messages about app state, actions, and feedback using the Sonner library.",
  html: `
<div class="space-y-8 p-6">
  <!-- Preview Section -->
  <div class="border border-border rounded-lg p-8 bg-background">
    <h3 class="text-lg font-semibold mb-4">Preview</h3>
    <div class="space-y-4">
      <!-- Success Toast -->
      <div class="flex gap-3 p-4 rounded-lg border border-green-200 bg-green-50">
        <div class="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5">✓</div>
        <div class="flex-1">
          <p class="text-sm font-semibold text-green-900">Success</p>
          <p class="text-sm text-green-800">Your changes have been saved successfully.</p>
        </div>
        <button class="text-green-600 hover:text-green-700 text-sm">✕</button>
      </div>

      <!-- Error Toast -->
      <div class="flex gap-3 p-4 rounded-lg border border-red-200 bg-red-50">
        <div class="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5">!</div>
        <div class="flex-1">
          <p class="text-sm font-semibold text-red-900">Error</p>
          <p class="text-sm text-red-800">An error occurred while saving. Please try again.</p>
        </div>
        <button class="text-red-600 hover:text-red-700 text-sm">✕</button>
      </div>

      <!-- Info Toast -->
      <div class="flex gap-3 p-4 rounded-lg border border-blue-200 bg-blue-50">
        <div class="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5">ℹ</div>
        <div class="flex-1">
          <p class="text-sm font-semibold text-blue-900">Information</p>
          <p class="text-sm text-blue-800">Your session will expire in 5 minutes.</p>
        </div>
        <button class="text-blue-600 hover:text-blue-700 text-sm">✕</button>
      </div>

      <!-- Default Toast -->
      <div class="flex gap-3 p-4 rounded-lg border border-border bg-muted">
        <div class="w-5 h-5 rounded-full bg-foreground/20 flex items-center justify-center flex-shrink-0 mt-0.5"></div>
        <div class="flex-1">
          <p class="text-sm font-semibold text-foreground">Notification</p>
          <p class="text-sm text-muted-foreground">A new update is available.</p>
        </div>
        <button class="text-muted-foreground hover:text-foreground text-sm">✕</button>
      </div>

      <!-- Toast with Action -->
      <div class="flex gap-3 p-4 rounded-lg border border-amber-200 bg-amber-50">
        <div class="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5">⚠</div>
        <div class="flex-1">
          <p class="text-sm font-semibold text-amber-900">Warning</p>
          <p class="text-sm text-amber-800">You have unsaved changes.</p>
        </div>
        <div class="flex gap-2">
          <button class="text-xs px-2 py-1 rounded bg-amber-100 text-amber-900 hover:bg-amber-200">Save</button>
          <button class="text-amber-600 hover:text-amber-700 text-sm">✕</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Purpose & Rationale -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Purpose & Rationale</h3>
    <p class="text-sm text-muted-foreground">Sonner provides a lightweight, modern toast notification system for delivering real-time feedback about user actions. Toasts are non-modal, appear briefly, and automatically dismiss, making them ideal for success confirmations, error alerts, and informational updates without disrupting the user workflow.</p>
  </div>

  <!-- Anatomy -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Anatomy</h3>
    <div class="space-y-2 font-mono text-sm bg-muted p-4 rounded-lg">
      <div class="flex items-center gap-3">
        <span class="text-primary">├─</span>
        <span><span class="font-semibold">Toaster</span> - Provider component</span>
      </div>
      <div class="flex items-center gap-3 ml-4">
        <span class="text-primary">├─</span>
        <span><span class="font-semibold">toast()</span> - Toast trigger function</span>
      </div>
      <div class="flex items-center gap-3 ml-4">
        <span class="text-primary">├─</span>
        <span><span class="font-semibold">Icon</span> - Visual indicator</span>
      </div>
      <div class="flex items-center gap-3 ml-4">
        <span class="text-primary">├─</span>
        <span><span class="font-semibold">Title</span> - Message heading</span>
      </div>
      <div class="flex items-center gap-3 ml-4">
        <span class="text-primary">├─</span>
        <span><span class="font-semibold">Description</span> - Message body</span>
      </div>
      <div class="flex items-center gap-3 ml-4">
        <span class="text-primary">└─</span>
        <span><span class="font-semibold">Action</span> - Optional button</span>
      </div>
    </div>
  </div>

  <!-- Variants -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Variants</h3>
    <div class="grid grid-cols-3 gap-4">
      <div class="border border-border rounded-lg p-4">
        <p class="text-xs font-semibold mb-3">Success</p>
        <div class="h-12 bg-green-50 border border-green-200 rounded flex items-center gap-2 px-3">
          <div class="w-4 h-4 bg-green-500 rounded-full"></div>
          <p class="text-xs text-green-900">Saved</p>
        </div>
      </div>
      <div class="border border-border rounded-lg p-4">
        <p class="text-xs font-semibold mb-3">Error</p>
        <div class="h-12 bg-red-50 border border-red-200 rounded flex items-center gap-2 px-3">
          <div class="w-4 h-4 bg-red-500 rounded-full"></div>
          <p class="text-xs text-red-900">Error</p>
        </div>
      </div>
      <div class="border border-border rounded-lg p-4">
        <p class="text-xs font-semibold mb-3">Info</p>
        <div class="h-12 bg-blue-50 border border-blue-200 rounded flex items-center gap-2 px-3">
          <div class="w-4 h-4 bg-blue-500 rounded-full"></div>
          <p class="text-xs text-blue-900">Info</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Code Example -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Code Example</h3>
    <pre class="bg-muted p-4 rounded-lg overflow-x-auto"><code class="text-xs font-mono">import { Toaster, toast } from 'sonner'

&lt;!-- Provider in root layout --&gt;
&lt;Toaster position="top-right" /&gt;

&lt;!-- Success toast --&gt;
toast.success('Saved successfully')

&lt;!-- Error toast --&gt;
toast.error('Failed to save', {
  description: 'Please try again'
})

&lt;!-- Custom toast --&gt;
toast.custom((t) =&gt; (
  &lt;div className="bg-white p-4 rounded-lg"&gt;
    Custom content
  &lt;/div&gt;
))

&lt;!-- With action --&gt;
toast('Changes made', {
  action: {
    label: 'Undo',
    onClick: () =&gt; console.log('Undo')
  }
})</code></pre>
  </div>

  <!-- Do's and Don'ts -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Do's and Don'ts</h3>
    <div class="grid grid-cols-2 gap-4">
      <div class="border border-green-200 bg-green-50 rounded-lg p-4 space-y-2">
        <p class="font-semibold text-sm text-green-900">Do's</p>
        <ul class="text-xs space-y-1 text-green-800">
          <li>✓ Use for brief, contextual feedback</li>
          <li>✓ Match toast type to message (success, error, info)</li>
          <li>✓ Auto-dismiss after 4-5 seconds</li>
          <li>✓ Stack toasts neatly at screen edge</li>
          <li>✓ Include action buttons sparingly</li>
        </ul>
      </div>
      <div class="border border-red-200 bg-red-50 rounded-lg p-4 space-y-2">
        <p class="font-semibold text-sm text-red-900">Don'ts</p>
        <ul class="text-xs space-y-1 text-red-800">
          <li>✗ Don't use toasts for critical errors</li>
          <li>✗ Don't display too many at once</li>
          <li>✗ Don't make messages too long</li>
          <li>✗ Don't prevent dismissal</li>
          <li>✗ Don't use for confirmations</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Accessibility -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Accessibility</h3>
    <ul class="text-sm space-y-2 text-muted-foreground list-disc list-inside">
      <li>Use role="status" for announcements</li>
      <li>Use aria-live="polite" for screen readers</li>
      <li>Ensure color is not the only indicator</li>
      <li>Provide text alternatives to icons</li>
      <li>Support keyboard dismiss (Escape)</li>
      <li>Include sufficient color contrast (4.5:1)</li>
      <li>Keep toasts visible for sufficient time</li>
    </ul>
  </div>

  <!-- Content & Style Guidelines -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Content & Style Guidelines</h3>
    <ul class="text-sm space-y-2 text-muted-foreground list-disc list-inside">
      <li>Use concise, action-oriented messages (max 60 characters)</li>
      <li>Success: green background and icon</li>
      <li>Error: red background and warning icon</li>
      <li>Info: blue background and info icon</li>
      <li>Default: neutral gray background</li>
      <li>Display duration: 4-5 seconds default</li>
      <li>Position: top-right, top-center, or bottom-right</li>
      <li>Max width: 384px, padding: 16px</li>
    </ul>
  </div>
</div>
  `
}

batch4["spinner"] = {
  title: "Spinner",
  description: "A rotating loading indicator component that displays during asynchronous operations to indicate content is being loaded.",
  html: `
<div class="space-y-8 p-6">
  <!-- Preview Section -->
  <div class="border border-border rounded-lg p-8 bg-background">
    <h3 class="text-lg font-semibold mb-4">Preview</h3>
    <div class="space-y-8">
      <!-- Small Spinner -->
      <div class="flex items-center gap-4">
        <div class="flex flex-col items-center gap-3">
          <div class="w-4 h-4 border-2 border-muted border-t-primary rounded-full animate-spin"></div>
          <p class="text-xs text-muted-foreground">Small</p>
        </div>
      </div>

      <!-- Medium Spinner -->
      <div class="flex items-center gap-4">
        <div class="flex flex-col items-center gap-3">
          <div class="w-8 h-8 border-2 border-muted border-t-primary rounded-full animate-spin"></div>
          <p class="text-xs text-muted-foreground">Medium</p>
        </div>
      </div>

      <!-- Large Spinner -->
      <div class="flex items-center gap-4">
        <div class="flex flex-col items-center gap-3">
          <div class="w-12 h-12 border-3 border-muted border-t-primary rounded-full animate-spin"></div>
          <p class="text-xs text-muted-foreground">Large</p>
        </div>
      </div>

      <!-- With Text -->
      <div class="flex items-center gap-3 p-4 bg-muted rounded-lg">
        <div class="w-6 h-6 border-2 border-muted border-t-primary rounded-full animate-spin flex-shrink-0"></div>
        <p class="text-sm text-muted-foreground">Loading your data...</p>
      </div>

      <!-- Overlay Example -->
      <div class="relative h-32 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0 bg-background/50 backdrop-blur-sm flex items-center justify-center">
          <div class="flex flex-col items-center gap-3">
            <div class="w-10 h-10 border-3 border-muted border-t-primary rounded-full animate-spin"></div>
            <p class="text-sm text-muted-foreground">Processing...</p>
          </div>
        </div>
      </div>

      <!-- Multiple Spinners -->
      <div class="flex items-center gap-8 justify-center p-4">
        <div class="w-6 h-6 border-2 border-muted border-t-blue-500 rounded-full animate-spin"></div>
        <div class="w-6 h-6 border-2 border-muted border-t-green-500 rounded-full animate-spin"></div>
        <div class="w-6 h-6 border-2 border-muted border-t-red-500 rounded-full animate-spin"></div>
      </div>
    </div>
  </div>

  <!-- Purpose & Rationale -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Purpose & Rationale</h3>
    <p class="text-sm text-muted-foreground">The Spinner component provides visual feedback that an operation is in progress, preventing user frustration during loading states. Its continuous rotation clearly communicates ongoing activity and sets user expectations for wait times.</p>
  </div>

  <!-- Anatomy -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Anatomy</h3>
    <div class="space-y-2 font-mono text-sm bg-muted p-4 rounded-lg">
      <div class="flex items-center gap-3">
        <span class="text-primary">├─</span>
        <span><span class="font-semibold">Spinner</span> - Root container</span>
      </div>
      <div class="flex items-center gap-3 ml-4">
        <span class="text-primary">├─</span>
        <span><span class="font-semibold">border</span> - Track ring</span>
      </div>
      <div class="flex items-center gap-3 ml-4">
        <span class="text-primary">├─</span>
        <span><span class="font-semibold">border-t</span> - Animated portion</span>
      </div>
      <div class="flex items-center gap-3 ml-4">
        <span class="text-primary">├─</span>
        <span><span class="font-semibold">rounded-full</span> - Circle shape</span>
      </div>
      <div class="flex items-center gap-3 ml-4">
        <span class="text-primary">└─</span>
        <span><span class="font-semibold">animate-spin</span> - Rotation</span>
      </div>
    </div>
  </div>

  <!-- Variants -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Variants</h3>
    <div class="grid grid-cols-4 gap-4">
      <div class="border border-border rounded-lg p-4 flex flex-col items-center gap-3">
        <p class="text-xs font-semibold">XS</p>
        <div class="w-3 h-3 border border-muted border-t-primary rounded-full animate-spin"></div>
      </div>
      <div class="border border-border rounded-lg p-4 flex flex-col items-center gap-3">
        <p class="text-xs font-semibold">Small</p>
        <div class="w-5 h-5 border-2 border-muted border-t-primary rounded-full animate-spin"></div>
      </div>
      <div class="border border-border rounded-lg p-4 flex flex-col items-center gap-3">
        <p class="text-xs font-semibold">Medium</p>
        <div class="w-8 h-8 border-2 border-muted border-t-primary rounded-full animate-spin"></div>
      </div>
      <div class="border border-border rounded-lg p-4 flex flex-col items-center gap-3">
        <p class="text-xs font-semibold">Large</p>
        <div class="w-12 h-12 border-3 border-muted border-t-primary rounded-full animate-spin"></div>
      </div>
    </div>
  </div>

  <!-- Code Example -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Code Example</h3>
    <pre class="bg-muted p-4 rounded-lg overflow-x-auto"><code class="text-xs font-mono">&lt;!-- Basic spinner --&gt;
&lt;div class="w-8 h-8 border-2 border-muted border-t-primary rounded-full animate-spin"&gt;&lt;/div&gt;

&lt;!-- With text --&gt;
&lt;div class="flex items-center gap-3"&gt;
  &lt;div class="w-6 h-6 border-2 border-muted border-t-primary rounded-full animate-spin"&gt;&lt;/div&gt;
  &lt;span&gt;Loading...&lt;/span&gt;
&lt;/div&gt;

&lt;!-- Overlay spinner --&gt;
&lt;div class="relative"&gt;
  &lt;div class="absolute inset-0 bg-background/50 flex items-center justify-center"&gt;
    &lt;div class="w-8 h-8 border-2 border-muted border-t-primary rounded-full animate-spin"&gt;&lt;/div&gt;
  &lt;/div&gt;
  {content}
&lt;/div&gt;</code></pre>
  </div>

  <!-- Do's and Don'ts -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Do's and Don'ts</h3>
    <div class="grid grid-cols-2 gap-4">
      <div class="border border-green-200 bg-green-50 rounded-lg p-4 space-y-2">
        <p class="font-semibold text-sm text-green-900">Do's</p>
        <ul class="text-xs space-y-1 text-green-800">
          <li>✓ Use for async operations</li>
          <li>✓ Pair with descriptive text</li>
          <li>✓ Choose size appropriate to layout</li>
          <li>✓ Use primary color for visibility</li>
          <li>✓ Disable interactive elements during load</li>
        </ul>
      </div>
      <div class="border border-red-200 bg-red-50 rounded-lg p-4 space-y-2">
        <p class="font-semibold text-sm text-red-900">Don'ts</p>
        <ul class="text-xs space-y-1 text-red-800">
          <li>✗ Don't show spinner indefinitely</li>
          <li>✗ Don't use for synchronous actions</li>
          <li>✗ Don't hide spinner too quickly</li>
          <li>✗ Don't use spinner without context</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Accessibility -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Accessibility</h3>
    <ul class="text-sm space-y-2 text-muted-foreground list-disc list-inside">
      <li>Add aria-busy="true" to container</li>
      <li>Include text description of what's loading</li>
      <li>Use aria-label for spinner icon</li>
      <li>Support prefers-reduced-motion with fallback</li>
      <li>Ensure spinner is perceivable by color-blind users</li>
      <li>Add aria-live region with status updates</li>
      <li>Use sufficient contrast (3:1 minimum)</li>
    </ul>
  </div>

  <!-- Content & Style Guidelines -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Content & Style Guidelines</h3>
    <ul class="text-sm space-y-2 text-muted-foreground list-disc list-inside">
      <li>Use border-2 for 6-8px spinner, border-3 for 12px+</li>
      <li>Border color: bg-muted (light gray)</li>
      <li>Border-t color: bg-primary (brand color)</li>
      <li>Always use rounded-full for circular shape</li>
      <li>Apply animate-spin for smooth rotation</li>
      <li>Sizes: XS(12px), S(20px), M(32px), L(48px)</li>
      <li>Always pair with loading text or description</li>
    </ul>
  </div>
</div>
  `
}

batch4["textarea"] = {
  title: "Textarea",
  description: "A multi-line text input component for accepting longer-form text content, supporting resizing and all standard input properties.",
  html: `
<div class="space-y-8 p-6">
  <!-- Preview Section -->
  <div class="border border-border rounded-lg p-8 bg-background">
    <h3 class="text-lg font-semibold mb-4">Preview</h3>
    <div class="space-y-6">
      <!-- Default Textarea -->
      <div class="space-y-2">
        <label class="text-sm font-medium">Default Textarea</label>
        <textarea class="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 resize-vertical min-h-24" placeholder="Enter your message here..."></textarea>
      </div>

      <!-- Filled Textarea -->
      <div class="space-y-2">
        <label class="text-sm font-medium">With Content</label>
        <textarea class="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 resize-vertical min-h-24">This textarea contains some pre-filled content. Users can edit this text and expand the field by dragging the bottom-right corner.</textarea>
      </div>

      <!-- Disabled Textarea -->
      <div class="space-y-2">
        <label class="text-sm font-medium">Disabled</label>
        <textarea class="w-full px-3 py-2 border border-border rounded-md bg-muted text-muted-foreground placeholder-muted-foreground resize-vertical min-h-24 cursor-not-allowed opacity-50" placeholder="This field is disabled" disabled></textarea>
      </div>

      <!-- Read-only Textarea -->
      <div class="space-y-2">
        <label class="text-sm font-medium">Read-only</label>
        <textarea class="w-full px-3 py-2 border border-border rounded-md bg-muted text-foreground placeholder-muted-foreground resize-vertical min-h-24 cursor-default" readonly>This content is read-only and cannot be modified by the user.</textarea>
      </div>

      <!-- Textarea with Error -->
      <div class="space-y-2">
        <label class="text-sm font-medium">With Error</label>
        <textarea class="w-full px-3 py-2 border-2 border-red-500 rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 resize-vertical min-h-24" placeholder="This field has an error"></textarea>
        <p class="text-xs text-red-500">This field is required.</p>
      </div>

      <!-- Textarea with Character Count -->
      <div class="space-y-2">
        <label class="text-sm font-medium">Limited Length</label>
        <textarea class="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 resize-vertical min-h-24" placeholder="Max 200 characters..." maxlength="200"></textarea>
        <p class="text-xs text-muted-foreground text-right">0 / 200</p>
      </div>
    </div>
  </div>

  <!-- Purpose & Rationale -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Purpose & Rationale</h3>
    <p class="text-sm text-muted-foreground">The Textarea component extends the standard HTML textarea with consistent styling, focus states, and error handling. It's essential for collecting longer text input like comments, descriptions, messages, and detailed feedback while maintaining visual consistency with other form controls.</p>
  </div>

  <!-- Anatomy -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Anatomy</h3>
    <div class="space-y-2 font-mono text-sm bg-muted p-4 rounded-lg">
      <div class="flex items-center gap-3">
        <span class="text-primary">├─</span>
        <span><span class="font-semibold">Textarea</span> - Root element</span>
      </div>
      <div class="flex items-center gap-3 ml-4">
        <span class="text-primary">├─</span>
        <span><span class="font-semibold">Label</span> - Field label</span>
      </div>
      <div class="flex items-center gap-3 ml-4">
        <span class="text-primary">├─</span>
        <span><span class="font-semibold">Border</span> - Visual boundary</span>
      </div>
      <div class="flex items-center gap-3 ml-4">
        <span class="text-primary">├─</span>
        <span><span class="font-semibold">Focus Ring</span> - Keyboard focus indicator</span>
      </div>
      <div class="flex items-center gap-3 ml-4">
        <span class="text-primary">├─</span>
        <span><span class="font-semibold">Placeholder</span> - Hint text</span>
      </div>
      <div class="flex items-center gap-3 ml-4">
        <span class="text-primary">└─</span>
        <span><span class="font-semibold">Error Message</span> - Validation feedback</span>
      </div>
    </div>
  </div>

  <!-- Variants -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Variants</h3>
    <div class="grid grid-cols-2 gap-4">
      <div class="border border-border rounded-lg p-4">
        <p class="text-xs font-semibold mb-3">Default</p>
        <textarea class="w-full px-3 py-2 border border-border rounded-md text-sm resize-none h-20" placeholder="Default state"></textarea>
      </div>
      <div class="border border-border rounded-lg p-4">
        <p class="text-xs font-semibold mb-3">Focus</p>
        <textarea class="w-full px-3 py-2 border border-primary rounded-md ring-2 ring-primary/20 text-sm resize-none h-20" placeholder="Focused state"></textarea>
      </div>
      <div class="border border-border rounded-lg p-4">
        <p class="text-xs font-semibold mb-3">Error</p>
        <textarea class="w-full px-3 py-2 border-2 border-red-500 rounded-md text-sm resize-none h-20" placeholder="Error state"></textarea>
      </div>
      <div class="border border-border rounded-lg p-4">
        <p class="text-xs font-semibold mb-3">Disabled</p>
        <textarea class="w-full px-3 py-2 border border-border rounded-md bg-muted text-muted-foreground text-sm resize-none h-20 opacity-50 cursor-not-allowed" disabled></textarea>
      </div>
    </div>
  </div>

  <!-- Code Example -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Code Example</h3>
    <pre class="bg-muted p-4 rounded-lg overflow-x-auto"><code class="text-xs font-mono">&lt;div&gt;
  &lt;label htmlFor="message" className="text-sm font-medium"&gt;
    Message
  &lt;/label&gt;
  &lt;textarea
    id="message"
    placeholder="Enter your message..."
    className="w-full px-3 py-2 border border-border rounded-md
               focus:outline-none focus:ring-2 focus:ring-primary
               focus:ring-offset-2 resize-vertical min-h-24"
  /&gt;
  &lt;p className="text-xs text-muted-foreground mt-1"&gt;
    Maximum 1000 characters
  &lt;/p&gt;
&lt;/div&gt;</code></pre>
  </div>

  <!-- Do's and Don'ts -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Do's and Don'ts</h3>
    <div class="grid grid-cols-2 gap-4">
      <div class="border border-green-200 bg-green-50 rounded-lg p-4 space-y-2">
        <p class="font-semibold text-sm text-green-900">Do's</p>
        <ul class="text-xs space-y-1 text-green-800">
          <li>✓ Always include a label</li>
          <li>✓ Provide placeholder for guidance</li>
          <li>✓ Show character count limits</li>
          <li>✓ Support resizing (drag corner)</li>
          <li>✓ Show clear error messages</li>
        </ul>
      </div>
      <div class="border border-red-200 bg-red-50 rounded-lg p-4 space-y-2">
        <p class="font-semibold text-sm text-red-900">Don'ts</p>
        <ul class="text-xs space-y-1 text-red-800">
          <li>✗ Don't use placeholder as label</li>
          <li>✗ Don't hide resize handle</li>
          <li>✗ Don't set very small default height</li>
          <li>✗ Don't disable without good reason</li>
          <li>✗ Don't force specific width</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Accessibility -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Accessibility</h3>
    <ul class="text-sm space-y-2 text-muted-foreground list-disc list-inside">
      <li>Always associate with a label via htmlFor/id</li>
      <li>Provide clear focus indicators</li>
      <li>Use aria-describedby for error messages</li>
      <li>Support required and aria-required attributes</li>
      <li>Allow keyboard navigation and selection</li>
      <li>Announce character count changes</li>
      <li>Ensure sufficient color contrast</li>
    </ul>
  </div>

  <!-- Content & Style Guidelines -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Content & Style Guidelines</h3>
    <ul class="text-sm space-y-2 text-muted-foreground list-disc list-inside">
      <li>Default height: 96px (6rem) minimum</li>
      <li>Padding: 8px (0.5rem) all sides</li>
      <li>Border: 1px solid border-border</li>
      <li>Focus ring: 2px ring-primary with offset</li>
      <li>Error border: 2px solid red-500</li>
      <li>Font size: 14px (0.875rem) to match Input</li>
      <li>Allow resize:vertical for user control</li>
      <li>Placeholder color: text-muted-foreground</li>
    </ul>
  </div>
</div>
  `
}

batch4["toggle"] = {
  title: "Toggle",
  description: "A two-state button component that switches between active and inactive states, commonly used for binary options like bold text or visibility toggles.",
  html: `
<div class="space-y-8 p-6">
  <!-- Preview Section -->
  <div class="border border-border rounded-lg p-8 bg-background">
    <h3 class="text-lg font-semibold mb-4">Preview</h3>
    <div class="space-y-8">
      <!-- Default Toggles -->
      <div class="space-y-2">
        <p class="text-xs font-semibold text-muted-foreground mb-3">Default Variant</p>
        <div class="flex gap-2">
          <button class="px-4 py-2 rounded-md border border-border text-foreground hover:bg-muted transition-colors">
            Toggle Off
          </button>
          <button class="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
            Toggle On
          </button>
        </div>
      </div>

      <!-- Outline Toggles -->
      <div class="space-y-2">
        <p class="text-xs font-semibold text-muted-foreground mb-3">Outline Variant</p>
        <div class="flex gap-2">
          <button class="px-4 py-2 rounded-md border-2 border-border text-foreground hover:border-foreground transition-colors">
            Off
          </button>
          <button class="px-4 py-2 rounded-md border-2 border-primary text-primary bg-primary/10 hover:bg-primary/20 transition-colors">
            On
          </button>
        </div>
      </div>

      <!-- With Icons -->
      <div class="space-y-2">
        <p class="text-xs font-semibold text-muted-foreground mb-3">With Icons</p>
        <div class="flex gap-2">
          <button class="px-3 py-2 rounded-md border border-border text-foreground hover:bg-muted transition-colors flex items-center gap-2">
            <span>🔓</span>
            <span>Unlock</span>
          </button>
          <button class="px-3 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center gap-2">
            <span>🔒</span>
            <span>Lock</span>
          </button>
        </div>
      </div>

      <!-- Icon Only -->
      <div class="space-y-2">
        <p class="text-xs font-semibold text-muted-foreground mb-3">Icon Only</p>
        <div class="flex gap-2">
          <button class="w-10 h-10 rounded-md border border-border text-foreground hover:bg-muted transition-colors flex items-center justify-center">
            🔇
          </button>
          <button class="w-10 h-10 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center justify-center">
            🔊
          </button>
        </div>
      </div>

      <!-- Size Variants -->
      <div class="space-y-2">
        <p class="text-xs font-semibold text-muted-foreground mb-3">Size Variants</p>
        <div class="space-y-2">
          <div class="flex gap-2">
            <button class="px-2 py-1 text-xs rounded border border-border hover:bg-muted">Small</button>
            <button class="px-2 py-1 text-xs rounded bg-primary text-primary-foreground hover:bg-primary/90">On</button>
          </div>
          <div class="flex gap-2">
            <button class="px-4 py-2 text-sm rounded border border-border hover:bg-muted">Medium</button>
            <button class="px-4 py-2 text-sm rounded bg-primary text-primary-foreground hover:bg-primary/90">On</button>
          </div>
          <div class="flex gap-2">
            <button class="px-6 py-3 text-base rounded border border-border hover:bg-muted">Large</button>
            <button class="px-6 py-3 text-base rounded bg-primary text-primary-foreground hover:bg-primary/90">On</button>
          </div>
        </div>
      </div>

      <!-- Disabled States -->
      <div class="space-y-2">
        <p class="text-xs font-semibold text-muted-foreground mb-3">Disabled States</p>
        <div class="flex gap-2">
          <button class="px-4 py-2 rounded-md border border-border text-muted-foreground opacity-50 cursor-not-allowed" disabled>
            Disabled
          </button>
          <button class="px-4 py-2 rounded-md bg-primary text-primary-foreground opacity-50 cursor-not-allowed" disabled>
            Disabled
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Purpose & Rationale -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Purpose & Rationale</h3>
    <p class="text-sm text-muted-foreground">The Toggle component provides a clear visual representation of binary states, making it easy for users to switch between on/off, yes/no, or similar two-state options. Its distinct active and inactive appearances make the current state immediately obvious at a glance.</p>
  </div>

  <!-- Anatomy -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Anatomy</h3>
    <div class="space-y-2 font-mono text-sm bg-muted p-4 rounded-lg">
      <div class="flex items-center gap-3">
        <span class="text-primary">├─</span>
        <span><span class="font-semibold">Toggle</span> - Root button element</span>
      </div>
      <div class="flex items-center gap-3 ml-4">
        <span class="text-primary">├─</span>
        <span><span class="font-semibold">Pressed State</span> - Active styling</span>
      </div>
      <div class="flex items-center gap-3 ml-4">
        <span class="text-primary">├─</span>
        <span><span class="font-semibold">Unpressed State</span> - Inactive styling</span>
      </div>
      <div class="flex items-center gap-3 ml-4">
        <span class="text-primary">├─</span>
        <span><span class="font-semibold">Icon</span> - Visual indicator (optional)</span>
      </div>
      <div class="flex items-center gap-3 ml-4">
        <span class="text-primary">└─</span>
        <span><span class="font-semibold">Label</span> - Text content (optional)</span>
      </div>
    </div>
  </div>

  <!-- Variants -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Variants</h3>
    <div class="grid grid-cols-3 gap-4">
      <div class="border border-border rounded-lg p-4">
        <p class="text-xs font-semibold mb-3">Default</p>
        <div class="flex gap-1">
          <button class="px-3 py-1 text-xs rounded border border-border">Off</button>
          <button class="px-3 py-1 text-xs rounded bg-primary text-primary-foreground">On</button>
        </div>
      </div>
      <div class="border border-border rounded-lg p-4">
        <p class="text-xs font-semibold mb-3">Outline</p>
        <div class="flex gap-1">
          <button class="px-3 py-1 text-xs rounded border-2 border-border">Off</button>
          <button class="px-3 py-1 text-xs rounded border-2 border-primary text-primary">On</button>
        </div>
      </div>
      <div class="border border-border rounded-lg p-4">
        <p class="text-xs font-semibold mb-3">Ghost</p>
        <div class="flex gap-1">
          <button class="px-3 py-1 text-xs rounded text-muted-foreground">Off</button>
          <button class="px-3 py-1 text-xs rounded bg-accent text-accent-foreground">On</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Code Example -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Code Example</h3>
    <pre class="bg-muted p-4 rounded-lg overflow-x-auto"><code class="text-xs font-mono">&lt;Toggle
  pressed={isToggled}
  onPressedChange={setIsToggled}
  variant="default"
  size="md"
&gt;
  &lt;BoldIcon /&gt;
&lt;/Toggle&gt;

&lt;!-- With text --&gt;
&lt;Toggle pressed={isLocked} onPressedChange={setIsLocked}&gt;
  &lt;LockIcon className="mr-2" /&gt;
  Lock
&lt;/Toggle&gt;

&lt;!-- Outline variant --&gt;
&lt;Toggle variant="outline" pressed={show} onPressedChange={setShow}&gt;
  Show Details
&lt;/Toggle&gt;</code></pre>
  </div>

  <!-- Do's and Don'ts -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Do's and Don'ts</h3>
    <div class="grid grid-cols-2 gap-4">
      <div class="border border-green-200 bg-green-50 rounded-lg p-4 space-y-2">
        <p class="font-semibold text-sm text-green-900">Do's</p>
        <ul class="text-xs space-y-1 text-green-800">
          <li>✓ Make on/off states visually distinct</li>
          <li>✓ Use icons to clarify function</li>
          <li>✓ Provide clear focus indicators</li>
          <li>✓ Update state immediately on click</li>
          <li>✓ Use consistent sizing</li>
        </ul>
      </div>
      <div class="border border-red-200 bg-red-50 rounded-lg p-4 space-y-2">
        <p class="font-semibold text-sm text-red-900">Don'ts</p>
        <ul class="text-xs space-y-1 text-red-800">
          <li>✗ Don't use subtle color differences</li>
          <li>✗ Don't delay state change feedback</li>
          <li>✗ Don't use only color to indicate state</li>
          <li>✗ Don't make toggle look like checkbox</li>
          <li>✗ Don't require double-click to toggle</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Accessibility -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Accessibility</h3>
    <ul class="text-sm space-y-2 text-muted-foreground list-disc list-inside">
      <li>Use aria-pressed for state management</li>
      <li>Provide descriptive aria-label if icon-only</li>
      <li>Ensure color contrast meets WCAG AA (4.5:1)</li>
      <li>Support keyboard activation (Space/Enter)</li>
      <li>Provide clear focus visible indicator</li>
      <li>Include text alternative for icon toggles</li>
      <li>Announce state changes to screen readers</li>
    </ul>
  </div>

  <!-- Content & Style Guidelines -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Content & Style Guidelines</h3>
    <ul class="text-sm space-y-2 text-muted-foreground list-disc list-inside">
      <li>Inactive: border-border background, text-foreground</li>
      <li>Active: bg-primary, text-primary-foreground</li>
      <li>Outline variant: border-2 border-primary when active</li>
      <li>Minimum size: 40px (10rem) square</li>
      <li>Padding: 8px horizontal, 6px vertical</li>
      <li>Border radius: 6px</li>
      <li>Hover state: bg-muted (inactive), bg-primary/90 (active)</li>
    </ul>
  </div>
</div>
  `
}

batch4["toggle-group"] = {
  title: "Toggle Group",
  description: "A group of toggle buttons that function as a single control set, supporting single or multiple selection depending on configuration.",
  html: `
<div class="space-y-8 p-6">
  <!-- Preview Section -->
  <div class="border border-border rounded-lg p-8 bg-background">
    <h3 class="text-lg font-semibold mb-4">Preview</h3>
    <div class="space-y-8">
      <!-- Single Select -->
      <div class="space-y-2">
        <p class="text-xs font-semibold text-muted-foreground mb-3">Single Select (Radio-like)</p>
        <div class="inline-flex border border-border rounded-lg p-1 bg-muted/30">
          <button class="px-4 py-2 rounded text-sm text-muted-foreground hover:text-foreground transition-colors">Left</button>
          <button class="px-4 py-2 rounded text-sm bg-primary text-primary-foreground transition-colors">Center</button>
          <button class="px-4 py-2 rounded text-sm text-muted-foreground hover:text-foreground transition-colors">Right</button>
        </div>
      </div>

      <!-- Multiple Select -->
      <div class="space-y-2">
        <p class="text-xs font-semibold text-muted-foreground mb-3">Multiple Select (Checkbox-like)</p>
        <div class="inline-flex border border-border rounded-lg p-1 bg-muted/30">
          <button class="px-4 py-2 rounded text-sm bg-primary text-primary-foreground transition-colors">Bold</button>
          <button class="px-4 py-2 rounded text-sm bg-primary text-primary-foreground transition-colors">Italic</button>
          <button class="px-4 py-2 rounded text-sm text-muted-foreground hover:text-foreground transition-colors">Underline</button>
        </div>
      </div>

      <!-- With Icons -->
      <div class="space-y-2">
        <p class="text-xs font-semibold text-muted-foreground mb-3">With Icons</p>
        <div class="inline-flex border border-border rounded-lg p-1 bg-muted/30">
          <button class="px-3 py-2 rounded text-sm text-muted-foreground hover:text-foreground transition-colors">⬅️</button>
          <button class="px-3 py-2 rounded text-sm bg-primary text-primary-foreground transition-colors">⬇️</button>
          <button class="px-3 py-2 rounded text-sm text-muted-foreground hover:text-foreground transition-colors">➡️</button>
        </div>
      </div>

      <!-- Vertical Toggle Group -->
      <div class="space-y-2">
        <p class="text-xs font-semibold text-muted-foreground mb-3">Vertical Layout</p>
        <div className="inline-flex flex-col border border-border rounded-lg p-1 bg-muted/30">
          <button class="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors border-b border-border">Small</button>
          <button class="px-4 py-2 text-sm bg-primary text-primary-foreground transition-colors border-b border-border">Medium</button>
          <button class="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">Large</button>
        </div>
      </div>

      <!-- Text Alignment Group -->
      <div class="space-y-2">
        <p class="text-xs font-semibold text-muted-foreground mb-3">Text Formatting</p>
        <div class="inline-flex border border-border rounded-lg p-1 bg-muted/30 gap-1">
          <button class="px-3 py-2 rounded text-sm text-muted-foreground hover:text-foreground transition-colors">Left</button>
          <button class="px-3 py-2 rounded text-sm bg-primary text-primary-foreground transition-colors">Center</button>
          <button class="px-3 py-2 rounded text-sm text-muted-foreground hover:text-foreground transition-colors">Right</button>
          <button class="px-3 py-2 rounded text-sm text-muted-foreground hover:text-foreground transition-colors">Justify</button>
        </div>
      </div>

      <!-- Disabled Item -->
      <div class="space-y-2">
        <p class="text-xs font-semibold text-muted-foreground mb-3">With Disabled Item</p>
        <div class="inline-flex border border-border rounded-lg p-1 bg-muted/30">
          <button class="px-4 py-2 rounded text-sm bg-primary text-primary-foreground transition-colors">Option 1</button>
          <button class="px-4 py-2 rounded text-sm text-muted-foreground opacity-50 cursor-not-allowed" disabled>Option 2</button>
          <button class="px-4 py-2 rounded text-sm text-muted-foreground hover:text-foreground transition-colors">Option 3</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Purpose & Rationale -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Purpose & Rationale</h3>
    <p class="text-sm text-muted-foreground">The Toggle Group component manages collections of toggle buttons with exclusive or inclusive selection, eliminating the need for separate radio button or checkbox groups. It provides a compact, visually cohesive interface for mutually exclusive or multiple options like text formatting, view modes, or sorting preferences.</p>
  </div>

  <!-- Anatomy -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Anatomy</h3>
    <div class="space-y-2 font-mono text-sm bg-muted p-4 rounded-lg">
      <div class="flex items-center gap-3">
        <span class="text-primary">├─</span>
        <span><span class="font-semibold">ToggleGroup</span> - Root container</span>
      </div>
      <div class="flex items-center gap-3 ml-4">
        <span class="text-primary">├─</span>
        <span><span class="font-semibold">type</span> - "single" or "multiple"</span>
      </div>
      <div class="flex items-center gap-3 ml-4">
        <span class="text-primary">├─</span>
        <span><span class="font-semibold">ToggleGroupItem</span> - Individual button</span>
      </div>
      <div class="flex items-center gap-3 ml-4">
        <span class="text-primary">└─</span>
        <span><span class="font-semibold">value</span> - Item identifier</span>
      </div>
    </div>
  </div>

  <!-- Variants -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Variants</h3>
    <div class="grid grid-cols-2 gap-4">
      <div class="border border-border rounded-lg p-4">
        <p class="text-xs font-semibold mb-3">Single Select</p>
        <div class="inline-flex border border-border rounded-lg p-1 bg-muted/30">
          <button class="px-3 py-1 text-xs rounded text-muted-foreground">One</button>
          <button class="px-3 py-1 text-xs rounded bg-primary text-primary-foreground">Two</button>
          <button class="px-3 py-1 text-xs rounded text-muted-foreground">Three</button>
        </div>
      </div>
      <div class="border border-border rounded-lg p-4">
        <p class="text-xs font-semibold mb-3">Multiple Select</p>
        <div class="inline-flex border border-border rounded-lg p-1 bg-muted/30">
          <button class="px-3 py-1 text-xs rounded bg-primary text-primary-foreground">One</button>
          <button class="px-3 py-1 text-xs rounded text-muted-foreground">Two</button>
          <button class="px-3 py-1 text-xs rounded bg-primary text-primary-foreground">Three</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Code Example -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Code Example</h3>
    <pre class="bg-muted p-4 rounded-lg overflow-x-auto"><code class="text-xs font-mono">&lt;!-- Single select (radio-like) --&gt;
&lt;ToggleGroup type="single" value={align} onValueChange={setAlign}&gt;
  &lt;ToggleGroupItem value="left"&gt;Left&lt;/ToggleGroupItem&gt;
  &lt;ToggleGroupItem value="center"&gt;Center&lt;/ToggleGroupItem&gt;
  &lt;ToggleGroupItem value="right"&gt;Right&lt;/ToggleGroupItem&gt;
&lt;/ToggleGroup&gt;

&lt;!-- Multiple select (checkbox-like) --&gt;
&lt;ToggleGroup type="multiple" value={styles} onValueChange={setStyles}&gt;
  &lt;ToggleGroupItem value="bold"&gt;
    &lt;BoldIcon /&gt;
  &lt;/ToggleGroupItem&gt;
  &lt;ToggleGroupItem value="italic"&gt;
    &lt;ItalicIcon /&gt;
  &lt;/ToggleGroupItem&gt;
&lt;/ToggleGroup&gt;</code></pre>
  </div>

  <!-- Do's and Don'ts -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Do's and Don'ts</h3>
    <div class="grid grid-cols-2 gap-4">
      <div class="border border-green-200 bg-green-50 rounded-lg p-4 space-y-2">
        <p class="font-semibold text-sm text-green-900">Do's</p>
        <ul class="text-xs space-y-1 text-green-800">
          <li>✓ Use single-select for exclusive options</li>
          <li>✓ Use multiple-select for additive options</li>
          <li>✓ Show selected state clearly</li>
          <li>✓ Keep groups to 2-5 items</li>
          <li>✓ Use consistent sizing</li>
        </ul>
      </div>
      <div class="border border-red-200 bg-red-50 rounded-lg p-4 space-y-2">
        <p class="font-semibold text-sm text-red-900">Don'ts</p>
        <ul class="text-xs space-y-1 text-red-800">
          <li>✗ Don't mix single and multiple in one group</li>
          <li>✗ Don't use ambiguous labels</li>
          <li>✗ Don't allow deselecting in single-select</li>
          <li>✗ Don't put more than 6 items in one group</li>
          <li>✗ Don't make groups wider than viewport</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Accessibility -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Accessibility</h3>
    <ul class="text-sm space-y-2 text-muted-foreground list-disc list-inside">
      <li>Use role="group" for the container</li>
      <li>Provide aria-label describing the group purpose</li>
      <li>Use aria-pressed for each item state</li>
      <li>Support arrow key navigation (left/right or up/down)</li>
      <li>Make each item keyboard focusable</li>
      <li>Provide clear focus visible indicator</li>
      <li>Announce group changes to screen readers</li>
    </ul>
  </div>

  <!-- Content & Style Guidelines -->
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Content & Style Guidelines</h3>
    <ul class="text-sm space-y-2 text-muted-foreground list-disc list-inside">
      <li>Container: border-border with bg-muted/30 background</li>
      <li>Container padding: 4px (0.25rem)</li>
      <li>Items: rounded-md with px-4 py-2</li>
      <li>Selected item: bg-primary text-primary-foreground</li>
      <li>Unselected item: text-muted-foreground hover:text-foreground</li>
      <li>Group gap: 0 (items adjacent) or 4px (separated)</li>
      <li>Orientation: horizontal by default, support vertical</li>
      <li>Font size: 14px (0.875rem)</li>
    </ul>
  </div>
</div>
  `
}

export default batch4
