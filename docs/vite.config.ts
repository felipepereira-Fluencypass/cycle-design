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
