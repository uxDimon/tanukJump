<template>
  <div class="test">
    <h1>{{ maessage }}</h1>

    <app-panel class="tesr2"></app-panel>
  </div>
</template>

<script>
import appPanel from "./components/panel.vue";

export default {
  components: {
    appPanel,
  },
  data() {
    return {
      maessage: "хуита",
    };
  },
};
</script>

<style lang="scss">
.test {
  background: rgb(138, 178, 185);

  .tesr2 {
    background: brown;
  }
}
</style>