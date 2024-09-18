<template>
    <div id="project_scroll_wrap">
        <div id="project_scroll">
            <div class="panel">
                <div class="info_box">
                    <p>A Responsive Website / 2024.01-2024.04(3개월) / 100% role </p>
                    <p>01</p>
                </div>
                <div class="tit_box">
                    <h1>humming dx</h1>
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
                    <h1>batangsak eng</h1>
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
                    <h1>cloude city</h1>
                    <a href=""><div>detail view</div></a>
                </div>
                <img src="@/assets/images/project_03.jpg" alt="">
            </div>
        </div>

        <div class="project_list_etc">
            <div>
                <h5>ETC PROJECT</h5>
            </div>
            <div>
                <a href="">
                    <p>project</p>
                    <img src="@/assets/images/btn_more.png" alt="">
                </a>
            </div>
        </div>

        <div class="custom-cursor">
            <p>View Project</p>
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
                    customCursor.style.display = 'flex'; // 커서 보이기
                    gsap.to(customCursor, { opacity: 1 });
                    setTimeout(() => {
                        customCursor.classList.add('on');
                        gsap.to('.custom-cursor p', { width: 'auto' });
                    }, 1000)
                });

                // 마우스가 .panel 밖으로 나갔을 때 .custom-cursor 숨기기
                panel.addEventListener('mouseleave', () => {
                    customCursor.style.display = 'none'; // 커서 숨기기
                    gsap.to(customCursor, { opacity: 0 }); // 끝: 텍스트 전체가 나타남
                    gsap.to('.custom-cursor p', { width: '0' });

                    customCursor.classList.remove('on');
                });

                // 마우스 움직일 때 custom-cursor 위치 업데이트
                panel.addEventListener('mousemove', (e) => {
                    // custom-cursor 크기의 절반을 계산하여 가운데 정렬
                    const cursorWidth = customCursor.offsetWidth / 2;
                    const cursorHeight = customCursor.offsetHeight / 2;

                    // 커서가 화면 내에서 가운데 맞도록 좌표 조정
                    customCursor.style.left = (e.clientX - cursorWidth) + 'px';
                    customCursor.style.top = (e.clientY - cursorHeight) + 'px';
                });
            });
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "@/assets/scss/layout/ProjectScroll.scss";
</style>