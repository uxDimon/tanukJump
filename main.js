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
