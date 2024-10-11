<template>
    <div class="project_list_etc">
        <div class="tit_box">
            <h5>ETC PROJECT</h5>
        </div>
        <div class="list_box">
            <router-link :to="{ name: 'detail', query: { code: `${item.code}`}}" v-for="(item, index) in data" :key="index">
                <p>{{ item.name }}</p>
                <img src="@/assets/images/btn_more.png" alt="">
            </router-link>

            <div class="btn_box">
                <a @click="loadDataMore()"><p>More</p></a>
            </div>
            <!-- <a href="">
                <p>project</p>
                <img src="@/assets/images/btn_more.png" alt="">
            </a>
            <a href="">
                <p>project</p>
                <img src="@/assets/images/btn_more.png" alt="">
            </a>
            <a href="">
                <p>project</p>
                <img src="@/assets/images/btn_more.png" alt="">
            </a>
            <a href="">
                <p>project</p>
                <img src="@/assets/images/btn_more.png" alt="">
            </a>
            <a href="">
                <p>project</p>
                <img src="@/assets/images/btn_more.png" alt="">
            </a> -->
        </div>

        
    </div>
</template>
<script>

export default {
    props: {
        dataNormal: { // 부모로부터 받아오는 props
            type: Array,
            default: () => []
        }
    },
    components: {},
    data() {
        return {
            data: []
        }
    },
    setup() {},
    created() {},
    mounted() {
        this.setfirstload();
    },
    unmounted() {},
    methods: {
        setfirstload() {
            const max = 5;
            let start = 0;

            for(let i = start; i <= max -1; i++) {
                this.data.push(this.dataNormal[i])
            }

            console.log(this.data)
        },

        loadDataMore() {
            const currentLength = this.data.length;
            const remainingData = this.dataNormal.length - currentLength;
            const toAdd = Math.min(5, remainingData);

            if (toAdd === 0) {
                alert('마지막 데이터입니다.'); // 더 이상 추가할 데이터가 없을 경우
                return; // 더 이상의 추가 작업을 중단
            }

            for(let i = 0; i < toAdd; i++) {
                this.data.push(this.dataNormal[currentLength + i])
            }

            console.log(this.data)
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "@/assets/scss/layout/EtcProject.scss";
    
</style>