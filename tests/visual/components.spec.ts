import { test, expect } from '@playwright/test'

/**
 * Visual regression tests for Cycle Design components.
 *
 * Prerequisites:
 *   1. Start the docs dev server: cd docs && npm run dev
 *   2. Run: npx playwright test
 *
 * To update snapshots: npx playwright test --update-snapshots
 */

const components = [
  'button',
  'input',
  'select',
  'checkbox',
  'radio-group',
  'switch',
  'textarea',
  'card',
  'badge',
  'avatar',
  'alert',
  'separator',
  'skeleton',
  'spinner',
  'progress',
  'dialog',
  'toast',
  'dropdown-menu',
  'tooltip',
  'popover',
  'tabs',
  'sheet',
  'table',
  'pagination',
  'breadcrumb',
  'accordion',
]

for (const component of components) {
  test(`${component} — visual snapshot`, async ({ page }) => {
    await page.goto(`/components/${component}`)
    await page.waitForLoadState('networkidle')

    // Wait for any animations to settle
    await page.waitForTimeout(500)

    await expect(page).toHaveScreenshot(`${component}.png`, {
      fullPage: true,
      maxDiffPixelRatio: 0.01,
    })
  })
}

// Dark mode variants for key components
const darkModeComponents = ['button', 'card', 'alert', 'badge', 'table']

for (const component of darkModeComponents) {
  test(`${component} — dark mode snapshot`, async ({ page }) => {
    await page.goto(`/components/${component}`)
    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'dark')
    })
    await page.waitForTimeout(500)

    await expect(page).toHaveScreenshot(`${component}-dark.png`, {
      fullPage: true,
      maxDiffPixelRatio: 0.01,
    })
  })
}
