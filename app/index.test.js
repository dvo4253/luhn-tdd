import luhnTest from '.'
import { expect } from 'chai';

describe('luhn tests', () => {

    it('zero should return false', () => {
        expect(luhnTest('0')).to.equal(false)
    })

    it('greater than 16 digits should return false', () => {
        expect(luhnTest('935923987293847239847')).to.equal(false)
    })

    it('125 should return true', () => {
        expect(luhnTest('125')).to.equal(true)
    })

    it('1685 should return true', () => {
        expect(luhnTest('1685')).to.equal(true)
    })

    it('98764 should return true', () => {
        expect(luhnTest('98764')).to.equal(true)
    })

    it('12345678903 should return true', (done) => {
        expect(luhnTest('12345678903')).to.equal(true)
        done()
    })
})