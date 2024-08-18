import { addTask } from './actions/addTask.js'

export const paramHandler = param => {
	const options = {
		add: addTask(),
		update: updateTask(),
		delete: deleteTask(),
		'mark-in-progress': markInProgress(),
		'mark-done': markDone(),
		list: listTasks()
	}

	return options[param]
}
