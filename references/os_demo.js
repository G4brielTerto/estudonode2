const os = require('os')

// platform
console.log(os.platform())

//cpu arch
console.log(os.arch())

//cpu core info
console.log(os.cpus())

// free memory
console.log(os.freemem())

// total memory
console.log(os.totalmem())

// home dir
console.log(os.homedir())

// uptime(in seconds)
console.log(os.uptime())