<template>
    <span>dashbaord</span>
</template>

<script lang="ts">
import { useStore } from '@/store'
import type { UserEvents, UserState } from '@/store/user.store'
import { useStoreon } from '@storeon/svelte'

const { userid, dispatch } = useStore((store) => store.user)

function login() {
    dispatch('login', $userid + '1')
}
</script>
