<template>
	<div class="game-wrap">
		<tribune></tribune>
		<panel></panel>
	</div>
</template>

<script>
	import panel from "./components/panel.vue";
	import tribune from "./components/tribune.vue";

	export default {
		components: {
			panel,
			tribune,
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
