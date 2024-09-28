<template>
  <div id="app">
    <HeaderTop />
    <HomeView />


    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/> -->
  </div>
</template>

<script>
import HeaderTop from './components/HeaderTop.vue';
import HomeView from './views/HomeView.vue';
import Lenis from 'lenis';


export default {
  name: 'App',
  components: { HeaderTop, HomeView },
  mounted() {
    const lenis = new Lenis()

    // lenis.on('scroll', (e) => {
    //   console.log(e)
    // })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
      }
    }
</script>
