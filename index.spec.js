const maskWizard = require('./dist')


describe('interval', () => {
   it('is a function', function() {
      expect(typeof maskWizard.time.interval).toBe('function')
   })

   it('mask interval input', () => {
      expect(maskWizard.time.interval(1)).toBe('0h01m')
      expect(maskWizard.time.interval(13)).toBe('0h13m')
      expect(maskWizard.time.interval(131)).toBe('1h31m')
      expect(maskWizard.time.interval(1312)).toBe('13h12m')
   })
})

describe('hour', () => {
   it('is a function', function() {
      expect(typeof maskWizard.time.hour).toBe('function')
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

      expect(maskWizard.time.hour(hour)).toEqual('11:55')
      expect(maskWizard.time.hour(wrongHour)).toEqual('23:55')
      expect(maskWizard.time.hour(wrongMinutes)).toEqual('11:59')
      expect(maskWizard.time.hour(incompleteHour1, true)).toEqual('01:00')
      expect(maskWizard.time.hour(incompleteHour2, true)).toEqual('11:00')
      expect(maskWizard.time.hour(incompleteHour3, true)).toEqual('11:50')
      expect(maskWizard.time.hour(incompleteWrongHour, true)).toEqual('23:00')
      expect(maskWizard.time.hour(incompleteWrongMinutes, true)).toEqual('11:59')
   })

   it('mask hour input with a different symbol', () => {
      expect(maskWizard.time.hour('1155', null , '?')).toEqual('11?55')
   })

   it('should limit if maxLength is provided', () => {
      expect(maskWizard.time.hour('115567')).toEqual('11:55')
   })
})