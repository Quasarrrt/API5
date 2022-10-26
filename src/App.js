import styles from './App.module.css'
import {useEffect, useState} from "react";
import {getContacts} from './utils/api'
import DeleteNumberForm from '../src/components/DeleteNumberForm/DeleteNumberForm'
import AddNumberForm from '../src/components/AddNumberForm/AddNumberForm';
import AllContacts from "../src/components/AllContacts/AllContacts";

function App() {
	const [contacts, setContacts] = useState();
	useEffect(() => {
		getContacts()
			.then((res) => {
				setContacts(res);
			})
			.catch((err) => {
				console.log(err);
			})
	}, []);
  return (
    <div className="App">
			<header >
			</header>
			<body className={styles.body}>
			<AddNumberForm setContacts={setContacts}/>
			<DeleteNumberForm setContacts={setContacts}/>
			<div className={styles.numbersWrapper}>
				<p className={styles.text}>Все номера</p>
				<AllContacts contacts={contacts}/>
			</div>
			</body>
    </div>
  );
}

export default App;
