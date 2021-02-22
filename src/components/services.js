export default class Service {
	constructor() {
		this.entry = 'https://swapi.dev/api/'
	}

	service = async (url) => {
		const response = await fetch(`${this.entry}${url}`);
		const result = await response.json();
		return result;
	}

	getGoods = async () => {
		const response = await this.service('people');
		return response.results;
	}

}