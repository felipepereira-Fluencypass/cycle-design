// ──────────────────────────────────────
// UI Components (shadcn/ui customizado com tema Cycle)
// ──────────────────────────────────────

// Accordion
export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from './components/ui/accordion'

// Alert
export { Alert, AlertTitle, AlertDescription } from './components/ui/alert'

// Alert Dialog
export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from './components/ui/alert-dialog'

// Avatar
export { Avatar, AvatarImage, AvatarFallback } from './components/ui/avatar'

// Badge
export { Badge, badgeVariants } from './components/ui/badge'
export type { BadgeProps } from './components/ui/badge'

// Button
export { Button, buttonVariants } from './components/ui/button'
export type { ButtonProps } from './components/ui/button'

// Card
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from './components/ui/card'

// Checkbox
export { Checkbox } from './components/ui/checkbox'

// Dialog
export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from './components/ui/dialog'

// Dropdown Menu
export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
} from './components/ui/dropdown-menu'

// Input
export { Input } from './components/ui/input'

// Label
export { Label } from './components/ui/label'

// Popover
export { Popover, PopoverTrigger, PopoverContent } from './components/ui/popover'

// Progress
export { Progress } from './components/ui/progress'

// Scroll Area
export { ScrollArea, ScrollBar } from './components/ui/scroll-area'

// Select
export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
} from './components/ui/select'

// Separator
export { Separator } from './components/ui/separator'

// Skeleton
export { Skeleton } from './components/ui/skeleton'

// Switch
export { Switch } from './components/ui/switch'

// Tabs
export { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/tabs'

// Textarea
export { Textarea } from './components/ui/textarea'

// Toggle
export { Toggle, toggleVariants } from './components/ui/toggle'

// Tooltip
export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from './components/ui/tooltip'

// ──────────────────────────────────────
// Patterns (organismos Fluencypass)
// ──────────────────────────────────────
export { LoginForm } from './components/patterns/login-form'

// ──────────────────────────────────────
// Utilities
// ──────────────────────────────────────
export { cn } from './lib/utils'
