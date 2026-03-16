# Cycle Design — Testing Checklist

> Regra obrigatória: nenhum componente pode ser publicado sem passar nas 4 camadas de teste.
> Dashboard visual: `/guidelines/testing` na documentação.

---

## 4 Camadas de Teste

Todo componente do Cycle Design deve ter testes cobrindo estas 4 camadas.

### Camada 1 — Renderização e props

Garante que o componente renderiza corretamente com todas as combinações de props.

- Renderiza sem erros com props padrão
- Aplica todas as variantes (variant, size, color)
- Aplica className customizada sem sobrescrever as internas
- Merge de style sem perder CSS custom properties internas
- Forward ref para o elemento DOM correto
- Passthrough de atributos nativos HTML

```tsx
// Exemplo: renderização básica
it('renders with default props', () => {
  render(<Button>Click</Button>)
  expect(screen.getByRole('button')).toBeInTheDocument()
})

// Exemplo: variantes
it.each(['filled', 'outline', 'ghost'] as const)('applies variant: %s', (variant) => {
  render(<Button variant={variant}>Test</Button>)
  expect(screen.getByRole('button').className).toContain(`cd-btn--${variant}`)
})

// Exemplo: ref forwarding
it('forwards ref', () => {
  const ref = createRef<HTMLButtonElement>()
  render(<Button ref={ref}>Test</Button>)
  expect(ref.current).toBeInstanceOf(HTMLButtonElement)
})
```

### Camada 2 — Interação e comportamento

Garante que o componente responde corretamente a interações do usuário.

- Responde a click/onChange corretamente
- Funciona com teclado (Enter, Space, Tab)
- Recebe foco via Tab
- Não recebe foco quando disabled
- Não dispara eventos quando disabled
- asChild renderiza como elemento filho (se aplicável)

```tsx
// Exemplo: keyboard
it('can be activated with Enter key', async () => {
  const user = userEvent.setup()
  const handleClick = vi.fn()
  render(<Button onClick={handleClick}>Press</Button>)
  screen.getByRole('button').focus()
  await user.keyboard('{Enter}')
  expect(handleClick).toHaveBeenCalledTimes(1)
})

// Exemplo: Tab focus
it('is focusable via Tab', async () => {
  const user = userEvent.setup()
  render(<Button>Focus me</Button>)
  await user.tab()
  expect(screen.getByRole('button')).toHaveFocus()
})

// Exemplo: disabled
it('is not focusable when disabled', async () => {
  const user = userEvent.setup()
  render(<Button disabled>Disabled</Button>)
  await user.tab()
  expect(screen.getByRole('button')).not.toHaveFocus()
})
```

### Camada 3 — Acessibilidade

Garante que o componente é acessível para tecnologias assistivas.

- Role semântico correto (button, checkbox, switch, status, alert)
- aria-label presente quando obrigatório (icon-only)
- aria-disabled quando disabled
- aria-invalid quando error (se aplicável)
- aria-hidden em elementos decorativos

```tsx
// Exemplo: role
it('has correct role', () => {
  render(<Switch />)
  expect(screen.getByRole('switch')).toBeInTheDocument()
})

// Exemplo: aria-invalid
it('sets aria-invalid on error', () => {
  render(<Checkbox error />)
  expect(screen.getByRole('checkbox')).toHaveAttribute('aria-invalid', 'true')
})
```

### Camada 4 — Data attributes

Garante que o componente expõe data attributes para estilização externa e testes.

- data-variant (se aplicável)
- data-size (se aplicável)
- data-color (se aplicável)
- data-disabled quando disabled
- data-state (se tem estados como checked/unchecked)

```tsx
// Exemplo
it('exposes data attributes', () => {
  render(<Button variant="outline" size="lg" color="class">Test</Button>)
  const btn = screen.getByRole('button')
  expect(btn).toHaveAttribute('data-variant', 'outline')
  expect(btn).toHaveAttribute('data-size', 'lg')
  expect(btn).toHaveAttribute('data-color', 'class')
})
```

---

## Token Contract Tests

Arquivo: `tests/token-contract.test.ts`

Testes que validam os valores reais dos tokens CSS contra a especificação do Figma.
Se alguém alterar um valor por engano (ex: `--spacing-micro: 8px` → `4px`),
o teste quebra antes de chegar a produção.

```ts
// O teste lê os arquivos CSS crus e verifica cada valor
expect(getTokenValue('--spacing-micro')).toBe('8px')
```

Categorias testadas:
- Spacing (16 tokens)
- Spacing Inset (7 tokens)
- Border Width (5 tokens)
- Radius (9 tokens)
- Opacity (7 tokens)
- Motion Duration (5 tokens)
- Z-Index (8 tokens)
- Typography Primitives (7 tokens)

---

## Quando atualizar o dashboard

A página `/guidelines/testing` na documentação visual mostra o status de cada componente.
**Deve ser atualizada** sempre que:

1. Um novo componente é criado — adicionar entrada no array `components`
2. Testes são adicionados a um componente existente — atualizar `layers[].passed`
3. Novos token contract tests são adicionados — atualizar array `tokenTests`
4. O número total de testes muda — atualizar `totalTests`

O arquivo fica em: `docs/src/pages/guidelines/Testing/index.tsx`

---

## Comandos

```bash
# Rodar todos os testes
npm test

# Rodar em watch mode
npm run test:watch

# Rodar apenas testes de um componente
npx vitest run components/Button/Button.test.tsx

# Rodar apenas token contracts
npx vitest run tests/token-contract.test.ts
```
