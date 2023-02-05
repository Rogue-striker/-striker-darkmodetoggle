import { fileURLToPath, URL } from 'node:url'
import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build : {
    lib : {
      entry : path.resolve(__dirname, 'src/components/index.js'),
      name : '@striker/DarkModeToggle',
      fileName : (format)=>`darkmodetoggle.${format}.js`,

    },
    rollupOptions : {
      external : ['vue'],
      output : {
        globals : {
          vue : 'Vue'
        },
      },
    }
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
