<template>
    <PageContainer layout="workspace">
        <span>dashbaord</span>
    </PageContainer>
</template>

<script lang="ts">
import { useStore } from '@/store'
import PageContainer from '@/shared/components/page-container.svelte'

const { userid, dispatch } = useStore((store) => store.user)
</script>
