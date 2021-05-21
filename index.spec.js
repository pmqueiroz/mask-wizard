const maskWizard = require('./index')


describe('interval', () => {
   it('is a function', function() {
      expect(typeof maskWizard.interval).toBe('function')
   })

   it('mask interval input', () => {
      expect(maskWizard.interval(1)).toBe('0h01m')
      expect(maskWizard.interval(13)).toBe('0h13m')
      expect(maskWizard.interval(131)).toBe('1h31m')
      expect(maskWizard.interval(1312)).toBe('13h12m')
   })
})

describe('hour', () => {
   it('is a function', function() {
      expect(typeof maskWizard.hour).toBe('function')
   })

   it('mask hour input', () => {
      const hour = '1155'
      const incompleteHour1 = '1'
      const incompleteHour2 = '11'
      const incompleteHour3 = '115'
      const wrongHour = '2555'
      const wrongMinutes = '1160'
      const incompleteWrongHour = '25'
      const incompleteWrongMinutes = '116'

      expect(maskWizard.hour(hour)).toEqual('11:55')
      expect(maskWizard.hour(wrongHour)).toEqual('23:55')
      expect(maskWizard.hour(wrongMinutes)).toEqual('11:59')
      expect(maskWizard.hour(incompleteHour1, true)).toEqual('01:00')
      expect(maskWizard.hour(incompleteHour2, true)).toEqual('11:00')
      expect(maskWizard.hour(incompleteHour3, true)).toEqual('11:50')
      expect(maskWizard.hour(incompleteWrongHour, true)).toEqual('23:00')
      expect(maskWizard.hour(incompleteWrongMinutes, true)).toEqual('11:59')
   })

   it('mask hour input with a different symbol', () => {
      expect(maskWizard.hour('1155', null , '?')).toEqual('11?55')
   })
})