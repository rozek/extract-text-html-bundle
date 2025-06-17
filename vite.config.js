import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/extract-text-html-bundle.ts'),
      name: 'extract-text-html-bundle',
      fileName: 'extract-text-html-bundle',
      formats: ['es']
    },
    rollupOptions: { // make sure to bundle all dependencies
      external: [],
    },
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    // ensure the bundle works in browsers
    target: 'es2020',
    minify: 'terser'
  }
})