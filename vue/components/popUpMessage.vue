<template>
    <div class="pop-up__item_message">
        <tanuki-message
            class="pop-up__tanuki-message"
            message="Надеюсь, ты умеешь прыгать достаточно высоко, Андрей! <br/> A главное - вовремя!"
            :face="1"
        ></tanuki-message>
        <div @click="next" class="action-button">
            <button-g name="Старт!"></button-g>
        </div>
    </div>
</template>
<script>
import buttonG from "../ui/button.vue";
import tanukiMessage from "../ui/tanukiMessage.vue";

export default {
    components: {
        buttonG,
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
.pop-up__item_message {
    width: 100%;
    height: 100%;
}

.pop-up__tanuki-message {
    margin-left: -40px;
}
</style>
