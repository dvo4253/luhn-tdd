import luhnTest, { luhnSum } from '.';
import { expect } from 'chai';

describe('luhn sum', () => {
    it('should return 7 for (15)', () => {
        expect(luhnSum(15)).to.equal(7);
    })

    it('should return 2 for (51)', () => {
        expect(luhnSum(51)).to.equal(2);
    })

    it('should return 29 for (927143)', () => {
        expect(luhnSum(927143)).to.equal(28);
    })

    it('should return ??? for (abc)', () => {
        expect(Number.isNaN(luhnSum('abc'))).to.equal(true);
    })
})

describe('luhn tests', () => {
    it('should return false if num < 0', () => {
        expect(luhnTest(-1)).to.equal(false);
    })
    it('should return false if #num > 16', () => {
        expect(luhnTest(11111111111111111)).to.equal(false);
    })

    it('should return true if num is divisible by 10', () => {
        expect(luhnTest(4368020935033742)).to.equal(true);
    })

    it('should return true if num is divisible by 10 (16 digit)', () => {
        expect(luhnTest(174)).to.equal(true);
    })

    it('should return false if num is not divisible by 10', () => {
        expect(luhnTest(1437486333098805)).to.equal(false);
    })
})