import * as maskWizard from '../../dist'

describe('Test masks', () => {
    it('exports module correctly a function', function () {
        expect(typeof maskWizard.masks.genericMask).toBe('function');
    })

    it.each([
        [". . /", "9", "9"],
        ["# # /", "9", "9"],
        [". . /", "900", "9 0 /0"],
        [". . /", "89", "8 9"],
        ["# # /", "89", "8 9"],
        ["(..) .. ... ...", "9999999999", "(99) 99 999 999"]
    ])('test generic mast getting resolved', (mask, val, expectedVal) => {
        expect(maskWizard.masks.genericMask(mask, val)).toStrictEqual(expectedVal);
    })
})