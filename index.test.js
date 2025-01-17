const { capitalize, reverseString, calculator } = require("./index.js")

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
