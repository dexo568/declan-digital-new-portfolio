<script setup>
import AboutHeader from '../components/organisms/about-header.vue'
import SiteFooter from '../components/organisms/site-footer.vue'
</script>

<template>
  <main>
    <AboutHeader />
    <SiteFooter
      :socials="[{
        href: 'discord://-/users/134249311780208640',
        icon: {
          src: '/socials/discord.png',
          alt: 'Discord'
        }
      },
      {
        href: 'https://www.linkedin.com/in/declan-mckelvey-hembree-96a65a26b/',
        icon: {
          src: '/socials/linkedin.png',
          alt: 'LinkedIn'
        }
      },
      {
        href: 'https://stackoverflow.com/users/11963779/declan-mckelvey-hembree',
        icon: {
          src: '/socials/stackoverflow.png',
          alt: 'Stackoverflow'
        }
      },
      {
        href: 'https://twitter.com/dexo568',
        icon: {
          src: '/socials/twitter.png',
          alt: 'Twitter'
        }
      }]"
    />
  </main>
</template>

<style>
</style>
