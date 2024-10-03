<template>
  <div id="app">
    <HeaderTop />
    <router-view/>
    <BottomBrand />
  </div>
</template>

<script>
import HeaderTop from './components/HeaderTop.vue';
import BottomBrand from './components/BottomBrand.vue';
import Lenis from 'lenis';


export default {
  name: 'App',
  components: { HeaderTop, BottomBrand },
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

