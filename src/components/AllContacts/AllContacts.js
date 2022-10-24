import React from 'react';
import styles from './AllContacts.module.css'

const AllContacts = ({contacts}) => {
	return (
			contacts?.map((item)=>(
			<div className={styles.item}>
				<p>Имя: {item.name}</p>
				<p>Номер: {item.number}</p>
				<p>Email: {item.email}</p>
			</div>
		))
	);
};

export default AllContacts;