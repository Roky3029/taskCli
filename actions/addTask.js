import { formatDate } from '../utils/formatDate.js'
import { readJsonFromFile } from '../utils/readJsonFromFile.js'
import { writeJsonToFile } from '../utils/writeJsonToFile.js'
import colors from 'colors'

export const addTask = text => {
	if (!text) {
		console.log(colors.red("You must specify the task's description"))
		process.exit(1)
	}
	// Returns the data from the file
	const data = readJsonFromFile()

	// As tasks will be added with the ID sorted ascendently, the last element will have the higher ID number, so by adding one to that we obtain the new id
	// on the execution of the CLI a sort will be done in order to prevent errors regarding this method as well as some validations
	const newTaskId = data.length ? data[data.length - 1].id + 1 : 1

	const newTasks = [
		...data,
		{
			id: newTaskId,
			description: text,
			status: 'in-progress',
			createdAt: formatDate(),
			updatedAt: formatDate()
		}
	]

	writeJsonToFile(newTasks)
	console.log(colors.green('Task created successfully'))
}
