<template>
    <div id="project_scroll_wrap">
        <div id="project_scroll">
            <router-link to="/detail" class="panel" v-for="(item, index) in dataBest" :key="index">
                <div class="info_box">
                    <p>A Responsive Website / {{ item.period }} / {{ item.part }} </p>
                    <p>{{ index + 1 }}</p>
                </div>
                <div class="tit_box">
                    <h1>{{ item.name_eng }}</h1>
                </div>
                <img src="@/assets/images/project_01.jpg" alt="">
            </router-link>

           <!-- <router-link to="/detail" class="panel">
                <div class="info_box">
                    <p>A Responsive Website / 2024.01-2024.04(3개월) / 100% role </p>
                    <p>01</p>
                </div>
                <div class="tit_box">
                    <h1>humming dx</h1>
                </div>
                <img src="@/assets/images/project_01.jpg" alt="">
            </router-link>
            <router-link to="/detail" class="panel">
                <div class="info_box">
                    <p>A Responsive Website / 2024.01-2024.04(3개월) / 100% role </p>
                    <p>02</p>
                </div>
                <div class="tit_box">
                    <h1>batangsak eng</h1>
                </div>
                <img src="@/assets/images/project_02.jpg" alt="">
            </router-link>
            <router-link to="/detail" class="panel">
                <div class="info_box">
                    <p>A Responsive Website / 2024.01-2024.04(3개월) / 100% role </p>
                    <p>03</p>
                </div>
                <div class="tit_box">
                    <h1>cloude city</h1>
                </div>
                <img src="@/assets/images/project_03.jpg" alt="">
            </router-link> -->
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
    props: {
        dataBest: { // 부모로부터 받아오는 props
            type: Array,
            default: () => []
        }
    },
    components: {},
    data() {
        return {
            projectData: [],
            bestProjects: [],
            elseProjects: []
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
                markers: false
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
            const cursorText = customCursor.querySelector('p');

            panels.forEach(panel => {
                // 기본 마우스 커서를 숨기고 .custom-cursor 표시
                panel.addEventListener('mouseenter', () => {
                    customCursor.style.display = 'flex'; // 커서 보이기
                    gsap.to(customCursor, { opacity: 1 });
                    setTimeout(() => {
                        customCursor.classList.add('on');
                        gsap.to(cursorText, { width: 'auto' });
                    }, 1000)
                });

                // 마우스가 .panel 밖으로 나갔을 때 .custom-cursor 숨기기
                panel.addEventListener('mouseleave', () => {
                    customCursor.style.display = 'none'; // 커서 숨기기
                    gsap.to(customCursor, { opacity: 0 }); // 끝: 텍스트 전체가 나타남
                    gsap.to(cursorText, { width: '0' });

                    customCursor.classList.remove('on');
                });

                // 마우스 움직일 때 custom-cursor 위치 업데이트
                panel.addEventListener('mousemove', (e) => {
                    if(customCursor.classList.contains('on')) {
                        const customCursorOn = document.querySelector('.custom-cursor');
                        // console.log('on/ ' + customCursorOn.offsetWidth)

                        // custom-cursor 크기의 절반을 계산하여 가운데 정렬
                        const cursorOnWidth = customCursorOn.offsetWidth / 50;
                        const cursorOnHeight = customCursorOn.offsetHeight / 50;
    
                        // 커서가 화면 내에서 가운데 맞도록 좌표 조정
                        customCursor.style.left = (e.clientX - cursorOnWidth) + 'px';
                        customCursor.style.top = (e.clientY - cursorOnHeight) + 'px';
                    } else {
                        // custom-cursor 크기의 절반을 계산하여 가운데 정렬
                        const cursorWidth = customCursor.offsetWidth / 50;
                        const cursorHeight = customCursor.offsetHeight / 50;
        
                        // 커서가 화면 내에서 가운데 맞도록 좌표 조정
                        customCursor.style.left = (e.clientX - cursorWidth) + 'px';
                        customCursor.style.top = (e.clientY - cursorHeight) + 'px';
                        // console.log('c// ' + customCursor.offsetWidth)
                    }

                });
            });
        },

    }
}
</script>

<style lang="scss" scoped>
    @import "@/assets/scss/layout/ProjectScroll.scss";
</style>