const fs = require('fs')
const http = require('http')

const port = 1234

const server = http.createServer(function (req, res) {
    fs.readFile('systeminfo.txt', 'utf-8', (err, data) => {
        if (err) throw err
        res.write(data)
        res.end()
    })
})

server.listen(port, (err) => {
    if (err) throw err
    console.log('server started')
})