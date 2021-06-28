<template>
    <EasyrouteProvider router="{router}">
        <svelte:component this="{CurrentLayout}" />
    </EasyrouteProvider>
</template>

<script lang="ts">
import { EasyrouteProvider } from 'svelte-easyroute'
import { provideStore, useStore } from '@/store'
import { useTheme } from './theme'
import { layouts } from '@/layouts'

import router from '@/router'

// 安装主题
useTheme()
// 安装Store
provideStore()

const { layout } = useStore((store) => store.app)
$: CurrentLayout = layouts[$layout]
</script>
