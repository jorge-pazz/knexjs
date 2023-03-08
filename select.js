const knex = require('./config/database')

knex.select("*")
    .table("produtos")
    .then((produtos)=>{
        console.log(produtos)
    })
    .catch((msgErro)=>{
        console.log(msgErro)
    })