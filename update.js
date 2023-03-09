const knex = require('./config/database');

knex.where({id : 1}).table("produtos").update({nome: 'Notebook HP I3'})
    .then(()=>{
        console.log('Atualizado com Sucesso')
    })
    .catch((msgErro)=>{
        console.log(msgErro)
    })