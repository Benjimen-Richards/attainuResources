var http = require('http')
var fs = require('fs')
const port = 1234
const server = http.createServer((re1, res) => {
    fs.readFile('db.json', (err, data) => {
        if (err) console.log(err)
        else console.log(data)
    })
    // res.write('server data')
    res.end()
})
server.listen(port)