import colors from 'colors'
import { readJsonFromFile } from './../utils/readJsonFromFile.js'

export const listTasks = status => {
	// console.log(text)
	const tasks = readJsonFromFile()

	// Case 1: Listing all tasks
	if (!status) return console.table(tasks)

	// Case 2: A state is given

	const tasksToShow = tasks.filter(task => task.status === status)

	const possibleStates = ['todo', 'in-progress', 'done']

	if (!tasksToShow.length && !possibleStates.includes(status)) {
		console.log(
			colors.red('Invalid state. Try using one of these: '),
			'todo, done, in-progress'
		)
		process.exit(1)
	}

	if (!tasksToShow.length)
		return console.log(
			colors.yellow(
				`There are currently no tasks with the ${colors.bgYellow(status)} state`
			)
		)

	console.table(tasksToShow)
}
