const knex = require('./config/database');

knex.where({id: 4}).delete().table("produtos")
    .then(()=>{
        console.log("Produto deletado com sucesso")
    })
    .catch((msgErro)=>{
        console.log("Erro ao deletar o produto")
    })