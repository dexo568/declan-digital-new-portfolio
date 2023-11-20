<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
onMounted(() => {
  AOS.init()
})
</script>

<template>
  <header>
    <div class="row">
      <div class="col-xs-12">
        <nav>
          <RouterLink to="/">
            <div class="nav-logo">DMH</div>
          </RouterLink>
          <div>
            <RouterLink to="/about">About</RouterLink>
            <a href="/DeclanMckelveyHembreeSoftwareEngineer.pdf">Resume</a>
          </div>
        </nav>
      </div>
    </div>
  </header>
  
  <RouterView />
</template>

<style scoped>
  header{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
  }

  nav{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;
  }

  nav a{
    text-decoration: none;
  }

  nav > div > a{
    font-family: "WorkSansBold";
    font-size: 16px;
    margin-left: 30px;
    color: #a7e1ff;
    display: inline-block;
    position: relative;
  }

  nav > div > a:after{
    content: "";
    position: absolute;
    bottom: 0;
    width: 0%;
    height: 2px;
    background-color: #a7e1ff;
    left: 0;
    transition: width .25s;
  }

  nav > div > a:hover:after{
    width: 100%;
  }

  .nav-logo{
    color: #a7e1ff;
    font-size: 40px;
    text-decoration: none;
    line-height: 1;
  }

  @media(min-width: 1200px){
    nav{
      margin-top: 20px;
    }
    .nav-logo{
      font-size: 70px;
    }

    nav > div > a{
      font-size: 22px;
      margin-left: 50px;
    }
  }
</style>
