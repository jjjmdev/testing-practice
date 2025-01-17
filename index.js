function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1)
}

function reverseString(str) {
	let splitStr = str.split("")
	var reverseStrArr = splitStr.reverse()

	return reverseStrArr.join("")
}

const calculator = {
	add(x, y) {
		return x + y
	},
	subtract(x, y) {
		return x - y
	},
	divide(x, y) {
		return x / y
	},
	multiply(x, y) {
		return x * y
	},
}

module.exports = { capitalize, reverseString, calculator }
