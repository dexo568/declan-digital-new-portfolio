<script setup>
    import { onMounted } from 'vue'
    import { RouterLink } from 'vue-router'
    import ProjectLabel from '../atoms/project-label.vue';
    import ScrollMagic from 'scrollmagic';
    defineProps({
        project: {
            type: Object,
            required: true
        }
    })

    onMounted(() => {
        setTimeout(() => {
            let controller = new ScrollMagic.Controller();
            window.controller = controller;
            let customDuration = document.getElementById('project-header').offsetHeight - document.getElementById('hero-image').offsetHeight - 243;
            if(window.innerWidth <= 1200){
                customDuration = .01;
            }
            let scene = new ScrollMagic.Scene({triggerElement: "#project-header", duration: customDuration, triggerHook: 0})
                .setPin("#project-header__hero-image")
                .addTo(controller);
            window.addEventListener('resize', function() {
                let newDuration = document.getElementById('project-header').offsetHeight - document.getElementById('hero-image').offsetHeight - 243;
                if(window.innerWidth <= 1200){
                    newDuration = .01;
                }
                scene.duration(newDuration);
            }, true);
        }, 100);
    })

</script>

<template>
    <section id="project-header" class="row project-header">
        <div class="col-xs-12 col-lg-8">
            <RouterLink class="project-header__back-link" to="/">Back to work</RouterLink>
            <h2 class="project-header__client">{{project.client}}</h2>
            <h1 class="project-header__title">{{project.title}}</h1>
            <div class="project-header__tags">
                <ProjectLabel
                    v-for="(tag) in project.tags"
                    :key="tag"
                    :text="tag"
                >
                </ProjectLabel>
            </div>
        </div>
        <div class="col-xs-12 col-lg-4">
            <div id="hero-image" class="project-header__hero-image-wrapper">
                <div class="project-header__image-container">
                    <img v-if="project.spotlight" id="project-header__hero-image" class="project-header__hero-image" :src="project.spotlight.src" :alt="project.spotlight.alt">
                    <img v-else id="project-header__hero-image" class="project-header__hero-image" :src="project.thumbnail.src" :alt="project.thumbnail.alt">
                </div>
            </div>
        </div>
        <div class="col-xs-12 col-lg-7">
            <p class="project-header__description" v-html="project.description">
            </p>
            <a class="project-header__external-link" v-if="project.href" :href="project.href.destination">
                <span>{{project.href.text}}</span>
                <div class="project-header__external-link-icon">
                    <img src="/external-link-icon-1.png" alt="End of an arrow.">
                    <img class="icon-arrow" src="/external-link-icon-2.png" alt="Head of an arrow.">
                </div>
            </a>
        </div>
    </section>
</template>

<style scoped>
    .project-header{
        position: relative;
    }

    .project-header__back-link{
        margin-top: 164px;
        font-family: "WorkSansBold";
        font-size: 16px;
        color: #a7e1ff;
        text-decoration: none;
        display: block;
        padding-left: 17px;
        position: relative;
    }

    .project-header__back-link::before{
        content: "";
        position: absolute;
        background-color: #a7e1ff;
        left: 0px;
        top: calc(50% - 1.5px);
        width: 12px;
        height: 3px;
        transform-origin: 1.5px 1.5px;
        transform: rotate(-45deg);
        border-radius: 1.5px;
    }

    .project-header__back-link::after{
        content: "";
        position: absolute;
        background-color: #a7e1ff;
        left: 0px;
        top: calc(50% - 1.5px);
        width: 12px;
        height: 3px;
        transform-origin: 1.5px 1.5px;
        transform: rotate(45deg);
        border-radius: 1.5px;
    }

    .project-header__client{
        margin: 0;
        margin-top: 73px;
        font-family: "WorkSansBold";
        color: white;
        font-size: 24px;
    }

    .project-header__title{
        margin: 0;
        margin-top: 20px;
        font-family: "WorkSansRegular";
        font-size: 40px;
        line-height: 1.25;
        color: white;
    }

    .project-header__tags{
        margin: 0;
        margin-top: 40px;
    }

    .project-header__tags .project-label{
        margin-right: 10px;
        margin-bottom: 15px;
    }

    .project-header__hero-image-wrapper{
        margin-top: 50px;
        aspect-ratio: 1;
    }

    .project-header__image-container{
        width: 100%;
        height: 100%;
        display: block;
    }

    .project-header__hero-image{
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        border-radius: 20px;
    }

    .project-header__description{
        margin: 0;
        margin-top: 100px;
        font-family: "WorkSansRegular";
        color: white;
        font-size: 16px;
        line-height: 27px;
    }

    .project-header__external-link{
        color: #2b2b33;
        text-decoration: none;
        background-color: white;
        padding: 10px 20px;
        font-family: 'WorkSansBold';
        text-transform: uppercase;
        margin-top: 30px;
        display: block;
        width: max-content;
        border-radius: 12px;
        display: flex;
        flex-direction: row;
        font-size: 18px;
        align-items: center;
    }

    .project-header__external-link span{
        transform: translateY(.66px);
    }

    .project-header__external-link-icon{
        height: 24px;
        width: 24px;
        margin-left: 30px;
        position: relative;
    }

    .project-header__external-link-icon img{
        position: absolute;
        width: 100%;
        height: 100%;
        bottom: 0;
        left: 0;
        transition: bottom .25s, left .25s;
    }

    .project-header__external-link:hover .project-header__external-link-icon .icon-arrow{
        bottom: 3px;
        left: 3px;
    }

    @media (min-width: 1200px){
        .project-header__back-link{
            margin-top: 243px;
            font-size: 22px;
            padding-left: 25px;
        }

        .project-header__back-link::before, .project-header__back-link::after{
            top: calc(50% - 2px);
            width: 16px;
            height: 4px;
            transform-origin: 2px 2px;
            border-radius: 2px;
        }

        .project-header__client{
            margin-top: 126px;
            font-size: 30px;
        }

        .project-header__title{
            font-size: 70px;
            line-height: 1.14;
        }

        .project-header__tags{
            margin: 0;
            margin-top: 70px;
        }

        .project-header__hero-image-wrapper{
            margin-top: 243px;
        }

        .project-header__description{
            font-size: 22px;
            line-height: 34px;
        }
    }
</style>
