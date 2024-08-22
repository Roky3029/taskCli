import fs from 'fs'
import colors from 'colors'
import { handleCreation } from '../utils/handleCreation.js'

// Configure prompt-sync
import promptSync from 'prompt-sync'
const prompt = promptSync({ sigint: true })

export const resetFile = () => {
	const confirmation = prompt(
		`Are you sure you want to remove the tasks file? (Ctrl + C to exit)\n${colors.red(
			"WARNING: This will delete your current tasks and they won't be able to be recovered.\n"
		)}Enter your answer here (Y/n): `
	)

	if (confirmation.toLowerCase() === 'n') process.exit()
	if (confirmation.toLowerCase() !== 'y' && confirmation !== '') {
		console.log('Invalid input')
		process.exit(1)
	}
	// This means the user has input either 'y' or a blank input, just as a Linux terminal confirmation
	console.log(colors.red('\nDeleting the file...'))
	fs.unlinkSync('./tasks.json', err => {
		if (err) {
			console.log('There has been an unexpected error. Try again')
			process.exit(1)
		}
		return
	})
	console.log(
		colors.yellow('File has been deleted sucessfully'),
		'\nCreating new file...'
	)

	handleCreation()

	console.log(colors.green('The file has been restored successfully'))
}
