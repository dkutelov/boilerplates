const products = require("./products")
// @ponicode
describe("products.default", () => {
    test("0", () => {
        let param1 = [["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"]]
        let callFunction = () => {
            products.default(param1, { sortBy: "date", slectByBrand: "Expressway", slectByScreenSize: "Expressway", slectByCamera: "4.0.0-beta1\t", priceRange: { key2: "Hello, world!" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param1 = [["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"]]
        let callFunction = () => {
            products.default(param1, { sortBy: "price", slectByBrand: "Port", slectByScreenSize: "Lights", slectByCamera: "1.0.0", priceRange: { key2: "Foo bar" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param1 = [["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"]]
        let callFunction = () => {
            products.default(param1, { sortBy: "price", slectByBrand: "Extensions", slectByScreenSize: "Port", slectByCamera: "1.0.0", priceRange: { key2: "Foo bar" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param1 = [["Bacon", "Mouse", "Ball", "Hat", "Shoes"], "Bacon"]
        let callFunction = () => {
            products.default(param1, { sortBy: "price", slectByBrand: "Port", slectByScreenSize: "Extensions", slectByCamera: "v4.0.0-rc.4", priceRange: { key2: "foo bar" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param1 = [["Bacon", "Mouse", "Ball", "Hat", "Shoes"], "Hat"]
        let callFunction = () => {
            products.default(param1, { sortBy: "price", slectByBrand: "Expressway", slectByScreenSize: "Harbors", slectByCamera: "^5.0.0", priceRange: { key2: "Foo bar" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            products.default([], { sortBy: undefined, slectByBrand: undefined, slectByScreenSize: undefined, slectByCamera: undefined, priceRange: undefined })
        }
    
        expect(callFunction).not.toThrow()
    })
})
