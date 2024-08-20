import fs from 'fs'
import colors from 'colors'

export const readJsonFromFile = () => {
	const filePath = './tasks.json'

	try {
		const data = fs.readFileSync(filePath, 'utf8')
		// console.log('Task read sucessfully')
		return JSON.parse(data)
	} catch (error) {
		console.error(colors.red('Error reading data from file: '), error)
		process.exit(1)
	}
}
