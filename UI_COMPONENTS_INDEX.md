# UI Components Index

Complete reference for all shadcn-style UI components in your project.

## Components by Category

### Modal & Dialog Components
- **dialog.tsx** - Modal dialog with backdrop animation
- **alert-dialog.tsx** - High-priority confirmation dialogs
- **sheet.tsx** - Slide-out panels (top, bottom, left, right)

### Menu & Navigation Components
- **dropdown-menu.tsx** - Dropdown menus with sub-menus
- **context-menu.tsx** - Right-click context menus
- **navigation-menu.tsx** - Horizontal navigation with mega menus
- **popover.tsx** - Floating popovers

### Form & Input Components
- **textarea.tsx** - Multi-line text input
- **select.tsx** - Scrollable dropdown select
- **slider.tsx** - Range slider input
- **radio-group.tsx** - Radio button groups

### Interactive Components
- **accordion.tsx** - Expandable/collapsible sections
- **collapsible.tsx** - Simple collapsible content
- **toggle.tsx** - Toggle button (single)
- **toggle-group.tsx** - Grouped toggle buttons

### Display Components
- **avatar.tsx** - User avatars with fallback
- **separator.tsx** - Visual dividers
- **progress.tsx** - Progress bars with animation
- **skeleton.tsx** - Loading placeholder skeletons

### Hover & Tooltip Components
- **hover-card.tsx** - Hover-triggered popovers

## Component API Quick Reference

### Accordion
```tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
```

### Alert Dialog
```tsx
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel } from "@/components/ui/alert-dialog"
```

### Avatar
```tsx
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
```

### Collapsible
```tsx
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
```

### Context Menu
```tsx
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem, ContextMenuCheckboxItem, ContextMenuRadioItem, ContextMenuLabel, ContextMenuSeparator, ContextMenuShortcut, ContextMenuGroup, ContextMenuSub, ContextMenuSubTrigger, ContextMenuSubContent, ContextMenuRadioGroup } from "@/components/ui/context-menu"
```

### Dialog
```tsx
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription, DialogPortal, DialogOverlay, DialogClose } from "@/components/ui/dialog"
```

### Dropdown Menu
```tsx
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuRadioItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuGroup, DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuRadioGroup } from "@/components/ui/dropdown-menu"
```

### Hover Card
```tsx
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card"
```

### Navigation Menu
```tsx
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink, NavigationMenuViewport, navigationMenuTriggerStyle, ListItem } from "@/components/ui/navigation-menu"
```

### Popover
```tsx
import { Popover, PopoverTrigger, PopoverContent, PopoverAnchor } from "@/components/ui/popover"
```

### Progress
```tsx
import { Progress } from "@/components/ui/progress"
```

### Radio Group
```tsx
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
```

### Select
```tsx
import { Select, SelectGroup, SelectValue, SelectTrigger, SelectContent, SelectItem, SelectSeparator, SelectScrollUpButton, SelectScrollDownButton } from "@/components/ui/select"
```

### Separator
```tsx
import { Separator } from "@/components/ui/separator"
```

### Sheet
```tsx
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription, SheetPortal, SheetOverlay, SheetClose } from "@/components/ui/sheet"
```

### Skeleton
```tsx
import { Skeleton } from "@/components/ui/skeleton"
```

### Slider
```tsx
import { Slider } from "@/components/ui/slider"
```

### Textarea
```tsx
import { Textarea } from "@/components/ui/textarea"
```

### Toggle
```tsx
import { Toggle, toggleVariants } from "@/components/ui/toggle"
```

### Toggle Group
```tsx
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
```

## Common Props

### Trigger Props (for most components)
- `asChild` - Render as child element (renders next element instead)
- `disabled` - Disable the trigger

### Content Props (for most components)
- `className` - Additional Tailwind classes
- `side` - Position (top, right, bottom, left) where applicable
- `align` - Alignment (start, center, end)
- `sideOffset` - Distance from trigger

### Animation Classes Used
- `data-[state=open]:animate-in` - Animate in when opening
- `data-[state=closed]:animate-out` - Animate out when closing
- `slide-in-from-*` - Slide animation direction
- `fade-in-*` - Fade animation
- `zoom-in-*` / `zoom-out-*` - Scale animation

## Sheet Sides

```tsx
<SheetContent side="right">    {/* default */}
<SheetContent side="left">
<SheetContent side="top">
<SheetContent side="bottom">
```

## Select / Dropdown Alignment

```tsx
<SelectContent align="start">   {/* left aligned */}
<SelectContent align="center">  {/* centered */}
<SelectContent align="end">     {/* right aligned */}
```

## Toggle Variants

```tsx
<Toggle variant="default">      {/* default gray hover */}
<Toggle variant="outline">      {/* outlined style */}
<Toggle size="default">         {/* h-10 */}
<Toggle size="sm">              {/* h-9 */}
<Toggle size="lg">              {/* h-11 */}
```

## Radio Group & Checkbox Patterns

```tsx
<RadioGroup defaultValue="option1">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option1" id="option1" />
    <Label htmlFor="option1">Option 1</Label>
  </div>
</RadioGroup>
```

## Progress Bar

```tsx
<Progress value={65} />  {/* 0-100 */}
```

## Slider

```tsx
<Slider 
  defaultValue={[50]} 
  max={100} 
  step={1}
/>
```

## Avatar with Fallback

```tsx
<Avatar>
  <AvatarImage src="image.jpg" alt="User" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>
```

## Nested Menus

### Dropdown Menu Sub-Items
```tsx
<DropdownMenu>
  <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>Sub Menu</DropdownMenuSubTrigger>
      <DropdownMenuSubContent>
        <DropdownMenuItem>Sub Item</DropdownMenuItem>
      </DropdownMenuSubContent>
    </DropdownMenuSub>
  </DropdownMenuContent>
</DropdownMenu>
```

## Form Integration

### With Label
```tsx
<div className="grid w-full gap-2">
  <Label htmlFor="name">Name</Label>
  <Input id="name" />
</div>
```

### Complete Form Example
```tsx
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function MyForm() {
  return (
    <div className="space-y-4">
      <RadioGroup>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="1" id="1" />
          <Label htmlFor="1">Option 1</Label>
        </div>
      </RadioGroup>
      <Textarea placeholder="Enter text..." />
      <Button>Submit</Button>
    </div>
  )
}
```

## Animation Timing

Most components use:
- `duration-200` - 200ms animation duration
- `ease-in-out` - Smooth easing

Override with Tailwind classes:
```tsx
<Dialog className="duration-300"> {/* slower */}
```

## Accessibility

All components include:
- ARIA labels and roles
- Keyboard navigation
- Focus management
- Screen reader support

Additional ARIA attributes can be added:
```tsx
<RadioGroupItem value="option1" aria-label="Option 1" />
<Toggle aria-label="Toggle bold" />
```

## TypeScript Support

All components are fully typed:
```tsx
import { ComponentProps } from "react"
import { Dialog } from "@/components/ui/dialog"

type DialogProps = ComponentProps<typeof Dialog>
```

## Styling with Tailwind

Override default styles:
```tsx
<Button className="bg-custom-color text-custom-text">
<Dialog className="duration-500">
<Avatar className="h-16 w-16">
```

## Dark Mode

All components support dark mode via Tailwind's dark mode:
- Add `dark:bg-slate-900` etc. to override colors
- Components automatically adapt with `dark:` prefix

## Performance Tips

1. Use `asChild` prop to avoid wrapper divs
2. Lazy load content-heavy dialogs/sheets
3. Use `Skeleton` components for loading states
4. Memoize dropdown/menu content

## Browser Support

All components work in:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers

## Related Documentation

- **COMPONENTS_CREATED.md** - Detailed component documentation
- **COMPONENT_EXAMPLES.md** - Full usage examples
- **Radix UI Docs** - https://www.radix-ui.com/
- **Tailwind CSS** - https://tailwindcss.com/

## Quick Imports Template

```tsx
// Dialog
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

// Forms
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"

// Menus
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"

// Interactive
import { Toggle, ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"

// Display
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Skeleton } from "@/components/ui/skeleton"
import { Separator } from "@/components/ui/separator"
```

