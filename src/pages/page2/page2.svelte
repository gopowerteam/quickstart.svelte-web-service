<template>
    <PageContainer title="页面2" layout="workspace">
        <Button on:click="{onModal}">modal</Button>
    </PageContainer>
</template>

<script>
import PageContainer from '@/shared/components/page-container.svelte'
import { Button } from 'carbon-components-svelte'
import { useModal } from '@gopowerteam/svelte-modal'
import ModalTest from './modal-test.svelte'

const modal = useModal()

function onModal() {
    modal
        .open({
            title: '弹窗标题',
            component: ModalTest,
            props: {
                msg: '123'
            }
        })
        .then((a) => {
            console.log('close', a)
        })
}
</script>
