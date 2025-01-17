function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1)
}

function reverseString(str) {
	let splitStr = str.split("")
	var reverseStrArr = splitStr.reverse()

	return reverseStrArr.join("")
}

module.exports = { capitalize, reverseString }
