<template>
	<div class="bot-panel">
		<div class="bot-panel__left">
			<div class="bot-panel__info">
				<div class="info-bar">
					<div class="info-bar__name">Жизни</div>
					<div class="info-bar__body info-bar__body_live">
						<div class="info-bar__hard"></div>
						<div class="info-bar__hard"></div>
						<div class="info-bar__hard" style="background-position-x: -300px"></div>
					</div>
				</div>
				<div class="info-bar">
					<div class="info-bar__name">Очки</div>
					<div class="info-bar__body">1234</div>
				</div>
			</div>
		</div>
		<div class="bot-panel__logo">
			<main-logo></main-logo>
		</div>
		<div class="bot-panel__right">
			<div class="bot-panel__info">
				<div class="info-bar">
					<div class="info-bar__name">Комбо</div>
					<div class="info-bar__body" style="width: 72px">5</div>
				</div>
				<div class="info-bar">
					<div class="info-bar__body info-bar__body_time">1:59</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import mainLogo from "../icon/main-logo.vue";

	export default {
		components: {
			mainLogo,
		},
	};
</script>

<style lang="scss"></style>
