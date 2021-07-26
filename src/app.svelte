<template>
    <EasyrouteProvider router="{router}">
        <ModalProvider>
            <svelte:component this="{CurrentLayout}" />
        </ModalProvider>
    </EasyrouteProvider>

    <Theme theme="white" tokens="{theme}" />
</template>

<script lang="ts">
import { Theme } from 'carbon-components-svelte'
import { EasyrouteProvider } from '@easyroute/svelte'
import { provideStore, useStore } from '@/store'
import { useTheme } from './theme'
import { layouts } from '@/layouts'

import router from '@/router'
import ModalProvider from '@/shared/components/modal-provider.svelte'

// 安装Store
provideStore()

const theme = useTheme()

const { layout } = useStore((store) => store.app)
$: CurrentLayout = layouts[$layout]
</script>
