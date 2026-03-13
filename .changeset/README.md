# Changesets

Toda PR que altera tokens, componentes ou exports do pacote precisa de um changeset.

## Como criar

```bash
npx changeset
```

Selecione o tipo de mudanca:
- **patch** — bug fix, ajuste visual, correcao de token
- **minor** — novo componente, nova prop, novo token
- **major** — breaking change (remocao de token, mudanca de API)

## Fluxo de release

1. PR com changeset e mergeada em `main`
2. Changesets bot abre PR de release automaticamente
3. Ao mergear a PR de release, o pacote e publicado no npm
