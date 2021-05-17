import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		popUp: true,
		popUpItem: "personage",
	},
	mutations: {
		nextStape(state, payload) {
			state.popUpItem = payload;
		},
		toglePopUp(state) {
			state.popUp = !state.popUp;
		},
	},
});
