# Cycle Design — Shadow Tokens

7 shadow levels for progressive elevation. All shadows use `#0A0D12` (gray-light-950) as base color with varying opacities and multiple layers.

## Shadow Scale

| Token | Layers | Usage |
|-------|--------|-------|
| `--shadow-xs` | 1 layer | Subtle, almost imperceptible. Badges, tags |
| `--shadow-sm` | 2 layers | Light elevation. Cards, inputs |
| `--shadow-md` | 2 layers | Medium elevation. Dropdowns |
| `--shadow-lg` | 3 layers | High elevation. Popovers |
| `--shadow-xl` | 3 layers | Strong emphasis. Large modals |
| `--shadow-2xl` | 2 layers | Maximum emphasis. Overlays |
| `--shadow-3xl` | 2 layers | Ultra emphasis. Floating elements |

## Values

```css
--shadow-xs:  0px 1px 2px 0px rgba(10, 13, 18, 0.05);

--shadow-sm:  0px 1px 2px -1px rgba(0, 0, 0, 0.1),
              0px 1px 3px 0px rgba(10, 13, 18, 0.1);

--shadow-md:  0px 2px 4px -2px rgba(0, 0, 0, 0.06),
              0px 4px 6px -1px rgba(10, 13, 18, 0.1);

--shadow-lg:  0px 2px 2px -1px rgba(0, 0, 0, 0.04),
              0px 4px 6px -2px rgba(10, 13, 18, 0.03),
              0px 12px 16px -4px rgba(10, 13, 18, 0.08);

--shadow-xl:  0px 3px 3px -1.5px rgba(0, 0, 0, 0.04),
              0px 8px 8px -4px rgba(10, 13, 18, 0.03),
              0px 20px 24px -4px rgba(10, 13, 18, 0.08);

--shadow-2xl: 0px 4px 4px -2px rgba(10, 13, 18, 0.04),
              0px 24px 48px -12px rgba(10, 13, 18, 0.18);

--shadow-3xl: 0px 5px 5px -2.5px rgba(10, 13, 18, 0.04),
              0px 32px 64px -12px rgba(10, 13, 18, 0.14);
```

## Usage Examples

```css
/* Input field */
.input { box-shadow: var(--shadow-xs); }
.input:focus { box-shadow: var(--shadow-sm); }

/* Card */
.card { box-shadow: var(--shadow-sm); }
.card:hover { box-shadow: var(--shadow-md); }

/* Dropdown menu */
.dropdown { box-shadow: var(--shadow-md); }

/* Modal */
.modal { box-shadow: var(--shadow-xl); }

/* Full-screen overlay */
.overlay { box-shadow: var(--shadow-2xl); }
```
