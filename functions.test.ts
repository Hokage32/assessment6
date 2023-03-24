const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('shuffleArray equals typeof', () => {
        expect(typeof shuffleArray([1,2,3])).toBe('object')
    })

    test('array has same items', () => {
        expect(shuffleArray([4,5,6])).toContain(4)
    })
})