<template>
    <article>
        <label :for="data.id"></label>
        <input 
        v-bind="$attrs"
        :id="data.id"
        :type="data.type ? data.type : 'text'"
        :placeholder="data.placeholder"
        >
    </article>
</template>

<script lang="ts" setup>

    interface dataInterface {
        type?: string,
        id: string
        placeholder: string
    }
    interface FieldComponentProps{
        data: dataInterface
    }
    defineProps<FieldComponentProps>()
</script>
