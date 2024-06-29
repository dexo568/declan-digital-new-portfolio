<script setup>
    defineProps({
        project: {
            type: Object,
            required: true
        }
    })
</script>

<template>
    <section id="project-stats" class="project-stats">
        <div class="row">
            <div class="col-xs-12 col-lg-4 project-stats__col" v-for="(stat, index) of project.stats" :key="index" data-aos="fade-up" data-aos-anchor-placement="top-center"  :data-aos-delay="index * 50" data-aos-anchor="#project-stats" data-aos-offset="-200">
                <figure class="project-stats__figure">
                    <p :class="'project-stats__stat-header project-stats__stat-header--' + (stat.header.length < 6 ? 'large' : 'small' )">{{stat.header}}</p>
                    <figcaption class="project-stats__subheader">{{stat.subheader}}</figcaption>
                </figure>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .project-stats{
        padding-top: 50px;
        padding-bottom: 80px;
    }

    .project-stats__figure{
        padding-top: 50px;
        padding-bottom: 50px;
    }

    .project-stats__stat-header{
        font-size: 100px;
        line-height: 100px;
        margin: 0;
        color: white;
    }

    .project-stats__stat-header--small{
        font-size: 50px;
        line-height: 55px;
    }

    .project-stats__subheader{
        font-size: 24px;
        font-family: "WorkSansBold";
        color: #a7e1ff;
        margin: 0;
        margin-top: 20px;
    }

    .project-stats__col{
        position: relative;
    }
    
    .project-stats__col:not(:first-child):before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: white;
    }

    @media(max-width: 500px){
        .project-stats__col:not(:first-child):before{
            left: 20px;
            width: calc(100% - 40px);
        }
    }

    @media (min-width: 1200px) {
        .project-stats{
            padding-top: 100px;
            padding-bottom: 100px;
        }

        .project-stats__subheader{
            font-size: 30px;
            margin-top: 14px;
        }

        .project-stats__col:not(:first-child):before{
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 1px;
            height: 100%;
            background-color: white;
        }

        .project-stats__col:not(:first-child) .project-stats__figure{
            width: fit-content;
            margin-left: 70px;
        }

        .project-stats__figure{
            padding-top: 19px;
            padding-bottom: 27px;
        }
    }

    @media(max-width: 380px){
        .project-stats__stat-header{
            font-size: 80px;
            line-height: 80px;
        }

        .project-stats__stat-header--small{
            font-size: 40px;
            line-height: 45px;
        }

    }
</style>
