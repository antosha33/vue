import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex)
// import swapiService from '../components/services';
// const service = new swapiService();

// (async function(){
// 	console.log(await service.getGoods());
// })()

export default new Vuex.Store({
	state: {
		products: []
	},
	mutations: {},
	actions: {

	},
	getters: {
		PRODUCTS(state){
			return state.products;
		}
	},
})

// export default store;