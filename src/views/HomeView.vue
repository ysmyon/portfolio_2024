<template>
    <div>
        <MainVisual />
        <ProjectScroll v-if="dataBest.length" :dataBest="dataBest" />
        <EtcProject v-if="dataNormal.length" :dataNormal="dataNormal"/>
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
            dataBest: [],
            dataNormal: []
        }
    },
    setup() {},
    created() {
        this.$axios
            .get('/data/projects.json')
            .then((res) => {
                // console.log(res.data);
                this.projectData = res.data;

                const classify = this.projectData.reduce((acc, curr) => {
                    const { best } = curr;
                    if(acc[best]) {
                        acc[best].push(curr);
                    } else {
                        acc[best] = [curr];
                    }
                    return acc
                }, {})

                Object.keys(classify).forEach(key => {
                    classify[key].reverse();
                });

                this.dataBest = classify[true];
                this.dataNormal = classify[false];

                // console.log(this.dataBest)
                // console.log(this.dataNormal)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                console.log('마지막')
            })
    },
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>
