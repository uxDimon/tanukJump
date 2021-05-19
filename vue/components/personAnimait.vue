<template>
    <div class="person-animate__wrap">
        <div class="person-animate" :style="[styleAnim]"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            styleAnim: {},
            stepAnim: 120,
            iterator: {
                animate: null,
                animateJump: null,
            },
            type: {
                angry: "-203px",
                happy: "-406px",
                idle: "-609px",
            },
            animate: () => {
                if (this.iterator.animateJump)
                    clearInterval(this.iterator.animateJump);
                let frame = 0;
                this.iterator.animate = setInterval(() => {
                    if (frame < 2) {
                        ++frame;
                    } else {
                        frame = 0;
                    }
                    this.styleAnim = {
                        backgroundPositionX: `-${200 * frame}px`,
                        backgroundPositionY: this.type[this.animat],
                        bottom: "",
                    };
                }, this.stepAnim);
            },
            animateJump: () => {
                if (this.iterator.animate) clearInterval(this.iterator.animate);
                let frame = 0,
                    step = 0,
                    jump = 0;
                this.iterator.animateJump = setInterval(() => {
                    if ([1, 3, 4].includes(frame)) {
                        ++step;
                    } else if ([6, 7, 8].includes(frame)) {
                        --jump;
                    }

                    if ([8, 9, 10].includes(frame)) {
                        --step;
                    } else if ([4, 5, 6].includes(frame)) {
                        ++jump;
                    }

                    this.styleAnim = {
                        backgroundPositionX: `-${200 * step}px`,
                        backgroundPositionY: "",
                        bottom: this.jump * jump + "px",
                    };
                    ++frame;
                    if (frame == 11) {
                        step = 0;
                        frame = 0;
                        jump = 0;
                        this.$emit("setAnimat", {
                            animat: "idle",
                        });
                        clearInterval(this.iterator.animateJump);
                    }
                }, this.stepAnim);
            },
        };
    },
    props: {
        animat: {
            type: String,
            default: "idle",
        },
        jump: {
            type: Number,
            default: 10,
        },
    },
    watch: {
        animat: function (val, oldVal) {
            switch (val) {
                case "jump":
                    this.animateJump();
                    break;
                default:
                    this.animate();
            }
        },
    },
    created() {
        this.animate();
    },
};
</script>
<style lang="scss">
.person-animate__wrap {
    --background-sprite: url("../sprite/person/4_bunny.png");
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
    background-image: var(--background-sprite);
    background-size: 800px;
    background-repeat: no-repeat;
}
</style>