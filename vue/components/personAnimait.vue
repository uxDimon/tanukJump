<template>
    <div class="person-animate__wrap">
        <div class="person-animate" :style="styleAnim"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            styleAnim: {},
        };
    },
    props: {
        sprite: {
            type: String,
            default: "Выбрать",
        },
        animat: {
            type: String,
            default: "angry",
        },
    },
    created() {
        const stepAnim = 1000;
        const tupe = {
            angry: "-203px",
            happy: "-406px",
            idle: "-609px",
        };
        const animate = () => {
            let frame = 0;
            const animFrame = setInterval(() => {
                if (frame < 2) {
                    ++frame;
                } else {
                    frame = 0;
                    // clearInterval(animFrame);
                }
                this.styleAnim = {
                    backgroundPositionX: `-${200 * frame}px`,
                    backgroundPositionY: tupe[this.animat],
                    bottom: "",
                };
            }, stepAnim);
        };
        const animateJamp = () => {
            let frame = 0,
                step = 0,
                jamp = 0;
            const animFrame = setInterval(() => {
                if (frame <= 4) {
                    ++step;
                } else if (frame >= 9 && frame <= 9) {
                    --step;
                }
                if (condition) {
                }
                this.styleAnim = {
                    backgroundPositionX: `-${200 * step}px`,
                    backgroundPositionY: "",
                    bottom: "",
                };
                ++frame;
                if (frame == 10) {
                    step = 0;
                    frame = 0;
                }
            }, stepAnim);
        };
        // animateJamp();
        // animate();
    },
};
</script>
<style lang="scss">
.person-animate__wrap {
    position: absolute;
    bottom: -30px;
    z-index: 1;
    width: 200px;
    height: 203px;
}
.person-animate {
    position: absolute;
    left: 0;
    bottom: 0;
    width: inherit;
    height: inherit;
    background-image: url("../vue/sprite/person/4_bunny.png");
    background-size: 800px;
    background-repeat: no-repeat;
}
</style>