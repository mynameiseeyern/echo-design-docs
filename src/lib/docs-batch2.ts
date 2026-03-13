interface DocContent {
  title: string
  description: string
  html: string
}

const batch2: Record<string, DocContent> = {}

batch2["date-picker"] = {
  title: "Date Picker",
  description: "Calendar-based date selection component with popover trigger and calendar UI",
  html: `
    <div class="space-y-8 p-8">
      <!-- Preview Section -->
      <div class="bg-gray-50 rounded-lg p-8 border border-gray-200">
        <h3 class="text-sm font-semibold text-gray-900 mb-6">Preview</h3>
        <div class="flex items-center gap-4">
          <div class="w-64">
            <label class="block text-sm font-medium text-gray-700 mb-2">Select Date</label>
            <div class="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg bg-white hover:border-gray-400 cursor-pointer transition-colors">
              <span class="text-gray-600 flex-1">Pick a date...</span>
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
            </div>
          </div>
          <div class="w-64 border border-gray-300 rounded-lg bg-white p-4 shadow-lg">
            <div class="flex items-center justify-between mb-4">
              <span class="text-sm font-semibold text-gray-900">March 2026</span>
              <div class="flex gap-1">
                <button class="p-1 hover:bg-gray-100 rounded">←</button>
                <button class="p-1 hover:bg-gray-100 rounded">→</button>
              </div>
            </div>
            <div class="grid grid-cols-7 gap-1 text-center text-xs mb-2">
              <div class="text-gray-500 py-1">Su</div>
              <div class="text-gray-500 py-1">Mo</div>
              <div class="text-gray-500 py-1">Tu</div>
              <div class="text-gray-500 py-1">We</div>
              <div class="text-gray-500 py-1">Th</div>
              <div class="text-gray-500 py-1">Fr</div>
              <div class="text-gray-500 py-1">Sa</div>
            </div>
            <div class="grid grid-cols-7 gap-1">
              <div class="text-gray-400 py-1">1</div>
              <div class="text-gray-400 py-1">2</div>
              <div class="text-gray-400 py-1">3</div>
              <div class="text-gray-400 py-1">4</div>
              <div class="text-gray-400 py-1">5</div>
              <div class="text-gray-400 py-1">6</div>
              <div class="text-gray-400 py-1">7</div>
              <div class="py-1 hover:bg-gray-100 rounded cursor-pointer">1</div>
              <div class="py-1 hover:bg-gray-100 rounded cursor-pointer">2</div>
              <div class="py-1 hover:bg-gray-100 rounded cursor-pointer">3</div>
              <div class="py-1 hover:bg-gray-100 rounded cursor-pointer">4</div>
              <div class="py-1 hover:bg-gray-100 rounded cursor-pointer">5</div>
              <div class="py-1 hover:bg-gray-100 rounded cursor-pointer">6</div>
              <div class="py-1 hover:bg-gray-100 rounded cursor-pointer">7</div>
              <div class="py-1 hover:bg-gray-100 rounded cursor-pointer">8</div>
              <div class="py-1 hover:bg-gray-100 rounded cursor-pointer">9</div>
              <div class="py-1 hover:bg-gray-100 rounded cursor-pointer">10</div>
              <div class="py-1 hover:bg-gray-100 rounded cursor-pointer">11</div>
              <div class="py-1 hover:bg-gray-100 rounded cursor-pointer">12</div>
              <div class="py-1 hover:bg-gray-100 rounded cursor-pointer">13</div>
              <div class="bg-primary text-white py-1 rounded font-semibold cursor-pointer">14</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Purpose & Rationale -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-3">Purpose & Rationale</h3>
        <p class="text-gray-700">The Date Picker component provides an accessible, user-friendly interface for selecting specific dates. It combines an input trigger with a calendar popup, reducing errors and providing visual feedback of the selected date through a calendar grid interface.</p>
      </div>

      <!-- Anatomy -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Anatomy</h3>
        <div class="flex flex-col gap-3">
          <div class="flex items-center gap-3">
            <span class="bg-gray-100 px-3 py-1 rounded font-mono text-sm text-gray-700">DatePicker</span>
            <span class="text-gray-600">Root container wrapping all date picker elements</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="bg-gray-100 px-3 py-1 rounded font-mono text-sm text-gray-700">DatePickerTrigger</span>
            <span class="text-gray-600">Input element and calendar icon that activates the popover</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="bg-gray-100 px-3 py-1 rounded font-mono text-sm text-gray-700">DatePickerContent</span>
            <span class="text-gray-600">Popover container with calendar grid</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="bg-gray-100 px-3 py-1 rounded font-mono text-sm text-gray-700">Calendar</span>
            <span class="text-gray-600">Grid displaying days, with month/year navigation</span>
          </div>
        </div>
      </div>

      <!-- Variants -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Variants</h3>
        <div class="space-y-4">
          <div>
            <p class="text-sm font-medium text-gray-900 mb-2">Single Date (Default)</p>
            <p class="text-gray-700 text-sm">User selects one date. Calendar closes after selection.</p>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-900 mb-2">Date Range</p>
            <p class="text-gray-700 text-sm">User selects start and end dates. Calendar highlights range between selections.</p>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-900 mb-2">Month/Year Only</p>
            <p class="text-gray-700 text-sm">Calendar shows only month and year selection without specific dates.</p>
          </div>
        </div>
      </div>

      <!-- Code Example -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-3">Code Example</h3>
        <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm"><code>&lt;DatePicker&gt;
  &lt;DatePickerTrigger asChild&gt;
    &lt;button&gt;
      Pick a date
      &lt;CalendarIcon /&gt;
    &lt;/button&gt;
  &lt;/DatePickerTrigger&gt;
  &lt;DatePickerContent&gt;
    &lt;Calendar mode="single" /&gt;
  &lt;/DatePickerContent&gt;
&lt;/DatePicker&gt;</code></pre>
      </div>

      <!-- Do's and Don'ts -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Do's and Don'ts</h3>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 class="font-semibold text-green-900 mb-3">✓ Do</h4>
            <ul class="space-y-2 text-sm text-green-800">
              <li>• Use clear, disabled styling for unavailable dates</li>
              <li>• Show today's date visually distinct</li>
              <li>• Allow keyboard navigation and arrow keys</li>
              <li>• Provide a way to clear the selection</li>
              <li>• Use appropriate time zone handling</li>
            </ul>
          </div>
          <div class="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 class="font-semibold text-red-900 mb-3">✗ Don't</h4>
            <ul class="space-y-2 text-sm text-red-800">
              <li>• Use unclear date formats</li>
              <li>• Disable date selection without explanation</li>
              <li>• Close popover unexpectedly</li>
              <li>• Forget to show selected state clearly</li>
              <li>• Use confusing month navigation</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Accessibility -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-3">Accessibility</h3>
        <ul class="space-y-2 text-gray-700">
          <li>• Use semantic HTML with &lt;input type="date"&gt; fallback</li>
          <li>• Implement ARIA roles: dialog for popover, grid for calendar</li>
          <li>• Support keyboard navigation: Tab, Arrow keys, Enter, Escape</li>
          <li>• Announce selected date to screen readers</li>
          <li>• Ensure visible focus indicators on all interactive elements</li>
          <li>• Label input with &lt;label&gt; element linked via id attribute</li>
          <li>• Provide clear error messages for invalid dates</li>
        </ul>
      </div>

      <!-- Content & Style Guidelines -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-3">Content & Style Guidelines</h3>
        <ul class="space-y-2 text-gray-700">
          <li>• Use consistent date format across UI (ISO 8601: YYYY-MM-DD)</li>
          <li>• Display month and year prominently in calendar header</li>
          <li>• Use primary color for today and selected dates</li>
          <li>• Maintain adequate spacing between calendar date cells</li>
          <li>• Use legible font size (minimum 14px) for dates</li>
          <li>• Provide visual distinction between selectable and disabled dates</li>
          <li>• Show cursor change to pointer on hoverable dates</li>
        </ul>
      </div>
    </div>
  `
}

batch2["drawer"] = {
  title: "Drawer",
  description: "Bottom or side panel overlay component, mobile-friendly alternative to Dialog",
  html: `
    <div class="space-y-8 p-8">
      <!-- Preview Section -->
      <div class="bg-gray-50 rounded-lg p-8 border border-gray-200">
        <h3 class="text-sm font-semibold text-gray-900 mb-6">Preview</h3>
        <div class="flex items-center gap-8">
          <div class="flex-1">
            <button class="px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition-opacity">
              Open Drawer
            </button>
            <p class="text-sm text-gray-600 mt-4">Click button to open drawer from bottom or side</p>
          </div>
          <div class="border border-gray-300 rounded-lg bg-white w-72 h-96 shadow-xl">
            <div class="h-full flex flex-col">
              <div class="border-b border-gray-200 px-6 py-4">
                <h2 class="text-lg font-semibold text-gray-900">Drawer Title</h2>
                <p class="text-sm text-gray-600">Drawer description goes here</p>
              </div>
              <div class="flex-1 px-6 py-4 overflow-auto">
                <div class="space-y-4 text-sm text-gray-700">
                  <p>This is the main content area of the drawer. It can contain any content including forms, text, or interactive elements.</p>
                  <p>The drawer is commonly used on mobile devices as a more convenient alternative to centered dialogs.</p>
                  <p>It can be positioned at the bottom or sides of the screen depending on your design needs.</p>
                </div>
              </div>
              <div class="border-t border-gray-200 px-6 py-4 flex gap-3 justify-end">
                <button class="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50">Cancel</button>
                <button class="px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Purpose & Rationale -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-3">Purpose & Rationale</h3>
        <p class="text-gray-700">Drawers provide a mobile-friendly sliding panel interface for presenting content without displacing the main page layout. Unlike dialogs which are centered on screen, drawers slide in from the edge, making them ideal for navigation menus, filters, or action panels on mobile devices.</p>
      </div>

      <!-- Anatomy -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Anatomy</h3>
        <div class="flex flex-col gap-3">
          <div class="flex items-center gap-3">
            <span class="bg-gray-100 px-3 py-1 rounded font-mono text-sm text-gray-700">Drawer</span>
            <span class="text-gray-600">Root component that manages drawer state</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="bg-gray-100 px-3 py-1 rounded font-mono text-sm text-gray-700">DrawerTrigger</span>
            <span class="text-gray-600">Button or element that opens the drawer</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="bg-gray-100 px-3 py-1 rounded font-mono text-sm text-gray-700">DrawerContent</span>
            <span class="text-gray-600">Container for the sliding panel</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="bg-gray-100 px-3 py-1 rounded font-mono text-sm text-gray-700">DrawerHeader</span>
            <span class="text-gray-600">Title and description section at top</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="bg-gray-100 px-3 py-1 rounded font-mono text-sm text-gray-700">DrawerTitle</span>
            <span class="text-gray-600">Main heading for drawer</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="bg-gray-100 px-3 py-1 rounded font-mono text-sm text-gray-700">DrawerDescription</span>
            <span class="text-gray-600">Supporting text below title</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="bg-gray-100 px-3 py-1 rounded font-mono text-sm text-gray-700">DrawerFooter</span>
            <span class="text-gray-600">Action buttons at bottom</span>
          </div>
        </div>
      </div>

      <!-- Variants -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Variants</h3>
        <div class="space-y-4">
          <div>
            <p class="text-sm font-medium text-gray-900 mb-2">Bottom Sheet (Default on Mobile)</p>
            <p class="text-gray-700 text-sm">Slides up from bottom, covers lower portion of screen, optimal for mobile</p>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-900 mb-2">Side Drawer (Left/Right)</p>
            <p class="text-gray-700 text-sm">Slides from left or right edge, takes full height, good for navigation</p>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-900 mb-2">Full Screen Drawer</p>
            <p class="text-gray-700 text-sm">Covers entire screen, provides maximum content space</p>
          </div>
        </div>
      </div>

      <!-- Code Example -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-3">Code Example</h3>
        <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm"><code>&lt;Drawer&gt;
  &lt;DrawerTrigger asChild&gt;
    &lt;button&gt;Open Drawer&lt;/button&gt;
  &lt;/DrawerTrigger&gt;
  &lt;DrawerContent&gt;
    &lt;DrawerHeader&gt;
      &lt;DrawerTitle&gt;Title&lt;/DrawerTitle&gt;
      &lt;DrawerDescription&gt;Description&lt;/DrawerDescription&gt;
    &lt;/DrawerHeader&gt;
    &lt;div className="p-4"&gt;Content here&lt;/div&gt;
    &lt;DrawerFooter&gt;
      &lt;button&gt;Save&lt;/button&gt;
    &lt;/DrawerFooter&gt;
  &lt;/DrawerContent&gt;
&lt;/Drawer&gt;</code></pre>
      </div>

      <!-- Do's and Don'ts -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Do's and Don'ts</h3>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 class="font-semibold text-green-900 mb-3">✓ Do</h4>
            <ul class="space-y-2 text-sm text-green-800">
              <li>• Use for mobile navigation and filters</li>
              <li>• Keep drawer width/height reasonable</li>
              <li>• Include close button (X icon)</li>
              <li>• Allow swipe to dismiss on mobile</li>
              <li>• Darken background overlay</li>
            </ul>
          </div>
          <div class="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 class="font-semibold text-red-900 mb-3">✗ Don't</h4>
            <ul class="space-y-2 text-sm text-red-800">
              <li>• Nest drawers inside other drawers</li>
              <li>• Use for complex multi-step forms</li>
              <li>• Make drawer wider than screen</li>
              <li>• Disable closing mechanism</li>
              <li>• Use for content requiring complex layouts</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Accessibility -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-3">Accessibility</h3>
        <ul class="space-y-2 text-gray-700">
          <li>• Use ARIA role="dialog" for drawer</li>
          <li>• Implement focus trap inside drawer</li>
          <li>• Restore focus to trigger when drawer closes</li>
          <li>• Support Escape key to close</li>
          <li>• Use aria-labelledby and aria-describedby</li>
          <li>• Ensure sufficient color contrast in drawer</li>
          <li>• Allow keyboard navigation through all drawer content</li>
        </ul>
      </div>

      <!-- Content & Style Guidelines -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-3">Content & Style Guidelines</h3>
        <ul class="space-y-2 text-gray-700">
          <li>• Keep drawer headers consistent with main UI</li>
          <li>• Use appropriate spacing inside drawer (padding: 16-24px)</li>
          <li>• Maintain z-index higher than other overlays</li>
          <li>• Add smooth transition/animation (200-300ms)</li>
          <li>• Use semi-transparent overlay (opacity 60-80%)</li>
          <li>• Keep content readable with proper text contrast</li>
          <li>• Test on various mobile screen sizes</li>
        </ul>
      </div>
    </div>
  `
}

batch2["dropdown-menu"] = {
  title: "Dropdown Menu",
  description: "Trigger-activated floating menu component for displaying contextual options",
  html: `
    <div class="space-y-8 p-8">
      <!-- Preview Section -->
      <div class="bg-gray-50 rounded-lg p-8 border border-gray-200">
        <h3 class="text-sm font-semibold text-gray-900 mb-6">Preview</h3>
        <div class="flex items-start gap-12">
          <div>
            <button class="px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90 flex items-center gap-2 transition-opacity">
              Menu
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
              </svg>
            </button>
          </div>
          <div class="border border-gray-300 rounded-lg bg-white w-56 shadow-lg">
            <div class="py-1">
              <div class="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">File</div>
              <button class="w-full text-left px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 flex items-center gap-2">
                <span>New File</span>
                <span class="ml-auto text-xs text-gray-400">Ctrl+N</span>
              </button>
              <button class="w-full text-left px-4 py-2 text-sm text-gray-900 hover:bg-gray-100">Open</button>
              <button class="w-full text-left px-4 py-2 text-sm text-gray-900 hover:bg-gray-100">Save</button>
              <div class="my-1 border-t border-gray-200"></div>
              <button class="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">Exit</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Purpose & Rationale -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-3">Purpose & Rationale</h3>
        <p class="text-gray-700">Dropdown menus provide a compact way to display multiple options or actions without cluttering the interface. They activate on click or hover, revealing contextual choices while keeping the primary UI clean and focused.</p>
      </div>

      <!-- Anatomy -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Anatomy</h3>
        <div class="flex flex-col gap-3">
          <div class="flex items-center gap-3">
            <span class="bg-gray-100 px-3 py-1 rounded font-mono text-sm text-gray-700">DropdownMenu</span>
            <span class="text-gray-600">Root component managing dropdown state</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="bg-gray-100 px-3 py-1 rounded font-mono text-sm text-gray-700">DropdownMenuTrigger</span>
            <span class="text-gray-600">Button that activates the menu</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="bg-gray-100 px-3 py-1 rounded font-mono text-sm text-gray-700">DropdownMenuContent</span>
            <span class="text-gray-600">Floating container for menu items</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="bg-gray-100 px-3 py-1 rounded font-mono text-sm text-gray-700">DropdownMenuItem</span>
            <span class="text-gray-600">Individual selectable menu item</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="bg-gray-100 px-3 py-1 rounded font-mono text-sm text-gray-700">DropdownMenuSeparator</span>
            <span class="text-gray-600">Visual divider between item groups</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="bg-gray-100 px-3 py-1 rounded font-mono text-sm text-gray-700">DropdownMenuLabel</span>
            <span class="text-gray-600">Non-selectable section header</span>
          </div>
        </div>
      </div>

      <!-- Variants -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Variants</h3>
        <div class="space-y-4">
          <div>
            <p class="text-sm font-medium text-gray-900 mb-2">Click Trigger</p>
            <p class="text-gray-700 text-sm">Menu opens on click, closes on blur or escape</p>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-900 mb-2">Hover Trigger</p>
            <p class="text-gray-700 text-sm">Menu opens on hover, closes when mouse leaves</p>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-900 mb-2">With Icons</p>
            <p class="text-gray-700 text-sm">Menu items include icons for visual identification</p>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-900 mb-2">With Keyboard Shortcuts</p>
            <p class="text-gray-700 text-sm">Display keyboard shortcuts aligned right in items</p>
          </div>
        </div>
      </div>

      <!-- Code Example -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-3">Code Example</h3>
        <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm"><code>&lt;DropdownMenu&gt;
  &lt;DropdownMenuTrigger asChild&gt;
    &lt;button&gt;Menu&lt;/button&gt;
  &lt;/DropdownMenuTrigger&gt;
  &lt;DropdownMenuContent&gt;
    &lt;DropdownMenuLabel&gt;Actions&lt;/DropdownMenuLabel&gt;
    &lt;DropdownMenuSeparator /&gt;
    &lt;DropdownMenuItem&gt;Edit&lt;/DropdownMenuItem&gt;
    &lt;DropdownMenuItem&gt;Delete&lt;/DropdownMenuItem&gt;
  &lt;/DropdownMenuContent&gt;
&lt;/DropdownMenu&gt;</code></pre>
      </div>

      <!-- Do's and Don'ts -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Do's and Don'ts</h3>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 class="font-semibold text-green-900 mb-3">✓ Do</h4>
            <ul class="space-y-2 text-sm text-green-800">
              <li>• Group related items with separators</li>
              <li>• Use labels for item groups</li>
              <li>• Include keyboard shortcuts where applicable</li>
              <li>• Disable unavailable items clearly</li>
              <li>• Close menu after selection</li>
            </ul>
          </div>
          <div class="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 class="font-semibold text-red-900 mb-3">✗ Don't</h4>
            <ul class="space-y-2 text-sm text-red-800">
              <li>• Use for primary navigation</li>
              <li>• Create deeply nested menus</li>
              <li>• Use unclear or vague item labels</li>
              <li>• Place conflicting actions together</li>
              <li>• Make menu items too small to click</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Accessibility -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-3">Accessibility</h3>
        <ul class="space-y-2 text-gray-700">
          <li>• Use ARIA role="menu" and role="menuitem"</li>
          <li>• Support arrow keys for navigation</li>
          <li>• Support Enter key to select items</li>
          <li>• Support Escape key to close menu</li>
          <li>• Announce menu state to screen readers</li>
          <li>• Ensure visible focus on menu items</li>
          <li>• Use aria-disabled for disabled items</li>
        </ul>
      </div>

      <!-- Content & Style Guidelines -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-3">Content & Style Guidelines</h3>
        <ul class="space-y-2 text-gray-700">
          <li>• Use clear, action-oriented text (e.g., "Delete" not "Remove Item")</li>
          <li>• Keep menu items concise (2-4 words ideal)</li>
          <li>• Maintain consistent item height (36-40px)</li>
          <li>• Use hover state with subtle background color change</li>
          <li>• Align menu below or above trigger based on available space</li>
          <li>• Use consistent spacing between menu items</li>
          <li>• Display dangerous actions in red color</li>
        </ul>
      </div>
    </div>
  `
}

batch2["empty"] = {
  title: "Empty State",
  description: "Empty state placeholder component for displaying when no data or content is available",
  html: `
    <div class="space-y-8 p-8">
      <!-- Preview Section -->
      <div class="bg-gray-50 rounded-lg p-8 border border-gray-200">
        <h3 class="text-sm font-semibold text-gray-900 mb-6">Preview</h3>
        <div class="flex items-center justify-center min-h-96 bg-white rounded-lg border border-gray-200">
          <div class="text-center max-w-md">
            <div class="flex justify-center mb-4">
              <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/>
                </svg>
              </div>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">No Items Yet</h3>
            <p class="text-gray-600 text-sm mb-6">You haven't created any items yet. Get started by creating your first item.</p>
            <button class="px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition-opacity">
              Create First Item
            </button>
          </div>
        </div>
      </div>

      <!-- Purpose & Rationale -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-3">Purpose & Rationale</h3>
        <p class="text-gray-700">Empty states provide helpful guidance when no content is available, transforming a potentially confusing blank screen into an educational moment. They reduce user confusion, provide context about why the space is empty, and suggest next steps with clear call-to-action buttons.</p>
      </div>

      <!-- Anatomy -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Anatomy</h3>
        <div class="flex flex-col gap-3">
          <div class="flex items-center gap-3">
            <span class="bg-gray-100 px-3 py-1 rounded font-mono text-sm text-gray-700">Empty</span>
            <span class="text-gray-600">Root container for empty state</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="bg-gray-100 px-3 py-1 rounded font-mono text-sm text-gray-700">EmptyIcon</span>
            <span class="text-gray-600">Large illustrative icon or image</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="bg-gray-100 px-3 py-1 rounded font-mono text-sm text-gray-700">EmptyTitle</span>
            <span class="text-gray-600">Main heading explaining empty state</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="bg-gray-100 px-3 py-1 rounded font-mono text-sm text-gray-700">EmptyDescription</span>
            <span class="text-gray-600">Supporting text with context</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="bg-gray-100 px-3 py-1 rounded font-mono text-sm text-gray-700">EmptyAction</span>
            <span class="text-gray-600">Call-to-action button for next steps</span>
          </div>
        </div>
      </div>

      <!-- Variants -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Variants</h3>
        <div class="space-y-4">
          <div>
            <p class="text-sm font-medium text-gray-900 mb-2">No Results Found</p>
            <p class="text-gray-700 text-sm">Used when search or filter returns no matches</p>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-900 mb-2">No Permission</p>
            <p class="text-gray-700 text-sm">Used when user lacks access to view content</p>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-900 mb-2">Error State</p>
            <p class="text-gray-700 text-sm">Used when content failed to load</p>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-900 mb-2">First Time User</p>
            <p class="text-gray-700 text-sm">Onboarding empty state with educational content</p>
          </div>
        </div>
      </div>

      <!-- Code Example -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-3">Code Example</h3>
        <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm"><code>&lt;Empty&gt;
  &lt;EmptyIcon&gt;
    &lt;InboxIcon /&gt;
  &lt;/EmptyIcon&gt;
  &lt;EmptyTitle&gt;No Messages&lt;/EmptyTitle&gt;
  &lt;EmptyDescription&gt;
    You're all caught up! Check back later.
  &lt;/EmptyDescription&gt;
  &lt;EmptyAction asChild&gt;
    &lt;button&gt;Refresh&lt;/button&gt;
  &lt;/EmptyAction&gt;
&lt;/Empty&gt;</code></pre>
      </div>

      <!-- Do's and Don'ts -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Do's and Don'ts</h3>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 class="font-semibold text-green-900 mb-3">✓ Do</h4>
            <ul class="space-y-2 text-sm text-green-800">
              <li>• Provide helpful explanation</li>
              <li>• Include relevant icons or illustrations</li>
              <li>• Offer clear next steps/CTA</li>
              <li>• Use friendly, encouraging tone</li>
              <li>• Match empty state to context</li>
            </ul>
          </div>
          <div class="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 class="font-semibold text-red-900 mb-3">✗ Don't</h4>
            <ul class="space-y-2 text-sm text-red-800">
              <li>• Leave empty spaces without explanation</li>
              <li>• Use unclear or cryptic messaging</li>
              <li>• Make CTA buttons hard to find</li>
              <li>• Use overly complex illustrations</li>
              <li>• Blame the user for empty state</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Accessibility -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-3">Accessibility</h3>
        <ul class="space-y-2 text-gray-700">
          <li>• Use semantic HTML with proper heading levels</li>
          <li>• Provide alt text for illustrative images</li>
          <li>• Ensure sufficient color contrast in text</li>
          <li>• Make action buttons keyboard accessible</li>
          <li>• Announce empty state to screen readers</li>
          <li>• Use descriptive icon labels</li>
          <li>• Don't rely on color alone to convey information</li>
        </ul>
      </div>

      <!-- Content & Style Guidelines -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-3">Content & Style Guidelines</h3>
        <ul class="space-y-2 text-gray-700">
          <li>• Use icons 64-128px in size</li>
          <li>• Keep title to 1-2 lines (16-18px font)</li>
          <li>• Keep description concise (2-3 lines, 14px font)</li>
          <li>• Center content vertically and horizontally</li>
          <li>• Use light icon colors (gray-300 to gray-400)</li>
          <li>• Include at least one action button</li>
          <li>• Maintain whitespace around empty state</li>
        </ul>
      </div>
    </div>
  `
}

batch2["field"] = {
  title: "Field",
  description: "Form field wrapper component combining label, input, helper text, and error messaging",
  html: `
    <div class="space-y-8 p-8">
      <!-- Preview Section -->
      <div class="bg-gray-50 rounded-lg p-8 border border-gray-200">
        <h3 class="text-sm font-semibold text-gray-900 mb-6">Preview</h3>
        <div class="grid grid-cols-3 gap-8">
          <div>
            <label class="block text-sm font-medium text-gray-900 mb-2">Email</label>
            <input type="email" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="you@example.com" />
            <p class="text-xs text-gray-500 mt-1">We'll never share your email</p>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-900 mb-2">Password</label>
            <input type="password" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
            <p class="text-xs text-gray-500 mt-1">Must be at least 8 characters</p>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-900 mb-2">Username</label>
            <input type="text" class="w-full px-3 py-2 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-red-50" value="john_doe" />
            <p class="text-xs text-red-600 mt-1">Username already taken</p>
          </div>
        </div>
      </div>

      <!-- Purpose & Rationale -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-3">Purpose & Rationale</h3>
        <p class="text-gray-700">The Field component provides a standardized, composable wrapper that combines label, input, and supporting text elements. It ensures consistent spacing, alignment, and error handling across forms, reducing boilerplate code and improving form accessibility.</p>
      </div>

      <!-- Anatomy -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Anatomy</h3>
        <div class="flex flex-col gap-3">
          <div class="flex items-center gap-3">
            <span class="bg-gray-100 px-3 py-1 rounded font-mono text-sm text-gray-700">Field</span>
            <span class="text-gray-600">Root wrapper managing field state and context</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="bg-gray-100 px-3 py-1 rounded font-mono text-sm text-gray-700">FieldLabel</span>
            <span class="text-gray-600">Associated label element</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="bg-gray-100 px-3 py-1 rounded font-mono text-sm text-gray-700">FieldInput</span>
            <span class="text-gray-600">Styled input or form element</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="bg-gray-100 px-3 py-1 rounded font-mono text-sm text-gray-700">FieldHelperText</span>
            <span class="text-gray-600">Helper text below input</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="bg-gray-100 px-3 py-1 rounded font-mono text-sm text-gray-700">FieldError</span>
            <span class="text-gray-600">Error message displayed on validation failure</span>
          </div>
        </div>
      </div>

      <!-- Variants -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Variants</h3>
        <div class="space-y-4">
          <div>
            <p class="text-sm font-medium text-gray-900 mb-2">Default</p>
            <p class="text-gray-700 text-sm">Standard field with label and helper text</p>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-900 mb-2">Error State</p>
            <p class="text-gray-700 text-sm">Field with red border and error message</p>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-900 mb-2">Success State</p>
            <p class="text-gray-700 text-sm">Field with green border and success message</p>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-900 mb-2">Disabled State</p>
            <p class="text-gray-700 text-sm">Field that cannot be edited</p>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-900 mb-2">Required Field</p>
            <p class="text-gray-700 text-sm">Field marked with asterisk indicating required</p>
          </div>
        </div>
      </div>

      <!-- Code Example -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-3">Code Example</h3>
        <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm"><code>&lt;Field&gt;
  &lt;FieldLabel htmlFor="email"&gt;
    Email
    &lt;span className="text-red-500"&gt;*&lt;/span&gt;
  &lt;/FieldLabel&gt;
  &lt;FieldInput
    id="email"
    type="email"
    placeholder="you@example.com"
  /&gt;
  &lt;FieldHelperText&gt;
    We'll never share your email.
  &lt;/FieldHelperText&gt;
  &lt;FieldError&gt;
    Please enter a valid email.
  &lt;/FieldError&gt;
&lt;/Field&gt;</code></pre>
      </div>

      <!-- Do's and Don'ts -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Do's and Don'ts</h3>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 class="font-semibold text-green-900 mb-3">✓ Do</h4>
            <ul class="space-y-2 text-sm text-green-800">
              <li>• Associate labels with inputs via id</li>
              <li>• Provide clear helper or error text</li>
              <li>• Show validation errors immediately</li>
              <li>• Use consistent field spacing</li>
              <li>• Mark required fields clearly</li>
            </ul>
          </div>
          <div class="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 class="font-semibold text-red-900 mb-3">✗ Don't</h4>
            <ul class="space-y-2 text-sm text-red-800">
              <li>• Use placeholder text as label</li>
              <li>• Make fields overly wide</li>
              <li>• Display unclear error messages</li>
              <li>• Use color alone for validation state</li>
              <li>• Mix validation patterns</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Accessibility -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-3">Accessibility</h3>
        <ul class="space-y-2 text-gray-700">
          <li>• Link labels to inputs using htmlFor and id</li>
          <li>• Use aria-invalid="true" for error states</li>
          <li>• Use aria-describedby to link helper/error text</li>
          <li>• Include aria-required for required fields</li>
          <li>• Use semantic HTML elements</li>
          <li>• Ensure sufficient color contrast</li>
          <li>• Support keyboard navigation</li>
        </ul>
      </div>

      <!-- Content & Style Guidelines -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-3">Content & Style Guidelines</h3>
        <ul class="space-y-2 text-gray-700">
          <li>• Use clear, descriptive labels (14px, 500 weight)</li>
          <li>• Keep input height consistent (40px)</li>
          <li>• Use helper text for hints (12px, gray-500)</li>
          <li>• Display error text in red (12px)</li>
          <li>• Maintain spacing between field elements</li>
          <li>• Use 2-4px focus ring for visibility</li>
          <li>• Add visual feedback on focus and error states</li>
        </ul>
      </div>
    </div>
  `
}

batch2["hover-card"] = {
  title: "Hover Card",
  description: "Rich tooltip component that displays detailed content on hover over a trigger element",
  html: `
    <div class="space-y-8 p-8">
      <!-- Preview Section -->
      <div class="bg-gray-50 rounded-lg p-8 border border-gray-200">
        <h3 class="text-sm font-semibold text-gray-900 mb-6">Preview</h3>
        <div class="flex items-start justify-center min-h-64">
          <div class="text-center">
            <p class="text-gray-600 mb-4">Hover over the link below</p>
            <div class="relative inline-block">
              <a href="#" class="text-primary hover:underline">@sarah_developer</a>
              <div class="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white rounded-lg border border-gray-200 shadow-lg p-4 opacity-0 pointer-events-none">
                <div class="flex gap-3">
                  <div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex-shrink-0"></div>
                  <div class="flex-1 text-left">
                    <p class="font-semibold text-gray-900">Sarah Developer</p>
                    <p class="text-sm text-gray-600">@sarah_developer</p>
                    <p class="text-xs text-gray-500 mt-2">Full-stack developer passionate about building great products. Coffee enthusiast.</p>
                    <div class="flex gap-4 mt-3 text-xs text-gray-600">
                      <span>5 followers</span>
                      <span>Joined 2 years ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Purpose & Rationale -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-3">Purpose & Rationale</h3>
        <p class="text-gray-700">Hover cards provide contextual information without navigating away from the current page. They appear on hover of a trigger element and disappear when the mouse leaves, ideal for showing previews of users, products, or content while keeping the interface lightweight.</p>
      </div>

      <!-- Anatomy -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Anatomy</h3>
        <div class="flex flex-col gap-3">
          <div class="flex items-center gap-3">
            <span class="bg-gray-100 px-3 py-1 rounded font-mono text-sm text-gray-700">HoverCard</span>
            <span class="text-gray-600">Root component managing hover state</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="bg-gray-100 px-3 py-1 rounded font-mono text-sm text-gray-700">HoverCardTrigger</span>
            <span class="text-gray-600">Element that activates the card on hover</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="bg-gray-100 px-3 py-1 rounded font-mono text-sm text-gray-700">HoverCardContent</span>
            <span class="text-gray-600">Floating container with detailed content</span>
          </div>
        </div>
      </div>

      <!-- Variants -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Variants</h3>
        <div class="space-y-4">
          <div>
            <p class="text-sm font-medium text-gray-900 mb-2">User Profile Card</p>
            <p class="text-gray-700 text-sm">Shows user information, avatar, bio, and stats</p>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-900 mb-2">Product Card</p>
            <p class="text-gray-700 text-sm">Displays product image, description, and pricing</p>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-900 mb-2">Rich Tooltip</p>
            <p class="text-gray-700 text-sm">Formatted text with icons and styling</p>
          </div>
        </div>
      </div>

      <!-- Code Example -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-3">Code Example</h3>
        <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm"><code>&lt;HoverCard openDelay={200}&gt;
  &lt;HoverCardTrigger asChild&gt;
    &lt;a href="#"&gt;@sarah&lt;/a&gt;
  &lt;/HoverCardTrigger&gt;
  &lt;HoverCardContent className="w-64"&gt;
    &lt;div className="flex gap-3"&gt;
      &lt;img
        src="/avatar.jpg"
        className="w-10 h-10 rounded-full"
      /&gt;
      &lt;div&gt;
        &lt;p className="font-semibold"&gt;Sarah Developer&lt;/p&gt;
        &lt;p className="text-sm text-gray-600"&gt;
          Full-stack developer
        &lt;/p&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/HoverCardContent&gt;
&lt;/HoverCard&gt;</code></pre>
      </div>

      <!-- Do's and Don'ts -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Do's and Don'ts</h3>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 class="font-semibold text-green-900 mb-3">✓ Do</h4>
            <ul class="space-y-2 text-sm text-green-800">
              <li>• Use for supplementary information</li>
              <li>• Keep content concise</li>
              <li>• Add hover delay to prevent flashing</li>
              <li>• Position to avoid viewport edges</li>
              <li>• Close on trigger blur</li>
            </ul>
          </div>
          <div class="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 class="font-semibold text-red-900 mb-3">✗ Don't</h4>
            <ul class="space-y-2 text-sm text-red-800">
              <li>• Use for essential information</li>
              <li>• Make hover cards too large</li>
              <li>• Put interactive elements in hover cards</li>
              <li>• Use on touch devices (hover won't work)</li>
              <li>• Display frequently changing content</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Accessibility -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-3">Accessibility</h3>
        <ul class="space-y-2 text-gray-700">
          <li>• Use aria-expanded to indicate open state</li>
          <li>• Provide focus-visible keyboard access</li>
          <li>• Use role="tooltip" or role="dialog" as appropriate</li>
          <li>• Support Enter/Space to show content for keyboard users</li>
          <li>• Announce content updates to screen readers</li>
          <li>• Include aria-label if card has no heading</li>
          <li>• Test with keyboard navigation on touch devices</li>
        </ul>
      </div>

      <!-- Content & Style Guidelines -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-3">Content & Style Guidelines</h3>
        <ul class="space-y-2 text-gray-700">
          <li>• Keep card width between 200-300px</li>
          <li>• Use consistent padding (12-16px)</li>
          <li>• Add 200-500ms open delay to prevent accidental triggers</li>
          <li>• Use subtle shadow for depth (elevation 2-3)</li>
          <li>• Position arrow pointing toward trigger</li>
          <li>• Close animation should be immediate</li>
          <li>• Use light background with good contrast</li>
        </ul>
      </div>
    </div>
  `
}

batch2["input-group"] = {
  title: "Input Group",
  description: "Input component with addon elements like icons or buttons before or after the input",
  html: `
    <div class="space-y-8 p-8">
      <!-- Preview Section -->
      <div class="bg-gray-50 rounded-lg p-8 border border-gray-200">
        <h3 class="text-sm font-semibold text-gray-900 mb-6">Preview</h3>
        <div class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-900 mb-2">Search</label>
            <div class="flex items-center border border-gray-300 rounded-lg hover:border-gray-400 focus-within:ring-2 focus-within:ring-primary focus-within:border-transparent transition-all">
              <svg class="w-5 h-5 text-gray-400 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
              <input type="text" class="flex-1 px-3 py-2 bg-transparent outline-none" placeholder="Search items..." />
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-900 mb-2">Website</label>
            <div class="flex items-center border border-gray-300 rounded-lg hover:border-gray-400 focus-within:ring-2 focus-within:ring-primary focus-within:border-transparent transition-all">
              <span class="text-gray-500 px-3 text-sm font-medium">https://</span>
              <input type="text" class="flex-1 px-0 py-2 bg-transparent outline-none" placeholder="example.com" />
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-900 mb-2">Amount</label>
            <div class="flex items-center border border-gray-300 rounded-lg hover:border-gray-400 focus-within:ring-2 focus-within:ring-primary focus-within:border-transparent transition-all">
              <span class="text-gray-600 px-3 font-medium">$</span>
              <input type="number" class="flex-1 px-0 py-2 bg-transparent outline-none" placeholder="0.00" />
              <button class="px-3 py-2 text-gray-600 hover:bg-gray-50 font-medium">USD</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Purpose & Rationale -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-3">Purpose & Rationale</h3>
        <p class="text-gray-700">Input groups combine an input field with prefix or suffix elements (icons, text, buttons) to provide context and functionality. This reduces visual clutter by integrating related controls into a single compact component, improving both form layout and user experience.</p>
      </div>

      <!-- Anatomy -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Anatomy</h3>
        <div class="flex flex-col gap-3">
          <div class="flex items-center gap-3">
            <span class="bg-gray-100 px-3 py-1 rounded font-mono text-sm text-gray-700">InputGroup</span>
            <span class="text-gray-600">Root container that groups input with addons</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="bg-gray-100 px-3 py-1 rounded font-mono text-sm text-gray-700">InputGroupPrefix</span>
            <span class="text-gray-600">Element positioned before input (icon, text)</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="bg-gray-100 px-3 py-1 rounded font-mono text-sm text-gray-700">Input</span>
            <span class="text-gray-600">Text input field</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="bg-gray-100 px-3 py-1 rounded font-mono text-sm text-gray-700">InputGroupSuffix</span>
            <span class="text-gray-600">Element positioned after input (button, text)</span>
          </div>
        </div>
      </div>

      <!-- Variants -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Variants</h3>
        <div class="space-y-4">
          <div>
            <p class="text-sm font-medium text-gray-900 mb-2">Icon Prefix</p>
            <p class="text-gray-700 text-sm">Search icon, lock icon, or other visual indicators</p>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-900 mb-2">Text Prefix/Suffix</p>
            <p class="text-gray-700 text-sm">Currency symbols, protocol labels, unit indicators</p>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-900 mb-2">Button Suffix</p>
            <p class="text-gray-700 text-sm">Action buttons like copy, paste, or currency selector</p>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-900 mb-2">Both Prefix and Suffix</p>
            <p class="text-gray-700 text-sm">Combined icon/text on both sides</p>
          </div>
        </div>
      </div>

      <!-- Code Example -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-3">Code Example</h3>
        <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm"><code>&lt;InputGroup&gt;
  &lt;InputGroupPrefix&gt;
    &lt;SearchIcon /&gt;
  &lt;/InputGroupPrefix&gt;
  &lt;Input
    type="text"
    placeholder="Search..."
  /&gt;
  &lt;InputGroupSuffix&gt;
    &lt;button&gt;Filter&lt;/button&gt;
  &lt;/InputGroupSuffix&gt;
&lt;/InputGroup&gt;</code></pre>
      </div>

      <!-- Do's and Don'ts -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Do's and Don'ts</h3>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 class="font-semibold text-green-900 mb-3">✓ Do</h4>
            <ul class="space-y-2 text-sm text-green-800">
              <li>• Use clear, recognizable icons</li>
              <li>• Keep addons visually distinct</li>
              <li>• Align content vertically</li>
              <li>• Use meaningful text labels</li>
              <li>• Maintain consistent heights</li>
            </ul>
          </div>
          <div class="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 class="font-semibold text-red-900 mb-3">✗ Don't</h4>
            <ul class="space-y-2 text-sm text-red-800">
              <li>• Use unclear or ambiguous icons</li>
              <li>• Add too many suffix/prefix elements</li>
              <li>• Make addons larger than input</li>
              <li>• Use decorative-only addons</li>
              <li>• Hide input with addon styling</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Accessibility -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-3">Accessibility</h3>
        <ul class="space-y-2 text-gray-700">
          <li>• Keep input semantically accessible</li>
          <li>• Use aria-label for icon-only addons</li>
          <li>• Ensure button addons are keyboard accessible</li>
          <li>• Maintain focus visibility on entire group</li>
          <li>• Test with screen readers</li>
          <li>• Use appropriate ARIA roles for buttons</li>
          <li>• Don't hide important info in addons</li>
        </ul>
      </div>

      <!-- Content & Style Guidelines -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-3">Content & Style Guidelines</h3>
        <ul class="space-y-2 text-gray-700">
          <li>• Use 16-24px icons for visibility</li>
          <li>• Use icon opacity 0.5-0.6 for visual hierarchy</li>
          <li>• Maintain 8-12px padding for addons</li>
          <li>• Use text color gray-500 for non-interactive text</li>
          <li>• Keep input height consistent (40px)</li>
          <li>• Align focus ring around entire group</li>
          <li>• Use subtle visual separation between input and addons</li>
        </ul>
      </div>
    </div>
  `
}

batch2["input-otp"] = {
  title: "Input OTP",
  description: "One-time password input component displaying individual digit slots in a row",
  html: `
    <div class="space-y-8 p-8">
      <!-- Preview Section -->
      <div class="bg-gray-50 rounded-lg p-8 border border-gray-200">
        <h3 class="text-sm font-semibold text-gray-900 mb-6">Preview</h3>
        <div class="flex flex-col items-center gap-8">
          <div>
            <label class="block text-sm font-medium text-gray-900 mb-4">Enter 6-digit code</label>
            <div class="flex gap-3">
              <input type="text" maxlength="1" class="w-12 h-12 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" value="5" />
              <input type="text" maxlength="1" class="w-12 h-12 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" value="2" />
              <input type="text" maxlength="1" class="w-12 h-12 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
              <input type="text" maxlength="1" class="w-12 h-12 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
              <input type="text" maxlength="1" class="w-12 h-12 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
              <input type="text" maxlength="1" class="w-12 h-12 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
            </div>
            <p class="text-xs text-gray-500 mt-3">Type or paste code</p>
          </div>
          <div class="text-center">
            <p class="text-sm text-gray-600 mb-4">For testing, use:</p>
            <code class="bg-gray-100 px-3 py-1 rounded font-mono text-sm text-gray-900">123456</code>
          </div>
        </div>
      </div>

      <!-- Purpose & Rationale -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-3">Purpose & Rationale</h3>
        <p class="text-gray-700">The Input OTP component provides a secure, user-friendly interface for entering one-time passwords. Individual character cells make each digit visually distinct, reduce input errors, and provide better visual feedback. It supports both typing and pasting for accessibility.</p>
      </div>

      <!-- Anatomy -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Anatomy</h3>
        <div class="flex flex-col gap-3">
          <div class="flex items-center gap-3">
            <span class="bg-gray-100 px-3 py-1 rounded font-mono text-sm text-gray-700">InputOTP</span>
            <span class="text-gray-600">Root component managing OTP input state</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="bg-gray-100 px-3 py-1 rounded font-mono text-sm text-gray-700">InputOTPGroup</span>
            <span class="text-gray-600">Container for slot elements</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="bg-gray-100 px-3 py-1 rounded font-mono text-sm text-gray-700">InputOTPSlot</span>
            <span class="text-gray-600">Individual digit input box</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="bg-gray-100 px-3 py-1 rounded font-mono text-sm text-gray-700">InputOTPSeparator</span>
            <span class="text-gray-600">Visual separator between slot groups (optional)</span>
          </div>
        </div>
      </div>

      <!-- Variants -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Variants</h3>
        <div class="space-y-4">
          <div>
            <p class="text-sm font-medium text-gray-900 mb-2">6-Digit Code (Default)</p>
            <p class="text-gray-700 text-sm">Most common for SMS OTP authentication</p>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-900 mb-2">8-Digit Code</p>
            <p class="text-gray-700 text-sm">Higher security with more characters</p>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-900 mb-2">With Separators</p>
            <p class="text-gray-700 text-sm">Group digits (e.g., 123-456)</p>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-900 mb-2">Time-Limited</p>
            <p class="text-gray-700 text-sm">Shows countdown timer for code expiration</p>
          </div>
        </div>
      </div>

      <!-- Code Example -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-3">Code Example</h3>
        <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm"><code>&lt;InputOTP maxLength={6}&gt;
  &lt;InputOTPGroup&gt;
    &lt;InputOTPSlot index={0} /&gt;
    &lt;InputOTPSlot index={1} /&gt;
    &lt;InputOTPSlot index={2} /&gt;
    &lt;InputOTPSeparator /&gt;
    &lt;InputOTPSlot index={3} /&gt;
    &lt;InputOTPSlot index={4} /&gt;
    &lt;InputOTPSlot index={5} /&gt;
  &lt;/InputOTPGroup&gt;
&lt;/InputOTP&gt;</code></pre>
      </div>

      <!-- Do's and Don'ts -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Do's and Don'ts</h3>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 class="font-semibold text-green-900 mb-3">✓ Do</h4>
            <ul class="space-y-2 text-sm text-green-800">
              <li>• Auto-focus next slot when filled</li>
              <li>• Support paste to fill all slots</li>
              <li>• Clear on backspace/delete</li>
              <li>• Show clear focus indicators</li>
              <li>• Use monospace font for digits</li>
            </ul>
          </div>
          <div class="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 class="font-semibold text-red-900 mb-3">✗ Don't</h4>
            <ul class="space-y-2 text-sm text-red-800">
              <li>• Hide input values with dots</li>
              <li>• Make slots too small</li>
              <li>• Allow non-numeric input</li>
              <li>• Skip validation feedback</li>
              <li>• Use autocomplete on OTP fields</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Accessibility -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-3">Accessibility</h3>
        <ul class="space-y-2 text-gray-700">
          <li>• Use aria-label describing OTP input purpose</li>
          <li>• Support inputmode="numeric" for mobile keyboards</li>
          <li>• Implement focus trap within OTP component</li>
          <li>• Announce slot focus changes to screen readers</li>
          <li>• Support paste functionality from clipboard</li>
          <li>• Ensure clear focus indicators on each slot</li>
          <li>• Allow backspace/delete navigation</li>
        </ul>
      </div>

      <!-- Content & Style Guidelines -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-3">Content & Style Guidelines</h3>
        <ul class="space-y-2 text-gray-700">
          <li>• Use 48-56px slot width/height</li>
          <li>• Use 24px font size for digits</li>
          <li>• Use monospace font (courier, menlo) for digits</li>
          <li>• Maintain 8-12px gap between slots</li>
          <li>• Use 2px border in default state</li>
          <li>• Use primary color for focus ring</li>
          <li>• Use red color for error state</li>
        </ul>
      </div>
    </div>
  `
}

batch2["keyboard-shortcuts"] = {
  title: "Keyboard Shortcuts",
  description: "Component for displaying keyboard shortcut keys in styled format",
  html: `
    <div class="space-y-8 p-8">
      <!-- Preview Section -->
      <div class="bg-gray-50 rounded-lg p-8 border border-gray-200">
        <h3 class="text-sm font-semibold text-gray-900 mb-6">Preview</h3>
        <div class="space-y-6">
          <div>
            <h4 class="text-sm font-medium text-gray-900 mb-3">Common Shortcuts</h4>
            <div class="flex flex-wrap gap-4">
              <div class="flex items-center gap-2">
                <span class="text-gray-700 text-sm">Save</span>
                <div class="flex gap-1">
                  <kbd class="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-xs font-semibold text-gray-700">Ctrl</kbd>
                  <span class="text-gray-400">+</span>
                  <kbd class="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-xs font-semibold text-gray-700">S</kbd>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-gray-700 text-sm">Find</span>
                <div class="flex gap-1">
                  <kbd class="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-xs font-semibold text-gray-700">Ctrl</kbd>
                  <span class="text-gray-400">+</span>
                  <kbd class="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-xs font-semibold text-gray-700">F</kbd>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-gray-700 text-sm">Undo</span>
                <div class="flex gap-1">
                  <kbd class="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-xs font-semibold text-gray-700">Ctrl</kbd>
                  <span class="text-gray-400">+</span>
                  <kbd class="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-xs font-semibold text-gray-700">Z</kbd>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 class="text-sm font-medium text-gray-900 mb-3">Mac Shortcuts</h4>
            <div class="flex flex-wrap gap-4">
              <div class="flex items-center gap-2">
                <span class="text-gray-700 text-sm">Search</span>
                <div class="flex gap-1">
                  <kbd class="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-xs font-semibold text-gray-700">Cmd</kbd>
                  <span class="text-gray-400">+</span>
                  <kbd class="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-xs font-semibold text-gray-700">K</kbd>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-gray-700 text-sm">Preferences</span>
                <div class="flex gap-1">
                  <kbd class="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-xs font-semibold text-gray-700">Cmd</kbd>
                  <span class="text-gray-400">+</span>
                  <kbd class="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-xs font-semibold text-gray-700">,</kbd>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 class="text-sm font-medium text-gray-900 mb-3">Special Keys</h4>
            <div class="flex flex-wrap gap-4">
              <kbd class="px-3 py-1.5 bg-gray-100 border border-gray-300 rounded text-xs font-semibold text-gray-700">Enter</kbd>
              <kbd class="px-3 py-1.5 bg-gray-100 border border-gray-300 rounded text-xs font-semibold text-gray-700">Escape</kbd>
              <kbd class="px-3 py-1.5 bg-gray-100 border border-gray-300 rounded text-xs font-semibold text-gray-700">Tab</kbd>
              <kbd class="px-3 py-1.5 bg-gray-100 border border-gray-300 rounded text-xs font-semibold text-gray-700">Shift</kbd>
              <kbd class="px-3 py-1.5 bg-gray-100 border border-gray-300 rounded text-xs font-semibold text-gray-700">Alt</kbd>
            </div>
          </div>
        </div>
      </div>

      <!-- Purpose & Rationale -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-3">Purpose & Rationale</h3>
        <p class="text-gray-700">Keyboard shortcut components provide a consistent, visually recognized way to display keyboard combinations in documentation, help menus, and UI. They communicate efficiency features to users and improve discoverability of keyboard navigation, enhancing accessibility and productivity.</p>
      </div>

      <!-- Anatomy -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Anatomy</h3>
        <div class="flex flex-col gap-3">
          <div class="flex items-center gap-3">
            <span class="bg-gray-100 px-3 py-1 rounded font-mono text-sm text-gray-700">Kbd</span>
            <span class="text-gray-600">Individual key element with styling</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="bg-gray-100 px-3 py-1 rounded font-mono text-sm text-gray-700">KbdGroup</span>
            <span class="text-gray-600">Container for multiple keys in a combination</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="bg-gray-100 px-3 py-1 rounded font-mono text-sm text-gray-700">KbdSeparator</span>
            <span class="text-gray-600">Visual separator between keys (e.g., "+")</span>
          </div>
        </div>
      </div>

      <!-- Variants -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Variants</h3>
        <div class="space-y-4">
          <div>
            <p class="text-sm font-medium text-gray-900 mb-2">Single Key</p>
            <p class="text-gray-700 text-sm">Display of individual keyboard key</p>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-900 mb-2">Modifier Combination</p>
            <p class="text-gray-700 text-sm">Multiple keys combined (Ctrl+S, Cmd+K)</p>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-900 mb-2">Special Keys</p>
            <p class="text-gray-700 text-sm">Named keys like Enter, Escape, Tab</p>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-900 mb-2">Platform-Specific</p>
            <p class="text-gray-700 text-sm">Different display for Ctrl vs Cmd based on OS</p>
          </div>
        </div>
      </div>

      <!-- Code Example -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-3">Code Example</h3>
        <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm"><code>&lt;KbdGroup&gt;
  &lt;Kbd&gt;Ctrl&lt;/Kbd&gt;
  &lt;KbdSeparator&gt;+&lt;/KbdSeparator&gt;
  &lt;Kbd&gt;S&lt;/Kbd&gt;
&lt;/KbdGroup&gt;

&lt;!-- Or with helper component --&gt;
&lt;Kbd combo="ctrl+k"&gt;Open Command Palette&lt;/Kbd&gt;</code></pre>
      </div>

      <!-- Do's and Don'ts -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Do's and Don'ts</h3>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 class="font-semibold text-green-900 mb-3">✓ Do</h4>
            <ul class="space-y-2 text-sm text-green-800">
              <li>• Use uppercase for key names</li>
              <li>• Use clear separator (+ or →)</li>
              <li>• Detect and show platform-specific keys</li>
              <li>• Use consistent spacing</li>
              <li>• Include in help/documentation</li>
            </ul>
          </div>
          <div class="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 class="font-semibold text-red-900 mb-3">✗ Don't</h4>
            <ul class="space-y-2 text-sm text-red-800">
              <li>• Mix uppercase and lowercase</li>
              <li>• Use unclear separators</li>
              <li>• Display invalid key combinations</li>
              <li>• Make shortcut keys too small</li>
              <li>• Use non-standard key names</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Accessibility -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-3">Accessibility</h3>
        <ul class="space-y-2 text-gray-700">
          <li>• Use semantic HTML &lt;kbd&gt; element</li>
          <li>• Provide text alternative in adjacent content</li>
          <li>• Ensure sufficient color contrast on keys</li>
          <li>• Don't rely on visual formatting alone</li>
          <li>• Include shortcut hints in button title attributes</li>
          <li>• Use aria-label for keyboard-only shortcuts</li>
          <li>• Test keyboard shortcut functionality</li>
        </ul>
      </div>

      <!-- Content & Style Guidelines -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-3">Content & Style Guidelines</h3>
        <ul class="space-y-2 text-gray-700">
          <li>• Use monospace font (courier, menlo) for keys</li>
          <li>• Use 12-14px font size for keys</li>
          <li>• Use light gray background (gray-100)</li>
          <li>• Use 1px border in gray-300</li>
          <li>• Use 4-8px padding horizontally</li>
          <li>• Add subtle rounded corners (2px)</li>
          <li>• Display Cmd on Mac, Ctrl on Windows/Linux</li>
        </ul>
      </div>
    </div>
  `
}

export default batch2
