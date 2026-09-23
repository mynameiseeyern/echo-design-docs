interface DocContent {
  title: string
  description: string
  html: string
}

const batch3: Record<string, DocContent> = {}

batch3["label"] = {
  title: "Label",
  description: "Form label component for associating text with form inputs. Provides consistent styling and optional required indicator.",
  html: `
    <div class="space-y-8 p-8 bg-card">
      <!-- Preview Section -->
      <section id="label-preview">
        <h2 class="text-2xl font-bold mb-6 text-foreground">Preview</h2>
        <div class="bg-muted/30 p-6 rounded-lg border border-border">
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-foreground/80 mb-2">
                Email Address
              </label>
              <input type="email" class="w-full px-3 py-2 border border-border rounded-md text-sm" placeholder="you@example.com" />
            </div>
            <div>
              <label class="block text-sm font-medium text-foreground/80 mb-2">
                Password <span class="text-red-500">*</span>
              </label>
              <input type="password" class="w-full px-3 py-2 border border-border rounded-md text-sm" placeholder="••••••••" />
            </div>
            <div>
              <label class="block text-sm font-medium text-muted-foreground/60 mb-2">
                Disabled Field
              </label>
              <input type="text" disabled class="w-full px-3 py-2 border border-border rounded-md text-sm bg-muted cursor-not-allowed" placeholder="Cannot edit" />
            </div>
          </div>
        </div>
      </section>

      <!-- Purpose & Rationale -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Purpose & Rationale</h3>
        <p class="text-foreground/80 mb-2">Labels provide semantic meaning and accessibility for form inputs. They improve usability by expanding the clickable area and ensuring screen readers can associate text with inputs. Required indicators help users understand form expectations at a glance.</p>
      </section>

      <!-- Anatomy -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Anatomy</h3>
        <div class="bg-muted/30 p-4 rounded-lg border border-border font-mono text-sm">
          <div class="mb-2">&lt;label&gt;</div>
          <div class="ml-4 text-foreground/80">
            <div class="mb-1">Text content</div>
            <div class="text-muted-foreground">&lt;span class="text-red-500"&gt;*&lt;/span&gt; (required indicator)</div>
          </div>
        </div>
      </section>

      <!-- Variants -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Variants</h3>
        <ul class="space-y-2 text-foreground/80">
          <li><strong>Default:</strong> Standard label text in medium gray</li>
          <li><strong>Required:</strong> With red asterisk indicator</li>
          <li><strong>Disabled:</strong> Light gray text for disabled fields</li>
          <li><strong>Helper text:</strong> Optional description below label</li>
        </ul>
      </section>

      <!-- Code Example -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Code Example</h3>
        <pre class="bg-foreground text-muted-foreground p-4 rounded-lg overflow-x-auto text-sm font-mono"><code>&lt;label class="block text-sm font-medium text-foreground/80 mb-2"&gt;
  Username
  &lt;span class="text-red-500"&gt;*&lt;/span&gt;
&lt;/label&gt;
&lt;input type="text" class="w-full px-3 py-2 border border-border rounded-md" /&gt;</code></pre>
      </section>

      <!-- Do's and Don'ts -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Do's and Don'ts</h3>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-green-50 p-4 rounded-lg border border-green-200">
            <div class="font-bold text-green-900 mb-2">✓ Do</div>
            <ul class="text-sm text-green-800 space-y-1">
              <li>• Use clear, concise label text</li>
              <li>• Always associate labels with inputs</li>
              <li>• Mark required fields with *</li>
              <li>• Use consistent font sizes</li>
            </ul>
          </div>
          <div class="bg-red-50 p-4 rounded-lg border border-red-200">
            <div class="font-bold text-red-900 mb-2">✗ Don't</div>
            <ul class="text-sm text-red-800 space-y-1">
              <li>• Place labels inside inputs</li>
              <li>• Use placeholder as label</li>
              <li>• Make labels too long</li>
              <li>• Use ambiguous required indicators</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Accessibility -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Accessibility</h3>
        <ul class="space-y-2 text-foreground/80">
          <li>• Use &lt;label&gt; element with for attribute pointing to input id</li>
          <li>• Ensure sufficient color contrast (WCAG AA 4.5:1)</li>
          <li>• Include required indicator in label text for screen readers</li>
          <li>• Avoid placeholder-only labels</li>
          <li>• Support keyboard focus on associated input</li>
        </ul>
      </section>

      <!-- Content & Style Guidelines -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Content & Style Guidelines</h3>
        <ul class="space-y-2 text-foreground/80">
          <li><strong>Typography:</strong> Use 14px font weight 500 for optimal readability</li>
          <li><strong>Color:</strong> Medium gray (700) for standard, lighter for disabled</li>
          <li><strong>Spacing:</strong> 8px margin-bottom between label and input</li>
          <li><strong>Required:</strong> Red asterisk immediately after text</li>
          <li><strong>Disabled state:</strong> Use lighter gray (400) for accessibility</li>
        </ul>
      </section>
    </div>
  `
}

batch3["menubar"] = {
  title: "Menubar",
  description: "Horizontal menu bar component for organizing application menus (File, Edit, View). Provides dropdown menu items with keyboard navigation support.",
  html: `
    <div class="space-y-8 p-8 bg-card">
      <!-- Preview Section -->
      <section id="menubar-preview">
        <h2 class="text-2xl font-bold mb-6 text-foreground">Preview</h2>
        <div class="bg-muted/30 p-6 rounded-lg border border-border">
          <div class="border-b border-border">
            <div class="flex gap-8 px-4 py-2">
              <div class="relative group">
                <button class="text-sm font-medium text-foreground/80 hover:text-foreground pb-2 border-b-2 border-transparent hover:border-primary">
                  File
                </button>
                <div class="hidden group-hover:block absolute top-full left-0 mt-0 w-48 bg-card border border-border rounded-md shadow-lg z-10">
                  <a href="#" class="block px-4 py-2 text-sm text-foreground/80 hover:bg-muted/30">New</a>
                  <a href="#" class="block px-4 py-2 text-sm text-foreground/80 hover:bg-muted/30">Open</a>
                  <a href="#" class="block px-4 py-2 text-sm text-foreground/80 hover:bg-muted/30">Save</a>
                  <div class="border-t border-border"></div>
                  <a href="#" class="block px-4 py-2 text-sm text-foreground/80 hover:bg-muted/30">Exit</a>
                </div>
              </div>
              <div class="relative group">
                <button class="text-sm font-medium text-foreground/80 hover:text-foreground pb-2 border-b-2 border-transparent hover:border-primary">
                  Edit
                </button>
                <div class="hidden group-hover:block absolute top-full left-0 mt-0 w-48 bg-card border border-border rounded-md shadow-lg z-10">
                  <a href="#" class="block px-4 py-2 text-sm text-foreground/80 hover:bg-muted/30">Undo</a>
                  <a href="#" class="block px-4 py-2 text-sm text-foreground/80 hover:bg-muted/30">Redo</a>
                  <div class="border-t border-border"></div>
                  <a href="#" class="block px-4 py-2 text-sm text-foreground/80 hover:bg-muted/30">Cut</a>
                  <a href="#" class="block px-4 py-2 text-sm text-foreground/80 hover:bg-muted/30">Copy</a>
                  <a href="#" class="block px-4 py-2 text-sm text-foreground/80 hover:bg-muted/30">Paste</a>
                </div>
              </div>
              <div class="relative group">
                <button class="text-sm font-medium text-foreground/80 hover:text-foreground pb-2 border-b-2 border-transparent hover:border-primary">
                  View
                </button>
                <div class="hidden group-hover:block absolute top-full left-0 mt-0 w-48 bg-card border border-border rounded-md shadow-lg z-10">
                  <a href="#" class="block px-4 py-2 text-sm text-foreground/80 hover:bg-muted/30">Zoom In</a>
                  <a href="#" class="block px-4 py-2 text-sm text-foreground/80 hover:bg-muted/30">Zoom Out</a>
                  <a href="#" class="block px-4 py-2 text-sm text-foreground/80 hover:bg-muted/30">Reset Zoom</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Purpose & Rationale -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Purpose & Rationale</h3>
        <p class="text-foreground/80 mb-2">Menubar organizes related actions into logical groups. It provides a familiar interface pattern from desktop applications, making complex feature sets discoverable and reducing cognitive load. The horizontal layout is ideal for application-level navigation and commands.</p>
      </section>

      <!-- Anatomy -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Anatomy</h3>
        <div class="bg-muted/30 p-4 rounded-lg border border-border font-mono text-sm space-y-2">
          <div><span class="font-bold">Menubar</span> - Container for menu items</div>
          <div class="ml-4">
            <div><span class="font-bold">MenubarMenu</span> - Individual menu group</div>
            <div class="ml-4">
              <div><span class="font-bold">MenubarTrigger</span> - Menu label/button</div>
              <div><span class="font-bold">MenubarContent</span> - Dropdown container</div>
              <div class="ml-4"><span class="font-bold">MenubarItem</span> - Individual menu item</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Variants -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Variants</h3>
        <ul class="space-y-2 text-foreground/80">
          <li><strong>Default:</strong> Standard menu items with hover state</li>
          <li><strong>Active:</strong> Current menu trigger highlighted with primary color</li>
          <li><strong>Disabled items:</strong> Grayed out menu items</li>
          <li><strong>Separator:</strong> Visual dividers between item groups</li>
        </ul>
      </section>

      <!-- Code Example -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Code Example</h3>
        <pre class="bg-foreground text-muted-foreground p-4 rounded-lg overflow-x-auto text-sm font-mono"><code>&lt;div class="flex gap-8 px-4 py-2"&gt;
  &lt;div class="relative group"&gt;
    &lt;button class="text-sm font-medium"&gt;File&lt;/button&gt;
    &lt;div class="hidden group-hover:block absolute bg-card border rounded-md shadow-lg"&gt;
      &lt;a href="#" class="block px-4 py-2 hover:bg-muted/30"&gt;New&lt;/a&gt;
      &lt;a href="#" class="block px-4 py-2 hover:bg-muted/30"&gt;Open&lt;/a&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </section>

      <!-- Do's and Don'ts -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Do's and Don'ts</h3>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-green-50 p-4 rounded-lg border border-green-200">
            <div class="font-bold text-green-900 mb-2">✓ Do</div>
            <ul class="text-sm text-green-800 space-y-1">
              <li>• Use clear, action-oriented labels</li>
              <li>• Group related items together</li>
              <li>• Show keyboard shortcuts</li>
              <li>• Support arrow key navigation</li>
            </ul>
          </div>
          <div class="bg-red-50 p-4 rounded-lg border border-red-200">
            <div class="font-bold text-red-900 mb-2">✗ Don't</div>
            <ul class="text-sm text-red-800 space-y-1">
              <li>• Create deeply nested menus</li>
              <li>• Mix different action types</li>
              <li>• Hide essential functions</li>
              <li>• Use vague menu names</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Accessibility -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Accessibility</h3>
        <ul class="space-y-2 text-foreground/80">
          <li>• Use semantic button and list elements</li>
          <li>• Support keyboard navigation (arrow keys, Enter, Escape)</li>
          <li>• Add ARIA roles: menubar, menu, menuitem</li>
          <li>• Announce menu state to screen readers</li>
          <li>• Ensure focus is visible and managed correctly</li>
        </ul>
      </section>

      <!-- Content & Style Guidelines -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Content & Style Guidelines</h3>
        <ul class="space-y-2 text-foreground/80">
          <li><strong>Typography:</strong> Use 14px regular weight for menu items</li>
          <li><strong>Spacing:</strong> 8px padding for menu items</li>
          <li><strong>Hover state:</strong> Light gray background</li>
          <li><strong>Separator:</strong> 1px border with margin above and below</li>
          <li><strong>Max items:</strong> 5-7 items per menu for optimal usability</li>
        </ul>
      </section>
    </div>
  `
}

batch3["navigation-menu"] = {
  title: "Navigation Menu",
  description: "Site navigation component for horizontal menu links with active state indicator. Perfect for main site navigation and secondary navigation patterns.",
  html: `
    <div class="space-y-8 p-8 bg-card">
      <!-- Preview Section -->
      <section id="navigation-menu-preview">
        <h2 class="text-2xl font-bold mb-6 text-foreground">Preview</h2>
        <div class="bg-muted/30 p-6 rounded-lg border border-border">
          <nav class="border-b border-border">
            <div class="flex items-center gap-8 px-6 py-4">
              <a href="#" class="text-sm font-medium text-foreground/80 pb-4 border-b-2 border-transparent hover:border-primary">
                Home
              </a>
              <a href="#" class="text-sm font-medium text-primary pb-4 border-b-2 border-primary">
                Components
              </a>
              <a href="#" class="text-sm font-medium text-foreground/80 pb-4 border-b-2 border-transparent hover:border-primary">
                Documentation
              </a>
              <a href="#" class="text-sm font-medium text-foreground/80 pb-4 border-b-2 border-transparent hover:border-primary">
                Examples
              </a>
              <a href="#" class="text-sm font-medium text-foreground/80 pb-4 border-b-2 border-transparent hover:border-primary">
                About
              </a>
            </div>
          </nav>
        </div>
      </section>

      <!-- Purpose & Rationale -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Purpose & Rationale</h3>
        <p class="text-foreground/80 mb-2">Navigation menus establish site structure and help users understand where they are and what they can access. Active state indicators (underline, color change) provide clear feedback about the current page, reducing navigation friction and improving user orientation.</p>
      </section>

      <!-- Anatomy -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Anatomy</h3>
        <div class="bg-muted/30 p-4 rounded-lg border border-border font-mono text-sm space-y-2">
          <div><span class="font-bold">NavigationMenu</span> - Root container</div>
          <div class="ml-4">
            <div><span class="font-bold">NavigationMenuList</span> - List of menu items</div>
            <div class="ml-4">
              <div><span class="font-bold">NavigationMenuItem</span> - Individual menu item</div>
              <div><span class="font-bold">NavigationMenuTrigger</span> - Link or trigger button</div>
              <div><span class="font-bold">NavigationMenuContent</span> - Optional submenu (dropdown)</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Variants -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Variants</h3>
        <ul class="space-y-2 text-foreground/80">
          <li><strong>Simple links:</strong> Basic navigation without dropdowns</li>
          <li><strong>With dropdown:</strong> Items that reveal submenu on hover/click</li>
          <li><strong>Active state:</strong> Current page highlighted with primary color</li>
          <li><strong>Horizontal/Vertical:</strong> Flex layout direction</li>
        </ul>
      </section>

      <!-- Code Example -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Code Example</h3>
        <pre class="bg-foreground text-muted-foreground p-4 rounded-lg overflow-x-auto text-sm font-mono"><code>&lt;nav class="border-b border-border"&gt;
  &lt;div class="flex items-center gap-8 px-6 py-4"&gt;
    &lt;a href="#" class="text-sm font-medium text-foreground/80 pb-4 border-b-2 border-transparent hover:border-primary"&gt;
      Home
    &lt;/a&gt;
    &lt;a href="#" class="text-sm font-medium text-primary pb-4 border-b-2 border-primary"&gt;
      Components
    &lt;/a&gt;
  &lt;/div&gt;
&lt;/nav&gt;</code></pre>
      </section>

      <!-- Do's and Don'ts -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Do's and Don'ts</h3>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-green-50 p-4 rounded-lg border border-green-200">
            <div class="font-bold text-green-900 mb-2">✓ Do</div>
            <ul class="text-sm text-green-800 space-y-1">
              <li>• Use clear link labels</li>
              <li>• Show active state clearly</li>
              <li>• Keep navigation concise</li>
              <li>• Support responsive layouts</li>
            </ul>
          </div>
          <div class="bg-red-50 p-4 rounded-lg border border-red-200">
            <div class="font-bold text-red-900 mb-2">✗ Don't</div>
            <ul class="text-sm text-red-800 space-y-1">
              <li>• Overload with too many items</li>
              <li>• Use unclear abbreviations</li>
              <li>• Mix with other UI patterns</li>
              <li>• Forget mobile optimization</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Accessibility -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Accessibility</h3>
        <ul class="space-y-2 text-foreground/80">
          <li>• Use semantic &lt;nav&gt; element</li>
          <li>• Mark active link with aria-current="page"</li>
          <li>• Ensure sufficient color contrast</li>
          <li>• Support keyboard Tab navigation</li>
          <li>• Provide skip navigation link for long menus</li>
        </ul>
      </section>

      <!-- Content & Style Guidelines -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Content & Style Guidelines</h3>
        <ul class="space-y-2 text-foreground/80">
          <li><strong>Link color:</strong> Gray (700) default, primary when active</li>
          <li><strong>Underline:</strong> Bottom border 2px, transparent by default</li>
          <li><strong>Spacing:</strong> 32px gap between items, 16px padding vertical</li>
          <li><strong>Typography:</strong> 14px font weight 500</li>
          <li><strong>Transition:</strong> 200ms ease for color and border changes</li>
        </ul>
      </section>
    </div>
  `
}

batch3["pagination"] = {
  title: "Pagination",
  description: "Page navigation controls for browsing through paginated content. Shows Previous/Next buttons and numbered page links with active state.",
  html: `
    <div class="space-y-8 p-8 bg-card">
      <!-- Preview Section -->
      <section id="pagination-preview">
        <h2 class="text-2xl font-bold mb-6 text-foreground">Preview</h2>
        <div class="bg-muted/30 p-6 rounded-lg border border-border">
          <div class="flex items-center justify-center gap-2">
            <button class="px-3 py-2 text-sm font-medium text-foreground/80 border border-border rounded-md hover:bg-muted">
              Previous
            </button>
            <button class="px-3 py-2 text-sm font-medium text-foreground/80 border border-border rounded-md hover:bg-muted">
              1
            </button>
            <button class="px-3 py-2 text-sm font-medium text-white bg-primary border border-primary rounded-md">
              2
            </button>
            <button class="px-3 py-2 text-sm font-medium text-foreground/80 border border-border rounded-md hover:bg-muted">
              3
            </button>
            <button class="px-3 py-2 text-sm font-medium text-foreground/80 border border-border rounded-md hover:bg-muted">
              4
            </button>
            <button class="px-3 py-2 text-sm font-medium text-foreground/80 border border-border rounded-md hover:bg-muted">
              5
            </button>
            <span class="px-2 text-sm text-muted-foreground">...</span>
            <button class="px-3 py-2 text-sm font-medium text-foreground/80 border border-border rounded-md hover:bg-muted">
              10
            </button>
            <button class="px-3 py-2 text-sm font-medium text-foreground/80 border border-border rounded-md hover:bg-muted">
              Next
            </button>
          </div>
        </div>
      </section>

      <!-- Purpose & Rationale -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Purpose & Rationale</h3>
        <p class="text-foreground/80 mb-2">Pagination allows users to navigate large datasets without overwhelming them with content. It breaks information into manageable pages while providing quick access to specific pages. Active page highlighting provides clear context about current position.</p>
      </section>

      <!-- Anatomy -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Anatomy</h3>
        <div class="bg-muted/30 p-4 rounded-lg border border-border font-mono text-sm space-y-2">
          <div><span class="font-bold">Pagination</span> - Root container</div>
          <div class="ml-4">
            <div><span class="font-bold">PaginationContent</span> - Button container</div>
            <div class="ml-4">
              <div><span class="font-bold">PaginationPrevious</span> - Previous page button</div>
              <div><span class="font-bold">PaginationItem</span> - Individual page or button</div>
              <div><span class="font-bold">PaginationLink</span> - Page number link</div>
              <div><span class="font-bold">PaginationNext</span> - Next page button</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Variants -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Variants</h3>
        <ul class="space-y-2 text-foreground/80">
          <li><strong>Default:</strong> Number buttons with Previous/Next</li>
          <li><strong>Active:</strong> Current page highlighted with primary background</li>
          <li><strong>Disabled:</strong> Previous/Next buttons disabled at boundaries</li>
          <li><strong>Ellipsis:</strong> ... shown for skipped page ranges</li>
        </ul>
      </section>

      <!-- Code Example -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Code Example</h3>
        <pre class="bg-foreground text-muted-foreground p-4 rounded-lg overflow-x-auto text-sm font-mono"><code>&lt;div class="flex items-center justify-center gap-2"&gt;
  &lt;button class="px-3 py-2 text-sm border border-border rounded-md hover:bg-muted"&gt;
    Previous
  &lt;/button&gt;
  &lt;button class="px-3 py-2 text-sm text-white bg-primary rounded-md"&gt;
    2
  &lt;/button&gt;
  &lt;button class="px-3 py-2 text-sm border border-border rounded-md hover:bg-muted"&gt;
    3
  &lt;/button&gt;
  &lt;button class="px-3 py-2 text-sm border border-border rounded-md hover:bg-muted"&gt;
    Next
  &lt;/button&gt;
&lt;/div&gt;</code></pre>
      </section>

      <!-- Do's and Don'ts -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Do's and Don'ts</h3>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-green-50 p-4 rounded-lg border border-green-200">
            <div class="font-bold text-green-900 mb-2">✓ Do</div>
            <ul class="text-sm text-green-800 space-y-1">
              <li>• Disable navigation at boundaries</li>
              <li>• Show current page clearly</li>
              <li>• Include ellipsis for gaps</li>
              <li>• Keep buttons appropriately sized</li>
            </ul>
          </div>
          <div class="bg-red-50 p-4 rounded-lg border border-red-200">
            <div class="font-bold text-red-900 mb-2">✗ Don't</div>
            <ul class="text-sm text-red-800 space-y-1">
              <li>• Show too many page numbers</li>
              <li>• Make buttons too small</li>
              <li>• Obscure active page</li>
              <li>• Force page refresh on click</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Accessibility -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Accessibility</h3>
        <ul class="space-y-2 text-foreground/80">
          <li>• Mark active page with aria-current="page"</li>
          <li>• Disable Previous/Next buttons at boundaries</li>
          <li>• Provide descriptive button labels (Previous, Next)</li>
          <li>• Support keyboard navigation</li>
          <li>• Include aria-label for page buttons</li>
        </ul>
      </section>

      <!-- Content & Style Guidelines -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Content & Style Guidelines</h3>
        <ul class="space-y-2 text-foreground/80">
          <li><strong>Button size:</strong> 36px minimum height and width</li>
          <li><strong>Gap:</strong> 8px between buttons</li>
          <li><strong>Active color:</strong> Primary background with white text</li>
          <li><strong>Typography:</strong> 14px font weight 500</li>
          <li><strong>Max visible pages:</strong> Show 5-7 page numbers for clarity</li>
        </ul>
      </section>
    </div>
  `
}

batch3["radio-group"] = {
  title: "Radio Group",
  description: "Single-select option group component. Allows users to choose one option from a list of mutually exclusive choices.",
  html: `
    <div class="space-y-8 p-8 bg-card">
      <!-- Preview Section -->
      <section id="radio-group-preview">
        <h2 class="text-2xl font-bold mb-6 text-foreground">Preview</h2>
        <div class="bg-muted/30 p-6 rounded-lg border border-border">
          <div class="space-y-4">
            <div class="space-y-3">
              <label class="flex items-center gap-3 cursor-pointer">
                <div class="w-5 h-5 rounded-full border-2 border-border flex items-center justify-center">
                  <div class="w-3 h-3 rounded-full bg-primary"></div>
                </div>
                <span class="text-sm font-medium text-foreground">Option One</span>
              </label>
              <label class="flex items-center gap-3 cursor-pointer">
                <div class="w-5 h-5 rounded-full border-2 border-border"></div>
                <span class="text-sm font-medium text-foreground/80">Option Two</span>
              </label>
              <label class="flex items-center gap-3 cursor-pointer">
                <div class="w-5 h-5 rounded-full border-2 border-border"></div>
                <span class="text-sm font-medium text-foreground/80">Option Three</span>
              </label>
            </div>
            <div class="border-t border-border pt-4 mt-4">
              <div class="text-sm font-medium text-foreground/80 mb-3">Disabled State</div>
              <label class="flex items-center gap-3 cursor-not-allowed opacity-50">
                <div class="w-5 h-5 rounded-full border-2 border-border"></div>
                <span class="text-sm font-medium text-muted-foreground">Disabled Option</span>
              </label>
            </div>
          </div>
        </div>
      </section>

      <!-- Purpose & Rationale -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Purpose & Rationale</h3>
        <p class="text-foreground/80 mb-2">Radio buttons are ideal when users must select exactly one option from a predefined set. The circular design and filled dot convention are universally recognized. Radio groups are more scannable and accessible than select dropdowns for small option lists (3-5 items).</p>
      </section>

      <!-- Anatomy -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Anatomy</h3>
        <div class="bg-muted/30 p-4 rounded-lg border border-border font-mono text-sm space-y-2">
          <div><span class="font-bold">RadioGroup</span> - Container for radio items</div>
          <div class="ml-4">
            <div><span class="font-bold">RadioGroupItem</span> - Individual radio button</div>
            <div class="ml-4">
              <div>Outer circle: 20px diameter, 2px border</div>
              <div>Inner dot: 12px diameter (when selected)</div>
            </div>
            <div><span class="font-bold">Label</span> - Associated text label</div>
          </div>
        </div>
      </section>

      <!-- Variants -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Variants</h3>
        <ul class="space-y-2 text-foreground/80">
          <li><strong>Default (unselected):</strong> Gray border, empty</li>
          <li><strong>Selected:</strong> Primary colored dot inside</li>
          <li><strong>Hover:</strong> Slightly darker border</li>
          <li><strong>Disabled:</strong> Grayed out radio and label</li>
          <li><strong>With description:</strong> Helper text below label</li>
        </ul>
      </section>

      <!-- Code Example -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Code Example</h3>
        <pre class="bg-foreground text-muted-foreground p-4 rounded-lg overflow-x-auto text-sm font-mono"><code>&lt;div class="space-y-3"&gt;
  &lt;label class="flex items-center gap-3 cursor-pointer"&gt;
    &lt;div class="w-5 h-5 rounded-full border-2 border-border flex items-center justify-center"&gt;
      &lt;div class="w-3 h-3 rounded-full bg-primary"&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;span class="text-sm font-medium"&gt;Option One&lt;/span&gt;
  &lt;/label&gt;
  &lt;label class="flex items-center gap-3 cursor-pointer"&gt;
    &lt;div class="w-5 h-5 rounded-full border-2 border-border"&gt;&lt;/div&gt;
    &lt;span class="text-sm font-medium"&gt;Option Two&lt;/span&gt;
  &lt;/label&gt;
&lt;/div&gt;</code></pre>
      </section>

      <!-- Do's and Don'ts -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Do's and Don'ts</h3>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-green-50 p-4 rounded-lg border border-green-200">
            <div class="font-bold text-green-900 mb-2">✓ Do</div>
            <ul class="text-sm text-green-800 space-y-1">
              <li>• Use for 3-5 options</li>
              <li>• Stack vertically</li>
              <li>• Pair label with radio button</li>
              <li>• Provide clear option text</li>
            </ul>
          </div>
          <div class="bg-red-50 p-4 rounded-lg border border-red-200">
            <div class="font-bold text-red-900 mb-2">✗ Don't</div>
            <ul class="text-sm text-red-800 space-y-1">
              <li>• Use for more than 5 options</li>
              <li>• Mix with checkboxes</li>
              <li>• Change border thickness</li>
              <li>• Use unclear labels</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Accessibility -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Accessibility</h3>
        <ul class="space-y-2 text-foreground/80">
          <li>• Use native &lt;input type="radio"&gt; or ARIA roles</li>
          <li>• Associate labels with inputs via id/for or wrap input</li>
          <li>• Support keyboard navigation (arrow keys)</li>
          <li>• Mark selected option with checked attribute</li>
          <li>• Ensure sufficient color contrast (WCAG AA)</li>
        </ul>
      </section>

      <!-- Content & Style Guidelines -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Content & Style Guidelines</h3>
        <ul class="space-y-2 text-foreground/80">
          <li><strong>Circle size:</strong> 20px outer diameter</li>
          <li><strong>Border:</strong> 2px gray (300)</li>
          <li><strong>Inner dot:</strong> 12px, primary color when selected</li>
          <li><strong>Gap:</strong> 12px between radio and label</li>
          <li><strong>Typography:</strong> 14px regular for labels</li>
          <li><strong>Spacing:</strong> 12px vertical gap between options</li>
        </ul>
      </section>
    </div>
  `
}

batch3["resizable"] = {
  title: "Resizable",
  description: "Resizable panels component for flexible split layouts. Allows users to adjust panel sizes with drag handles between panels.",
  html: `
    <div class="space-y-8 p-8 bg-card">
      <!-- Preview Section -->
      <section id="resizable-preview">
        <h2 class="text-2xl font-bold mb-6 text-foreground">Preview</h2>
        <div class="bg-muted/30 p-6 rounded-lg border border-border">
          <div class="flex gap-0 h-64 border border-border rounded">
            <div class="flex-1 bg-card p-4 border-r border-border overflow-y-auto">
              <div class="text-sm font-medium text-foreground/80 mb-2">Left Panel</div>
              <p class="text-xs text-muted-foreground">Resize by dragging the divider between panels. This panel can contain navigation, content lists, or settings.</p>
            </div>
            <div class="w-1 border-border hover:bg-primary cursor-col-resize transition-colors"></div>
            <div class="flex-1 bg-card p-4 overflow-y-auto">
              <div class="text-sm font-medium text-foreground/80 mb-2">Right Panel</div>
              <p class="text-xs text-muted-foreground">This is the main content area. Users can adjust panel widths by dragging. Perfect for split-view editors, explorers, or detail panels.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Purpose & Rationale -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Purpose & Rationale</h3>
        <p class="text-foreground/80 mb-2">Resizable panels give users control over their workspace layout. This is essential for productivity applications where users need to balance navigation, content, and details views. Users can optimize layouts for their specific workflows.</p>
      </section>

      <!-- Anatomy -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Anatomy</h3>
        <div class="bg-muted/30 p-4 rounded-lg border border-border font-mono text-sm space-y-2">
          <div><span class="font-bold">ResizablePanelGroup</span> - Container for resizable layout</div>
          <div class="ml-4">
            <div><span class="font-bold">ResizablePanel</span> - Individual resizable section</div>
            <div><span class="font-bold">ResizableHandle</span> - Drag divider between panels</div>
          </div>
          <div class="mt-2">Layout direction: row (horizontal) or column (vertical)</div>
        </div>
      </section>

      <!-- Variants -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Variants</h3>
        <ul class="space-y-2 text-foreground/80">
          <li><strong>Horizontal split:</strong> Left-right panels</li>
          <li><strong>Vertical split:</strong> Top-bottom panels</li>
          <li><strong>Three-way split:</strong> Multiple panels with handles</li>
          <li><strong>Collapsible panels:</strong> Handles that collapse/expand</li>
        </ul>
      </section>

      <!-- Code Example -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Code Example</h3>
        <pre class="bg-foreground text-muted-foreground p-4 rounded-lg overflow-x-auto text-sm font-mono"><code>&lt;div class="flex gap-0 h-64 border border-border rounded"&gt;
  &lt;div class="flex-1 bg-card p-4 border-r border-border overflow-y-auto"&gt;
    Left Panel
  &lt;/div&gt;
  &lt;div class="w-1 border-border hover:bg-primary cursor-col-resize transition-colors"&gt;&lt;/div&gt;
  &lt;div class="flex-1 bg-card p-4 overflow-y-auto"&gt;
    Right Panel
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </section>

      <!-- Do's and Don'ts -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Do's and Don'ts</h3>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-green-50 p-4 rounded-lg border border-green-200">
            <div class="font-bold text-green-900 mb-2">✓ Do</div>
            <ul class="text-sm text-green-800 space-y-1">
              <li>• Use clear drag handle indicators</li>
              <li>• Persist user resize preferences</li>
              <li>• Support smooth drag performance</li>
              <li>• Set sensible minimum panel sizes</li>
            </ul>
          </div>
          <div class="bg-red-50 p-4 rounded-lg border border-red-200">
            <div class="font-bold text-red-900 mb-2">✗ Don't</div>
            <ul class="text-sm text-red-800 space-y-1">
              <li>• Make handles too narrow</li>
              <li>• Allow panels to collapse entirely</li>
              <li>• Resize without user action</li>
              <li>• Create jerky drag experiences</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Accessibility -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Accessibility</h3>
        <ul class="space-y-2 text-foreground/80">
          <li>• Use semantic divider elements with ARIA</li>
          <li>• Support keyboard resize (arrow keys)</li>
          <li>• Make drag handle clearly visible with high contrast</li>
          <li>• Provide feedback on resize boundaries</li>
          <li>• Announce panel size changes to screen readers</li>
        </ul>
      </section>

      <!-- Content & Style Guidelines -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Content & Style Guidelines</h3>
        <ul class="space-y-2 text-foreground/80">
          <li><strong>Handle width:</strong> 4px default, 8px hover target</li>
          <li><strong>Handle color:</strong> Gray (300) with primary hover state</li>
          <li><strong>Cursor:</strong> col-resize (horizontal) or row-resize (vertical)</li>
          <li><strong>Min panel width:</strong> 200px or content dependent</li>
          <li><strong>Drag feedback:</strong> Color change and smooth transition</li>
        </ul>
      </section>
    </div>
  `
}

batch3["select"] = {
  title: "Select",
  description: "Dropdown select input component. Presents a list of predefined options that users can choose from with keyboard and mouse support.",
  html: `
    <div class="space-y-8 p-8 bg-card">
      <!-- Preview Section -->
      <section id="select-preview">
        <h2 class="text-2xl font-bold mb-6 text-foreground">Preview</h2>
        <div class="bg-muted/30 p-6 rounded-lg border border-border">
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-foreground/80 mb-2">Choose a Framework</label>
              <div class="relative w-full">
                <button class="w-full px-4 py-2 text-left text-sm border border-border rounded-md bg-card flex items-center justify-between hover:border-border focus:outline-none focus:ring-2 focus:ring-primary">
                  <span class="text-muted-foreground">Select an option...</span>
                  <svg class="w-4 h-4 text-muted-foreground/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
                </button>
                <div class="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-md shadow-lg hidden z-10">
                  <div class="px-4 py-2 text-sm text-foreground/80 hover:bg-muted cursor-pointer">React</div>
                  <div class="px-4 py-2 text-sm text-foreground/80 hover:bg-muted cursor-pointer">Vue</div>
                  <div class="px-4 py-2 text-sm text-white bg-primary cursor-pointer">Angular</div>
                  <div class="px-4 py-2 text-sm text-foreground/80 hover:bg-muted cursor-pointer">Svelte</div>
                </div>
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-foreground/80 mb-2">Selected Value</label>
              <div class="relative w-full">
                <button class="w-full px-4 py-2 text-left text-sm border border-border rounded-md bg-card flex items-center justify-between hover:border-border">
                  <span class="text-foreground">Next.js</span>
                  <svg class="w-4 h-4 text-muted-foreground/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Purpose & Rationale -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Purpose & Rationale</h3>
        <p class="text-foreground/80 mb-2">Select dropdowns save space by hiding options until needed. They're ideal for long lists (6+ options) or when space is limited. The dropdown pattern is universally understood and supports keyboard navigation, making them accessible and intuitive.</p>
      </section>

      <!-- Anatomy -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Anatomy</h3>
        <div class="bg-muted/30 p-4 rounded-lg border border-border font-mono text-sm space-y-2">
          <div><span class="font-bold">Select</span> - Root container</div>
          <div class="ml-4">
            <div><span class="font-bold">SelectTrigger</span> - Button that opens dropdown</div>
            <div><span class="font-bold">SelectValue</span> - Currently selected value display</div>
            <div><span class="font-bold">SelectContent</span> - Dropdown options container</div>
            <div class="ml-4"><span class="font-bold">SelectItem</span> - Individual option</div>
          </div>
        </div>
      </section>

      <!-- Variants -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Variants</h3>
        <ul class="space-y-2 text-foreground/80">
          <li><strong>Default (closed):</strong> Shows placeholder or selected value</li>
          <li><strong>Open:</strong> Dropdown menu visible with options</li>
          <li><strong>Selected item:</strong> Highlighted with primary background</li>
          <li><strong>Disabled:</strong> Grayed out trigger, not interactive</li>
          <li><strong>With search:</strong> Input field to filter options</li>
        </ul>
      </section>

      <!-- Code Example -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Code Example</h3>
        <pre class="bg-foreground text-muted-foreground p-4 rounded-lg overflow-x-auto text-sm font-mono"><code>&lt;div class="relative w-full"&gt;
  &lt;button class="w-full px-4 py-2 text-left text-sm border border-border rounded-md bg-card flex items-center justify-between"&gt;
    &lt;span&gt;Select an option...&lt;/span&gt;
    &lt;svg class="w-4 h-4"&gt;...&lt;/svg&gt;
  &lt;/button&gt;
  &lt;div class="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-md shadow-lg"&gt;
    &lt;div class="px-4 py-2 text-sm hover:bg-muted cursor-pointer"&gt;Option 1&lt;/div&gt;
    &lt;div class="px-4 py-2 text-sm bg-primary text-white cursor-pointer"&gt;Option 2&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </section>

      <!-- Do's and Don'ts -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Do's and Don'ts</h3>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-green-50 p-4 rounded-lg border border-green-200">
            <div class="font-bold text-green-900 mb-2">✓ Do</div>
            <ul class="text-sm text-green-800 space-y-1">
              <li>• Provide placeholder text</li>
              <li>• Use clear option labels</li>
              <li>• Support keyboard navigation</li>
              <li>• Show selected value clearly</li>
            </ul>
          </div>
          <div class="bg-red-50 p-4 rounded-lg border border-red-200">
            <div class="font-bold text-red-900 mb-2">✗ Don't</div>
            <ul class="text-sm text-red-800 space-y-1">
              <li>• Use for simple yes/no choices</li>
              <li>• Create extremely long option lists</li>
              <li>• Change selected value on hover</li>
              <li>• Use vague option text</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Accessibility -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Accessibility</h3>
        <ul class="space-y-2 text-foreground/80">
          <li>• Use native &lt;select&gt; or ARIA combobox roles</li>
          <li>• Support keyboard navigation (arrow keys, Enter, Escape)</li>
          <li>• Announce open/closed state and selected option</li>
          <li>• Ensure focus is visible and managed</li>
          <li>• Associate labels with select using id/for</li>
        </ul>
      </section>

      <!-- Content & Style Guidelines -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Content & Style Guidelines</h3>
        <ul class="space-y-2 text-foreground/80">
          <li><strong>Height:</strong> 40px (matches input size)</li>
          <li><strong>Padding:</strong> 10px horizontal, 8px vertical</li>
          <li><strong>Border:</strong> 1px gray (300)</li>
          <li><strong>Icon:</strong> Chevron down, right-aligned</li>
          <li><strong>Selected bg:</strong> Primary color with white text</li>
          <li><strong>Max options visible:</strong> 5-6 before scrolling</li>
        </ul>
      </section>
    </div>
  `
}

batch3["separator"] = {
  title: "Separator",
  description: "Visual divider component. Creates horizontal or vertical lines to separate content sections and improve visual hierarchy.",
  html: `
    <div class="space-y-8 p-8 bg-card">
      <!-- Preview Section -->
      <section id="separator-preview">
        <h2 class="text-2xl font-bold mb-6 text-foreground">Preview</h2>
        <div class="bg-muted/30 p-6 rounded-lg border border-border">
          <div class="space-y-6">
            <!-- Horizontal Separators -->
            <div>
              <h3 class="text-sm font-bold text-foreground mb-4">Horizontal Separators</h3>
              <div class="space-y-4">
                <div class="text-sm text-foreground/80">
                  <p class="mb-3">Content section one</p>
                  <div class="h-px border-border"></div>
                  <p class="mt-3">Content section two</p>
                </div>
                <div class="text-sm text-foreground/80">
                  <p class="mb-3">Content with margin separator</p>
                  <div class="my-4 h-px bg-muted"></div>
                  <p>Content with more spacing</p>
                </div>
              </div>
            </div>

            <div class="h-px border-border"></div>

            <!-- Vertical Separators -->
            <div>
              <h3 class="text-sm font-bold text-foreground mb-4">Vertical Separators</h3>
              <div class="flex items-center gap-4">
                <span class="text-sm text-foreground/80">Item One</span>
                <div class="h-6 w-px border-border"></div>
                <span class="text-sm text-foreground/80">Item Two</span>
                <div class="h-6 w-px border-border"></div>
                <span class="text-sm text-foreground/80">Item Three</span>
              </div>
            </div>

            <div class="h-px border-border"></div>

            <!-- Separators with Text -->
            <div>
              <h3 class="text-sm font-bold text-foreground mb-4">With Text Content</h3>
              <div class="text-sm text-foreground/80">
                <p class="mb-3">Content before</p>
                <div class="flex items-center gap-3 my-4">
                  <div class="flex-1 h-px border-border"></div>
                  <span class="text-muted-foreground text-xs">OR</span>
                  <div class="flex-1 h-px border-border"></div>
                </div>
                <p>Content after</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Purpose & Rationale -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Purpose & Rationale</h3>
        <p class="text-foreground/80 mb-2">Separators provide visual breaks between content sections, improving scannability and reducing cognitive load. They help define content hierarchy and create breathing room in dense layouts. Separators are less visually heavy than divider cards or boxes.</p>
      </section>

      <!-- Anatomy -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Anatomy</h3>
        <div class="bg-muted/30 p-4 rounded-lg border border-border font-mono text-sm space-y-2">
          <div><span class="font-bold">Separator</span> - Simple line element</div>
          <div class="ml-4">
            <div><strong>Horizontal:</strong> full width, 1px height</div>
            <div><strong>Vertical:</strong> full height, 1px width</div>
            <div><strong>Optional text:</strong> Centered label with line breaks</div>
          </div>
        </div>
      </section>

      <!-- Variants -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Variants</h3>
        <ul class="space-y-2 text-foreground/80">
          <li><strong>Horizontal:</strong> Full-width line dividing sections</li>
          <li><strong>Vertical:</strong> Inline divider between items</li>
          <li><strong>With text:</strong> Label centered on the line</li>
          <li><strong>Subtle:</strong> Light gray (200) for minimal contrast</li>
          <li><strong>Prominent:</strong> Dark gray (400) for emphasis</li>
        </ul>
      </section>

      <!-- Code Example -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Code Example</h3>
        <pre class="bg-foreground text-muted-foreground p-4 rounded-lg overflow-x-auto text-sm font-mono"><code>&lt;!-- Horizontal --&gt;
&lt;div class="h-px border-border"&gt;&lt;/div&gt;

&lt;!-- Vertical --&gt;
&lt;div class="h-6 w-px border-border"&gt;&lt;/div&gt;

&lt;!-- With text --&gt;
&lt;div class="flex items-center gap-3 my-4"&gt;
  &lt;div class="flex-1 h-px border-border"&gt;&lt;/div&gt;
  &lt;span class="text-muted-foreground text-xs"&gt;OR&lt;/span&gt;
  &lt;div class="flex-1 h-px border-border"&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </section>

      <!-- Do's and Don'ts -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Do's and Don'ts</h3>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-green-50 p-4 rounded-lg border border-green-200">
            <div class="font-bold text-green-900 mb-2">✓ Do</div>
            <ul class="text-sm text-green-800 space-y-1">
              <li>• Use consistent separator color</li>
              <li>• Add spacing around separators</li>
              <li>• Use subtle color for minimal impact</li>
              <li>• Keep separators 1px thick</li>
            </ul>
          </div>
          <div class="bg-red-50 p-4 rounded-lg border border-red-200">
            <div class="font-bold text-red-900 mb-2">✗ Don't</div>
            <ul class="text-sm text-red-800 space-y-1">
              <li>• Use thick separator lines</li>
              <li>• Overuse separators</li>
              <li>• Place separators too close together</li>
              <li>• Use harsh colors for separators</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Accessibility -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Accessibility</h3>
        <ul class="space-y-2 text-foreground/80">
          <li>• Use semantic &lt;hr&gt; element for horizontal separators</li>
          <li>• Add role="presentation" if separator is purely decorative</li>
          <li>• Ensure color contrast meets WCAG standards</li>
          <li>• Don't rely on separators alone to convey structure</li>
          <li>• Use aria-hidden="true" for decorative separators</li>
        </ul>
      </section>

      <!-- Content & Style Guidelines -->
      <section>
        <h3 class="text-xl font-bold mb-3 text-foreground">Content & Style Guidelines</h3>
        <ul class="space-y-2 text-foreground/80">
          <li><strong>Thickness:</strong> 1px only</li>
          <li><strong>Color:</strong> Gray (300) default, (200) for subtle</li>
          <li><strong>Spacing:</strong> 16-24px margin above and below</li>
          <li><strong>Vertical height:</strong> Varies by context (6px-24px)</li>
          <li><strong>Full width:</strong> Extend edge-to-edge or with padding</li>
        </ul>
      </section>
    </div>
  `
}

export default batch3
