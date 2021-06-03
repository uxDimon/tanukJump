<template>
    <div class="pop-up__item_message">
        <tanuki-message
            class="pop-up__tanuki-message"
            :message="`Привет, ${userName}! Прыгай как можно выше, чтобы показать, как ты болеешь за наших спортсменов! Для этого тебе нужно вовремя нажимать кнопку прыжка. Готов? Тогда жми «СТАРТ!»`"
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

import { mapMutations, mapGetters } from 'vuex';

export default {
    components: {
        buttonG,
        tanukiMessage,
    },
    computed: {
        ...mapGetters({
            userName: "userName",
        })
    },
    methods: {
        ...mapMutations({
            setUserName: "setUserName"
        }),
        next() {
            this.$store.commit("nextStape", "timer");
        },
    },
    created() {
        const userName = document.querySelector('[data-user-name]');
        if(userName) {
            this.setUserName(userName.dataset.userName);
        }
    }
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
