import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		popUp: true,
		popUpItem: "personage",
		score: 0,
		combo: 0,
		time: 0,
		pause: false,
		panel: {
			heart: {
				max: -300,
				min: 0,
				step: 60,
				list: [],
			}
		},
	},
	getters: {
		popUp: state => state.popUp,
		heartList: state => state.panel.heart.list,
		score: state => {
			let score = `${state.score}`;
			const lenght = score.length;
			for(let i = 0; i < 4 - lenght; i++) {
				score = '0' + score;
			}
			return score;
		},
		combo: state => state.combo,
		gameTime: state => {
			const pad2 = (num) => ("" + num).length < 2 ? "0".concat(num) : num;
			const m = Math.floor(state.time / 60);
			const s = state.time % 60;
			return ("" + m).concat(':', pad2(s));
		},
	},
	mutations: {
		startGame(state) {

			state.score = 0;
			state.combo = 0;
			state.time = 5;

			state.panel.heart.list = [
				{ point: 0, index: 1 },
				{ point: 0, index: 2 },
				{ point: 0, index: 3 }
			];

			setInterval(() => {
				if(!state.pause) state.time--;
				if(state.time === 0) {
					this.commit('gameOver');
				}
			}, 1000);

		},
		gameOver(state) {
			state.pause = true;
		},
		comboPlus(state, options) {
			state.combo++;
		},
		comboSet(state, options) {
			state.combo = options.value;
		},
		scorePlus(state, options) {
			state.score += options.number;
		},
		animateHeartMinus(state, options) {
			const reverse = Object.assign([], state.panel.heart.list);
			for(const heart of reverse.reverse()) {
				if(heart.point === 0) {
					const minusInterval = setInterval(() => {
						if(heart.point == state.panel.heart.max) {
							clearInterval(minusInterval);
							return false;
						}
						heart.point -= state.panel.heart.step;
					}, 150);
					break;
				}
			}
		},
		animateHeartPlus(state, options) {
			const reverse = Object.assign([], state.panel.heart.list);
			for(const heart of state.panel.heart.list) {
				if(heart.point < 0) {
					const plusInterval = setInterval(() => {
						if(heart.point == state.panel.heart.min) {
							clearInterval(plusInterval);
							return false;
						}
						heart.point += state.panel.heart.step;
					}, 150);
					break;
				}
			}
		},
		nextStape(state, payload) {
			state.popUpItem = payload;
		},
		toglePopUp(state) {
			state.popUp = !state.popUp;
		},
	},
});
