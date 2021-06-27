import Router from 'svelte-easyroute'
import { routes } from './routes'

export const router = new Router({
    mode: "history",
    omitTrailingSlash: true,
    routes
})

export default router