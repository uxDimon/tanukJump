<template>
    <div
        class="pop-up"
        :style="{
            background:
                popStep === 'pop-up-personage' ? 'rgba(24, 24, 54, 0.6)' : '',
        }"
    >
        <!-- <pop-up-failure class="pop-up__item"></pop-up-failure> -->
        <!-- <pop-up-score class="pop-up__item"></pop-up-score> -->
        <component :is="popStep" class="pop-up__item"></component>
    </div>
</template>
<script>
import popUpPersonage from "./popUpPersonage.vue";
import popUpMessage from "./popUpMessage.vue";
import popUpTimer from "./popUpTimer.vue";
import popUpFailure from "./popUpFailure.vue";
import popUpScore from "./popUpScore.vue";

export default {
    data() {
        return {};
    },
    components: {
        popUpPersonage,
        popUpMessage,
        popUpTimer,
        popUpFailure,
        popUpScore,
    },
    computed: {
        popStep() {
            return "pop-up-" + this.$store.state.popUpItem;
        },
    },
};
</script>
<style lang="scss">
.pop-up {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(170, 170, 170, 0.3);
    backdrop-filter: blur(8px);
    z-index: 10;
}
.pop-up__item {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
