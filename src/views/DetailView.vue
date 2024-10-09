<template>
    <div class="detail_wrap">
        <ProjectDetail 
        :name=$route.query.name 
        :code=$route.query.code 
        :image=$route.query.image 
        :period=$route.query.period 
        :work=this.work
        :comment=this.comment
        :skill=this.skill
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
                work: [],
                comment: []
            }
        },
    setup() { },
    created() {
        this.work = [this.$route.query.work.split(",")]
    },
    mounted() {
        console.log(this.$route.query.work);
    },
    unmounted() {},
    methods: {}
}
</script>

<style lang="scss" scoped>
    .detail_wrap {padding: 110px 2rem 50px; background: #22333D;}
</style>