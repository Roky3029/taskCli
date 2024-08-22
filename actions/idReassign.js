import { readJsonFromFile } from '../utils/readJsonFromFile.js'
import { writeJsonToFile } from '../utils/writeJsonToFile.js'

export const idReassign = () => {
	const tasks = readJsonFromFile()

	const tasksReassigned = tasks.map((task, i) => {
		task.id = i + 1
		return task
	})

	writeJsonToFile(tasksReassigned)
}
