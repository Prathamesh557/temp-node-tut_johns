
const os = require('os'); // It is built in module , hence we don't need to give the path

// info about current user
const user = os.userInfo();
console.log(user);

// method returns system uptime in seconds
console.log(`The computer uptime is ${os.uptime} seconds`);

const currentOS = {
   name: os.type(),
   release : os.release(),
   totalMem: os.totalmem(),
   freeMem: os.freemem(),
}

console.log(currentOS);

/*
 Built - in - modules
 - 
 They are modules which are designes by others and we can use them in our code. 
*/