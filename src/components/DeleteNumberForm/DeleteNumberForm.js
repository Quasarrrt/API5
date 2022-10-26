import React, {useState} from 'react';
import styles from './DeleteNumberForm.module.css'
import { deleteContact} from '../../utils/api';

const DeleteNumberForm = ({setContacts}) => {
	const [inputValue, setInputValue] = useState('');
	const handleChange = event => {
		setInputValue(event.target.value);
	};
	const handleSubmit = event => {
		event.preventDefault();
		if(inputValue){
			deleteContact(inputValue)
				.then(()=>{
					setInputValue('');
					setContacts((prevState) => prevState.filter(item => item.number !== inputValue))
			})
		}
	};
	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<div className={styles.inputWrapper}>
				<input
					type="email"
					placeholder='Введите номер для удаления'
					className={styles.input}
					value={inputValue}
					onChange={handleChange}
				/>
				<button
					type="submit"
					className={styles.submitButton}
					onClick={handleSubmit}
				>
					Удалить
				</button>
			</div>
		</form>
	);
};

export default DeleteNumberForm;