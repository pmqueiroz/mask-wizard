import * as maskWizard from '../../dist'

describe('interval', () => {
   it('is a function', function() {
      expect(typeof maskWizard.time.interval).toBe('function')
   })

   it('mask interval input', () => {
      expect(maskWizard.time.interval('1', 5)).toBe('0h01m')
      expect(maskWizard.time.interval('13', 5)).toBe('0h13m')
      expect(maskWizard.time.interval('131', 5)).toBe('1h31m')
      expect(maskWizard.time.interval('1312', 5)).toBe('13h12m')
   })
})