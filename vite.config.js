import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svelte()],
    resolve: {
        alias: {
            '@': resolve(process.cwd(), 'src')
        }
    },
    optimizeDeps: {
        include: ['clipboard-copy'],
        exclude: ['@storeon/svelte', 'svelte-navigator']
    }
})
