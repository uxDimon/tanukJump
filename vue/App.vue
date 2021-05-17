<template>
    <div class="game-wrap">
        <tribune></tribune>
        <panel></panel>
        <pop-up v-if="popUp"></pop-up>
    </div>
</template>

<script>
import panel from "./components/panel.vue";
import tribune from "./components/tribune.vue";
import popUp from "./components/popUp.vue";

export default {
    components: {
        panel,
        tribune,
        popUp,
    },
    data() {
        return {
            maessage: "хуита",
        };
    },
    computed: {
        popUp() {
            return this.$store.state.popUp;
        },
    },
};
</script>

<style lang="scss">
.game-wrap {
    position: relative;
    width: 890px;
    height: 500px;
    background: #222222;
    display: grid;
    grid-template-rows: 1fr 98px;
}
</style>
