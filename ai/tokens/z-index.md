# Cycle Design — Z-Index Tokens

Stacking scale for overlay components. Values are spaced in increments of 100 to allow future insertions without refactoring.

## Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--z-base` | 0 | Default content |
| `--z-dropdown` | 100 | Dropdown menus, selects |
| `--z-sticky` | 200 | Fixed headers, navigation bars |
| `--z-overlay` | 300 | Modal/sheet backdrops |
| `--z-modal` | 400 | Dialog, Sheet, Drawer |
| `--z-popover` | 500 | Popover, contextual menus |
| `--z-toast` | 600 | Toast notifications (above modals) |
| `--z-tooltip` | 700 | Tooltip (topmost layer) |

## Usage Examples

```css
/* Modal backdrop */
.cd-dialog__overlay {
  position: fixed;
  inset: 0;
  z-index: var(--z-overlay);
}

/* Modal content (above backdrop) */
.cd-dialog__content {
  position: fixed;
  z-index: var(--z-modal);
}

/* Toast notification */
.cd-toast {
  position: fixed;
  z-index: var(--z-toast);
}

/* Sticky header */
.app-header {
  position: sticky;
  top: 0;
  z-index: var(--z-sticky);
}
```

## Rules

- Never use raw z-index numbers. Always use `var(--z-*)` tokens.
- If a component needs to be between two levels, use `calc()`: `z-index: calc(var(--z-modal) + 1)`.
- Stacking contexts: remember that `position: relative` + `z-index` creates a new stacking context.
