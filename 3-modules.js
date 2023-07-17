/*
// Modules
- CommonJS(library used by node) , Every file is module by default
- Encapsulated code (share only minimum)
*/

// in order to use modules we need to require them and store them in a variable. We need to give to file path where they are located.
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavour');
require('./7-mind-grenade');

// console.log(data);
// console.log(names);


sayHi('susan');
sayHi(names.john);  // Like this we can access the modules
sayHi(names.peter);  