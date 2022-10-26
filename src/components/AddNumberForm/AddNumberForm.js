import React, {useState} from 'react';
import styles from './AddNumberForm.module.css'
import {addContact} from '../../utils/api';

const AddNumberForm = ({setContacts}) => {
	const [number, setNumber] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const handleEmailChange = event => {
		setEmail(event.target.value);
	};
	const handleNameChange = event => {
		setName(event.target.value);
	}
	const handlePhoneChange = event => {
		setNumber(event.target.value);
	}
	const handleSubmit = event => {
		event.preventDefault()
		if(name && number && email){
			addContact({
				name,
				email,
				number,
			}).then((res)=>{
				setName('');
				setNumber('');
				setEmail('');
				setContacts((prevState) => [...prevState, res.data])
			})
		}
	};
	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<div className={styles.inputWrapper}>
				<input
					type="text"
					placeholder='Введите имя'
					className={styles.input}
					value={name}
					onChange={handleNameChange}
					required
				/>
				<input
					type="text"
					placeholder='Введите номер'
					className={styles.input}
					value={number}
					onChange={handlePhoneChange}
					required
				/>
				<input
					type="email"
					placeholder='Введите email'
					className={styles.input}
					value={email}
					onChange={handleEmailChange}
					required
				/>
				<button
					type="submit"
					className={styles.submitButton}
					onClick={handleSubmit}
				>
					Добавить
				</button>
			</div>
		</form>
	);
};

export default AddNumberForm;