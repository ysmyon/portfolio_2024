<template>
  <div id="app">
    <HeaderTop />
    <transition name="routing-fade">
      <router-view/>
    </transition>
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

<style>
.routing-fade-enter-active {
  transition: opacity 1s;
}
.routing-fade-enter, .routing-fade-leave-to {
  opacity: 0;
}
</style>