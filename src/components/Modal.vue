<template>
    <div class="modal" :class="{'is-active': open}">
        <div class="modal-background" @click="open==$emit('close')"></div>
        <div class="modal-content">
            <slot>  </slot>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="open=$emit('close')"></button>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps(['open']);
</script>