<template>
    <div class="tanuki-message">
        <div class="tanuki-message__img">
            <div
                class="tanuki-message__img-mouth"
                :style="{
                    backgroundPositionX: `-${245 * face}px`,
                }"
            ></div>
        </div>
        <div class="tanuki-message__name">Тануки</div>
        
        <div class="tanuki-message__score-wrap" v-if="score.points">
            <div class="tanuki-message__score">
                <div class="tanuki-message__score-number">
                    {{ score.combo }}
                </div>
                <div class="tanuki-message__score-name">Комбо</div>
            </div>
            <div class="tanuki-message__score">
                <div class="tanuki-message__score-number">
                    {{ score.points }}
                </div>
                <div class="tanuki-message__score-name">Баллы</div>
            </div>
        </div>
        <div class="tanuki-message__message" v-html="message" v-else></div>
    </div>
</template>
<script>
export default {
    props: {
        message: {
            type: String,
            default: "Привет богатееще!!!",
        },
        face: {
            type: Number,
            default: 1,
        },
        score: {
            type: Object,
            default: {
                combo: false,
                points: false,
            },
        },
    },
};
</script>
<style lang="scss">
$font-primary: "Geometria", sans-serif;
$font-number: "Quantico", sans-serif;

.tanuki-message {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 490px;
}

.tanuki-message__img {
    width: 245px;
    height: 254px;
    position: absolute;
    top: -40px;
    left: 0;
    background-image: url("../sprite/tanuki_message.png");
    background-size: 980px;
    background-repeat: no-repeat;
    z-index: 3;
}

.tanuki-message__img-mouth {
    width: inherit;
    height: inherit;
    background: inherit;
    background-position-x: -245px;
}

.tanuki-message__name {
    background: linear-gradient(180deg, #181836 0%, #323251 100%);
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    padding: 8px 20px 8px 40px;
    margin: 135px 0 0 175px;
    border-radius: 0px 24px 0px 0px;
    font-family: $font-primary;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 100%;
    position: relative;
    z-index: 2;
    color: #fff;
}

.tanuki-message__message {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 48px 12px 30px;
    background: linear-gradient(180deg, #181836 0%, #323251 100%);
    box-shadow: 0px 10px 0px #181836;
    border-radius: 75px;
    margin-left: 58px;
    font-family: $font-primary;
    font-style: normal;
    font-weight: bold;
    font-size: 23px;
    line-height: 100%;
    text-align: center;
    color: #ffffff;
}

.tanuki-message__score-wrap {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 10px;
    justify-content: center;
    margin-left: 40px;

    &::after {
        content: "";
        display: block;
        position: absolute;
        top: 165px;
        left: 200px;
        width: 100px;
        height: 60px;
        background: #181836;
        z-index: 1;
    }
}

.tanuki-message__score {
    position: relative;
    z-index: 2;
    padding: 40px 20px 20px;
    background: linear-gradient(180deg, #181836 0%, #323251 100%);
    box-shadow: 0px 10px 0px #181836;
    border-radius: 10px;
    width: 185px;
    height: 135px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.tanuki-message__score-number,
.tanuki-message__score-name {
    font-family: $font-primary;
    font-style: normal;
    font-weight: bold;
    line-height: 100%;
    text-align: center;
    color: #ffffff;
}

.tanuki-message__score-number {
    font-size: 48px;
    margin: 14px 0 8px;
}

.tanuki-message__score-name {
    font-size: 20px;
}
</style>