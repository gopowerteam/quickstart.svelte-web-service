import Router from 'svelte-easyroute'
import { routes } from './routes'
import { store } from '@/store'
import { boot } from '@/bootstrap/boot'
export const router = new Router({
    mode: "history",
    omitTrailingSlash: true,
    routes
})

/**
 * 系统初始化
 */
router.beforeEach(async (to, from, next) => {
    const { ready } = store.get()

    if (!ready) {
        await boot()
        store.dispatch('ready')
    }

    next()
})

export default router