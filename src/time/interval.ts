import { noLeadingZero, onlyNumbers } from "../lib/helpers"

export const interval = (timeInput: string, maxLength: number) => {
   const trimmedTime = noLeadingZero(onlyNumbers(timeInput))

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
