const http = require('http')

//create server object
http.createServer((req, res) => {
    // write response
    res.write('Olá mundo!')
    res.end()
}).listen(5000, () => console.log('Servidor funcionando...'))