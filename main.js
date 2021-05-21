import "./style/style.css";
import "./style/style.scss";
import Vue from "vue";
import Vuex from "vuex";
import App from "./vue/App.vue";
import store from "./vue/store";

Vue.use(Vuex);
new Vue({
	store,
	render: (h) => h(App),
}).$mount("#app");

const gameWrap = document.querySelector(".game-wrap");

window.addEventListener("resize", () => {
	if (document.body.offsetHeight <= 500) {
		gameWrap.style.transform = `scale(${(document.body.offsetHeight / 500).toFixed(2)})`;
	} else if (document.body.offsetHeight > 500) {
		gameWrap.style.transform = "";
	}
});
