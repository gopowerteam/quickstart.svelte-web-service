<template lang="pug">
main
    Router
</template>

<script lang="ts">
import Router from '@/router.svelte'
import { provideStore } from '@/store'

// 注入Store
provideStore()
</script>

<style lang="less"></style>
