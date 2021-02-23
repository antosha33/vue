import { createStore } from 'vuex'

import swapiService from '../components/services';
const service = new swapiService();


export default createStore({
	state: {
		products: [],
		cart: [],
	},
	mutations: {
		SET_PRODUCTS_TO_STATE(state, products) {
			state.products = products;
		},
		SET_CART(state, product) {
			state.cart.push(product);
		},
		REMOVE_FROM_CART(state, indForDelete) {
			state.cart = state.cart.filter((it, ind) => ind != indForDelete)
		}
	},
	actions: {
		async GET_PRODUCTS({ commit }) {
			const products = await service.getGoods();
			commit('SET_PRODUCTS_TO_STATE', products);
			console.log(products);
		},
		ADD_TO_CART({ commit }, product) {
			commit('SET_CART', product)
		},
		DELETE_FROM_CART({ commit }, ind) {
			commit('REMOVE_FROM_CART', ind)
		}
	},
	getters: {
		PRODUCTS(state) {
			return state.products;
		},
		CART(state) {
			return state.cart;
		}
	},
})