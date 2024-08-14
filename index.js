// console.log('Uma mensagem')

// const Person = require('./person')

// const pessoa = new Person('Roberto',23)

// console.log(pessoa.cumprimento())

// exporting events
// const Logger = require('./logger')

// const logger = new Logger()

// logger.on('mensagem', (data) => console.log('Called listener: ', data))

// logger.log('Olá mundo')
// logger.log('teste')
// logger.log('testando2')

const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req, res) =>{
    // // console.log(req.url)
    // if (req.url === '/'){
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), 
    //       (err, content) => {
    //         if (err) throw err
    //         res.writeHead(200, { 'Content-Type': 'text/html'})
    //         res.end(content)  
    //       }
    //     )

    //     // res.writeHead(200, { 'Content-Type': 'text/html'})
    //     // res.end("<h1>texto</h1>")
    // }

    // if (req.url === '/about'){
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), 
    //       (err, content) => {
    //         if (err) throw err
    //         res.writeHead(200, { 'Content-Type': 'text/html'})
    //         res.end(content)  
    //       }
    //     )

    //     // res.writeHead(200, { 'Content-Type': 'text/html'})
    //     // res.end("<h1>texto</h1>")
    // }

    // build file path
    let filePath = path.join(__dirname, 'public', req.url === '/' ?
      'index.html' : req.url
    )

    //extension of file
    let extname = path.extname(filePath)

    //initial content type
    let contentType = 'text/html'

    // check
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`servidor rodando na porta: ${PORT}`))
