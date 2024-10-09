<template>
    <div class="detail">
        <div class="panel">

            <div class="tit_box">
                <h1>{{ code }}. {{ this.projectData.name }}</h1>
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
                <img src="@/assets/images/arrow_prev.png" alt="이전">
                <p>02.CLOUD CITY<span>HYUNDAI ENGINEERING</span></p>
            </router-link>
            <router-link to="/"><img src="@/assets/images/icon_list.png" alt="메인"></router-link>
            <router-link to="/about">
                <p>03.BATANGSAK ENG<span></span></p>
                <img src="@/assets/images/arrow_next.png" alt="다음">
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        code: String,
    },
    components: {},
    data() {
        return {
            projectData: null,
        }
    },
    setup() {},
    created() {
        const urlParams = new URL(location.href).searchParams;
        const name = urlParams.get('code');
        console.log(name)

        this.$axios
            .get('/data/projects.json')
            .then((res) => {
                const filteredData = res.data.filter(project => project.code === name);

                if (filteredData.length > 0) {
                    this.projectData = filteredData[0];
                } else {
                    console.log('No matching project found');
                }

                console.log(this.projectData)
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

<style lang="scss" scoped>
    @import '@/assets/scss/layout/ProjectDetail.scss'
</style>