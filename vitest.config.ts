import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./tests/setup.ts'],
    css: true,
    include: ['components/**/*.test.{ts,tsx}', 'tests/**/*.test.{ts,tsx}'],
  },
})
