<template>
  <div id="app">
    <HeaderView />
    <VisualView />
    <ProjectScrollView />

    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/> -->
  </div>
</template>

<script>
import HeaderView from './views/HeaderView.vue';
import VisualView from './views/VisualView.vue';
import ProjectScrollView from './views/ProjectScrollView.vue';

export default {
  name: 'App',
  components: { HeaderView, VisualView, ProjectScrollView }
}
</script>
