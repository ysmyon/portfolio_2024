<template>
    <div class="detail_wrap">
        <ProjectDetail 

        />
    </div>
</template>
<script>
import ProjectDetail from '@/components/ProjectDetail.vue';

export default {
    components: { ProjectDetail },
    data() {
        return {
                paramsCode: 0
            }
        },
    setup() { },
    created() {
        const urlParams = new URL(location.href).searchParams;
        const name = parseInt(urlParams.get('code'));

        console.log(name)
        this.paramsCode = name
    },
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>

<style lang="scss" scoped>
    .detail_wrap {padding: 110px 2rem 50px; background: #22333D;}
</style>