import { onlyNumbers, trimToMaxLength } from "../lib/helpers"

export const hour = (hourInput: string, complete?: boolean, symbol  = ':') => {
   const regex = /(\d{2})(\d{2})/
   const trimmedHour = trimToMaxLength(onlyNumbers(hourInput), 4)

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