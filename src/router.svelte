<template lang="pug">
Router
    Route(component='{ Login }', path='/')
</template>

<script lang="ts">
import { Router, Route } from 'svelte-navigator'
import Login from '@/pages/login/login.svelte'
</script>
