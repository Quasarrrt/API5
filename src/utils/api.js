export const getContacts = async () => {
	return fetch('https://pacific-headland-35033.herokuapp.com/contacts', {
		method: "GET",
	}).then((res) => {
		console.log(res)
		if (res.ok) {
			return res.json();
		}
		return Promise.reject(`Ошибка ${res.status}`);
	});
};

export const addContact = async (contact) => {
	return fetch('https://pacific-headland-35033.herokuapp.com/contacts', {
		method: "POST",
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(contact)
	}).then((res) => {
		if (res.ok) {
			return res.json();
		}
		return Promise.reject(`Ошибка ${res.status}`);
	});
};

export const deleteContact = async (number) => {
	return fetch(`https://pacific-headland-35033.herokuapp.com/contacts/${number}`, {
		method: "DELETE",
		headers: {
			'Content-Type': 'application/json',
		},
	}).then((res) => {
		if (res.ok) {
			return res.json();
		}
		return Promise.reject(`Ошибка ${res.status}`);
	});
};