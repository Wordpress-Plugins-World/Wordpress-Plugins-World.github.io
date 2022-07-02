import { fileURLToPath, URL } from 'url'
// import path from "path";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/wordpress-login-defender-plugin/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: '../',
    // rollupOptions: {
    //   input: {
    //     index: path.resolve(__dirname, 'index.html'),
    //     // '404': path.resolve(__dirname, '404.html')
    //   }
    // },
  }
})
