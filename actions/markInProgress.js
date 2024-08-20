import colors from 'colors'
import { readJsonFromFile } from './../utils/readJsonFromFile.js'
import { writeJsonToFile } from './../utils/writeJsonToFile.js'

export const markInProgress = id => {
	if (!id) {
		console.log(colors.red("You must specify the task's id"))
		process.exit(1)
	}
	// Returns the data from the file
	const data = readJsonFromFile()

	// const newData = data.filter(task => task.id !== +id)
	const newData = data.map(task => {
		if (task.id === +id) {
			task.status = 'in-progress'
		}

		return task
	})

	writeJsonToFile(newData)

	console.log(
		colors.yellow(
			`Task status has been updated to ${colors.bgYellow('IN PROGRESS')}`
		)
	)
}
