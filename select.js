const knex = require('./config/database')

knex.select("*")
    .table("produtos")
    .then((produtos)=>{
        console.log(produtos)
    })
    .catch((msgErro)=>{
        console.log(msgErro)
    })

knex.select("*").where({id: 1}).table("produtos")
    .then((produto)=>{
        console.log(produto)
    })
    .catch((msgErro)=>{
        console.log(msgErro);
    })    

    //whereRaw
    //WhereOr
    //knex.raw

    knex.raw("SELECT * FROM produtos WHERE id = 1")
        .then((produto)=>{
            console.log(produto[0])
        })
        .catch((msgErro)=>{
            console.log(msgErro)
        })