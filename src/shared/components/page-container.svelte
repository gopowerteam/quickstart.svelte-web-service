<template>
    555
    <slot />
</template>

<script lang="ts">
import { useStore } from '@/store'

export let layout: 'default' | 'workspace' = 'default'
const { dispatch } = useStore((store) => store.app)

dispatch('updateLayout', layout)
</script>
