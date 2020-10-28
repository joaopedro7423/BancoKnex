var knex = require('knex')({
    client:'mysql2',
    connection:{
        host:'127.0.0.1',
        user:'root',
        password:'jfgdij47',
        database: 'knexjs',
        port:'3307'
    }
})

module.exports = knex;