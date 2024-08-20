import fs from 'node:fs'
import colors from 'colors'

export const writeJsonToFile = content => {
	const jsonData = JSON.stringify(content)
	const filePath = './tasks.json'

	fs.writeFile(filePath, jsonData, err => {
		if (err) {
			console.log(colors.red('There has been an unexpected error: '), err)
			process.exit(1)
		}

		// console.log('File written sucessfully')
	})
}
