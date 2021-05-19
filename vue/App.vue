<template>
    <div class="game-wrap">
        <tribune></tribune>
        <panel></panel>
        <pop-up v-if="popUp"></pop-up>
        <progres></progres>
    </div>
</template>

<script>
import panel from "./components/panel.vue";
import tribune from "./components/tribune.vue";
import popUp from "./components/popUp.vue";
import progres from "./ui/progres.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
    components: {
        panel,
        tribune,
        popUp,
        progres,
    },
    methods: {
        ...mapMutations({
            startGame: "startGame",
        }),
    },
    created() {
        // this.startGame();
    },
    data() {
        return {
            maessage: "хуита",
        };
    },
    computed: {
        ...mapGetters({
            popUp: "popUp",
        }),
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
