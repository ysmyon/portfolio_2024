<template>
    <div class="detail">
        <div class="panel">

            <div class="tit_box">
                <h1>01. cloude city</h1>
                <!-- <a href=""><div>detail view</div></a> -->
            </div>
            <img src="@/assets/images/project_03.jpg" alt="">
    
            <div class="cont_wrap">
                    <div class="tit_box">
                        <h5>PROJECT<br />DESCRIPTION</h5>
                    </div>
                    <div class="cont_box">
                        <table>
                            <tr> 
                                <th>작업기간</th>
                                <td>2024.09.11 ~ 2024.04.11</td>
                            </tr>
                            <tr> 
                                <th>참여파트</th>
                                <td>퍼블리싱</td>
                            </tr>
                            <tr> 
                                <th>작업내용</th>
                                <td>
                                    <ul>
                                        <li>fwknfwekfnwlkefnwk</li>
                                        <li>fwknfwekfnwlkefnwk</li>
                                        <li>fwknfwekfnwlkefnwk</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr> 
                                <th>코멘트</th>
                                <td>라가루갸둫자ㅣ두지ㅏ둘지ㅏㄷ루ㅡ잗릊;디릊</td>
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
    components: {},
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
    @import '@/assets/scss/layout/ProjectDetail.scss'
</style>