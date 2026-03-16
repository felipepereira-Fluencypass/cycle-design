# Cycle Design — Compound Components Guide

> Guia para decidir quando e como usar o pattern de compound components.

---

## Quando usar cada pattern

| Complexidade | Pattern | Exemplo |
|---|---|---|
| Componente simples, 1-3 áreas de conteúdo | **Monolítico** (props) | Button, Badge, Spinner, Checkbox, Switch |
| Componente com layout flexível ou conteúdo variável | **Compound** (sub-componentes) | Dialog, Dropdown, Toast, Card |
| Componente com itens repetitivos | **Compound + iteração** | Table, Tabs, Accordion |

### Regra de decisão

Use compound components quando **pelo menos uma** destas condições for verdadeira:

1. O consumidor precisa controlar a **ordem** dos elementos internos
2. O componente tem **mais de 3 áreas** de conteúdo distintas
3. Alguma área de conteúdo é **opcional e complexa** (não apenas um `ReactNode`)
4. O componente precisa de **ações customizáveis** (botões, links internos)

---

## Anatomia de um compound component

```tsx
// ── Tipos ────────────────────────────────────────
interface DialogContextValue {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const DialogContext = createContext<DialogContextValue | null>(null)

function useDialogContext() {
  const ctx = useContext(DialogContext)
  if (!ctx) throw new Error('Dialog.* must be used within <Dialog.Root>')
  return ctx
}

// ── Root (provê contexto) ────────────────────────
function Root({ open, onOpenChange, children }: DialogRootProps) {
  return (
    <DialogContext.Provider value={{ open, onOpenChange }}>
      {children}
    </DialogContext.Provider>
  )
}

// ── Sub-componentes ──────────────────────────────
function Trigger({ children }: { children: ReactNode }) {
  const { onOpenChange } = useDialogContext()
  return <button onClick={() => onOpenChange(true)}>{children}</button>
}

function Content({ children }: { children: ReactNode }) {
  const { open } = useDialogContext()
  if (!open) return null
  return <div className="cd-dialog__content">{children}</div>
}

function Title({ children }: { children: ReactNode }) {
  return <h2 className="cd-dialog__title">{children}</h2>
}

// ── Export como namespace ────────────────────────
export const Dialog = {
  Root,
  Trigger,
  Content,
  Title,
}
```

### Uso pelo consumidor

```tsx
<Dialog.Root open={open} onOpenChange={setOpen}>
  <Dialog.Trigger>Abrir</Dialog.Trigger>
  <Dialog.Content>
    <Dialog.Title>Confirmar ação</Dialog.Title>
    <p>Tem certeza?</p>
    <Button onClick={() => setOpen(false)}>Confirmar</Button>
  </Dialog.Content>
</Dialog.Root>
```

---

## Regras de implementação

### 1. Naming

- `Component.Root` — wrapper com context provider
- `Component.Trigger` — elemento que ativa (abre, expande)
- `Component.Content` — área de conteúdo principal
- `Component.Title` — título acessível
- `Component.Description` — descrição acessível
- `Component.Close` — botão de fechar
- `Component.Action` — ação primária

### 2. Context obrigatório

Todo compound component deve usar React Context para compartilhar estado.
Nunca use prop drilling entre sub-componentes.

### 3. displayName

Cada sub-componente deve ter `displayName` para DevTools:

```tsx
Root.displayName = 'Dialog.Root'
Content.displayName = 'Dialog.Content'
```

### 4. forwardRef em sub-componentes DOM

Sub-componentes que renderizam elementos DOM diretamente devem usar `forwardRef`:

```tsx
const Content = forwardRef<HTMLDivElement, ContentProps>(
  function DialogContent(props, ref) { ... }
)
```

### 5. Data attributes

Cada sub-componente deve expor `data-state` quando relevante:

```tsx
<div data-state={open ? 'open' : 'closed'}>
```

### 6. Acessibilidade

- `Root` gerencia `aria-expanded`, `aria-controls`, `aria-labelledby`
- `Content` recebe `role="dialog"` e `aria-modal="true"` (para modais)
- `Title` é referenciado via `aria-labelledby`
- Focus trap dentro de `Content` para overlays

---

## Componentes existentes que NÃO precisam migrar

Os 6 componentes atuais são simples o suficiente para o pattern monolítico:

| Componente | Por que monolítico é suficiente |
|---|---|
| Button | Ação única, sem layout flexível |
| Checkbox | Input nativo + label, 2 áreas |
| Switch | Input nativo + label, 2 áreas |
| Alert | Ícone + conteúdo + dismiss, 3 áreas mas todas simples |
| Skeleton | Placeholder puro, sem conteúdo |
| Spinner | SVG puro, sem conteúdo |

---

## Componentes futuros que DEVEM usar compound

| Componente | Sub-componentes esperados |
|---|---|
| Dialog | Root, Trigger, Content, Title, Description, Close |
| Toast | Provider, Root, Title, Description, Action, Close |
| Dropdown | Root, Trigger, Content, Item, Separator |
| Tabs | Root, List, Trigger, Content |
| Accordion | Root, Item, Trigger, Content |
| Card | Root, Header, Content, Footer |
| Table | Root, Header, Body, Row, Cell, HeaderCell |
