# Cycle Design — Motion Tokens

Tokens de duração e easing para transições e animações. Garantem consistência de timing em todos os componentes.

## Duration

| Token | Value | Usage |
|-------|-------|-------|
| `--duration-instant` | 0ms | No animation (disabled states, reduced-motion) |
| `--duration-fast` | 100ms | Micro-interactions: hover, press, toggle |
| `--duration-normal` | 200ms | Standard state transitions |
| `--duration-slow` | 300ms | Element entrance/exit |
| `--duration-slower` | 500ms | Overlays, modals, page transitions |

## Easing

| Token | Value | Usage |
|-------|-------|-------|
| `--ease-default` | cubic-bezier(0.4, 0, 0.2, 1) | Standard — smooth in and out |
| `--ease-in` | cubic-bezier(0.4, 0, 1, 1) | Acceleration — element leaving screen |
| `--ease-out` | cubic-bezier(0, 0, 0.2, 1) | Deceleration — element entering screen |
| `--ease-linear` | linear | Constant — progress bars, spinners |

## Composition Shortcuts

Pre-composed tokens combining duration + easing for common use cases:

| Token | Expands to | Usage |
|-------|-----------|-------|
| `--transition-fast` | 100ms ease-default | Hover, press, color changes |
| `--transition-normal` | 200ms ease-default | State transitions, toggles |
| `--transition-slow` | 300ms ease-out | Element entrances/exits |

## Usage Examples

```css
/* Button hover — fast micro-interaction */
.cd-btn {
  transition:
    background-color var(--transition-fast),
    border-color var(--transition-fast),
    color var(--transition-fast);
}

/* Switch toggle — normal state transition */
.cd-switch__thumb {
  transition: transform var(--transition-normal);
}

/* Modal entrance — slow with deceleration */
.cd-dialog__content {
  transition: opacity var(--transition-slow), transform var(--transition-slow);
}

/* Custom combination (when shortcuts don't fit) */
.custom {
  transition: transform var(--duration-slower) var(--ease-out);
}
```

## Reduced Motion

The global reset includes `prefers-reduced-motion: reduce` that sets all animation/transition durations to `0.01ms`. Components with infinite animations (Spinner, Skeleton) should also have explicit fallbacks.

```css
@media (prefers-reduced-motion: reduce) {
  .cd-spinner { animation: none; }
}
```
