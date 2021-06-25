<template>
    <Router>
        <Route path="/">
            <Login />
        </Route>
        <Route path="/dashboard">
            <Dashboard />
        </Route>
    </Router>
</template>

<script lang="ts">
import { Router, Route } from 'svelte-navigator'

import Login from '@/pages/login/login.svelte'
import Dashboard from '@/pages/dashboard/dashboard.svelte'
</script>
