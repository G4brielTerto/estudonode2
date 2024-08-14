const url = require('url')

const myUrl = new URL('http://meusite.com:8000/hello.html?id=100&status=ativo')

// serialized url
console.log(myUrl.href)
console.log(myUrl.toString())
// host (root domain)
console.log(myUrl.host)
// hostname (does not get port)
console.log(myUrl.hostname)
// pathname
console.log(myUrl.pathname)
// serialized query
console.log(myUrl.search)
// params object
console.log(myUrl.searchParams)
// add param
myUrl.searchParams.append('abc','123')
console.log(myUrl.searchParams)
// loop through params
myUrl.searchParams.forEach((valor, nome) => console.log(`${nome}: ${valor}`))