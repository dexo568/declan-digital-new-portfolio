<script setup>
    import SocialIcon from '../atoms/social-icon.vue';
    defineProps({
        socials: {
            type: Array,
            required: true
        },        
    })
</script>

<template>
    <footer class="footer">
        <div class="footer__inner row">
            <div class="footer__left col-xs-12 col-md-8">
                <h2 class="footer__header">Get in touch</h2>
                <p class="footer__subheader">Let's make something together!</p>
            </div>
            <div class="footer__right col-xs-12 col-md-4">
                <div class="footer__phone">Phone<a href="tel:3106501436">310-650-1436</a></div>
                <div class="footer__email">Email<a href="mailto:dmckelveyhembree@gmail.com">dmckelveyhembree@gmail.com</a></div>
                <div class="footer__socials">
                    <div class="footer-socials__item">
                        <SocialIcon
                            v-for="social in socials"
                            :social="social"
                            :key="social.icon.alt"
                        >
                        </SocialIcon>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
    .footer{
        background-color: #a7e1ff;
        color: #0c0c20;
    }

    .footer__header{
        margin: 0;
        margin-top: 70px;
        margin-bottom: 20px;
        font-family: "WorkSansBold";
        font-size: 34px;
    }

    .footer__subheader{
        margin: 0;
        margin-bottom: 20px;
        font-family: "WorkSansRegular";
        font-size: 16px;
        line-height: 1.69;
    }

    .footer__email, .footer__phone{
        font-family: "WorkSansBold";
        font-size: 16px;
        margin-bottom: 10px;
    }

    .footer__email a, .footer__phone a{
        font-family: "WorkSansRegular";
        color: #0c0c20;
        text-decoration: none;
        margin-left: 20px;
    }

    .footer-socials__item{
        display: flex;
        flex-direction: row;
        margin-top: 20px;
        margin-bottom: 80px;
    }

    .footer-socials__item a{
        margin-right: 20px;
    }

    @media(min-width: 1024px){
        .footer__header{
            margin-top: 80px;
            font-size: 50px;
        }

        .footer__subheader{
            margin-bottom: 80px;
            font-family: "WorkSansRegular";
            font-size: 22px;
            line-height: 1.55;
        }

        .footer__phone{
            margin-top: 103px;
        }
    }
</style>
