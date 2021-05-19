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
                :style="{
                    '--background-sprite':
                        'url(' + require('../sprite/person/0_sushi.png') + ')',
                }"
                style="lefr: 40px"
                @setAnimat="setAnimat"
            ></person-animait>
            <person-animait
                :animat="animat"
                :jump="jump"
                :style="{
                    '--background-sprite':
                        'url(' + require('../sprite/person/1_sushi.png') + ')',
                }"
                style="lefr: 240px"
                @setAnimat="setAnimat"
            ></person-animait>
            <person-animait
                :animat="animat"
                :jump="jump"
                :style="{
                    '--background-sprite':
                        'url(' + require('../sprite/person/2_sushi.png') + ')',
                }"
                style="lefr: 440px"
                @setAnimat="setAnimat"
            ></person-animait>
            <person-animait
                :animat="animat"
                :jump="jump"
                :style="{
                    '--background-sprite':
                        'url(' + require('../sprite/person/3_sushi.png') + ')',
                }"
                style="lefr: 640px"
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

export default {
    components: {
        personAnimait,
    },
    data() {
        return {
            animat: "happy",
            jump: 22,
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
