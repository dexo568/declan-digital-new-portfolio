<script setup>
    import { reactive } from 'vue';
    import ProjectCard from '../molecules/project-card.vue';
    import ProjectLabel from '../atoms/project-label.vue';
    defineProps({
        projects: {
            type: Array,
            required: true
        },
        tags: {
            type: Array,
            required: false
        },
        header: {
            type: String,
            required: true
        },
        solidBg: {
            type: Boolean,
            required: false,
            default: false
        }
    })
    let activeTags = reactive([]);
</script>

<template>
    <section :class="'project-grid' + (solidBg ? ' project-grid--solid-bg' : '')">
        <div class="row">
            <div class="col-xs-12">
                <h2 id="project-grid" class="project-grid__header" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-anchor="#project-grid" :data-aos-offset="solidBg ? -200 : 0">{{header}}</h2>
                <div class="project-grid__tags" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-anchor="#project-grid" :data-aos-delay="50">
                        <ProjectLabel
                            v-for="(tag) in tags"
                            :key="tag"
                            :text="tag"
                            :forceHover="activeTags.indexOf(tag) > -1"
                            @click="activeTags.indexOf(tag) < 0 ? activeTags.push(tag) : activeTags.splice(activeTags.indexOf(tag), 1)"
                        >
                        </ProjectLabel>
                </div>
            </div>
        </div>
        <div class="row project-grid__row">
            <div class="project-grid__item col-xs-12 col-md-6 col-lg-4" v-for="(project, index) in projects.filter((project) => activeTags.length == 0 || activeTags.reduce((acc, cur) => acc && project.tags.indexOf(cur) > -1, true))" :key="project.title">
                <ProjectCard
                    :project="project"
                    :gridIndex="index"
                    :aosBaseDelay="100"
                    :aosBaseOffset="solidBg ? -200 : 0"
                >
                </ProjectCard>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .project-grid{
        margin-bottom: 110px;
    }

    .project-grid__header{
        color: white;
        font-family: "WorkSansBold";
        font-size: 34px;
        margin: 0;
        margin-bottom: 20px;
        line-height: normal;
    }

    .project-grid__tags .project-label{
        margin-right: 10px;
        margin-bottom: 15px;
    }

    .project-grid__tags{
        margin-bottom: 35px;
    }

    .project-grid--solid-bg{
        background-color: #0c0c20;
        padding-top: 130px;
        border-top: 1px solid white;
        padding-bottom: 100px;
        margin-bottom: 0;
    }

    @media(min-width: 1200px){
        .project-grid__header{
            font-size: 50px;
            margin-bottom: 40px;
        }

        .project-grid__tags .project-label{
            margin-right: 20px;
            margin-bottom: 30px;
        }

        .project-grid__tags{
            margin-bottom: 40px;
        }

        .project-grid{
            margin-bottom: 150px;
        }

        .project-grid--solid-bg{
            padding-top: 150px;
            border-top: 1px solid white;
            padding-bottom: 110px;
            margin-bottom: 0;
        }
    }
</style>
