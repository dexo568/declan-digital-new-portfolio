<script setup>
import projects from '../assets/projects.js'
import technologies from '../assets/technologies.js'
import ProjectHeader from '../components/organisms/project-header.vue'
import ProjectStats from '../components/organisms/project-stats.vue'
import TechnologyGrid from '../components/organisms/technology-grid.vue'
import ProjectImages from '../components/organisms/project-images.vue'
import ProjectGrid from '../components/organisms/project-grid.vue'
import SiteFooter from '../components/organisms/site-footer.vue'

const props = defineProps({
    projectId: {
        type: Number,
        required: true
    }
})

const project = projects[props.projectId];
</script>

<template>
  <main>
    <ProjectHeader :project="project" />
    <ProjectStats :project="project" />
    <TechnologyGrid
      :technologies="technologies.filter((technology) => project.technologies.indexOf(technology.slug) > -1)"
    />
    <ProjectImages :project="project" />
    <ProjectGrid
      :projects="projects.filter((curProject) => curProject.tags.indexOf(project.tags[0]) > -1 && curProject.id != project.id).slice(0, 3)"
      header="Similar Projects"
      :solidBg="true"
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