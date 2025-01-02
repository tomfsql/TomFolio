import { defineConfig } from '@vue/cli-service'
export default defineConfig({
  transpileDependencies: true,
  publicPath: process.env.VUE_BASE_URL,
})
