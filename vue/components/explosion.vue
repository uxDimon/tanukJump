<template>
    <div
        class="explosion"
        :style="{
            backgroundImage: `url(${img[type]})`,
            animationDuration: animationDuration + 'ms',
            transform: `scale(${scale})`,
        }"
        :class="active ? 'active' : ''"
    ></div>
</template>
<script>
import ex1 from "../sprite/explosion_1.png";
import ex2 from "../sprite/explosion_2.png";
import ex3 from "../sprite/explosion_3.png";

import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            img: {
                ex1,
                ex2,
                ex3,
            },
            active: null,
            animationDuration: 800,
            scale: 1
        };
    },
    props: {
        type: {
            type: String,
            default: "ex2",
        },
    },
    computed: {
        ...mapGetters({
            onExplosion: "comboScore",
            combo: "combo",
        })
    },
    watch: {
        onExplosion: function () {
            if(this.type == 'ex3') {
                if(this.combo == 1) {
                    this.scale = 0.4;
                } else if (this.combo == 2) {
                    this.scale = 0.6;
                } else {
                    this.scale = 1;
                }
                this.active = true;
            }
            if(this.type == 'ex1') {
                if(this.combo > 1) {
                    if(this.combo == 2) {
                        this.scale = 0.5;
                    } else {
                        this.scale = 1;
                    }
                    this.active = true;
                }
            }
            if(this.type == 'ex2') {
                if(this.combo > 3) {
                    if(this.combo == 4) {
                        this.scale = 0.3;
                    } else {
                        this.scale = 1;
                    }
                    this.active = true;
                }
            }

            setTimeout(() => {
                this.active = null;
            }, this.animationDuration);
        },
    },
};
</script>
<style lang="scss">
.explosion {
    position: absolute;
    width: 200px;
    height: 170px;
    background-image: url("../sprite/explosion_1.png");
    background-size: 1200px;
    background-repeat: no-repeat;
    background-position-x: 200px;
    z-index: 20;
}
.active {
    animation-name: explosion;
    animation-timing-function: steps(1, start);
    animation-duration: 800ms;
    animation-iteration-count: 1;
}

@keyframes explosion {
    0% {
        background-position-x: 200px;
    }
    16.66% {
        background-position-x: 0;
    }
    33.32% {
        background-position-x: -200px;
    }
    49.98% {
        background-position-x: -400px;
    }
    66.64% {
        background-position-x: -600px;
    }
    83.3% {
        background-position-x: -800px;
    }
    100% {
        background-position-x: -1000px;
    }
}
</style>