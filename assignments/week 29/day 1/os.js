const fs = require('fs')
const os = require('os')
fs.writeFile('systeminfo.txt', `system information is ${os.platform()}\nsystem memory is ${os.freemem()}\nsystem xbit is ${os.arch()}\nsystem core is ${os.cpus().length}\nsystem memory is ${os.freemem()}`, (err) => {
    if (err) throw err
    console.log('file created')
})