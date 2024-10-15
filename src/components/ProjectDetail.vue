<template>
    <div class="detail" v-if="this.projectData">
        <div class="panel">

            <div class="tit_box">
                <h1>{{ this.projectData.code }}. {{ this.projectData.name }}</h1>
                <div v-if="this.projectData.winner">
                    <img src="/images/gdweb_prize_01.png" alt="">
                    <img src="/images/gdweb_prize_02.png" alt="">
                </div>
            </div>
            <img :src="`/images/${this.projectData.image}`" alt="">
    
            <div class="cont_wrap">
                    <div class="tit_box">
                        <h5>PROJECT<br />DESCRIPTION</h5>
                    </div>
                    <div class="cont_box">
                        <table>
                            <tr> 
                                <th>작업기간</th>
                                <td>{{ this.projectData.period }}</td>
                            </tr>
                            <tr> 
                                <th>참여파트</th>
                                <td>{{ this.projectData.part }}</td>
                            </tr>
                            <tr> 
                                <th>작업내용</th>
                                <td>
                                    <ul>
                                        <li v-for="(item, index) in this.projectData.work" :key="index">{{ item }}</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr> 
                                <th>코멘트</th>
                                <td>
                                    <ul>
                                        <li v-for="(item, index) in this.projectData.comment" :key="index">{{ item }}</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr> 
                                <th>사용스택</th>
                                <td>
                                    <div class="stack">
                                        <div v-for="(item, index) in this.projectData.skill" :key="index">
                                            <img :src="`/images/${item}.png`" alt="">
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </table>
                </div>
    
            </div>
    
            <div class="btn_box">
                <a :href="`${this.projectData.url}`" target="_blank" class="btn_go">VIEW PROJECT</a>
            </div>
        </div>

        <div class="navigation">
            <a @click.prevent="changeNextData()">
                <div v-if="this.nextData" >
                    <img src="@/assets/images/arrow_prev.png" alt="이전">
                    <p>{{ this.nextData.code }}. {{ this.nextData.name }}<span></span></p>
                </div>
            </a>
            <router-link to="/"><img src="@/assets/images/icon_list.png" alt="메인"></router-link>
            <a @click.prevent="changePrevData()">
                <div v-if="this.prevData">
                    <p>{{ this.prevData.code }}. {{ this.prevData.name }}<span></span></p>
                    <img src="@/assets/images/arrow_next.png" alt="다음">
                </div>
            </a>
        </div>
    </div>
</template>
<script>
import router from '@/router';

export default {
    // props: {
    //     code: String,
    // },
    components: {},
    data() {
        return {
            prevData: null,
            projectData: null,
            nextData: null,
            prevCode: 0,
            nextCode: 0,
            filteredPrevData: [],
            filteredNextData: [],
            allData: [],
        }
    },
    setup() {},
    created() {
        const urlParams = new URL(location.href).searchParams;
        const name = parseInt(urlParams.get('code'));
        this.prevCode = parseInt(name) - 1;
        this.nextCode = parseInt(name) + 1;
        // console.log(name);

        this.$axios
            .get('/data/projects.json')
            .then((res) => {
                
                this.allData = res.data;
                this.filteredPrevData = res.data.filter(project => project.code == this.prevCode);
                const filteredData = res.data.filter(project => project.code == name);
                this.filteredNextData = res.data.filter(project => project.code == this.nextCode);

                if (filteredData.length > 0) {
                    if(this.filteredPrevData) {
                        this.prevData = this.filteredPrevData[0];
                    } else {
                        this.prevData = null;
                    }

                    this.projectData = filteredData[0];

                    if(this.filteredNextData) {
                        this.nextData = this.filteredNextData[0];
                    } else {
                        this.nextData = null;
                    }
                } else {
                    console.log('No matching project found');
                }

                // console.log(filteredPrevData)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                // console.log('마지막')
            })
    },
    mounted() {},
    unmounted() {},
    methods: {
        changeNextData() {
            router.push({ path: 'detail', query: { code: this.nextData.code }})
            this.projectData = this.nextData
            this.nextCode = parseInt(this.projectData.code) + 1;
            this.filteredNextData = this.allData.filter(project => project.code == this.nextCode);

            if(this.filteredNextData) {
                this.nextData = this.filteredNextData[0];
                
            } else {
                this.nextData = null;
            }
            
            // console.log(this.nextData)
        },
        changePrevData() {
            router.push({ path: 'detail', query: { code: this.prevData.code }})
            this.projectData = this.prevData
            this.prevCode = parseInt(this.projectData.code) - 1;
            this.filteredPrevData = this.allData.filter(project => project.code == this.prevCode);

            if(this.filteredPrevData) {
                this.prevData = this.filteredPrevData[0];
                
            } else {
                this.prevData = null;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/layout/ProjectDetail.scss';
</style>