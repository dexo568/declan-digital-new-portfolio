<script setup>
    defineProps({
        project: {
            type: Object,
            required: true
        }
    })
</script>

<template>
    <section id="project-images" class="project-images">
        <div class="row">
            <div :class="'col-xs-12 col-lg-' + (12/project.images.length) + ' project-images__col'" v-for="(image, index) of project.images" :key="index" data-aos="fade-up" data-aos-anchor-placement="top-center" :data-aos-delay="index * 50" data-aos-anchor="#project-images" data-aos-offset="-200">
                <div class="project-images__image-wrapper">
                    <img class="project-images__image" :src="image.src" :alt="image.alt">
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .project-images{
        padding-bottom: 110px;
    }

    .project-images__image-wrapper{
        aspect-ratio: 375/223;
        margin-bottom: 20px;
        border-radius: 20px;
        overflow: hidden;
    }

    .project-images__image{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media (min-width: 1200px){
        .project-images{
            padding-bottom: 140px;
        }
    }
</style>
