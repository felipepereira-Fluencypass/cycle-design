// ──────────────────────────────────────
// Cycle Design — shadcn/ui com tema Fluencypass
// 40+ componentes pré-customizados
// ──────────────────────────────────────

// Accordion
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './components/ui/accordion'

// Alert
export { Alert, AlertTitle, AlertDescription } from './components/ui/alert'

// Alert Dialog
export {
  AlertDialog, AlertDialogPortal, AlertDialogOverlay, AlertDialogTrigger,
  AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle,
  AlertDialogDescription, AlertDialogAction, AlertDialogCancel,
} from './components/ui/alert-dialog'

// Aspect Ratio
export { AspectRatio } from './components/ui/aspect-ratio'

// Avatar
export { Avatar, AvatarImage, AvatarFallback } from './components/ui/avatar'

// Badge
export { Badge, badgeVariants } from './components/ui/badge'
export type { BadgeProps } from './components/ui/badge'

// Breadcrumb
export {
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink,
  BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis,
} from './components/ui/breadcrumb'

// Button
export { Button, buttonVariants } from './components/ui/button'
export type { ButtonProps } from './components/ui/button'

// Card
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from './components/ui/card'

// Carousel
export {
  type CarouselApi, Carousel, CarouselContent, CarouselItem,
  CarouselPrevious, CarouselNext,
} from './components/ui/carousel'

// Checkbox
export { Checkbox } from './components/ui/checkbox'

// Collapsible
export { Collapsible, CollapsibleTrigger, CollapsibleContent } from './components/ui/collapsible'

// Command
export {
  Command, CommandDialog, CommandInput, CommandList, CommandEmpty,
  CommandGroup, CommandItem, CommandShortcut, CommandSeparator,
} from './components/ui/command'

// Context Menu
export {
  ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem,
  ContextMenuCheckboxItem, ContextMenuRadioItem, ContextMenuLabel,
  ContextMenuSeparator, ContextMenuShortcut, ContextMenuGroup,
  ContextMenuPortal, ContextMenuSub, ContextMenuSubContent,
  ContextMenuSubTrigger, ContextMenuRadioGroup,
} from './components/ui/context-menu'

// Dialog
export {
  Dialog, DialogPortal, DialogOverlay, DialogClose, DialogTrigger,
  DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription,
} from './components/ui/dialog'

// Drawer
export {
  Drawer, DrawerPortal, DrawerOverlay, DrawerTrigger, DrawerClose,
  DrawerContent, DrawerHeader, DrawerFooter, DrawerTitle, DrawerDescription,
} from './components/ui/drawer'

// Dropdown Menu
export {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuCheckboxItem, DropdownMenuRadioItem, DropdownMenuLabel,
  DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuGroup,
  DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent,
  DropdownMenuSubTrigger, DropdownMenuRadioGroup,
} from './components/ui/dropdown-menu'

// Hover Card
export { HoverCard, HoverCardTrigger, HoverCardContent } from './components/ui/hover-card'

// Input
export { Input } from './components/ui/input'

// Input OTP
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from './components/ui/input-otp'

// Label
export { Label } from './components/ui/label'

// Menubar
export {
  Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem,
  MenubarSeparator, MenubarLabel, MenubarCheckboxItem, MenubarRadioGroup,
  MenubarRadioItem, MenubarPortal, MenubarSubContent, MenubarSubTrigger,
  MenubarGroup, MenubarSub, MenubarShortcut,
} from './components/ui/menubar'

// Navigation Menu
export {
  navigationMenuTriggerStyle, NavigationMenu, NavigationMenuList,
  NavigationMenuItem, NavigationMenuContent, NavigationMenuTrigger,
  NavigationMenuLink, NavigationMenuIndicator, NavigationMenuViewport,
} from './components/ui/navigation-menu'

// Pagination
export {
  Pagination, PaginationContent, PaginationEllipsis, PaginationItem,
  PaginationLink, PaginationNext, PaginationPrevious,
} from './components/ui/pagination'

// Popover
export { Popover, PopoverTrigger, PopoverContent } from './components/ui/popover'

// Progress
export { Progress } from './components/ui/progress'

// Radio Group
export { RadioGroup, RadioGroupItem } from './components/ui/radio-group'

// Resizable
export { ResizablePanelGroup, ResizablePanel, ResizableHandle } from './components/ui/resizable'

// Scroll Area
export { ScrollArea, ScrollBar } from './components/ui/scroll-area'

// Select
export {
  Select, SelectGroup, SelectValue, SelectTrigger, SelectContent,
  SelectLabel, SelectItem, SelectSeparator, SelectScrollUpButton,
  SelectScrollDownButton,
} from './components/ui/select'

// Separator
export { Separator } from './components/ui/separator'

// Sheet
export {
  Sheet, SheetPortal, SheetOverlay, SheetTrigger, SheetClose,
  SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription,
} from './components/ui/sheet'

// Skeleton
export { Skeleton } from './components/ui/skeleton'

// Slider
export { Slider } from './components/ui/slider'

// Sonner (Toast alternativo)
export { Toaster } from './components/ui/sonner'

// Switch
export { Switch } from './components/ui/switch'

// Table
export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption } from './components/ui/table'

// Tabs
export { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/tabs'

// Textarea
export { Textarea } from './components/ui/textarea'

// Toast
export {
  type ToastProps, type ToastActionElement, ToastProvider, ToastViewport,
  Toast, ToastTitle, ToastDescription, ToastClose, ToastAction,
} from './components/ui/toast'

// Toggle
export { Toggle, toggleVariants } from './components/ui/toggle'

// Toggle Group
export { ToggleGroup, ToggleGroupItem } from './components/ui/toggle-group'

// Tooltip
export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from './components/ui/tooltip'

// ──────────────────────────────────────
// Patterns (organismos Fluencypass)
// ──────────────────────────────────────
export { LoginForm } from './components/patterns/login-form'
export type { LoginFormProps } from './components/patterns/login-form'

// ──────────────────────────────────────
// Utilities
// ──────────────────────────────────────
export { cn } from './lib/utils'
