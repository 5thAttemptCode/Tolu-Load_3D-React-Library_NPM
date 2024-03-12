import { defineConfig } from 'vite'
import { resolve, relative, extname } from 'path'
import react from '@vitejs/plugin-react'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import { fileURLToPath } from 'node:url'
import { glob } from 'glob'


export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.jsx'),
      formats: ['es']
    },
    copyPublicDir: false,
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      input: Object.fromEntries(
        glob.sync('lib/**/*.{js,jsx}').map(file => [
          relative(
            'lib',
            file.slice(0, file.length - extname(file).length)
          ),
          fileURLToPath(new URL(file, import.meta.url))
        ])
      ),
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js'
      }
    }
  }
})
