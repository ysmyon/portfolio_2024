<template>
    <div class="detail">
        <div class="panel">

            <div class="tit_box">
                <h1>{{ code }}. {{ name }}</h1>
                <!-- <a href=""><div>detail view</div></a> -->
            </div>
            <img :src="`/images/${image}`" alt="">
    
            <div class="cont_wrap">
                    <div class="tit_box">
                        <h5>PROJECT<br />DESCRIPTION</h5>
                    </div>
                    <div class="cont_box">
                        <table>
                            <tr> 
                                <th>작업기간</th>
                                <td>{{ period }}</td>
                            </tr>
                            <tr> 
                                <th>참여파트</th>
                                <td>퍼블리싱</td>
                            </tr>
                            <tr> 
                                <th>작업내용</th>
                                <td>
                                    <ul>
                                        <li v-for="(item, index) in work[0]" :key="index">{{ item }}</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr> 
                                <th>코멘트</th>
                                <td>
                                    <ul>
                                        <li v-for="(item, index) in comment[0]" :key="index">{{ item }}</li>
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
                <a href="" target="_blank" class="btn_go">VIEW PROJECT</a>
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
        name: String,
        code: String,
        url: String,
        period: String,
        part: String,
        work: Array,
        comment: Array,
        skill: Array,
        image: Array,

    },
    components: {},
    data() {
        return {
            sampleData: '',
        }
    },
    setup() {},
    created() {
        console.log(this.comment)
    },
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/layout/ProjectDetail.scss'
</style>