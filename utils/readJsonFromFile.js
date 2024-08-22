import fs from 'fs'
import colors from 'colors'

export const readJsonFromFile = () => {
	const filePath = './tasks.json'

	try {
		const data = fs.readFileSync(filePath, 'utf8')
		return JSON.parse(data)
	} catch (error) {
		console.error(
			colors.red(
				'Error reading data from file.\n\nThis is likely because the file has been modified outside the program scope and it cannot be fixed'
			)
		)
		console.error(
			`To reset the file and begin with an empty one, execute ${colors.yellow.bgYellow(
				'task reset'
			)}`
		)
		console.log(error)
		process.exit(1)
	}
}
