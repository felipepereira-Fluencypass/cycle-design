import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// Files outside docs/ (e.g. ../src/components/ui/button.tsx) import
// packages like @radix-ui/react-slot, clsx, etc. Node resolution walks
// up from their directory and never finds docs/node_modules.
// This plugin re-resolves bare module imports from parent source files
// as if they came from within docs/, so docs/node_modules is found.
function resolveParentImports(): Plugin {
  const docsDir = path.resolve(__dirname)
  const fakePath = path.join(docsDir, 'src', '_resolve_.ts')
  return {
    name: 'resolve-parent-imports',
    enforce: 'pre',
    async resolveId(source, importer, options) {
      if (
        importer &&
        !source.startsWith('.') &&
        !source.startsWith('/') &&
        !source.startsWith('\0') &&
        !importer.includes('node_modules') &&
        !importer.startsWith(docsDir)
      ) {
        const result = await this.resolve(source, fakePath, {
          ...options,
          skipSelf: true,
        })
        return result
      }
    },
  }
}

export default defineConfig({
  plugins: [resolveParentImports(), react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@tokens': path.resolve(__dirname, '../tokens'),
      '@icons': path.resolve(__dirname, '../components/icons'),
      '@components': path.resolve(__dirname, '../components'),
      '@ui': path.resolve(__dirname, '../src/components/ui'),
      '@lib': path.resolve(__dirname, '../src/lib'),
    },
  },
  server: {
    fs: {
      allow: [path.resolve(__dirname, '..')],
    },
  },
})
