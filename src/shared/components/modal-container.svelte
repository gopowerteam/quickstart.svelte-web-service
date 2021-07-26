<template>
    <div class="modal-container">
        <div
            class="modal-wrapper"
            on:click|self="{() => maskClose && onCloseModal()}">
            <div class="modal-content" style="{contentStyle}">
                {#if header}
                    <div class="modal-header">
                        <div class="title">{title}</div>
                    </div>
                {/if}
                <div class="modal-body">
                    <svelte:component this="{component}" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less">
.modal-wrapper {
    z-index: 10000;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
    overflow: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    .modal-content {
        background: rgb(255, 255, 255);
        padding: 10px;
        border-radius: 5px;

        .modal-header {
            display: flex;
            justify-content: space-between;

            .title {
                font-weight: 600;
                font-size: 16px;
                padding: 10px;
            }

            .close-button {
                height: 20px;
                cursor: pointer;
            }
        }

        .modal-body {
            padding: 10px;
        }
    }
}
</style>

<script lang="ts">
import { getContext, SvelteComponent } from 'svelte'

export let component: SvelteComponent
export let params: any
export let width: number = 800
export let minWidth: number = 500
export let title: string
export let header = true
export let id: string
export let closable = true
export let maskClose = true

const modal = getContext('modal') as any

function onCloseModal() {
    modal.close(id)
}

$: contentStyle = width ? `width:${width}px` : `min-width:${minWidth}px`
</script>
