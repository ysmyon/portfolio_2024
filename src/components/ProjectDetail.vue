<template>
    <div class="detail" v-if="this.projectData">
        <div class="panel">

            <div class="tit_box">
                <h1>{{ this.projectData.code }}. {{ this.projectData.name }}</h1>
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
                                    <img src="@/assets/images/icon_html.png" alt="html">
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
            <router-link to="/about">
                <div v-if="this.nextData">
                    <img src="@/assets/images/arrow_prev.png" alt="이전">
                    <p>{{ this.nextData.code }}. {{ this.nextData.name }}<span></span></p>
                </div>
            </router-link>
            <router-link to="/"><img src="@/assets/images/icon_list.png" alt="메인"></router-link>
            <router-link to="/">
                <div v-if="this.prevData">
                    <p>{{ this.prevData.code }}. {{ this.prevData.name }}<span></span></p>
                    <img src="@/assets/images/arrow_next.png" alt="다음">
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
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
        }
    },
    setup() {},
    created() {
        const urlParams = new URL(location.href).searchParams;
        const name = parseInt(urlParams.get('code'));
        const prevCode = parseInt(name) - 1;
        const nextCode = parseInt(name) + 1;
        // console.log(name);

        this.$axios
            .get('/data/projects.json')
            .then((res) => {
                
                const filteredPrevdData = res.data.filter(project => project.code == prevCode);
                const filteredData = res.data.filter(project => project.code == name);
                const filteredNextData = res.data.filter(project => project.code == nextCode);

                if (filteredData.length > 0) {
                    if(filteredPrevdData) {
                        this.prevData = filteredPrevdData[0];
                    } else {
                        this.prevData = null;
                    }

                    this.projectData = filteredData[0];

                    if(filteredNextData) {
                        this.nextData = filteredNextData[0];
                    } else {
                        this.nextData = null;
                    }
                } else {
                    console.log('No matching project found');
                }

                // console.log(filteredPrevdData)
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
    methods: {}
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/layout/ProjectDetail.scss';
</style>