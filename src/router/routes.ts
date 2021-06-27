import AppIcon from '@/assets/icons/app.svg?component'

export const routes = [
    {
        path: '/',
        component: () => import('@/pages/login/login.svelte'),
        name: 'login'
    },
    {
        path: '/dashboard',
        component: () => import('@/pages/dashboard/dashboard.svelte'),
        name: 'dashboard',
        meta: {
            menu: {
                title: '仪表盘',
                icon: AppIcon
            }
        }
    },
    {
        path: '/page1',
        component: () => import('@/pages/page1/page1.svelte'),
        name: 'page1',
        meta: {
            menu: {
                title: '页面1',
                icon: AppIcon
            }
        }
    },
    {
        path: '/page2',
        component: () => import('@/pages/page2/page2.svelte'),
        name: 'page2',
        meta: {
            menu: {
                title: '页面2',
                icon: AppIcon
            }
        }
    }
]