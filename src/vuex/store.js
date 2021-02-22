import { createStore } from 'vuex'

import swapiService from '../components/services';
const service = new swapiService();


export default createStore({
	state: {
		products: []
	},
	mutations: {
		SET_PRODUCTS_TO_STATE(state, products) {
			state.products = products;
		}
	},
	actions: {
		async GET_PRODUCTS({ commit }) {
			const products = await service.getGoods();
			commit('SET_PRODUCTS_TO_STATE', products);
			console.log(products);
		}
	},
	getters: {
		PRODUCTS(state) {
			return state.products;
		}
	},
})