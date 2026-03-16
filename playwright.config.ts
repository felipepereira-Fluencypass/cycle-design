import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests/visual',
  outputDir: './tests/visual/results',
  snapshotPathTemplate: '{testDir}/snapshots/{arg}{ext}',

  fullyParallel: true,
  retries: 0,
  workers: 1,

  reporter: 'html',

  use: {
    baseURL: 'http://localhost:5173',
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
})
