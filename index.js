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
	let arr = str.split("").map((curr) => {
		let charCode = curr.charCodeAt(0)

		if (charCode >= 65 && charCode <= 90) {
			charCode = charCode + value
			charCode = charCode > 90 ? (charCode % 90) + 64 : charCode
		} else if (charCode >= 97 && charCode <= 122) {
			charCode = charCode + value
			charCode = charCode > 122 ? (charCode % 122) + 96 : charCode
		}

		return charCode
	})

	return String.fromCharCode(...arr)
}

module.exports = { capitalize, reverseString, calculator, caesarCipher }
