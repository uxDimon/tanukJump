<template>
    <div class="tribune" ref="tribuneEl">
        <div class="tribune__row" v-for="(row, key) in map" :key="key">
            <div
                class="tribune__plase"
                v-for="(plase, plaseKey) in row.plaseList"
                :key="'plase_' + plaseKey"
                :style="plase.style"
            ></div>
            <person-animait
                v-for="(person, personKey) in row.persons"
                :key="'person__' + personKey"
                :urlSprite="'url(' + person.img + ')'"
                :mainСharacter="
                    person.mainСharacter ? person.mainСharacter : false
                "
                :style="person.style"
            ></person-animait>
        </div>
        <div class="action-button panel-action-button" @click="setGreatPoint">
            <button-g name="Прыгай!" :disabled="jumpButtonClose"></button-g>
        </div>
    </div>
</template>
<script>
import personAnimait from "./personAnimait.vue";
import buttonG from "../ui/button.vue";
import { mapGetters, mapMutations } from "vuex";

const modules = import.meta.globEager("../sprite/person/*.png");

let listImg = {};
for (const key in modules) {
    const nameArr = key.split("/");
    listImg[nameArr[nameArr.length - 1]] = modules[key];
}

export default {
    components: {
        personAnimait,
        buttonG,
    },
    data() {
        return {
            animat: "happy",
            jump: 22,
            map: [
                {
                    plaseList: [
                        {
                            style:
                                "width: calc(75px * 2); background-position-y: -186px",
                        },
                        {
                            style: "width: calc(75px * 5)",
                        },
                        {
                            style:
                                "width: calc(75px * 5); background-position-y: -93px",
                        },
                    ],
                    persons: [
                        {
                            img: listImg["0_sushi.png"].default,
                            style: "left: 90px; transform: scale(0.8);",
                        },
                        {
                            img: listImg["7_sushi.png"].default,
                            style:
                                "left: 310px; transform: scale(0.7); bottom: -40px",
                        },
                        {
                            img: listImg["1_sushi.png"].default,
                            style: "left: 470px; transform: scale(0.8);",
                        },
                        {
                            img: listImg["2_sushi.png"].default,
                            style: "left: 616px; transform: scale(0.66)",
                        },
                    ],
                },
                {
                    plaseList: [
                        {
                            style:
                                "width: calc(75px * 3); background-position-y: -186px",
                        },
                        {
                            style: "width: calc(75px * 5)",
                        },
                        {
                            style:
                                "width: calc(75px * 5); background-position-y: -93px",
                        },
                    ],
                    persons: [
                        {
                            img: listImg["0_player.png"].default,
                            style:
                                "left: 37px; transform: scale(0.95);bottom: -57px",
                        },
                        {
                            img: listImg["tanuki.png"].default,
                            style: "left: 237px; bottom: -40px",
                        },
                        {
                            img: listImg["5_sushi.png"].default,
                            style:
                                "left: 418px; transform: scale(0.6);bottom: -45px",
                        },
                        {
                            img: listImg["3_sushi.png"].default,
                            style:
                                "left: 532px; transform: scale(0.66);bottom:-50px",
                        },
                        {
                            img: listImg["4_sushi.png"].default,
                            style:
                                "left: 724px; transform: scale(0.8);bottom: -35px",
                        },
                    ],
                },
                {
                    plaseList: [
                        {
                            style:
                                "width: calc(75px * 3); background-position-y: -186px",
                        },
                        {
                            style: "width: calc(75px * 5)",
                        },
                        {
                            style:
                                "width: calc(75px * 5); background-position-y: -93px",
                        },
                    ],
                    persons: [
                        {
                            img: listImg["4_bunny.png"].default,
                            style:
                                "left: 88px; transform: scale(1.1);bottom: -32px",
                        },
                        {
                            img: null,
                            mainСharacter: true,
                            style:
                                "left: 306px; transform: scale(1.1);bottom: -35px",
                        },
                        {
                            img: listImg["10_sushi.png"].default,
                            style:
                                "left: 457px; transform: scale(0.8);bottom: -42px",
                        },
                        {
                            img: listImg["1_bunny.png"].default,
                            style:
                                "left: 582px; transform: scale(1);bottom: -15px",
                        },
                    ],
                },
                {
                    plaseList: [
                        {
                            style:
                                "width: calc(75px * 4); background-position-y: -186px",
                        },
                        {
                            style: "width: calc(75px * 5)",
                        },
                        {
                            style:
                                "width: calc(75px * 5); background-position-y: -93px",
                        },
                    ],
                    persons: [
                        {
                            img: listImg["2_bunny.png"].default,
                            style:
                                "left: 21px; transform: scale(1);bottom: -32px",
                        },
                        {
                            img: listImg["8_sushi.png"].default,
                            style:
                                "left: 156px; transform: scale(0.66);bottom: -47px",
                        },
                        {
                            img: listImg["5_player.png"].default,
                            style:
                                "left: 241px; transform: scale(1.1);bottom: -30px",
                        },
                        {
                            img: listImg["6_sushi.png"].default,
                            style:
                                "left: 386px; transform: scale(0.8);bottom: -50px",
                        },
                        {
                            img: listImg["9_sushi.png"].default,
                            style:
                                "left: 572px; transform: scale(0.8);bottom: -28px",
                        },
                    ],
                },
                {
                    plaseList: [
                        {
                            style:
                                "width: calc(75px * 4); background-position-y: -186px",
                        },
                        {
                            style: "width: calc(75px * 5)",
                        },
                        {
                            style:
                                "width: calc(75px * 5); background-position-y: -93px",
                        },
                    ],
                    persons: [],
                },
                {
                    plaseList: [
                        {
                            style:
                                "width: calc(75px * 5); background-position-y: -186px",
                        },
                        {
                            style: "width: calc(75px * 5)",
                        },
                        {
                            style:
                                "width: calc(75px * 5); background-position-y: -93px",
                        },
                    ],
                    persons: [
                        {
                            img: listImg["3_bunny.png"].default,
                            style:
                                "left: 48px; transform: scale(1);bottom: -6px",
                        },
                        {
                            img: listImg["4_player.png"].default,
                            style:
                                "left: 164px; transform: scale(0.8);bottom: -23px",
                        },
                        {
                            img: listImg["3_player.png"].default,
                            style:
                                "left: 335px; transform: scale(1);bottom: -9px",
                        },
                        {
                            img: listImg["2_player.png"].default,
                            style:
                                "left: 470px; transform: scale(1);bottom: -9px",
                        },
                        {
                            img: listImg["1_player.png"].default,
                            style:
                                "left: 598px; transform: scale(0.9);bottom: -2px",
                        },
                        {
                            img: listImg["0_bunny.png"].default,
                            style:
                                "left: 722px; transform: scale(1);bottom: 10px",
                        },
                    ],
                },
            ],
        };
    },
    computed: {
        tribuneRow() {},
        ...mapGetters({
            jumpButtonClose: "jumpButton",
            char: "char",
        }),
    },
    watch: {
        char: function (val) {
            this.map[2].persons[1].img = listImg[val].default;
        },
    },
    methods: {
        setAnimat(data) {
            this.animat = data.animat;
        },
        ...mapMutations({
            setGreatPoint: "setGreatPoint",
        }),
    },
    created() {
        console.log(this.test);
    },
};
</script>
<style lang="scss">
.panel-action-button {
    z-index: 1;
    margin-top: -20px;
}
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
