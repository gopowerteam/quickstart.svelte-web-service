<template lang="pug">
main
    Router
</template>

<script lang="ts">
import Router from '@/router.svelte'
import { provideStore } from '@/store'
import { useTheme } from './theme'

// 安装主题
useTheme()
// 安装Store
provideStore()
</script>

<style lang="postcss" global>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
