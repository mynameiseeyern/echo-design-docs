# Echo Design System Documentation

A comprehensive, modern design system documentation site built with Next.js, Tailwind CSS, and shadcn/ui components.

## Features

- **Complete Component Library**: Full documentation for 40+ UI components
- **Live Component Previews**: Interactive examples for each component
- **Responsive Design**: Mobile-friendly layout with sidebar navigation
- **Accessible Components**: WCAG 2.1 AA compliant with proper ARIA attributes
- **Dark Mode Support**: Built-in light and dark theme support
- **Fast Performance**: Built on Next.js 16 with Turbopack for instant builds
- **Type Safe**: Full TypeScript support throughout

## Project Structure

```
src/
├── app/
│   ├── docs/
│   │   ├── [slug]/
│   │   │   └── page.tsx          # Dynamic documentation pages
│   │   └── layout.tsx             # Docs layout with sidebar
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                   # Home page (redirects to introduction)
│   └── globals.css                # Global styles & CSS variables
├── components/
│   ├── ui/                        # shadcn UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── tabs.tsx
│   │   ├── scroll-area.tsx
│   │   ├── tooltip.tsx
│   │   ├── checkbox.tsx
│   │   └── switch.tsx
│   ├── code-block.tsx             # Code example component
│   ├── header.tsx                 # Site header
│   └── sidebar.tsx                # Navigation sidebar
└── lib/
    ├── utils.ts                   # cn() utility function
    └── docs-content.tsx           # Documentation content
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

```bash
npm run build
npm start
```

## Documentation Pages

### Foundation Pages

- **Introduction**: Overview of the Echo Design System
- **Principles**: Design principles (Consistency, Accessibility, Simplicity, Scalability)
- **Getting Started**: Installation and setup instructions
- **Typography**: Text styles and font scale (xs through 9xl)
- **Colors**: Color palette with semantic tokens
- **Spacing**: 8px-based spacing scale
- **Icons**: Lucide React icon usage guide

### Documented Components

**Fully Documented:**
1. **Button** - Click element with variants (default, secondary, outline, ghost, link, destructive) and sizes (sm, default, lg, icon)
2. **Input** - Text input field with label and error states
3. **Badge** - Small colored label for categorization
4. **Card** - Container for grouping content (with Header, Content, Footer)
5. **Dialog** - Modal overlay for important information
6. **Avatar** - User image representation
7. **Tabs** - Organize content into sections
8. **Checkbox** - Multiple selection control
9. **Switch** - Boolean toggle control
10. **Tooltip** - Small context popup
11. **Scroll Area** - Styleable scrollbar container
12. **Select** - Dropdown selection component

**Placeholder Documentation** (33 components coming soon):
- Accordion, Alert, Avatar, Button Group, Carousel, Chart, Collapsible, Context Menu, Data Table, Date Picker, Drawer, Dropdown Menu, Empty, Field, Hover Card, Input Group, Input OTP, Keyboard Shortcuts, Menubar, Navigation Menu, Pagination, Radio Group, Resizable, Separator, Sheet, Sidebar, Skeleton, Slider, Sonner, Spinner, Textarea, Toggle, Toggle Group, Label

## Component Documentation Structure

Each component page includes:

1. **Preview** - Live rendered examples
2. **Purpose & Rationale** - Why and when to use the component
3. **Anatomy** - Component parts and their purpose
4. **Variants** - Different styles and configurations
5. **Do's and Don'ts** - Best practices with visual indicators
6. **Code Examples** - Copy-pasteable implementation code
7. **Accessibility** - ARIA attributes and keyboard support
8. **Content Guidelines** - Text, tone, and styling recommendations

## Technology Stack

- **Framework**: Next.js 16.1.6
- **UI Library**: React 19.2.3
- **Styling**: Tailwind CSS 4
- **Component Primitives**: Radix UI
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge, class-variance-authority

## Radix UI Dependencies

- @radix-ui/react-slot
- @radix-ui/react-tabs
- @radix-ui/react-tooltip
- @radix-ui/react-scroll-area
- @radix-ui/react-label
- @radix-ui/react-switch
- @radix-ui/react-checkbox

## Design System Features

### CSS Variables

The design system uses CSS variables for theming:

```css
--primary: 280 60% 50%
--secondary: 200 90% 56%
--destructive: 0 84.2% 60.2%
--muted: 0 0% 96.1%
--accent: 280 60% 50%
```

### Responsive Layout

- **Mobile**: Single column layout (hidden sidebar)
- **Tablet & Desktop**: Two-column layout with 256px sidebar
- **Content Width**: Max 896px for readability

### Dark Mode

Automatic dark mode support via CSS variables and `prefers-color-scheme` media query.

## Customization

### Adding New Components

1. Create component in `src/components/ui/`
2. Add documentation to `src/lib/docs-content.tsx`
3. Component will automatically appear in sidebar navigation

### Changing Colors

Edit CSS variables in `src/app/globals.css`:

```css
:root {
  --primary: 280 60% 50%;
  --secondary: 200 90% 56%;
  /* ... */
}
```

### Modifying Theme

Colors use HSL format for easy customization. Update the root CSS variables to change the entire design system theme.

## Accessibility

All components follow WCAG 2.1 AA guidelines:

- Keyboard navigation support (Tab, Enter, Space, Arrow keys)
- Proper ARIA labels and roles
- Focus management
- Screen reader support
- Color contrast compliance
- Semantic HTML

## Building for Production

```bash
npm run build
```

The build creates:
- Static pre-rendered documentation pages
- Dynamic route handlers for component documentation
- Optimized assets and code splitting

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)

## License

This design system documentation is open source and available under the MIT License.

## Contributing

To add or improve component documentation:

1. Edit the component entry in `src/lib/docs-content.tsx`
2. Follow the existing documentation template
3. Test on mobile and desktop
4. Ensure accessibility standards are met

## Support

For questions or issues, please refer to the documentation within the site or check the component source code in `src/components/ui/`.
