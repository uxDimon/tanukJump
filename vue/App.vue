<template>
  <div class="game-wrap">
    <div></div>
    <panel class="tesr2"></panel>
  </div>
</template>

<script>
import panel from "./components/panel.vue";

export default {
  components: {
    panel,
  },
  data() {
    return {
      maessage: "хуита",
    };
  },
};
</script>

<style lang="scss">
.game-wrap {
  width: 890px;
  height: 500px;
  background: #222222;
  display: grid;
  grid-template-rows: 1fr 98px;
}
</style>