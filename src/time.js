'use strict'
Object.defineProperty(exports, "__esModule", { value: true })

const { onlyNumbers } = require('./lib/helpers')

const interval = (timeInput, maxLength) => {
   const trimmedTime = onlyNumbers(timeInput).replace(/^0+(?!$)/, '')

   if (maxLength && maxLength < 5) {
      throw new Error('maxLength must be greater than or equal to 5')
   }

   if (maxLength && trimmedTime.length > maxLength) return trimmedTime
 
   switch (trimmedTime.length) {
     case 0:
       return ``
     case 1:
       return `0h0${trimmedTime}m`
     case 2:
       return `0h${trimmedTime}m`
     case 3:
     case 4:
     default:
       const regex = new RegExp('(\\d{' + (trimmedTime.length - 2) + '})(\\d{2})')
       const hours = trimmedTime.replace(regex, '$1')
       const minutes = trimmedTime.replace(regex, '$2')
       return `${hours}h${minutes}m`
   }
}

const hour = (hourInput, complete, symbol  = ':') => {
const regex = /(\d{2})(\d{2})/
   const trimmedHour = hourInput.replace(/\D/g, '')

   if (complete && trimmedHour.length < 4) {
      switch (trimmedHour.length) {
         case 1:
         let hour_1 = `${trimmedHour}0`
         if (Number(hour_1) > 9) hour_1 = `0${trimmedHour}`
         const minute_1 = '00'
         return `${Number(hour_1) > 23 ? '23' : hour_1}${symbol}${minute_1}`
         case 2:
         const minute_2 = '00'
         return `${Number(trimmedHour) > 23 ? '23' : trimmedHour}${symbol}${minute_2}`
         case 3:
         const regex = /(\d{2})(\d{1})/
         const hour_3 = trimmedHour.replace(regex, '$1')
         const minute_3 = `${trimmedHour.replace(regex, '$2')}0`
         return `${Number(hour_3) > 23 ? '23' : hour_3}${symbol}${Number(minute_3) > 59 ? '59' : minute_3}`
      }
   }

   if (trimmedHour.length < 4) return trimmedHour

   const hour = trimmedHour.replace(regex, '$1')
   const minute = trimmedHour.replace(regex, '$2')

   return `${Number(hour) > 23 ? '23' : hour}${symbol}${Number(minute) > 59 ? '59' : minute}`
}

exports.interval = interval
exports.hour = hour