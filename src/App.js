import './css/normalize.css';
import './css/App.css';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import ItemList from './components/ItemList';
import { useState, useEffect } from 'react';

export default function App() {
	const getData = () => {
		fetch('./data/tasks.json', {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		})
			.then(function (response) {
				return response.json();
			})
			.then(function (myJson) {
				setTasks(myJson);
				console.log(myJson);
			});
	};

	useEffect(() => {
		getData();
	}, []);

	const [tasks, setTasks] = useState([]);

	return (
		<div className='App'>
			<Header />
			<ItemList tasks={tasks} />
		</div>
	);
}
