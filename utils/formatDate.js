export const formatDate = () => {
	const date = new Date()

	const minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes()
	// The getMonth method returns the month starting from 0, that is, being in January would return 0, that's the reason we add +1
	const output = `${date.getHours()}:${minutes} ${date.getDate()}/${
		date.getMonth() + 1
	}/${date.getFullYear()}`

	// Output: {HH}:{mm} {DD}/{MM}/{YYYY}
	return output
}
