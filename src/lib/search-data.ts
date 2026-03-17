export interface SearchItem {
  title: string
  href: string
  description: string
  category: string
}

export const searchIndex: SearchItem[] = [
  // Getting Started
  { title: "Introduction", href: "/docs/introduction", description: "The design system for Echo — an AI-powered Interaction Intelligence Platform for contact centres.", category: "Getting Started" },
  { title: "Principles", href: "/docs/principles", description: "Core principles that guide every design decision in Echo.", category: "Getting Started" },
  { title: "Getting Started", href: "/docs/getting-started", description: "How to use the Echo Design System.", category: "Getting Started" },

  // Foundations
  { title: "Typography", href: "/docs/typography", description: "Font families, type scale, numeric display rules, and text styling guidelines.", category: "Foundations" },
  { title: "Colors", href: "/docs/colors", description: "Echo brand palette, semantic tokens, and chart color scale.", category: "Foundations" },
  { title: "Spacing & Layout", href: "/docs/spacing", description: "Spacing scale, border radius, and layout patterns with annotated examples.", category: "Foundations" },
  { title: "Icons", href: "/docs/icons", description: "Using Lucide React icons in the Echo Design System.", category: "Foundations" },

  // Components — Forms and input
  { title: "Button", href: "/docs/button", description: "A clickable element used to trigger actions, form submissions, and navigation.", category: "Components" },
  { title: "Button Group", href: "/docs/button-group", description: "Group related buttons together for exclusive or inclusive selections.", category: "Components" },
  { title: "Checkbox", href: "/docs/checkbox", description: "An input control for binary selections and independent options.", category: "Components" },
  { title: "Input", href: "/docs/input", description: "A form field for capturing text and data. Supports multiple types and validation states.", category: "Components" },
  { title: "Input Group", href: "/docs/input-group", description: "Group an input with addons like icons, buttons, or text for enhanced form fields.", category: "Components" },
  { title: "Input OTP", href: "/docs/input-otp", description: "One-time password input component for verification codes.", category: "Components" },
  { title: "Field", href: "/docs/field", description: "Form field wrapper with label, input, error, and helper text.", category: "Components" },
  { title: "Label", href: "/docs/label", description: "A form label component for associating text with form inputs.", category: "Components" },
  { title: "Radio Group", href: "/docs/radio-group", description: "Group of radio buttons for single selection from multiple options.", category: "Components" },
  { title: "Select", href: "/docs/select", description: "Dropdown select menu for choosing from predefined options.", category: "Components" },
  { title: "Slider", href: "/docs/slider", description: "Range input component for selecting values with dragging interaction.", category: "Components" },
  { title: "Switch", href: "/docs/switch", description: "A toggle control for enabling or disabling features. Ideal for settings.", category: "Components" },
  { title: "Textarea", href: "/docs/textarea", description: "A form input for capturing multi-line text from users.", category: "Components" },
  { title: "Toggle", href: "/docs/toggle", description: "Button that toggles between two states (on/off, pressed/unpressed).", category: "Components" },
  { title: "Toggle Group", href: "/docs/toggle-group", description: "Set of toggle buttons for single or multiple selection.", category: "Components" },
  { title: "Date Picker", href: "/docs/date-picker", description: "Calendar interface for selecting dates with navigation controls.", category: "Components" },

  // Components — Navigation
  { title: "Menubar", href: "/docs/menubar", description: "Horizontal menu bar with dropdown menus for application navigation.", category: "Components" },
  { title: "Navigation Menu", href: "/docs/navigation-menu", description: "Top-level navigation component with dropdown panels for site sections.", category: "Components" },
  { title: "Pagination", href: "/docs/pagination", description: "Navigation controls for paging through large data sets.", category: "Components" },
  { title: "Tabs", href: "/docs/tabs", description: "Organize content into separate views within the same context.", category: "Components" },
  { title: "Sidebar", href: "/docs/sidebar", description: "Vertical navigation panel for application-level navigation.", category: "Components" },

  // Components — Feedback
  { title: "Alert", href: "/docs/alert", description: "Displays important messages, warnings, errors, and confirmations.", category: "Components" },
  { title: "Sonner", href: "/docs/sonner", description: "Toast notification system for non-intrusive feedback messages.", category: "Components" },
  { title: "Spinner", href: "/docs/spinner", description: "Loading indicator for asynchronous operations and data fetching.", category: "Components" },
  { title: "Skeleton", href: "/docs/skeleton", description: "A placeholder component representing content before it loads.", category: "Components" },
  { title: "Empty", href: "/docs/empty", description: "Visual feedback when no data or content is available.", category: "Components" },

  // Components — Overlay
  { title: "Dialog", href: "/docs/dialog", description: "A modal window that focuses user attention on specific tasks.", category: "Components" },
  { title: "Drawer", href: "/docs/drawer", description: "Sliding panel that overlays content, typically from bottom or side.", category: "Components" },
  { title: "Dropdown Menu", href: "/docs/dropdown-menu", description: "A menu that opens below a trigger button, displaying actions or options.", category: "Components" },
  { title: "Context Menu", href: "/docs/context-menu", description: "A menu that appears on right-click, providing context-specific actions.", category: "Components" },
  { title: "Hover Card", href: "/docs/hover-card", description: "A card that appears on hover, showing additional information or preview.", category: "Components" },
  { title: "Popover", href: "/docs/popover", description: "A non-modal dialog for quick interactions like filters or settings.", category: "Components" },
  { title: "Sheet", href: "/docs/sheet", description: "A side panel that slides in from the edge of the screen.", category: "Components" },
  { title: "Tooltip", href: "/docs/tooltip", description: "Contextual information displayed on hover or focus.", category: "Components" },
  { title: "Alert Dialog", href: "/docs/alert-dialog", description: "A modal dialog that interrupts the user to confirm an action.", category: "Components" },

  // Components — Data display
  { title: "Accordion", href: "/docs/accordion", description: "Collapsible content panels for organizing information hierarchically.", category: "Components" },
  { title: "Avatar", href: "/docs/avatar", description: "User profile picture component with image fallback support.", category: "Components" },
  { title: "Badge", href: "/docs/badge", description: "A small label for counts, status indicators, and tags.", category: "Components" },
  { title: "Card", href: "/docs/card", description: "A container component that groups related content and actions.", category: "Components" },
  { title: "Carousel", href: "/docs/carousel", description: "Carousel for displaying content in a rotating slideshow with navigation.", category: "Components" },
  { title: "Chart", href: "/docs/chart", description: "Visual representation of data using bars, lines, and other formats.", category: "Components" },
  { title: "Collapsible", href: "/docs/collapsible", description: "Expandable/collapsible content section with toggle control.", category: "Components" },
  { title: "Data Table", href: "/docs/data-table", description: "Sortable, filterable, and paginated table for displaying structured data.", category: "Components" },
  { title: "Separator", href: "/docs/separator", description: "Visual divider for separating content sections.", category: "Components" },
  { title: "Scroll Area", href: "/docs/scroll-area", description: "A container that adds custom scrolling styles to overflowing content.", category: "Components" },
  { title: "Progress", href: "/docs/progress", description: "Linear progress bar indicating completion percentage of a task.", category: "Components" },

  // Components — Utility
  { title: "Keyboard Shortcuts", href: "/docs/keyboard-shortcuts", description: "Display keyboard shortcut combinations to users.", category: "Components" },
  { title: "Resizable", href: "/docs/resizable", description: "Resizable panel layout for adjustable content areas.", category: "Components" },

  // Patterns
  { title: "Sign In", href: "/docs/sign-in-pattern", description: "Authentication page pattern using Echo brand identity with email-based login.", category: "Patterns" },
  { title: "Dashboard Overview", href: "/docs/dashboard-overview-pattern", description: "Primary dashboard layout with sidebar navigation, KPI metric cards, and charts.", category: "Patterns" },
  { title: "Queues Table", href: "/docs/queues-table-pattern", description: "Data table pattern with color-coded score badges, pagination, and filters.", category: "Patterns" },
  { title: "Queues Chart", href: "/docs/queues-chart-pattern", description: "Chart visualization pattern with line charts, tab navigation, and filters.", category: "Patterns" },

  // Resources
  { title: "Inspiration", href: "/docs/inspiration", description: "Open source shadcn/ui kits, block libraries, and component collections.", category: "Resources" },
]
