import fs from 'fs'

export const handleCreation = () => {
	const filePath = './tasks.json'
	const data = []

	fs.writeFileSync(filePath, JSON.stringify(data), { flag: 'wx' }, err => {
		// It will return an error in case the file already exists, in that case, we do not have to worry, in case it wasn't created, we create it, but we don't want any console feedback
		return
	})
}
