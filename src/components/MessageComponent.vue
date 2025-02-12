<template>
    <p>{{ data.messageFromDaddy }}</p>
</template>

<script setup lang="ts">

interface MessageComponentProps {
    data: {
        messageFromDaddy: string
    }
}

defineProps<MessageComponentProps>()
</script>