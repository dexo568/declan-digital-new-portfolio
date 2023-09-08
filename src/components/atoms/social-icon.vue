<script setup>
    defineProps({
        social: {
            type: Object,
            required: true
        }
    })
</script>

<template>
    <a class="social-icon" :href="social.href" target="_blank">
        <img class="social-icon__image" :src="social.icon.src" :alt="social.icon.alt">
    </a>
</template>

<style scoped>
.social-icon{
    width: 40px;
    display: block;
}

.social-icon__image{
    width: 100%;
}
</style>
