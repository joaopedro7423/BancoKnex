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




//console.log(query.toQuery());
//nunca esqueça do toQuery se nao pode sair um negocio muito loco 
//console.log(query.toQuery());