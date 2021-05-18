<template>
    <div class="person-animate__wrap">
        <div class="person-animate" :style="[styleAnim]"></div>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
    data() {
        return {
            styleAnim: {},
            stepAnim: 150,
            tupe: {
                angry: "-203px",
                happy: "-406px",
                idle: "-609px",
            },
            animate: () => {
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
                        backgroundPositionY: this.tupe[this.animat],
                        bottom: "",
                    };
                }, this.stepAnim);
            },
            animateJump: () => {
                let frame = 0,
                    step = 0,
                    jump = 0;
                const animFrame = setInterval(() => {
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

                        clearInterval(animFrame);
                        this.animate();
                    }
                }, this.stepAnim);
            },
        };
    },
    watch: {
        jumpStore: function name(val) {
            // this.animateJump();
        },
    },
    computed: {
        ...mapGetters({
            jumpStore: "jump",
        }),
    },
    methods: {
        ...mapMutations({
            addJump: "addJump",
        }),
    },
    props: {
        sprite: {
            type: String,
            default: "4_bunny.png",
        },
        animat: {
            type: String,
            default: "idle",
        },
        jump: {
            type: Number,
            default: 10,
        },
    },
    created() {
        // this.animate();
        this.animateJump();
    },
    updated() {
        // this.animateJump();
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
    background-image: url("../sprite/person/4_bunny.png");
    background-size: 800px;
    background-repeat: no-repeat;
}
</style>