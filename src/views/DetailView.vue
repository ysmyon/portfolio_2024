<template>
    <div class="detail_wrap">
        <ProjectDetail 
        :code=$route.query.code 
        />
    </div>
</template>
<script>
import ProjectDetail from '@/components/ProjectDetail.vue';

export default {
    components: { ProjectDetail },
    data() {
        return {
                selectData: [],
            }
        },
    setup() { },
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>

<style lang="scss" scoped>
    .detail_wrap {padding: 110px 2rem 50px; background: #22333D;}
</style>