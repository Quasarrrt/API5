import { MAIN_API } from './config';

class MainApi {
	constructor(config) {
		this.headers = config.headers;
		this.url = config.url;
	}
	_getResponse(res) {
		return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
	}
	getContacts() {
		return fetch(`${this.url}/contacts`, {
			method: 'GET',
			headers: {
				...this.headers,
			}
		}).then(this._getResponse);
	}
	addContact(contact) {
		return fetch(`${this.url}/contacts`, {
			method: 'POST',
			headers: {
				...this.headers,
			},
			body: JSON.stringify(contact)
		}).then(this._getResponse);
	}
	deleteContact(number) {
		return fetch(`${this.url}/contacts/${number}`, {
			method: "DELETE",
			headers: {
				...this.headers,
			},
		}).then(this._getResponse);
	}
}
const mainApi = new MainApi({
	url: MAIN_API,
	headers: {
		'Content-Type': 'application/json',
	},
})
export default mainApi;