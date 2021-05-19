<template>
    <div class="pop-up__item_timer">
        <div class="pop-up-timer">{{ timer }}</div>
    </div>
</template>
<script>
import { mapMutations } from "vuex";

export default {
    data() {
        return {
            timer: this.timerStart,
        };
    },
    props: {
        timerStart: {
            type: Number,
            default: 3,
        },
    },
    methods: {
        ...mapMutations({
            startGame: "startGame",
        }),
    },
    created() {
        const interval = setInterval(() => {
            if (this.timer > 1) {
                --this.timer;
            } else {
                this.$store.commit("toglePopUp");
                this.startGame();
                clearInterval(interval);
            }
        }, 1000);
    },
};
</script>
<style lang="scss">
$font-primary: "Geometria", sans-serif;
$font-number: "Quantico", sans-serif;
.pop-up-timer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 230px;
    height: 230px;
    background: linear-gradient(
        180deg,
        #282858 0%,
        #282858 50.35%,
        #181836 50.39%,
        #181836 100%
    );
    border-radius: 8px;
    font-family: $font-primary;
    font-style: normal;
    font-weight: bold;
    font-size: 190px;
    line-height: 100%;
    text-align: center;
    color: #fff;
}
</style>
