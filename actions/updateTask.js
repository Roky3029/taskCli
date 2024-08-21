import colors from 'colors'
import { readJsonFromFile } from './../utils/readJsonFromFile.js'
import { writeJsonToFile } from './../utils/writeJsonToFile.js'
import { formatDate } from '../utils/formatDate.js'

export const updateTask = (id, newName) => {
	if (!id || !newName) {
		console.log(
			colors.red("You must specify both the task's id and its description")
		)
		process.exit(1)
	}
	// Returns the data from the file
	const data = readJsonFromFile()

	// const newData = data.filter(task => task.id !== +id)
	const newData = data.map(task => {
		if (task.id === +id) {
			task.description = newName
			task.updatedAt = formatDate()
		}

		return task
	})

	writeJsonToFile(newData)

	console.log(colors.green(`Task has been updated successfully`))
}
