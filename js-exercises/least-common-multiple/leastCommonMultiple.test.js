
import { leastCommonMultiple } from "./leastCommonMultiple";

describe("leastCommonMultiple", () => {
    it('should return the lcm of two numbers',()=>{
        expect(leastCommonMultiple(16,32)).toBe(32)
    })
    it('should return the lcm of two numbers',()=>{
        expect(leastCommonMultiple(4,3)).toBe(12)
    })

});