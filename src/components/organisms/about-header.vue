<script setup>
</script>

<template>
    <section class="about row header">
        <div class="col-xs-12 col-lg-8">
            <h1 class="about__header">Hey there!</h1>
            <p class="about__subheader">I'm Declan, a jack-of-all-trades developer and public transit enthusiast. Most of my professional life has been in the agency world, so I've gotten the chance to work on a wide variety of projects in an array of languages. My primary focus areas are web development, promotional video games, and experiential activations. I've collaborated with some very cool clients, like Comedy Central, Twitch, and T-Mobile, just to name a few, and I'm always excited about new clients and new projects.</p>
            <img src="meCrop.png" class="about__image">
        </div>
    </section>
</template>

<style scoped>
    .about{
        position: relative;
    }

    .about__header{
        font-family: "WorkSansRegular";
        color: white;
        font-size: 40px;
        display: block;
        line-height: 50px;
        margin: 0;
        margin-top: 144px;
        margin-bottom: 30px;
    }

    .about__subheader{
        font-family: "WorkSansRegular";
        color: white;
        font-size: 16px;
        line-height: 27px;
        margin: 0;
        margin-bottom: 50px;
    }

    .force-space{
        display: none;
    }

    .about__image{
        width: 40vw;
        max-width: 300px;
        display: block;
        margin-left: 50%;
    }

    @media(min-width: 1200px){
        .about__header{
            font-size: 70px;
            line-height: 80px;
            margin-top: 240px;
        }

        .about__subheader{
            color: white;
            font-size: 22px;
            line-height: 34px;
            margin-bottom: 140px;
        }

        .about__image{
            position: absolute;
            right: 0;
            bottom: 0;
            width: 20vw;
            max-width: 300px;
        }
    }
</style>
