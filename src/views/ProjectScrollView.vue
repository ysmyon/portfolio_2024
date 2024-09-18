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
    },
    unmounted() {},
    methods: {
        project_pin() {
            let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#project_scroll",
                pin: true,
                scrub: true,
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

        }

        
    }
}
</script>

<style lang="scss" scoped>
    @import "@/assets/scss/layout/ProjectScroll.scss";
</style>