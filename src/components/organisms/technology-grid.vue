<script setup>
    defineProps({
        technologies: {
            type: Array,
            required: true
        },
        body: {
            type: String,
            required: false
        }
    })
</script>

<template>
    <section :class="'technology-grid technology-grid--body-' + (body != null)">
        <div class="row">
            <div class="col-xs-12">
                <h2 id="technology-grid" :class="'technology-grid__header technology-grid__header--body-' + (body != null)" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-anchor="#technology-grid" data-aos-offset="-200">Technologies</h2>
                <p v-if="body" class="technology-grid__subheader" data-aos="fade-up" data-aos-anchor-placement="top-center"  data-aos-anchor="#technology-grid" data-aos-delay="50" data-aos-offset="-200">{{body}}</p>
            </div>
        </div>
        <div class="row technology-grid__row">
            <div class="technology-grid__item col-xs-6 col-md-4 col-lg-2" v-for="(technology, index) in technologies" :key="technology.alt" data-aos="fade-up" data-aos-anchor-placement="top-center"  data-aos-anchor="#technology-grid" :data-aos-delay="index * 50 + 100" data-aos-offset="-200">
                <img class="technology-grid__item-image" :src="technology.src" :alt="technology.alt">
            </div>
        </div>
    </section>
</template>

<style scoped>
    .technology-grid{
        margin-bottom: 140px;
    }

    .technology-grid__header{
        color: white;
        font-family: "WorkSansBold";
        font-size: 34px;
        margin: 0;
        margin-bottom: 20px;
        line-height: normal;
    }

    .technology-grid--body-false{
        margin-bottom: 100px;
    }

    .technology-grid__header--body-false{
        margin-bottom: 50px;
    }

    .technology-grid__subheader{
        color: white;
        font-family: "WorkSansRegular";
        font-size: 16px;
        margin: 0;
        margin-bottom: 50px;
        line-height: 1.69;
    }
    
    .technology-grid__item{
        margin-bottom: 50px;
    }

    .technology-grid__item-image{
        width: 100%;
        object-fit: contain;
        aspect-ratio: 1;
    }

    @media(min-width: 1200px){
        .technology-grid{
            margin-bottom: 200px;
        }

        .technology-grid--body-false{
            margin-bottom: 100px;
        }

        .technology-grid__header{
            font-size: 50px;
            margin-bottom: 30px;
        }

        .technology-grid__header--body-false{
            margin-bottom: 50px;
        }

        .technology-grid__subheader{
            font-size: 22px;
            margin-bottom: 100px;
            line-height: 1.55;
        }

        .technology-grid__item{
            margin-bottom: 60px;
        }
    }
</style>
