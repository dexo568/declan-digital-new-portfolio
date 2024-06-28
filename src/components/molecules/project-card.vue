<script setup>
    import ProjectLabel from '../atoms/project-label.vue';
    import { RouterLink } from 'vue-router'
    defineProps({
        project: {
            type: Object,
            required: true
        },
        gridIndex: {
            type: Number,
            required: false,
            default: 0
        },
        aosBaseDelay: {
            type: Number,
            required: false,
            default: 0
        },
        aosBaseOffset: {
            type: Number,
            required: false,
            default: 0
        },
        boxBackground: {
            type: String,
            required: false,
            default: '#a7e1ff'
        }
    })
</script>

<template>
    <div class="project-card__outer" :style="'--boxBackground: ' + boxBackground">
    <RouterLink class="project-card" :to="'/projects/' + project.id" target="_self" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-anchor="#project-grid" :data-aos-delay="gridIndex * 50 + aosBaseDelay" :data-aos-offset="aosBaseOffset">
        <div class="project-card__image-wrapper">
            <!-- <div class="project-card__labels">
                <ProjectLabel
                    :key="project.tags[0]"
                    :text="project.tags[0]"
                >
                </ProjectLabel>
            </div> -->
            <img class="project-card__image" :src="project.thumbnail.src" :alt="project.thumbnail.alt">
        </div>
        <h4 class="project-card__client">{{project.client}}</h4>
        <h3 class="project-card__title">{{project.title}}</h3>
    </RouterLink>
    </div>
</template>

<style scoped>
    .project-card{
        display: block;
        background-color: white;
        border-radius: 20px;
        padding: 10px;
        text-decoration: none;
        margin-bottom: 30px;
    }

    .project-card__outer{
        transition: transform .25s, box-shadow .25s;
        box-shadow: 0px 0px 0px var(--boxBackground);
        border-radius: 20px;
    }

    .project-card__image-wrapper{
        border-radius: 12px;
        background-color: #2b2b33;
        aspect-ratio: 354/252;
        position: relative;
        margin-bottom: 15px;
        overflow: hidden;
    }

    .project-card__image{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .project-card .project-label{
        position: absolute;
        left: 10px;
        top: 10px;
        z-index: 1;
    }

    .project-card__client{
        color: #0c0c20;
        font-family: "WorkSansBold";
        font-size: 16px;
        margin: 0;
        margin-bottom: 10px;
    }

    .project-card__title{
        color: #0c0c20;
        font-family: "WorkSansRegular";
        font-size: 26px;
        margin: 0;
        margin-bottom: 23px;
        line-height: 1.23;
    }

    .project-card__outer:hover{
        transform: translateY(-20px);
        box-shadow: 0px 20px 0px var(--boxBackground);
        transition-delay: 0s;
    }

    @media(min-width: 1200px){
        .project-card{
            padding: 15px;
            margin-bottom: 50px;
        }

        .project-card .project-label{
            left: 15px;
            top: 15px;
        }

        .project-card__image-wrapper{
            margin-bottom: 20px;
        }

        .project-card__client{
            font-size: 22px;
        }

        .project-card__title{
            font-size: 40px;
            margin: 0;
            margin-bottom: 37px;
            line-height: normal;
        }
    }
</style>
