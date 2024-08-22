import colors from 'colors'

import { addTask } from '../actions/addTask.js'
import { deleteTask } from '../actions/deleteTask.js'
import { listTasks } from '../actions/listTasks.js'
import { markDone } from '../actions/markDone.js'
import { markInProgress } from '../actions/markInProgress.js'
import { updateTask } from '../actions/updateTask.js'
import { showHelp } from '../actions/showHelp.js'
import { resetFile } from '../actions/resetFile.js'
import { idReassign } from '../actions/idReassign.js'

export const paramHandler = param => {
	const options = {
		add: addTask,
		update: updateTask,
		delete: deleteTask,
		'mark-in-progress': markInProgress,
		'mark-done': markDone,
		list: listTasks,
		help: showHelp,
		reset: resetFile,
		reassign: idReassign
	}

	if (!options[param]) {
		console.log(
			`Invalid parameter\nUse ${colors.bgWhite.black('task -h')} for more info.`
		)
		process.exit(1)
	}

	if (param === 'update')
		return options[param](process.argv[3], process.argv[4])

	return options[param](process.argv[3])
}
