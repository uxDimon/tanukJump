<template>
    <div class="person-animate__wrap">
        <div
            class="person-animate"
            :style="[
                styleAnim,
                {
                    backgroundImage: urlSprite,
                },
            ]"
        ></div>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
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
                idle: "-203px",
                happy: "-406px",
                angry: "-609px",
            },
        };
    },
    methods: {
        ...mapMutations({
            setAnimat: "setAnimat",
            setAnimatGeneral: "setAnimatGeneral",
            endJump: "endJump",
        }),
        animate() {
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
                    backgroundPositionY: this.type[
                        this.mainСharacter
                            ? this.animatPersonGeneral
                            : this.animat
                    ],
                    bottom: "",
                };
            }, this.stepAnim);
        },
        animateJump() {
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

                    if (!this.mainСharacter) {
                        this.endJump();
                    } else {
                        this.setAnimatGeneral("idle");
                    }

                    clearInterval(this.iterator.animateJump);
                }
            }, this.stepAnim);
        },
    },
    props: {
        urlSprite: {
            type: String,
            default: "",
        },
        mainСharacter: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        ...mapGetters({
            animat: "animatPerson",
            jump: "jumpPerson",
            greatPoint: "greatPoint",
            animatPersonGeneral: "animatPersonGeneral",
            jumpPersonGeneral: "jumpPersonGeneral",
        }),
    },
    watch: {
        animat: function (val, oldVal) {
            if (!this.mainСharacter) {
                switch (val) {
                    case "jump":
                        this.animateJump();
                        break;
                    default:
                        this.animate();
                }
            }
        },
        animatPersonGeneral: function (val, oldVal) {
            if (this.mainСharacter) {
                switch (val) {
                    case "jump":
                        this.animateJump();
                        break;
                    default:
                        this.animate();
                }
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