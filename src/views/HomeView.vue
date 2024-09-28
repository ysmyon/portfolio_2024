<template>
    <div>
        <MainVisual />
        <ProjectScroll />
        <EtcProject />
        <BottomProfile />
    </div>
</template>
<script>
import MainVisual from '@/components/MainVisual.vue';
import ProjectScroll from '@/components/ProjectScroll.vue';
import EtcProject from '@/components/EtcProject.vue';
import BottomProfile from '@/components/BottomProfile.vue';

export default {
    components: { MainVisual, ProjectScroll, EtcProject,BottomProfile },
    data() {
        return {
            sampleData: ''
        }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>
