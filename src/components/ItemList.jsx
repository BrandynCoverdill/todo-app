import Item from './Item';

export default function ItemList({ tasks }) {
	if (!tasks || tasks.length === 0) {
		return <h2>No tasks were added yet.</h2>;
	} else {
		return (
			<div className='task-list flex'>
				{tasks.map((task) => (
					<Item key={task.id} task={task} />
				))}
			</div>
		);
	}
}
