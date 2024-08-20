import colors from 'colors'
import { readJsonFromFile } from './../utils/readJsonFromFile.js'
import { writeJsonToFile } from './../utils/writeJsonToFile.js'

export const deleteTask = id => {
	if (!id) {
		console.log(colors.red("You must specify the task's id"))
		process.exit(1)
	}
	// Returns the data from the file
	const data = readJsonFromFile()

	const newData = data.filter(task => task.id !== +id)

	writeJsonToFile(newData)

	console.log(colors.yellow('The task has been deleted'))
}
