import { updateObject } from "./updateObject";

describe("updateObject", () => {
    it('should replace the existing array',() => {
        expect(updateObject(1, '_', ['a', 'b', 'c']).toBe(['a', '_', 'c']))
    })
    it('should replace the existing array',() => {
        expect(updateObject(-1, '_', ['a', 'b', 'c']).toBe(['a', 'b', '_']))
    })

});
