import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueDevTools(),
    AutoImport({
      imports: [
        'vue',
      ],
      vueTemplate: true,
    }),
  ],
})
