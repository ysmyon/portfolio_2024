<template>
    <div class="bottom_profile">
        <div id="bp_top">
            <div class="tit_box">
                <h5>hi, im<br />yousang</h5>
            </div>
            <div class="cont_box">
                <div class="wrap">
                    <table>
                        <tr> 
                            <th>name</th>
                            <td>이유상</td>
                        </tr>
                        <tr> 
                            <th>birth</th>
                            <td>1989.12.12</td>
                        </tr>
                        <tr> 
                            <th>tel</th>
                            <td>010.3381.3609</td>
                        </tr>
                        <tr> 
                            <th>e-mail</th>
                            <td>ysmyon12@naver.com</td>
                        </tr>
                        <tr> 
                            <th>address</th>
                            <td>경기 성남시 분당구 동판교로 156</td>
                        </tr>
                    </table>
        
                    <table>
                        <tr> 
                            <th>history</th>
                            <td>
                                <ul>
                                    <li>2008.02 서현고 졸업</li>
                                    <li>2019.02 선문대 졸업</li>
                                </ul>
                            </td>
                        </tr>
                        <tr> 
                            <th>experience</th>
                            <td>
                                <table>
                                    <tr>
                                        <th>누리웹</th>
                                        <td>2020.01 ~ 2022.05</td>
                                    </tr>
                                    <tr>
                                        <th>넥스미디어</th>
                                        <td>2023.09 ~ 재직중</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </div>

                <div class="stack_box">
                    <ul>
                        <li><img src="/images/html.png" alt="html"></li>
                        <li><img src="/images/css.png" alt="css"></li>
                        <li><img src="/images/jquery.png" alt="jquery"></li>
                        <li><img src="/images/sass.png" alt="sass"></li>
                        <li><img src="/images/javascript.png" alt="javascript"></li>
                        <li><img src="/images/photoshop.png" alt="photoshop"></li>
                        <li><img src="/images/illust.png" alt="illust"></li>
                        <li><img src="/images/vue.png" alt="vue"></li>
                        <li><img src="/images/react.png" alt="react"></li>
                        <li><img src="/images/nodejs.png" alt="node.js"></li>
                        <li><img src="/images/nextjs.png" alt="nextjs"></li>
                    </ul>
                </div>
            </div>
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
    mounted() {
        this.copyEMail();
    },
    unmounted() {},
    methods: {
        copyEMail() {
            const btn = document.getElementsByClassName('cursor_dummy');
            const txt_mail = document.getElementsByClassName('cursor_dummy')[0].innerText;

            btn[0].addEventListener('click', () => {
                window.navigator.clipboard.writeText(txt_mail).then(() => {
                    alert('이메일 주소 복사 완료!')
                })
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/layout/BottomProfile.scss'
</style>
