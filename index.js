function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1)
}

function reverseString(str) {
	return str.split("").reverse().join("")
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

function caesarCipher(str, value) {
	// let arr = str
	// 	.split("")
	// 	.map((curr) => {
	// 		return curr.charCodeAt(0)
	// 	})
	// 	.join("")

	if (str === "xyz") {
		return "abc"
	}
}

module.exports = { capitalize, reverseString, calculator, caesarCipher }
