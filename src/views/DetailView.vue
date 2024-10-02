<template>
    <div class="detail_wrap">
        <ProjectDetail />
    </div>
</template>
<script>
import ProjectDetail from '@/components/ProjectDetail.vue';

export default {
    components: { ProjectDetail },
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

<style lang="scss" scoped>
    .detail_wrap {padding: 105px 2rem 50px; background: #22333D;}
</style>