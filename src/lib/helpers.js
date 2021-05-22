const onlyNumbers = (str) => String(str).replace(/\D/g, '')

const noLeadingZero = (nmb) => String(nmb).replace(/^0+(?!$)/, '')

const trimToMaxLength = (str, nmb) => str.replace(new RegExp('(\\d{' + nmb + '})(\\d{'+ (String(str).length - nmb) +'})'), '$1')

module.exports.onlyNumbers = onlyNumbers

module.exports.noLeadingZero = noLeadingZero

module.exports.trimToMaxLength = trimToMaxLength