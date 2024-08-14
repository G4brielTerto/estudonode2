const fs = require('fs')
const path = require('path')

// create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if(err) throw err;
//     console.log('Pasta criada...')
// })

//create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Olá mundo', err => {
//     if(err) throw err;
//     console.log('Arquivo criado...')

//     // File append
//     fs.appendFile(
//         path.join(__dirname, '/test', 'hello.txt'), 
//         'Eu amo Node.js', 
//         err => {
//             if(err) throw err;
//             console.log('Arquivo criado...')
//         }
//     )
// })

// read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//     if(err) throw err;
//     console.log(data)
// })

// rename file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), (err, data) => {
    if(err) throw err;
    console.log('Arquivo renomeado')
})
