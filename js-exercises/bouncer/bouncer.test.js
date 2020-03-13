import { bouncer } from "./bouncer";

describe("bouncer", () => {
    it('should return array with truthy values',()=>{
        expect(bouncer([false, null, 0, NaN, undefined, '', 9])).toBe([9])
    })
});
