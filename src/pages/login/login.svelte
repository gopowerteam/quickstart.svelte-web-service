<template>
    <div class="userid">{$userid}</div>
    <Button kind="primary" on:click="{login}" size="field">login</Button>
    <div class=".a.p-10.text-red-400.text-xl">123</div>
</template>

<script lang="ts">
import { useStore } from '@/store'
import { useNavigate } from 'svelte-navigator'
import { Button } from 'carbon-components-svelte'

const navigate = useNavigate()

const { userid, dispatch } = useStore((store) => store.user)

function login() {
    dispatch('login', $userid + '1')
    navigate('/dashboard')
}
</script>
