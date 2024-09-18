<template>
    <div id="project_scroll_wrap">
        <div id="project_scroll">
            <div class="panel">
                <div class="info_box">
                    <p>A Responsive Website / 2024.01-2024.04(3개월) / 100% role </p>
                    <p>01</p>
                </div>
                <div class="tit_box">
                    <h1></h1>
                    <a href=""><div>detail view</div></a>
                </div>
                <img src="@/assets/images/project_01.jpg" alt="">
            </div>
            <div class="panel">
                <div class="info_box">
                    <p>A Responsive Website / 2024.01-2024.04(3개월) / 100% role </p>
                    <p>01</p>
                </div>
                <div class="tit_box">
                    <h1></h1>
                    <a href=""><div>detail view</div></a>
                </div>
                <img src="@/assets/images/project_02.jpg" alt="">
            </div>
            <div class="panel">
                <div class="info_box">
                    <p>A Responsive Website / 2024.01-2024.04(3개월) / 100% role </p>
                    <p>01</p>
                </div>
                <div class="tit_box">
                    <h1></h1>
                    <a href=""><div>detail view</div></a>
                </div>
                <img src="@/assets/images/project_03.jpg" alt="">
            </div>
        </div>

        <div class="custom-cursor">
            <img src="@/assets/images/cursor_arrow.png" alt="">
        </div>
    </div>
</template>
<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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
        this.project_pin();
        this.custom_cursor();
    },
    unmounted() {},
    methods: {
        project_pin() {
            let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#project_scroll",
                pin: true,
                scrub: true,
                start: "-10%",
                end: "+=500%",
                markers: true
            }
            })

            let panels = gsap.utils.toArray(".panel");

            panels.forEach((panel, i) => {
                if (!i) {
                    tl.set({}, {}, 0.5)
                } else {
                    tl.to(panel, {
                    yPercent: -100,
                    ease: "none"
                    }, "+=1")
                }
            })

        },

        custom_cursor() {
            const panels = document.querySelectorAll('.panel');
            const customCursor = document.querySelector('.custom-cursor');

            panels.forEach(panel => {
                // 기본 마우스 커서를 숨기고 .custom-cursor 표시
                panel.addEventListener('mouseenter', () => {
                    customCursor.style.display = 'block'; // 커서 보이기
                });

                // 마우스가 .panel 밖으로 나갔을 때 .custom-cursor 숨기기
                panel.addEventListener('mouseleave', () => {
                    customCursor.style.display = 'none'; // 커서 숨기기
                });

                // 마우스가 움직일 때 .custom-cursor가 따라다니게 함
                panel.addEventListener('mousemove', (e) => {
                    customCursor.style.left = e.clientX + 'px'; // clientX는 화면 내 x 좌표
                    customCursor.style.top = e.clientY + 'px';  // clientY는 화면 내 y 좌표
                });
            });
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "@/assets/scss/layout/ProjectScroll.scss";
</style>