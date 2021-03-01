import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, './src') },
      { find: "~sass", replacement: path.resolve(__dirname, './src/assets/sass') },
      { find: "~assets", replacement: path.resolve(__dirname, './src/assets') }
    ],
    extensions: ['.js', '.vue', '.json', '.scss', '.css']
  }
})
