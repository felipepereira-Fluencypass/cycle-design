import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@tokens': path.resolve(__dirname, '../tokens'),
      '@icons': path.resolve(__dirname, '../components/icons'),
      '@components': path.resolve(__dirname, '../components'),
      '@radix-ui/react-accordion': path.resolve(__dirname, '../node_modules/@radix-ui/react-accordion'),
      '@radix-ui/react-dialog': path.resolve(__dirname, '../node_modules/@radix-ui/react-dialog'),
      '@radix-ui/react-dropdown-menu': path.resolve(__dirname, '../node_modules/@radix-ui/react-dropdown-menu'),
      '@radix-ui/react-popover': path.resolve(__dirname, '../node_modules/@radix-ui/react-popover'),
      '@radix-ui/react-tabs': path.resolve(__dirname, '../node_modules/@radix-ui/react-tabs'),
      '@radix-ui/react-toast': path.resolve(__dirname, '../node_modules/@radix-ui/react-toast'),
      '@radix-ui/react-tooltip': path.resolve(__dirname, '../node_modules/@radix-ui/react-tooltip'),
    },
  },
  server: {
    fs: {
      allow: [path.resolve(__dirname, '..')],
    },
  },
  optimizeDeps: {
    include: [
      '@radix-ui/react-accordion',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-popover',
      '@radix-ui/react-tabs',
      '@radix-ui/react-toast',
      '@radix-ui/react-tooltip',
    ],
  },
})
