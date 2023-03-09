const knex = require('./config/database');

let dados = {

    nome: 'Notebook Dell3',
    preco: 3850.10

}

knex.insert(dados).into("produtos")
    .then(()=>{
        console.log(dados)
    })
    .catch((msgErro)=>{
        console.log(msgErro)
    })