// console.log(__dirname, __filename )

class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    cumprimento(){
        console.log(`Olá, meu nome é ${this.name} e eu tenho ${this.age} anos de idade.`)
    }
}

module.exports = Person;