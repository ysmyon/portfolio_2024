<template>
    <div class="bottom_profile">
        <div id="bp_top">
            <div class="tit_box">
                <h5>hi, im<br />yousang</h5>
            </div>
            <div class="cont_box">
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
                            <ul>
                                <li>2020.01 - 2022.05 누리웹</li>
                                <li>2023.09 - 2024.11 넥스미디어</li>
                            </ul>
                        </td>
                    </tr>
                </table>
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
