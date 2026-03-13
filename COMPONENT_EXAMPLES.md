# Component Usage Examples

Quick reference for using all 20 new UI components.

## 1. Accordion

```tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export function AccordionExample() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Section 1</AccordionTrigger>
        <AccordionContent>Content for section 1</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Section 2</AccordionTrigger>
        <AccordionContent>Content for section 2</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
```

## 2. Dialog

```tsx
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function DialogExample() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>This is the dialog description</DialogDescription>
        </DialogHeader>
        <p>Dialog content goes here</p>
      </DialogContent>
    </Dialog>
  )
}
```

## 3. Sheet

```tsx
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export function SheetExample() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Sheet Title</SheetTitle>
        </SheetHeader>
        <p>Sheet content here</p>
      </SheetContent>
    </Sheet>
  )
}
```

## 4. Dropdown Menu

```tsx
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { MoreVertical } from "lucide-react"

export function DropdownExample() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuItem>Duplicate</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
```

## 5. Select

```tsx
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

export function SelectExample() {
  return (
    <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
      </SelectContent>
    </Select>
  )
}
```

## 6. Slider

```tsx
import { Slider } from "@/components/ui/slider"
import { useState } from "react"

export function SliderExample() {
  const [value, setValue] = useState([50])

  return (
    <div className="w-64 space-y-2">
      <Slider value={value} onValueChange={setValue} max={100} step={1} />
      <p>Value: {value[0]}</p>
    </div>
  )
}
```

## 7. Toggle

```tsx
import { Toggle } from "@/components/ui/toggle"
import { Bold, Italic, Underline } from "lucide-react"

export function ToggleExample() {
  return (
    <div className="flex gap-1">
      <Toggle>
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle>
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle>
        <Underline className="h-4 w-4" />
      </Toggle>
    </div>
  )
}
```

## 8. Toggle Group

```tsx
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { AlignLeft, AlignCenter, AlignRight } from "lucide-react"

export function ToggleGroupExample() {
  return (
    <ToggleGroup type="single" defaultValue="left">
      <ToggleGroupItem value="left" aria-label="Align left">
        <AlignLeft className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <AlignCenter className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <AlignRight className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
```

## 9. Separator

```tsx
import { Separator } from "@/components/ui/separator"

export function SeparatorExample() {
  return (
    <div>
      <h2>Section 1</h2>
      <Separator className="my-4" />
      <h2>Section 2</h2>
    </div>
  )
}
```

## 10. Progress

```tsx
import { Progress } from "@/components/ui/progress"
import { useState, useEffect } from "react"

export function ProgressExample() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 0 : prev + 10))
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return <Progress value={progress} />
}
```

## 11. Radio Group

```tsx
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export function RadioGroupExample() {
  return (
    <RadioGroup defaultValue="option1">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option1" id="option1" />
        <Label htmlFor="option1">Option 1</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option2" id="option2" />
        <Label htmlFor="option2">Option 2</Label>
      </div>
    </RadioGroup>
  )
}
```

## 12. Collapsible

```tsx
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"
import { ChevronsUpDown } from "lucide-react"
import { useState } from "react"

export function CollapsibleExample() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <Button variant="ghost">
          <ChevronsUpDown className="h-4 w-4" />
          <span className="ml-2">Show more</span>
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-4">
        Hidden content revealed here
      </CollapsibleContent>
    </Collapsible>
  )
}
```

## 13. Avatar

```tsx
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export function AvatarExample() {
  return (
    <div className="flex gap-4">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    </div>
  )
}
```

## 14. Hover Card

```tsx
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card"

export function HoverCardExample() {
  return (
    <HoverCard>
      <HoverCardTrigger>Hover over me</HoverCardTrigger>
      <HoverCardContent>
        This content appears on hover with smooth animations
      </HoverCardContent>
    </HoverCard>
  )
}
```

## 15. Context Menu

```tsx
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem } from "@/components/ui/context-menu"

export function ContextMenuExample() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="border p-4 rounded">
        Right-click here
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Cut</ContextMenuItem>
        <ContextMenuItem>Copy</ContextMenuItem>
        <ContextMenuItem>Paste</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
```

## 16. Popover

```tsx
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

export function PopoverExample() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="space-y-2">
          <h4 className="font-medium">Popover Title</h4>
          <p className="text-sm">Popover content goes here</p>
        </div>
      </PopoverContent>
    </Popover>
  )
}
```

## 17. Alert Dialog

```tsx
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

export function AlertDialogExample() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete Item</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the item.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex justify-end gap-2">
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Delete</AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  )
}
```

## 18. Navigation Menu

```tsx
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, ListItem } from "@/components/ui/navigation-menu"

export function NavigationMenuExample() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4">
              <ListItem title="Product 1" description="Description" />
              <ListItem title="Product 2" description="Description" />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
```

## 19. Textarea

```tsx
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function TextareaExample() {
  return (
    <div className="grid w-full gap-2">
      <Label htmlFor="message">Message</Label>
      <Textarea id="message" placeholder="Enter your message..." />
    </div>
  )
}
```

## 20. Skeleton

```tsx
import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonExample() {
  return (
    <div className="space-y-2">
      <Skeleton className="h-12 w-12 rounded-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-[200px]" />
    </div>
  )
}
```

## Common Patterns

### Form with Multiple Components

```tsx
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function FormExample() {
  return (
    <div className="space-y-4">
      <div className="grid w-full gap-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Enter name" />
      </div>

      <div className="grid w-full gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" placeholder="Enter message" />
      </div>

      <RadioGroup defaultValue="option1">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option1" id="option1" />
          <Label htmlFor="option1">Option 1</Label>
        </div>
      </RadioGroup>

      <Button>Submit</Button>
    </div>
  )
}
```

### Dialog with Form

```tsx
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function DialogFormExample() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Item</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Item</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input placeholder="Item name" />
          <Input placeholder="Description" />
          <Button className="w-full">Create</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
```

All components follow shadcn conventions and are fully typed with TypeScript support.
