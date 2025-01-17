const {
	capitalize,
	reverseString,
	calculator,
	caesarCipher,
	analyzeArray,
} = require("./index.js")

it("Capitalize", () => {
	expect(capitalize("hello")).toBe("Hello")
})

it("Reverse a String", () => {
	expect(reverseString("hello")).toBe("olleh")
})

it("Calculator: Add", () => {
	expect(calculator.add(3, 7)).toBe(10)
})

it("Calculator: Subtract", () => {
	expect(calculator.subtract(3, 7)).toBe(-4)
})

it("Calculator: Multiple", () => {
	expect(calculator.multiply(3, 7)).toBe(21)
})

it("Calculator: Divide", () => {
	expect(calculator.divide(21, 7)).toBe(3)
})

it("Caesar Cipher (1)", () => {
	expect(caesarCipher("xyz", 3)).toBe("abc")
})

it("Caesar Cipher (2)", () => {
	expect(caesarCipher("HeLLo", 3)).toBe("KhOOr")
})

it("Caesar Cipher (3)", () => {
	expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!")
})

it("Analyze Array", () => {
	expect(analyzeArray()).toEqual({
		average: 4,
		min: 1,
		max: 8,
		length: 6,
	})
})
