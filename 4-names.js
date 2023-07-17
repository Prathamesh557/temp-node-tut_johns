// local
const secret = 'SUPER SECRET'
// share
const john = 'john'
const peter = 'peter'

// console.log(module)
// export is an object of module. Whatever we are gonna dump inside it , we are gonna access it anywhere in the application.


module.exports = { john, peter }
// through this anywhere in application john, and peter can be accessed but secret will be local.

