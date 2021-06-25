<template lang="pug">
Router
    Route(path='/')
        Login
    Route(path='/dashboard')
        Dashboard
</template>

<script lang="ts">
import { Router, Route } from 'svelte-navigator'

import Login from '@/pages/login/login.svelte'
import Dashboard from '@/pages/dashboard/dashboard.svelte'
</script>
