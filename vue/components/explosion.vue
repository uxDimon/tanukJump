<template>
    <div
        class="explosion"
        :style="{
            backgroundImage: `url(${img[type]})`,
            animationDuration: animationDuration + 'ms',
        }"
        :class="active ? 'active' : ''"
    ></div>
</template>
<script>
import ex1 from "../sprite/explosion_1.png";
import ex2 from "../sprite/explosion_2.png";
import ex3 from "../sprite/explosion_3.png";

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
        };
    },
    props: {
        type: {
            type: String,
            default: "ex2",
        },
        onExplosion: {
            type: Number,
            default: null,
        },
    },
    watch: {
        onExplosion: function () {
            this.active = this.onExplosion;
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