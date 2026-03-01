// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import vercel from '@astrojs/vercel'
import { fileURLToPath } from 'node:url'

const isPreviewDeploy = process.env.SANITY_PREVIEW_DEPLOY === 'true'

// https://astro.build/config
export default defineConfig({
  output: isPreviewDeploy ? 'server' : 'static',
  adapter: vercel(),
  prefetch: true,
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  },
})
