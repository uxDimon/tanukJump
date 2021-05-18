import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		popUp: true,
		popUpItem: "personage",
		score: null,
		combo: null,
		time: null,
		pause: false,
		gameLogic: {
			n: null,
			intervalGame: null,
		},
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
			const toInt = (num) => ("" + num).length < 2 ? "0".concat(num) : num;
			const m = Math.floor(state.time / 60);
			const s = state.time % 60;
			return ("" + m).concat(':', toInt(s));
		},
	},
	mutations: {
		startGame(state) {

			state.score = 0;
			state.combo = 0;
			state.time = 120;

			state.gameLogic.n = 2.5;
			
			state.panel.heart.list = [
				{ point: 0, index: 1 },
				{ point: 0, index: 2 },
				{ point: 0, index: 3 }
			];

			let time = 0;
			let nTime = 0;
			const interval = 10;

			state.intervalGame = setInterval(() => {
				if(!state.pause) {

					time += interval;
					nTime += interval;

					if(nTime >= (state.gameLogic.n * 1000)) {
						if(state.time > 20) {
							state.gameLogic.n -= 0.005;
						} else {
							state.gameLogic.n = 2;
						}
						this.commit('animateHeartPlus');
						nTime = 0;
					}

					if(time >= 1000) {
						state.time--;
						time = 0;
					}
				}
				if(state.time === 0) {
					this.commit('gameOver');
				}
			}, interval);

		},
		gameOver(state) {
			state.pause = true;
			clearInterval(state.intervalGame);
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
