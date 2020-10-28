var database = require("./database");



/* INSERT de dados com knex
var dados =[{
    nome: "MW3",
    preco: 2100.10
},{
    nome: "GTA",
    preco: 60
},{
    nome: "Wow",
    preco: 10.90
}
]
 database.insert(dados).into("games").then(data=>{
    console.log(data);
 }).catch(err=>{
     console.log(err);
 });

*/

/*SELECT no banco de dados
        select       ||         from     ||
database.select(["id",'preco']).table("games").then(data =>{
    console.log(data);
}).catch(err=>{
    console.log(err);
})
*/



/* WHERE
database.select()
.where({nome:"mario"})
.table("games").then(data=>{
    console.log(data)
}).catch(err=>{
    console.log(err);
});
*/



/*RAW
database.raw("SELECT * FROM games").then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err);
})
*/

/*DELETE
database.where({id:3}).delete().table("games").then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err);
})
*/

/*UPDATE
database.where({id: 5}).update({preco: 16.80}).table("games").then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(data);
})
*/

/*ORDERBY
database.select().table("games").orderBy("id","desc").then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err);
});
*/

/*relacionamento 1 - 1 usa o innerJoin 
database.select(["games.id","estudios.id as estudio_id","games.id as game_nome","estudios.nome as estudio_nome" ]).table("games").innerJoin("estudios","estudios.game_id","games_id").where("games.id").then(data=>{
    console.log(data);
})
*/

/* 1 - M
database.select(["games.*","estudios.nome as estudio_nome"]).table("games").innerJoin("estudios","estudios.game_id","games.id").then(data=>{
    var estudiosGamesArray = data;
    var game = {
        id:0,
        nome:"";
        estudios:[]
    }
    game.id = data[0].id;
    game.nome = data[0].nome;

    data.forEach(estudio=>{
        game.estudios.push({nome:estudio.estudio_nome});
    });
    console.log(game);
}).catch(err=>{
    console.log(err);
});
*/

/*N - N
database.select([
    "estudios.nome as estudio_nome",
    "games.nome as game_nome",
    "games.preco"
]).table("games_estudios")
.innerJoin("games","games.id","games_estudios.game_id")
.innerJoin("estudios","estudios.id","games_estudios.estudio_id")
.where("estudios.id",2)
.then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err);
});
*/


/*TRNSAÇÃO
async function testeTransacao(){
    try{
        await database.transaction(async trans=>{
            await database.insert({nome:"Qualquer Nome"}).table("estudios");
            await database.insert({nome:"Mojang"}).table("estudios");
            await database.insert({nome:"Phonix"}).table("estudios");
            await database.insert({nome:"Gearbox"}).table("estudios");
        });
       

    }catch(err){
        console.log();
    }
}
testeTransacao();
*/

//console.log(query.toQuery());
//nunca esqueça do toQuery se nao pode sair um negocio muito loco 
//console.log(query.toQuery());