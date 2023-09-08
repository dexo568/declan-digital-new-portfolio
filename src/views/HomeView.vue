<script setup>
import projects from '../assets/projects.js'
import technologies from '../assets/technologies.js'
import SiteHeader from '../components/organisms/site-header.vue'
import ProjectGrid from '../components/organisms/project-grid.vue'
import TechnologyGrid from '../components/organisms/technology-grid.vue'
import SiteFooter from '../components/organisms/site-footer.vue'
</script>

<template>
  <main>
    <SiteHeader />
    <ProjectGrid
      :tags="['Game Development', 'Web Development', 'Experiential', 'Higher Ed']"
      :projects="projects"
      header="My Work"
    />
    <TechnologyGrid
      :technologies="technologies"
      body="Some of the tools I've used professionally. Always interested in learning more."
    />
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