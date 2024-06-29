<script setup>
</script>

<template>
    <section class="row header">
        <div class="col-xs-12">
            <div class="header__header--wrapper">
                <h1 class="header__header">Declan <br class="force-space">McKelvey-<br class="force-space">Hembree</h1>
            </div>
            <p class="header__subheader"><span class="header-fade-up header-fade-up--1">Programmer.</span> <br class="force-space"><span class="header-fade-up header-fade-up--2">Experiential Designer.</span> <br class="force-space"><span class="header-fade-up header-fade-up--3">Game Developer.</span></p>
        </div>
    </section>
</template>

<style scoped>
    .header__header{
        color: white;
        font-size: 55px;
        display: block;
        line-height: 70px;
        margin: 0;
        margin-top: 204px;
        margin-bottom: 21px;
    }


    @media (min-width: 1200px){
        /* typewriter effect */
        .header__header--wrapper{
            width: max-content;
        }

        .header__header{
            white-space: nowrap;
            border-right: 9px solid #a7e1ff;
            overflow: hidden;
            padding-top: 14px;
            padding-bottom: 12px;
            animation: typing 2.5s steps(1, end), blink-caret 1s 2.5s step-end infinite;
            width: 101%;
        }

        .header-fade-up{
            animation: headerFadeUp .55s ease 1;
            animation-fill-mode: forwards;
            opacity: 0;
            display: inline-block;
        }

        .header-fade-up--1{
            animation-delay: 2.5s;
        }
        .header-fade-up--2{
            animation-delay: 2.75s;
        }
        .header-fade-up--3{
            animation-delay: 3s;
        }
    }

    @keyframes typing {
        0.000% { width: 0% }
        4.167% { width: 6% }
        8.333% { width: 10% }
        12.500% { width: 14% }
        16.667% { width: 18.5% }
        20.833% { width: 23% }
        25.000% { width: 28% }
        29.167% { width: 29% }
        33.333% { width: 34.5% }
        37.500% { width: 39% }
        41.667% { width: 43.5% }
        45.833% { width: 48% }
        50.000% { width: 52% }
        54.167% { width: 56.5% }
        58.333% { width: 61% }
        62.500% { width: 65.4% }
        66.667% { width: 68% }
        70.833% { width: 73% }
        75.000% { width: 77% }
        79.167% { width: 82.5% }
        83.333% { width: 87% }
        87.500% { width: 92% }
        91.667% { width: 96% }
        95.833% { width: 101% }
    }

    @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: #a7e1ff }
    }

    @keyframes headerFadeUp {
        0% {
            transform: translateY(50px);
            opacity: 0;
        }
        80% {
            transform: translateY(-10px);
        }
        100% {
            transform: translateY(0px);
            opacity: 1;
        }
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

    @media(max-width: 380px){
        .header__header{
            font-size: 40px;
            line-height: 45px;
        }
    }
</style>
