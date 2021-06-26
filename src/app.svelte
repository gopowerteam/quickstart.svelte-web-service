<template>
    <main>
        <svelte:component this="{CurrentLayout}" />
    </main>
</template>

<style lang="postcss" global>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>

<script lang="ts">
import { provideStore, useStore } from '@/store'
import { useTheme } from './theme'
import { layouts } from '@/layouts'

// 安装主题
useTheme()
// 安装Store
provideStore()

const { layout } = useStore((store) => store.app)
$: CurrentLayout = layouts[$layout]
</script>
