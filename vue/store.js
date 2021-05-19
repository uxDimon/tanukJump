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
		greatPoint: false,
		gameLogic: {
			animat: "idle",
			jump: 10,
			animatGeneral: "idle",
			jumpGeneral: 10,
			n: null,
			intervalGame: null,
			maxCombo: 5,
		},
		jumpButtonClose: true,
		jump: 0,
		panel: {
			heart: {
				max: -300,
				min: 0,
				step: 60,
				list: [],
			},
		},
	},
	getters: {
		greatPoint: (state) => state.greatPoint,
		animatPerson: (state) => state.gameLogic.animat,
		jumpPerson: (state) => state.gameLogic.jump,

		animatPersonGeneral: (state) => state.gameLogic.animatGeneral,
		jumpPersonGeneral: (state) => state.gameLogic.jumpGeneral,

		progressBar: (state) => {
			return state.combo * 20;
		},

		jump: (state) => state.jump,
		popUp: (state) => state.popUp,
		heartList: (state) => state.panel.heart.list,
		score: (state) => {
			let score = `${state.score}`;
			const lenght = score.length;
			for (let i = 0; i < 4 - lenght; i++) {
				score = "0" + score;
			}
			return score;
		},
		combo: (state) => state.combo,
		gameTime: (state) => {
			const toInt = (num) => (("" + num).length < 2 ? "0".concat(num) : num);
			const m = Math.floor(state.time / 60);
			const s = state.time % 60;
			return ("" + m).concat(":", toInt(s));
		},
		jumpButton: (state) => state.jumpButtonClose,
	},
	mutations: {
		setAnimatGeneral(state, animat) {
			state.gameLogic.animatGeneral = animat;
		},
		setJumpGeneral(state, jump) {
			state.gameLogic.jumpGeneral = jump;
		},
		setAnimat(state, animat) {
			state.gameLogic.animat = animat;
		},
		setJump(state, jump) {
			state.gameLogic.jump = jump;
		},
		setGreatPoint(state) {
			if(!state.greatPoint) {
				this.commit('setAnimatGeneral', 'jump');
			}
			state.greatPoint = true;
		},
		addJump(state) {
			state.jump++;
		},
		startGame(state) {
			state.score = 0;
			state.combo = 1;
			state.time = 120;

			state.gameLogic.n = 2.5;

			state.panel.heart.list = [
				{ point: 0, index: 1 },
				{ point: 0, index: 2 },
				{ point: 0, index: 3 },
			];

			let time = 0;
			let nTime = 0;
			const interval = 10;

			state.intervalGame = setInterval(() => {
				if (!state.pause) {
					time += interval;
					nTime += interval;
					const n = state.gameLogic.n - (state.combo - 1) * 0.1;
					if (nTime >= n * 1000) {
						let x = 1;
						switch (state.combo) {
							case 3:
							case 4:
								x = 2;
								break;
							case 5:
							case 4:
								x = 3;
								break;
						}
						state.gameLogic.jump = 10 * x;
						if (state.time > 20) {
							state.gameLogic.n -= 0.005;
						} else {
							state.gameLogic.n = 2;
						}
						this.commit("setAnimat", "jump");
						this.commit("closeJumpButton", { status: false });
						nTime = 0;
					}

					if (time >= 1000) {
						state.time--;
						time = 0;
					}
				}
				if (state.time === 0 || state.panel.heart.list.every((heart) => heart.point !== 0)) {
					this.commit("gameOver");
				}
			}, interval);
		},
		endJump(state) {
			this.commit("setAnimat", state.greatPoint ? "happy" : "angry");
			this.commit("closeJumpButton", { status: true });
			if (state.greatPoint) {
				let number = 1 * state.combo;
				if (state.combo === 5) {
					number += 10;
				}
				this.commit("scorePlus", { number });
				this.commit("comboPlus");
				state.greatPoint = false;
			} else {
				this.commit("comboSet", { value: 1 });
				this.commit("animateHeartMinus");
			}
		},
		closeJumpButton(state, options) {
			state.jumpButtonClose = options.status;
		},
		gameOver(state) {
			state.pause = true;
			clearInterval(state.intervalGame);
		},
		comboPlus(state, options) {
			if (state.gameLogic.maxCombo >= state.combo + 1) {
				state.combo++;
			}
		},
		comboSet(state, options) {
			state.combo = options.value;
		},
		scorePlus(state, options) {
			state.score += options.number;
		},
		animateHeartMinus(state, options) {
			const reverse = Object.assign([], state.panel.heart.list);
			for (const heart of reverse.reverse()) {
				if (heart.point === 0) {
					const minusInterval = setInterval(() => {
						if (heart.point == state.panel.heart.max) {
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
			for (const heart of state.panel.heart.list) {
				if (heart.point < 0) {
					const plusInterval = setInterval(() => {
						if (heart.point == state.panel.heart.min) {
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
