<template>
    <PageContainer title="仪表盘" layout="workspace">
        <svelte:fragment slot="action">
            <Button size="small">操作一</Button>
            <Button kind="secondary" size="small">操作二</Button>
        </svelte:fragment>
        {#each contents as i}
            <div>asdasd</div>
            <div>asdasd</div>
            <div>asdasd</div>
        {/each}
    </PageContainer>
</template>

<script lang="ts">
import { Button } from 'carbon-components-svelte'
import PageContainer from '@/shared/components/page-container.svelte'

const contents = Array.from(Array(100), () => 'test')
</script>
