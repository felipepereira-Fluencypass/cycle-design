import React, { useState } from 'react'

/* ── UI Components ─────────────────────────────────────────── */
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@ui/accordion'
import { Alert, AlertTitle, AlertDescription } from '@ui/alert'
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel } from '@ui/alert-dialog'
import { AspectRatio } from '@ui/aspect-ratio'
import { Avatar, AvatarImage, AvatarFallback } from '@ui/avatar'
import { Badge } from '@ui/badge'
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@ui/breadcrumb'
import { Button } from '@ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@ui/card'
import { Checkbox } from '@ui/checkbox'
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@ui/collapsible'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription } from '@ui/dialog'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from '@ui/dropdown-menu'
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@ui/hover-card'
import { Input } from '@ui/input'
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from '@ui/input-otp'
import { Label } from '@ui/label'
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, PaginationEllipsis } from '@ui/pagination'
import { Popover, PopoverTrigger, PopoverContent } from '@ui/popover'
import { Progress } from '@ui/progress'
import { RadioGroup, RadioGroupItem } from '@ui/radio-group'
import { ScrollArea } from '@ui/scroll-area'
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@ui/select'
import { Separator } from '@ui/separator'
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@ui/sheet'
import { Skeleton } from '@ui/skeleton'
import { Slider } from '@ui/slider'
import { Switch } from '@ui/switch'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption } from '@ui/table'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@ui/tabs'
import { Textarea } from '@ui/textarea'
import { Toggle } from '@ui/toggle'
import { ToggleGroup, ToggleGroupItem } from '@ui/toggle-group'
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@ui/tooltip'

/* ── Lucide Icons ──────────────────────────────────────────── */
import {
  AlertCircle, Bold, ChevronDown, ChevronsUpDown, Check, CheckCircle2,
  Cloud, CreditCard, Info, Italic, Loader2, LogOut, Mail, Menu, Plus,
  Search, Settings, Strikethrough, TriangleAlert, Underline, User,
} from 'lucide-react'

/* ── Types ─────────────────────────────────────────────────── */
export interface ComponentDemo {
  title: string
  description?: string
  render: React.ReactNode
}

export interface ComponentEntry {
  slug: string
  name: string
  description: string
  category: 'Inputs' | 'Data Display' | 'Layout' | 'Overlay' | 'Feedback' | 'Navigation'
  imports: string
  demos: ComponentDemo[]
}

/* ── Helper for stateful demos ─────────────────────────────── */
function SliderDemo() {
  const [value, setValue] = useState([33])
  return <Slider value={value} onValueChange={setValue} max={100} step={1} className="w-[60%]" />
}

function ProgressDemo() {
  const [value, setValue] = useState(45)
  return (
    <div className="flex flex-col gap-4 w-full">
      <Progress value={value} className="w-full" />
      <div className="flex gap-2">
        <Button size="sm" variant="outline" onClick={() => setValue(v => Math.max(0, v - 10))}>-10</Button>
        <Button size="sm" variant="outline" onClick={() => setValue(v => Math.min(100, v + 10))}>+10</Button>
        <span className="text-sm text-muted-foreground ml-2">{value}%</span>
      </div>
    </div>
  )
}

function CollapsibleDemo() {
  const [open, setOpen] = useState(false)
  return (
    <Collapsible open={open} onOpenChange={setOpen} className="w-[340px] space-y-2">
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">3 itens salvos</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm"><ChevronsUpDown className="h-4 w-4" /><span className="sr-only">Toggle</span></Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-3 text-sm">Item principal</div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 text-sm">Item 2</div>
        <div className="rounded-md border px-4 py-3 text-sm">Item 3</div>
      </CollapsibleContent>
    </Collapsible>
  )
}

/* ── Registry ──────────────────────────────────────────────── */
export const componentRegistry: ComponentEntry[] = [
  /* ─── Inputs ──────────────────────────────────────────── */
  {
    slug: 'button',
    name: 'Button',
    description: 'Elemento interativo primário com variantes, tamanhos e suporte a ícones.',
    category: 'Inputs',
    imports: `import { Button } from 'cycle-design'
import { Plus, Search } from 'lucide-react'`,
    demos: [
      {
        title: 'Variantes',
        render: (
          <div className="flex flex-wrap items-center gap-3">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        ),
      },
      {
        title: 'Tamanhos',
        render: (
          <div className="flex flex-wrap items-center gap-3">
            <Button size="lg">Grande</Button>
            <Button>Default</Button>
            <Button size="sm">Pequeno</Button>
            <Button size="icon" aria-label="Buscar"><Search className="h-4 w-4" /></Button>
          </div>
        ),
      },
      {
        title: 'Com ícone',
        render: (
          <div className="flex flex-wrap items-center gap-3">
            <Button><Plus className="mr-2 h-4 w-4" />Criar turma</Button>
            <Button variant="outline"><Mail className="mr-2 h-4 w-4" />Enviar convite</Button>
            <Button disabled><Loader2 className="mr-2 h-4 w-4 animate-spin" />Carregando</Button>
          </div>
        ),
      },
    ],
  },
  {
    slug: 'checkbox',
    name: 'Checkbox',
    description: 'Caixa de seleção com estados checked, unchecked e indeterminate.',
    category: 'Inputs',
    imports: `import { Checkbox } from 'cycle-design'
import { Label } from 'cycle-design'`,
    demos: [
      {
        title: 'Com label',
        render: (
          <div className="flex flex-col gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Aceitar termos de uso</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="news" defaultChecked />
              <Label htmlFor="news">Receber novidades</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="disabled" disabled />
              <Label htmlFor="disabled" className="text-muted-foreground">Desabilitado</Label>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    slug: 'input',
    name: 'Input',
    description: 'Campo de texto para formulários.',
    category: 'Inputs',
    imports: `import { Input } from 'cycle-design'
import { Label } from 'cycle-design'`,
    demos: [
      {
        title: 'Tipos',
        render: (
          <div className="flex flex-col gap-4 w-full max-w-sm">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">E-mail</Label>
              <Input type="email" id="email" placeholder="seu@email.com" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="password">Senha</Label>
              <Input type="password" id="password" placeholder="••••••••" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="disabled-input">Desabilitado</Label>
              <Input id="disabled-input" placeholder="Não editável" disabled />
            </div>
          </div>
        ),
      },
    ],
  },
  {
    slug: 'input-otp',
    name: 'Input OTP',
    description: 'Campo de código de verificação com slots individuais.',
    category: 'Inputs',
    imports: `import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from 'cycle-design'`,
    demos: [
      {
        title: 'Código de 6 dígitos',
        render: (
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        ),
      },
    ],
  },
  {
    slug: 'label',
    name: 'Label',
    description: 'Rótulo acessível para elementos de formulário.',
    category: 'Inputs',
    imports: `import { Label } from 'cycle-design'`,
    demos: [
      {
        title: 'Com input',
        render: (
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name">Nome completo</Label>
            <Input id="name" placeholder="Digite seu nome" />
          </div>
        ),
      },
    ],
  },
  {
    slug: 'radio-group',
    name: 'Radio Group',
    description: 'Grupo de opções mutuamente exclusivas.',
    category: 'Inputs',
    imports: `import { RadioGroup, RadioGroupItem } from 'cycle-design'
import { Label } from 'cycle-design'`,
    demos: [
      {
        title: 'Opções',
        render: (
          <RadioGroup defaultValue="option-1">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-1" id="opt-1" />
              <Label htmlFor="opt-1">Aula individual</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-2" id="opt-2" />
              <Label htmlFor="opt-2">Aula em grupo</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-3" id="opt-3" />
              <Label htmlFor="opt-3">Conversação</Label>
            </div>
          </RadioGroup>
        ),
      },
    ],
  },
  {
    slug: 'select',
    name: 'Select',
    description: 'Dropdown de seleção com suporte a grupos e busca.',
    category: 'Inputs',
    imports: `import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from 'cycle-design'`,
    demos: [
      {
        title: 'Seleção simples',
        render: (
          <Select>
            <SelectTrigger className="w-[220px]">
              <SelectValue placeholder="Selecione o idioma" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">Inglês</SelectItem>
              <SelectItem value="es">Espanhol</SelectItem>
              <SelectItem value="fr">Francês</SelectItem>
              <SelectItem value="de">Alemão</SelectItem>
            </SelectContent>
          </Select>
        ),
      },
    ],
  },
  {
    slug: 'slider',
    name: 'Slider',
    description: 'Controle deslizante para seleção de valores numéricos.',
    category: 'Inputs',
    imports: `import { Slider } from 'cycle-design'`,
    demos: [
      {
        title: 'Controle de valor',
        render: <SliderDemo />,
      },
    ],
  },
  {
    slug: 'switch',
    name: 'Switch',
    description: 'Toggle on/off com animação e semântica nativa.',
    category: 'Inputs',
    imports: `import { Switch } from 'cycle-design'
import { Label } from 'cycle-design'`,
    demos: [
      {
        title: 'Estados',
        render: (
          <div className="flex flex-col gap-4">
            <div className="flex items-center space-x-2">
              <Switch id="notifications" />
              <Label htmlFor="notifications">Notificações</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="dark-mode" defaultChecked />
              <Label htmlFor="dark-mode">Dark mode</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="disabled-switch" disabled />
              <Label htmlFor="disabled-switch" className="text-muted-foreground">Desabilitado</Label>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    slug: 'textarea',
    name: 'Textarea',
    description: 'Campo de texto multilinhas.',
    category: 'Inputs',
    imports: `import { Textarea } from 'cycle-design'
import { Label } from 'cycle-design'`,
    demos: [
      {
        title: 'Com label',
        render: (
          <div className="grid w-full max-w-sm gap-1.5">
            <Label htmlFor="message">Mensagem</Label>
            <Textarea id="message" placeholder="Escreva sua mensagem aqui..." />
          </div>
        ),
      },
    ],
  },
  {
    slug: 'toggle',
    name: 'Toggle',
    description: 'Botão com estado pressed/unpressed.',
    category: 'Inputs',
    imports: `import { Toggle } from 'cycle-design'`,
    demos: [
      {
        title: 'Variantes',
        render: (
          <div className="flex items-center gap-3">
            <Toggle aria-label="Toggle bold"><Bold className="h-4 w-4" /></Toggle>
            <Toggle variant="outline" aria-label="Toggle italic"><Italic className="h-4 w-4" /></Toggle>
            <Toggle aria-label="Toggle underline" disabled><Underline className="h-4 w-4" /></Toggle>
          </div>
        ),
      },
    ],
  },
  {
    slug: 'toggle-group',
    name: 'Toggle Group',
    description: 'Grupo de toggles para seleção única ou múltipla.',
    category: 'Inputs',
    imports: `import { ToggleGroup, ToggleGroupItem } from 'cycle-design'`,
    demos: [
      {
        title: 'Seleção única',
        render: (
          <ToggleGroup type="single">
            <ToggleGroupItem value="bold" aria-label="Toggle bold"><Bold className="h-4 w-4" /></ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic"><Italic className="h-4 w-4" /></ToggleGroupItem>
            <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough"><Strikethrough className="h-4 w-4" /></ToggleGroupItem>
          </ToggleGroup>
        ),
      },
      {
        title: 'Outline',
        render: (
          <ToggleGroup type="multiple" variant="outline">
            <ToggleGroupItem value="bold" aria-label="Toggle bold"><Bold className="h-4 w-4" /></ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic"><Italic className="h-4 w-4" /></ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Toggle underline"><Underline className="h-4 w-4" /></ToggleGroupItem>
          </ToggleGroup>
        ),
      },
    ],
  },

  /* ─── Data Display ────────────────────────────────────── */
  {
    slug: 'avatar',
    name: 'Avatar',
    description: 'Imagem de perfil com fallback para iniciais.',
    category: 'Data Display',
    imports: `import { Avatar, AvatarImage, AvatarFallback } from 'cycle-design'`,
    demos: [
      {
        title: 'Com imagem e fallback',
        render: (
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>FP</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
          </div>
        ),
      },
    ],
  },
  {
    slug: 'badge',
    name: 'Badge',
    description: 'Indicador de status, contagem ou categoria.',
    category: 'Data Display',
    imports: `import { Badge } from 'cycle-design'`,
    demos: [
      {
        title: 'Variantes',
        render: (
          <div className="flex flex-wrap items-center gap-3">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        ),
      },
    ],
  },
  {
    slug: 'card',
    name: 'Card',
    description: 'Container de conteúdo com header, body e footer.',
    category: 'Data Display',
    imports: `import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from 'cycle-design'`,
    demos: [
      {
        title: 'Card completo',
        render: (
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Aula de Inglês</CardTitle>
              <CardDescription>Próxima aula agendada para amanhã às 14h.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Professor: John Smith</p>
              <p className="text-sm text-muted-foreground">Duração: 50 minutos</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancelar</Button>
              <Button>Confirmar</Button>
            </CardFooter>
          </Card>
        ),
      },
    ],
  },
  {
    slug: 'progress',
    name: 'Progress',
    description: 'Barra de progresso animada.',
    category: 'Data Display',
    imports: `import { Progress } from 'cycle-design'`,
    demos: [
      {
        title: 'Interativo',
        render: <ProgressDemo />,
      },
    ],
  },
  {
    slug: 'separator',
    name: 'Separator',
    description: 'Divisor visual horizontal ou vertical.',
    category: 'Data Display',
    imports: `import { Separator } from 'cycle-design'`,
    demos: [
      {
        title: 'Horizontal e vertical',
        render: (
          <div>
            <div className="space-y-1">
              <h4 className="text-sm font-medium leading-none">Cycle Design</h4>
              <p className="text-sm text-muted-foreground">Design System da Fluencypass</p>
            </div>
            <Separator className="my-4" />
            <div className="flex h-5 items-center space-x-4 text-sm">
              <div>Docs</div>
              <Separator orientation="vertical" />
              <div>Components</div>
              <Separator orientation="vertical" />
              <div>Tokens</div>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    slug: 'skeleton',
    name: 'Skeleton',
    description: 'Placeholder animado para estados de carregamento.',
    category: 'Data Display',
    imports: `import { Skeleton } from 'cycle-design'`,
    demos: [
      {
        title: 'Texto e avatar',
        render: (
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        ),
      },
      {
        title: 'Card',
        render: (
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        ),
      },
    ],
  },
  {
    slug: 'table',
    name: 'Table',
    description: 'Tabela com header, body, footer e caption.',
    category: 'Data Display',
    imports: `import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption } from 'cycle-design'`,
    demos: [
      {
        title: 'Tabela de dados',
        render: (
          <Table>
            <TableCaption>Últimas aulas realizadas</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[120px]">Data</TableHead>
                <TableHead>Professor</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead className="text-right">Duração</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">15/03</TableCell>
                <TableCell>John Smith</TableCell>
                <TableCell>Individual</TableCell>
                <TableCell className="text-right">50 min</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">14/03</TableCell>
                <TableCell>Maria Garcia</TableCell>
                <TableCell>Grupo</TableCell>
                <TableCell className="text-right">60 min</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">13/03</TableCell>
                <TableCell>Anna Müller</TableCell>
                <TableCell>Conversação</TableCell>
                <TableCell className="text-right">30 min</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        ),
      },
    ],
  },

  /* ─── Layout ──────────────────────────────────────────── */
  {
    slug: 'accordion',
    name: 'Accordion',
    description: 'Painéis colapsáveis para organizar conteúdo em seções.',
    category: 'Layout',
    imports: `import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from 'cycle-design'`,
    demos: [
      {
        title: 'FAQ',
        render: (
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Como funciona a aula?</AccordionTrigger>
              <AccordionContent>
                As aulas são realizadas por videoconferência com professores nativos. Cada sessão dura 50 minutos.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Posso cancelar uma aula?</AccordionTrigger>
              <AccordionContent>
                Sim, você pode cancelar com até 24 horas de antecedência sem custo adicional.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Quais idiomas estão disponíveis?</AccordionTrigger>
              <AccordionContent>
                Inglês, Espanhol, Francês e Alemão. Novos idiomas são adicionados regularmente.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ),
      },
    ],
  },
  {
    slug: 'aspect-ratio',
    name: 'Aspect Ratio',
    description: 'Mantém proporção fixa para conteúdo responsivo.',
    category: 'Layout',
    imports: `import { AspectRatio } from 'cycle-design'`,
    demos: [
      {
        title: '16:9',
        render: (
          <div className="w-[300px]">
            <AspectRatio ratio={16 / 9} className="bg-muted rounded-md flex items-center justify-center">
              <span className="text-sm text-muted-foreground">16:9</span>
            </AspectRatio>
          </div>
        ),
      },
    ],
  },
  {
    slug: 'collapsible',
    name: 'Collapsible',
    description: 'Container que expande e colapsa para mostrar/esconder conteúdo.',
    category: 'Layout',
    imports: `import { Collapsible, CollapsibleTrigger, CollapsibleContent } from 'cycle-design'`,
    demos: [
      {
        title: 'Expandir itens',
        render: <CollapsibleDemo />,
      },
    ],
  },
  {
    slug: 'scroll-area',
    name: 'Scroll Area',
    description: 'Área com scroll customizado e acessível.',
    category: 'Layout',
    imports: `import { ScrollArea } from 'cycle-design'`,
    demos: [
      {
        title: 'Lista com scroll',
        render: (
          <ScrollArea className="h-[200px] w-[220px] rounded-md border p-4">
            <h4 className="mb-4 text-sm font-medium leading-none">Idiomas</h4>
            {['Inglês', 'Espanhol', 'Francês', 'Alemão', 'Italiano', 'Japonês', 'Mandarim', 'Coreano', 'Russo', 'Árabe', 'Português', 'Hindi'].map((lang) => (
              <React.Fragment key={lang}>
                <div className="text-sm">{lang}</div>
                <Separator className="my-2" />
              </React.Fragment>
            ))}
          </ScrollArea>
        ),
      },
    ],
  },
  {
    slug: 'tabs',
    name: 'Tabs',
    description: 'Navegação por abas com conteúdo associado.',
    category: 'Layout',
    imports: `import { Tabs, TabsList, TabsTrigger, TabsContent } from 'cycle-design'`,
    demos: [
      {
        title: 'Configurações',
        render: (
          <Tabs defaultValue="account" className="w-[380px]">
            <TabsList>
              <TabsTrigger value="account">Conta</TabsTrigger>
              <TabsTrigger value="password">Senha</TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="space-y-2 pt-4">
              <div className="space-y-1">
                <Label htmlFor="tab-name">Nome</Label>
                <Input id="tab-name" defaultValue="Felipe Pinho" />
              </div>
            </TabsContent>
            <TabsContent value="password" className="space-y-2 pt-4">
              <div className="space-y-1">
                <Label htmlFor="tab-pw">Senha atual</Label>
                <Input id="tab-pw" type="password" />
              </div>
            </TabsContent>
          </Tabs>
        ),
      },
    ],
  },

  /* ─── Overlay ─────────────────────────────────────────── */
  {
    slug: 'alert-dialog',
    name: 'Alert Dialog',
    description: 'Diálogo de confirmação modal com focus trap e acessibilidade.',
    category: 'Overlay',
    imports: `import {
  AlertDialog, AlertDialogTrigger, AlertDialogContent,
  AlertDialogHeader, AlertDialogFooter, AlertDialogTitle,
  AlertDialogDescription, AlertDialogAction, AlertDialogCancel,
} from 'cycle-design'`,
    demos: [
      {
        title: 'Confirmação de exclusão',
        render: (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">Excluir conta</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Tem certeza?</AlertDialogTitle>
                <AlertDialogDescription>
                  Esta ação não pode ser desfeita. Sua conta será permanentemente excluída.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction>Confirmar</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        ),
      },
    ],
  },
  {
    slug: 'dialog',
    name: 'Dialog',
    description: 'Modal com focus trap, keyboard support e overlay.',
    category: 'Overlay',
    imports: `import {
  Dialog, DialogTrigger, DialogContent, DialogHeader,
  DialogFooter, DialogTitle, DialogDescription,
} from 'cycle-design'`,
    demos: [
      {
        title: 'Formulário em dialog',
        render: (
          <Dialog>
            <DialogTrigger asChild>
              <Button>Editar perfil</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Editar perfil</DialogTitle>
                <DialogDescription>
                  Faça alterações no seu perfil. Clique em salvar quando terminar.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="dialog-name" className="text-right">Nome</Label>
                  <Input id="dialog-name" defaultValue="Felipe" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="dialog-email" className="text-right">E-mail</Label>
                  <Input id="dialog-email" defaultValue="felipe@fluencypass.com" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Salvar</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        ),
      },
    ],
  },
  {
    slug: 'drawer',
    name: 'Drawer',
    description: 'Painel deslizante de baixo (mobile-friendly).',
    category: 'Overlay',
    imports: `import {
  Drawer, DrawerTrigger, DrawerContent, DrawerHeader,
  DrawerFooter, DrawerTitle, DrawerDescription,
} from 'cycle-design'`,
    demos: [
      {
        title: 'Drawer simples',
        description: 'Clique para abrir o drawer.',
        render: (() => {
          // Drawer requires dynamic import
          const DrawerDemo = React.lazy(() =>
            import('@ui/drawer').then(mod => ({
              default: () => {
                const { Drawer: D, DrawerTrigger: DT, DrawerContent: DC, DrawerHeader: DH, DrawerFooter: DF, DrawerTitle: DTi, DrawerDescription: DD, DrawerClose } = mod
                return (
                  <D>
                    <DT asChild><Button variant="outline">Abrir drawer</Button></DT>
                    <DC>
                      <DH>
                        <DTi>Configurações</DTi>
                        <DD>Ajuste suas preferências de notificação.</DD>
                      </DH>
                      <div className="p-4">
                        <div className="flex items-center space-x-2">
                          <Switch id="drawer-notif" />
                          <Label htmlFor="drawer-notif">E-mail notifications</Label>
                        </div>
                      </div>
                      <DF>
                        <Button>Salvar</Button>
                        <DrawerClose asChild><Button variant="outline">Cancelar</Button></DrawerClose>
                      </DF>
                    </DC>
                  </D>
                )
              }
            }))
          )
          return <React.Suspense fallback={<Skeleton className="h-10 w-32" />}><DrawerDemo /></React.Suspense>
        })(),
      },
    ],
  },
  {
    slug: 'hover-card',
    name: 'Hover Card',
    description: 'Cartão flutuante exibido ao passar o mouse.',
    category: 'Overlay',
    imports: `import { HoverCard, HoverCardTrigger, HoverCardContent } from 'cycle-design'`,
    demos: [
      {
        title: 'Perfil do usuário',
        render: (
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link">@fluencypass</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarFallback>FP</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">Fluencypass</h4>
                  <p className="text-sm text-muted-foreground">
                    Plataforma de ensino de idiomas com professores nativos.
                  </p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        ),
      },
    ],
  },
  {
    slug: 'popover',
    name: 'Popover',
    description: 'Container flutuante para conteúdo interativo.',
    category: 'Overlay',
    imports: `import { Popover, PopoverTrigger, PopoverContent } from 'cycle-design'`,
    demos: [
      {
        title: 'Configuração rápida',
        render: (
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Abrir popover</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Dimensões</h4>
                  <p className="text-sm text-muted-foreground">Configure as dimensões do card.</p>
                </div>
                <div className="grid gap-2">
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="width">Largura</Label>
                    <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="height">Altura</Label>
                    <Input id="height" defaultValue="auto" className="col-span-2 h-8" />
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        ),
      },
    ],
  },
  {
    slug: 'sheet',
    name: 'Sheet',
    description: 'Painel lateral deslizante (drawer lateral) para formulários e detalhes.',
    category: 'Overlay',
    imports: `import {
  Sheet, SheetTrigger, SheetContent, SheetHeader,
  SheetTitle, SheetDescription,
} from 'cycle-design'`,
    demos: [
      {
        title: 'Painel lateral',
        render: (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Abrir sheet</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filtros</SheetTitle>
                <SheetDescription>Aplique filtros para refinar os resultados.</SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="sheet-lang">Idioma</Label>
                  <Select>
                    <SelectTrigger id="sheet-lang"><SelectValue placeholder="Todos" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">Inglês</SelectItem>
                      <SelectItem value="es">Espanhol</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        ),
      },
    ],
  },
  {
    slug: 'tooltip',
    name: 'Tooltip',
    description: 'Dica contextual ao passar o mouse sobre um elemento.',
    category: 'Overlay',
    imports: `import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from 'cycle-design'`,
    demos: [
      {
        title: 'Em botão',
        render: (
          <TooltipProvider>
            <div className="flex items-center gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" aria-label="Configurações"><Settings className="h-4 w-4" /></Button>
                </TooltipTrigger>
                <TooltipContent><p>Configurações</p></TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" aria-label="Buscar"><Search className="h-4 w-4" /></Button>
                </TooltipTrigger>
                <TooltipContent><p>Buscar</p></TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        ),
      },
    ],
  },
  {
    slug: 'command',
    name: 'Command',
    description: 'Paleta de comandos com busca e atalhos (Cmd+K).',
    category: 'Overlay',
    imports: `import {
  Command, CommandInput, CommandList, CommandEmpty,
  CommandGroup, CommandItem, CommandSeparator,
} from 'cycle-design'`,
    demos: [
      {
        title: 'Busca de comandos',
        render: (() => {
          const CommandDemo = React.lazy(() =>
            import('@ui/command').then(mod => ({
              default: () => (
                <mod.Command className="rounded-lg border shadow-md w-[340px]">
                  <mod.CommandInput placeholder="Buscar comando..." />
                  <mod.CommandList>
                    <mod.CommandEmpty>Nenhum resultado.</mod.CommandEmpty>
                    <mod.CommandGroup heading="Sugestões">
                      <mod.CommandItem><Search className="mr-2 h-4 w-4" /><span>Buscar aula</span></mod.CommandItem>
                      <mod.CommandItem><User className="mr-2 h-4 w-4" /><span>Meu perfil</span></mod.CommandItem>
                      <mod.CommandItem><Settings className="mr-2 h-4 w-4" /><span>Configurações</span></mod.CommandItem>
                    </mod.CommandGroup>
                    <mod.CommandSeparator />
                    <mod.CommandGroup heading="Conta">
                      <mod.CommandItem><CreditCard className="mr-2 h-4 w-4" /><span>Pagamentos</span></mod.CommandItem>
                      <mod.CommandItem><LogOut className="mr-2 h-4 w-4" /><span>Sair</span></mod.CommandItem>
                    </mod.CommandGroup>
                  </mod.CommandList>
                </mod.Command>
              )
            }))
          )
          return <React.Suspense fallback={<Skeleton className="h-[280px] w-[340px]" />}><CommandDemo /></React.Suspense>
        })(),
      },
    ],
  },

  /* ─── Feedback ────────────────────────────────────────── */
  {
    slug: 'alert',
    name: 'Alert',
    description: 'Mensagem contextual com variantes default e destructive.',
    category: 'Feedback',
    imports: `import { Alert, AlertTitle, AlertDescription } from 'cycle-design'
import { Info, AlertCircle } from 'lucide-react'`,
    demos: [
      {
        title: 'Variantes',
        render: (
          <div className="flex flex-col gap-4 w-full">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Informação</AlertTitle>
              <AlertDescription>Sua sessão expira em 5 minutos.</AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Erro</AlertTitle>
              <AlertDescription>Não foi possível conectar ao servidor.</AlertDescription>
            </Alert>
          </div>
        ),
      },
      {
        title: 'Com ícones semânticos',
        render: (
          <div className="flex flex-col gap-4 w-full">
            <Alert>
              <CheckCircle2 className="h-4 w-4" />
              <AlertTitle>Sucesso</AlertTitle>
              <AlertDescription>Suas alterações foram salvas.</AlertDescription>
            </Alert>
            <Alert>
              <TriangleAlert className="h-4 w-4" />
              <AlertTitle>Atenção</AlertTitle>
              <AlertDescription>Verifique os campos obrigatórios.</AlertDescription>
            </Alert>
          </div>
        ),
      },
    ],
  },
  {
    slug: 'sonner',
    name: 'Sonner (Toast)',
    description: 'Notificações temporárias via biblioteca Sonner.',
    category: 'Feedback',
    imports: `import { Toaster } from 'cycle-design' // no layout
import { toast } from 'sonner' // para disparar`,
    demos: [
      {
        title: 'Toast notifications',
        description: 'O Sonner é o sistema de toast recomendado. Adicione <Toaster /> no layout raiz.',
        render: (() => {
          const SonnerDemo = React.lazy(() =>
            import('sonner').then(mod => ({
              default: () => (
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" onClick={() => mod.toast('Aula agendada com sucesso!')}>Default</Button>
                  <Button variant="outline" onClick={() => mod.toast.success('Perfil atualizado')}>Sucesso</Button>
                  <Button variant="outline" onClick={() => mod.toast.error('Falha ao salvar')}>Erro</Button>
                  <Button variant="outline" onClick={() => mod.toast('Processando...', { description: 'Aguarde enquanto salvamos suas alterações.' })}>Com descrição</Button>
                </div>
              )
            }))
          )
          return <React.Suspense fallback={<Skeleton className="h-10 w-64" />}><SonnerDemo /></React.Suspense>
        })(),
      },
    ],
  },

  /* ─── Navigation ──────────────────────────────────────── */
  {
    slug: 'breadcrumb',
    name: 'Breadcrumb',
    description: 'Trilha de navegação hierárquica.',
    category: 'Navigation',
    imports: `import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem,
  BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage,
} from 'cycle-design'`,
    demos: [
      {
        title: 'Navegação',
        render: (
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink href="#">Aulas</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>Inglês</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        ),
      },
    ],
  },
  {
    slug: 'context-menu',
    name: 'Context Menu',
    description: 'Menu de contexto (clique direito).',
    category: 'Navigation',
    imports: `import {
  ContextMenu, ContextMenuTrigger, ContextMenuContent,
  ContextMenuItem, ContextMenuSeparator,
} from 'cycle-design'`,
    demos: [
      {
        title: 'Clique direito',
        render: (() => {
          const CtxDemo = React.lazy(() =>
            import('@ui/context-menu').then(mod => ({
              default: () => (
                <mod.ContextMenu>
                  <mod.ContextMenuTrigger className="flex h-[120px] w-[260px] items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground">
                    Clique com botão direito aqui
                  </mod.ContextMenuTrigger>
                  <mod.ContextMenuContent className="w-64">
                    <mod.ContextMenuItem>Editar</mod.ContextMenuItem>
                    <mod.ContextMenuItem>Duplicar</mod.ContextMenuItem>
                    <mod.ContextMenuSeparator />
                    <mod.ContextMenuItem>Excluir</mod.ContextMenuItem>
                  </mod.ContextMenuContent>
                </mod.ContextMenu>
              )
            }))
          )
          return <React.Suspense fallback={<Skeleton className="h-[120px] w-[260px]" />}><CtxDemo /></React.Suspense>
        })(),
      },
    ],
  },
  {
    slug: 'dropdown-menu',
    name: 'Dropdown Menu',
    description: 'Menu suspenso com itens, grupos e atalhos de teclado.',
    category: 'Navigation',
    imports: `import {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,
  DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator,
} from 'cycle-design'`,
    demos: [
      {
        title: 'Menu de opções',
        render: (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline"><Menu className="mr-2 h-4 w-4" />Opções</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem><User className="mr-2 h-4 w-4" /><span>Perfil</span></DropdownMenuItem>
              <DropdownMenuItem><CreditCard className="mr-2 h-4 w-4" /><span>Pagamentos</span></DropdownMenuItem>
              <DropdownMenuItem><Settings className="mr-2 h-4 w-4" /><span>Configurações</span></DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem><LogOut className="mr-2 h-4 w-4" /><span>Sair</span></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ),
      },
    ],
  },
  {
    slug: 'menubar',
    name: 'Menubar',
    description: 'Barra de menus estilo aplicativo desktop.',
    category: 'Navigation',
    imports: `import {
  Menubar, MenubarMenu, MenubarTrigger, MenubarContent,
  MenubarItem, MenubarSeparator,
} from 'cycle-design'`,
    demos: [
      {
        title: 'Barra de menus',
        render: (() => {
          const MenuDemo = React.lazy(() =>
            import('@ui/menubar').then(mod => ({
              default: () => (
                <mod.Menubar>
                  <mod.MenubarMenu>
                    <mod.MenubarTrigger>Arquivo</mod.MenubarTrigger>
                    <mod.MenubarContent>
                      <mod.MenubarItem>Novo</mod.MenubarItem>
                      <mod.MenubarItem>Abrir</mod.MenubarItem>
                      <mod.MenubarSeparator />
                      <mod.MenubarItem>Salvar</mod.MenubarItem>
                    </mod.MenubarContent>
                  </mod.MenubarMenu>
                  <mod.MenubarMenu>
                    <mod.MenubarTrigger>Editar</mod.MenubarTrigger>
                    <mod.MenubarContent>
                      <mod.MenubarItem>Desfazer</mod.MenubarItem>
                      <mod.MenubarItem>Refazer</mod.MenubarItem>
                    </mod.MenubarContent>
                  </mod.MenubarMenu>
                </mod.Menubar>
              )
            }))
          )
          return <React.Suspense fallback={<Skeleton className="h-10 w-64" />}><MenuDemo /></React.Suspense>
        })(),
      },
    ],
  },
  {
    slug: 'pagination',
    name: 'Pagination',
    description: 'Navegação por páginas de conteúdo.',
    category: 'Navigation',
    imports: `import {
  Pagination, PaginationContent, PaginationItem,
  PaginationLink, PaginationPrevious, PaginationNext,
  PaginationEllipsis,
} from 'cycle-design'`,
    demos: [
      {
        title: 'Paginação',
        render: (
          <Pagination>
            <PaginationContent>
              <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
              <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
              <PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem>
              <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
              <PaginationItem><PaginationEllipsis /></PaginationItem>
              <PaginationItem><PaginationNext href="#" /></PaginationItem>
            </PaginationContent>
          </Pagination>
        ),
      },
    ],
  },
]

/* ── Lookup helpers ────────────────────────────────────────── */
export function getComponent(slug: string): ComponentEntry | undefined {
  return componentRegistry.find(c => c.slug === slug)
}

export function getComponentsByCategory(): Record<string, ComponentEntry[]> {
  return componentRegistry.reduce<Record<string, ComponentEntry[]>>((acc, comp) => {
    if (!acc[comp.category]) acc[comp.category] = []
    acc[comp.category].push(comp)
    return acc
  }, {})
}

export const categoryOrder = ['Inputs', 'Data Display', 'Layout', 'Overlay', 'Feedback', 'Navigation'] as const
