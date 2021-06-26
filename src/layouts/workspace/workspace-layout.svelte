<template>
    <main class="absolute inset-0 grid grid-cols-2">
        <div class="sidebar relative">
            <Sidebar />
        </div>
        <div class="content relative">
            <Router />
        </div>
    </main>
</template>

<style lang="less">
main {
    grid-template-areas: 'sidebar content';
    grid-template-columns: 80px auto;
}
</style>

<script lang="ts">
import Router from '@/router.svelte'
import Sidebar from './components/sidebar.svelte'
</script>
