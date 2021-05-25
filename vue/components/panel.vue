<template>
    <div class="bot-panel">
        <div class="bot-panel__left">
            <div class="bot-panel__info">
                <div class="info-bar">
                    <div class="info-bar__name">Жизни</div>
                    <div class="info-bar__body info-bar__body_live">
                        <div
                            class="info-bar__hard"
                            v-for="(item, key) in heartList"
                            :key="key"
                            :class="{ 'animation-heart': item.flicker }"
                            :style="{ backgroundPositionX: `${item.point}px` }"
                        ></div>
                    </div>
                </div>
                <div class="info-bar">
                    <div class="info-bar__name">Очки</div>
                    <div class="info-bar__body" style="width: 110px">
                        {{ score }}
                    </div>
                </div>
            </div>
        </div>
        <div class="bot-panel__logo" @click="animateHeartMinus">
            <main-logo></main-logo>
        </div>
        <div class="bot-panel__right">
            <div class="bot-panel__info">
                <div class="info-bar">
                    <div class="info-bar__name" @click="comboPlus">Комбо!</div>
                    <div class="info-bar__body" style="width: 72px">
                        {{"×"}}{{combo}}
                    </div>
                </div>
                <div class="info-bar">
                    <div class="info-bar__body info-bar__body_time">
                        {{ time }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import mainLogo from "../icon/main-logo.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
    components: {
        mainLogo,
    },
    computed: {
        ...mapGetters({
            heartList: "heartList",
            score: "score",
            combo: "combo",
            time: "gameTime",
        }),
    },
    methods: {
        ...mapMutations({
            animateHeartMinus: "animateHeartMinus",
            animateHeartPlus: "animateHeartPlus",
            scorePlus: "scorePlus",
            comboPlus: "comboPlus",
        }),
    },
    data() {
        return {
            hardStyle: {
                backgroundPositionX: "0px",
            },
        };
    },
};
</script>

<style lang="scss">
$font-primary: "Geometria", sans-serif;
$font-number: "Quantico", sans-serif;

.bot-panel {
    width: 100%;
    height: 98px;
    background: linear-gradient(
        179.78deg,
        #242442 0.19%,
        #2b2c4a 29.22%,
        #20203e 99.81%
    );
    position: relative;
    display: grid;
    grid-template-columns: 1fr 190px 1fr;
    grid-template-rows: 83px;
    padding-top: 15px;

    &::before {
        content: "";
        display: block;
        height: 8px;
        width: 100%;
        background: #181836;
        position: absolute;
        left: 0;
        top: 0;
    }
}

.bot-panel__logo {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid #181836;
    border-bottom: none;
}

.bot-panel__left,
.bot-panel__right {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 3px solid #181836;
}

.bot-panel__info {
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 16px;
    align-items: end;
}

.info-bar {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.info-bar__name {
    font-family: $font-primary;
    font-weight: bold;
    font-size: 14px;
    line-height: 100%;
    margin-bottom: 4px;
    color: #c1c3ff;
    text-transform: uppercase;
}

.info-bar__body {
    height: 45px;
    width: 100%;
    background: #30305b;
    box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.5),
        inset -1px -2px 0px #56568a;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: $font-number;
    font-weight: bold;
    font-size: 30px;
    line-height: 100%;
    text-align: center;
    color: #c1c3ff;
    padding: 5px 14px 3px;
}

.info-bar__body_live {
    width: 140px;
    position: relative;
}

.info-bar__hard {
    position: absolute;
    width: 60px;
    height: 64px;
    top: -9px;
    background-image: url("../sprite/life.png");
    background-repeat: no-repeat;
    background-size: 360px;

    &:nth-of-type(1) {
        left: 0px;
    }
    &:nth-of-type(2) {
        left: 40px;
    }
    &:nth-of-type(3) {
        left: 80px;
    }
}

.info-bar__body_time {
    height: 63px;
    width: 176px;
    font-size: 62px;
    color: #ff0301;
}

.animation-heart {
    animation-name: pulse;
    animation-timing-function: steps(2, end);
    animation-duration: 450ms;
    animation-iteration-count: infinite;
}

@keyframes pulse {
    from {
        transform: scale(1);
    }
    50% {
        transform: scale(1.8);
    }
    to {
        transform: scale(1);
    }
}
</style>
