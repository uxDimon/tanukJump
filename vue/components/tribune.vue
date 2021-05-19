<template>
    <div class="tribune" ref="tribuneEl">
        <div class="tribune__row">
            <div class="tribune__plase" style="width: calc(75px * 2)"></div>
            <div
                class="tribune__plase"
                style="width: calc(75px * 5); background-position-y: -93px"
            ></div>
            <div
                class="tribune__plase"
                style="width: calc(75px * 5); background-position-y: -186px"
            ></div>
            <person-animait
                :animat="animat"
                :jump="jump"
                :urlSprite="'url(' + imgUrl.sushi_8 + ')'"
                style="left: 40px"
                @setAnimat="setAnimat"
            ></person-animait>
            <person-animait
                :animat="animat"
                :jump="jump"
                :urlSprite="'url(' + imgUrl.sushi_9 + ')'"
                style="left: 240px"
                @setAnimat="setAnimat"
            ></person-animait>
            <person-animait
                :animat="animat"
                :jump="jump"
                :urlSprite="'url(' + imgUrl.sushi_10 + ')'"
                style="left: 440px"
                @setAnimat="setAnimat"
            ></person-animait>
            <person-animait
                :animat="animat"
                :jump="jump"
                :urlSprite="'url(' + imgUrl.sushi_0 + ')'"
                style="left: 640px"
                @setAnimat="setAnimat"
            ></person-animait>
        </div>
        <div class="tribune__row">
            <div class="tribune__plase" style="width: calc(75px * 3)"></div>
            <div
                class="tribune__plase"
                style="width: calc(75px * 5); background-position-y: -93px"
            ></div>
            <div
                class="tribune__plase"
                style="width: calc(75px * 5); background-position-y: -186px"
            ></div>
            <person-animait
                :animat="animat"
                :jump="jump"
                :urlSprite="'url(' + imgUrl.sushi_4 + ')'"
                style="left: 40px"
                @setAnimat="setAnimat"
            ></person-animait>
            <person-animait
                :animat="animat"
                :jump="jump"
                :urlSprite="'url(' + imgUrl.sushi_5 + ')'"
                style="left: 240px"
                @setAnimat="setAnimat"
            ></person-animait>
            <person-animait
                :animat="animat"
                :jump="jump"
                :urlSprite="'url(' + imgUrl.sushi_6 + ')'"
                style="left: 440px"
                @setAnimat="setAnimat"
            ></person-animait>
            <person-animait
                :animat="animat"
                :jump="jump"
                :urlSprite="'url(' + imgUrl.sushi_7 + ')'"
                style="left: 640px"
                @setAnimat="setAnimat"
            ></person-animait>
        </div>
        <div class="tribune__row">
            <div class="tribune__plase" style="width: calc(75px * 3)"></div>
            <div
                class="tribune__plase"
                style="width: calc(75px * 5); background-position-y: -93px"
            ></div>
            <div
                class="tribune__plase"
                style="width: calc(75px * 5); background-position-y: -186px"
            ></div>
            <person-animait
                :animat="animat"
                :jump="jump"
                :urlSprite="'url(' + imgUrl.sushi_0 + ')'"
                style="left: 40px"
                @setAnimat="setAnimat"
            ></person-animait>
            <person-animait
                :animat="animat"
                :jump="jump"
                :urlSprite="'url(' + imgUrl.sushi_1 + ')'"
                style="left: 240px"
                @setAnimat="setAnimat"
            ></person-animait>
            <person-animait
                :animat="animat"
                :jump="jump"
                :urlSprite="'url(' + imgUrl.sushi_2 + ')'"
                style="left: 440px"
                @setAnimat="setAnimat"
            ></person-animait>
            <person-animait
                :animat="animat"
                :jump="jump"
                :urlSprite="'url(' + imgUrl.sushi_3 + ')'"
                style="left: 640px"
                @setAnimat="setAnimat"
            ></person-animait>
        </div>
        <div class="tribune__row">
            <div class="tribune__plase" style="width: calc(75px * 4)"></div>
            <div
                class="tribune__plase"
                style="width: calc(75px * 5); background-position-y: -93px"
            ></div>
            <div
                class="tribune__plase"
                style="width: calc(75px * 4); background-position-y: -186px"
            ></div>
            <person-animait
                :animat="animat"
                :jump="jump"
                :urlSprite="'url(' + imgUrl.sushi_8 + ')'"
                style="left: 40px"
                @setAnimat="setAnimat"
            ></person-animait>
            <person-animait
                :animat="animat"
                :jump="jump"
                :urlSprite="'url(' + imgUrl.sushi_9 + ')'"
                style="left: 240px"
                @setAnimat="setAnimat"
            ></person-animait>
            <person-animait
                :animat="animat"
                :jump="jump"
                :urlSprite="'url(' + imgUrl.sushi_10 + ')'"
                style="left: 440px"
                @setAnimat="setAnimat"
            ></person-animait>
            <person-animait
                :animat="animat"
                :jump="jump"
                :urlSprite="'url(' + imgUrl.sushi_0 + ')'"
                style="left: 640px"
                @setAnimat="setAnimat"
            ></person-animait>
        </div>
        <div class="tribune__row">
            <div class="tribune__plase" style="width: calc(75px * 4)"></div>
            <div
                class="tribune__plase"
                style="width: calc(75px * 5); background-position-y: -93px"
            ></div>
            <div
                class="tribune__plase"
                style="width: calc(75px * 4); background-position-y: -186px"
            ></div>
            <person-animait
                :animat="animat"
                :jump="jump"
                :urlSprite="'url(' + imgUrl.sushi_4 + ')'"
                style="left: 40px"
                @setAnimat="setAnimat"
            ></person-animait>
            <person-animait
                :animat="animat"
                :jump="jump"
                :urlSprite="'url(' + imgUrl.sushi_5 + ')'"
                style="left: 240px"
                @setAnimat="setAnimat"
            ></person-animait>
            <person-animait
                :animat="animat"
                :jump="jump"
                :urlSprite="'url(' + imgUrl.sushi_6 + ')'"
                style="left: 440px"
                @setAnimat="setAnimat"
            ></person-animait>
            <person-animait
                :animat="animat"
                :jump="jump"
                :urlSprite="'url(' + imgUrl.sushi_7 + ')'"
                style="left: 640px"
                @setAnimat="setAnimat"
            ></person-animait>
        </div>
        <div class="tribune__row">
            <div class="tribune__plase" style="width: calc(75px * 5)"></div>
            <div
                class="tribune__plase"
                style="width: calc(75px * 5); background-position-y: -93px"
            ></div>
            <div
                class="tribune__plase"
                style="width: calc(75px * 3); background-position-y: -186px"
            ></div>
        </div>
    </div>
</template>
<script>
import personAnimait from "./personAnimait.vue";

import { mapGetters } from "vuex";

import sushi_0 from "../sprite/person/0_sushi.png";
import sushi_1 from "../sprite/person/1_sushi.png";
import sushi_2 from "../sprite/person/2_sushi.png";
import sushi_3 from "../sprite/person/3_sushi.png";
import sushi_4 from "../sprite/person/4_sushi.png";
import sushi_5 from "../sprite/person/5_sushi.png";
import sushi_6 from "../sprite/person/6_sushi.png";
import sushi_7 from "../sprite/person/7_sushi.png";
import sushi_8 from "../sprite/person/8_sushi.png";
import sushi_9 from "../sprite/person/9_sushi.png";
import sushi_10 from "../sprite/person/10_sushi.png";

export default {
    components: {
        personAnimait,
    },
    data() {
        return {
            animat: "happy",
            jump: 22,
            imgUrl: {
                sushi_0,
                sushi_1,
                sushi_2,
                sushi_3,
                sushi_4,
                sushi_5,
                sushi_6,
                sushi_7,
                sushi_8,
                sushi_9,
                sushi_10,
            },
        };
    },
    watch: {
        jumpStore: function (val) {
            this.animat = "jump";
        },
    },
    computed: {
        tribuneRow() {},
        ...mapGetters({
            jumpStore: "jump",
        }),
    },
    methods: {
        setAnimat(data) {
            this.animat = data.animat;
        },
    },
    created() {
        console.log(this.test);
    },
    mounted() {
        // console.log(this.$refs.tribuneEl);
    },
};
</script>
<style lang="scss">
.tribune {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.tribune__row {
    display: flex;
    margin-top: -22px;
    flex-shrink: 0;
    position: relative;
    z-index: 1;

    &:first-child {
        margin-top: -4px;
    }

    &:nth-child(2n + 2) {
        margin-left: -37px;
    }
}

.tribune__plase {
    background-image: url("../sprite/chair.png");
    background-repeat: repeat-x;
    background-size: 75px;
    height: 93px;
    min-width: 75px;
    flex-shrink: 0;
}
</style>
