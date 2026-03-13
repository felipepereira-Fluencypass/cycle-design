import { defineConfig } from 'tsup'

const shared = {
  format: ['esm', 'cjs'] as const,
  dts: true,
  sourcemap: true,
  external: ['react', 'react-dom'],
  esbuildOptions(options: Record<string, unknown>) {
    options.jsx = 'automatic'
  },
}

export default defineConfig([
  {
    ...shared,
    entry: { index: 'src/index.ts' },
    clean: true,
  },
  {
    ...shared,
    entry: { icons: 'src/icons.ts' },
    clean: false,
  },
])
