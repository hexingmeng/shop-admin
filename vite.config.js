import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 引入WindiCSS
import WindiCSS from 'vite-plugin-windicss'
// 引入path
import path from "path"
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "~": path.resolve(__dirname, 'src')
    }
  },
  plugins: [vue(), WindiCSS()],
  // Network配置
  server: {
    port: "8085",
    host: "0.0.0.0",
    open: true
  }
})
