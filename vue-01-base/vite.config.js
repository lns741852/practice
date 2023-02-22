import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue' // 如剛開始時建造專案選擇vue，才會有此行

export default defineConfig({
  plugins: [
    vue() 
  ],
  server: {
    proxy: {

      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')   //將/api/取代為URL
      },
      // 字串寫法
      // '/foo': 'http://localhost:4567',
      // 選項寫法

      // 正則寫法
      // '^/fallback/.*': {
      //   target: 'http://jsonplaceholder.typicode.com',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/fallback/, '')
      // },
    }
  },
  resolve: {
    //路徑別名
    alias: {
      '@': resolve(__dirname, 'src'),
      '/images':'src/assets/images',
    },
  },
  css: {
    preprocessorOptions: {
        //全局引入CSS
        scss: {
            additionalData: `@import "@/styles/base.scss";`
        }
    }
  }
})