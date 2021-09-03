export const onlyNumbers = (str: string) => String(str).replace(/\D/g, '')

export const noLeadingZero = (nmb: number | string) => String(nmb).replace(/^0+(?!$)/, '')

export const trimToMaxLength = (str: string, nmb: number) => str.replace(new RegExp('(\\d{' + nmb + '})(\\d{'+ (String(str).length - nmb) +'})'), '$1')
