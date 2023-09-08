<script setup>
</script>

<template>
    <section class="row header">
        <div class="col-xs-12">
            <h1 class="header__header">Declan <br class="force-space">McKelvey-<br class="force-space">Hembree</h1>
            <p class="header__subheader">Developer. Engineer. Game Designer.</p>
        </div>
    </section>
</template>

<style scoped>
    .header__header{
        color: white;
        font-size: 55px;
        display: block;
        line-height: normal;
        margin: 0;
        margin-top: 204px;
        margin-bottom: 21px;
    }

    .header__subheader{
        font-family: "WorkSansRegular";
        color: white;
        font-size: 26px;
        line-height: 1.23;
        margin: 0;
        margin-bottom: 90px;
    }

    .force-space{
        display: none;
    }

    @media(min-width: 1200px){
        .header__header{
            font-size: 60px;
            margin-top: 320px;
            margin-bottom: 30px;
        }

        .header__subheader{
            color: white;
            font-size: 40px;
            line-height: normal;
            margin-bottom: 200px;
        }
    }

    @media(min-width: 1600px){
        .header__header{
            font-size: 90px;
        }
    }

    @media(max-width: 1200px){
        .force-space{
            display: block;
        }
    }
</style>
