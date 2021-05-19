<template>
    <div class="pop-up__item_failure">
        <tanuki-message
            class="pop-up__tanuki-failure"
            message="Ты набрал мало очков! Хочешь попробовать ещё раз?"
            :face="3"
        ></tanuki-message>
        <div class="pop-up__botton-wrap_failure" @click="newGame">
            <button-g
                :color="'green'"
                class="pop-up__botton-failure"
                name="Да!"
            ></button-g>
            <button-g class="pop-up__botton-failure" name="Нет!"></button-g>
        </div>
    </div>
</template>
<script>
import buttonG from "../ui/button.vue";
import tanukiMessage from "../ui/tanukiMessage.vue";
import { mapMutations } from "vuex";

export default {
    components: {
        buttonG,
        tanukiMessage,
    },
    methods: {
        ...mapMutations({
            startGame: "startGame",
        }),
        newGame() {
            this.startGame();
            this.$store.commit("toglePopUp");
        },
    },
};
</script>
<style lang="scss">
.pop-up__item_failure {
    width: 100%;
    height: 100%;
}

.pop-up__tanuki-failure {
    margin-left: -60px;
}

.pop-up__botton-wrap_failure {
    position: absolute;
    top: 200px;
    right: 40px;
    display: grid;
    grid-gap: 30px;
}

.pop-up__botton-failure {
    width: 160px;
}
</style>
