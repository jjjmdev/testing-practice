const { capitalize, reverseString } = require("./index.js")

it("Capitalize", () => {
	expect(capitalize("hello")).toBe("Hello")
})

it("Reverse a String", () => {
	expect(reverseString("hello")).toBe("olleh")
})
