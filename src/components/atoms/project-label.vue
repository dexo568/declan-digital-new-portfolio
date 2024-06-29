<script setup>
    defineProps({
        text: {
            type: String,
            required: true
        },
        forceHover: {
            type: Boolean,
            required: false,
            default: false
        },
        isClickable: {
            type: Boolean,
            required: false,
            default: true
        }
    })
</script>

<template>
    <button type="button" :class="(forceHover ? 'project-label project-label--active' : 'project-label') + (isClickable ? ' is-clickable' : '')">
        {{text}}
    </button>
</template>

<style scoped>
    .project-label{
        font-family: "BungeeRegular";
        padding: 10px 10px 11px 10px;
        color: #a7e1ff;
        border: 1px solid #a7e1ff;
        border-radius: 8px;
        font-size: 14px;
        text-transform: uppercase;
        display: inline-block;
        background-color: #0c0c20;
        transition: color .25s, background-color .25s;
    }

    .project-label.is-clickable{
        cursor: pointer;
    }

    .project-label:hover, .project-label--active{
        color: #0c0c20;
        background-color: #a7e1ff;
    }

    @media(min-width: 1200px){
        .project-label{
            padding: 12px 15px 13px 15px;
            font-size: 16px;
        }
    }
</style>
