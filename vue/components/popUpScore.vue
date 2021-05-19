<template>
    <div class="pop-up__item_score">
        <tanuki-message
            class="pop-up__tanuki-score"
            :score="{ combo: 31, points: 2543 }"
            :face="2"
        ></tanuki-message>
    </div>
</template>
<script>
import tanukiMessage from "../ui/tanukiMessage.vue";

export default {
    components: {
        tanukiMessage,
    },
    methods: {
        next() {
            this.$store.commit("nextStape", "timer");
        },
    },
};
</script>
<style lang="scss">
.pop-up__item_score {
    width: 100%;
    height: 100%;
}

.pop-up__tanuki-score {
    margin-left: -20px;
}

.pop-up__botton-wrap_score {
    position: absolute;
    top: 200px;
    right: 40px;
    display: grid;
    grid-gap: 30px;
}

.pop-up__botton-score {
    width: 160px;
}
</style>
