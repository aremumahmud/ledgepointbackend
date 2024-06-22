const dot = require('dotenv')

dot.config()

console.log(process.env)
    //environmet variables
const host = process.env.MySQL_HOST
const user = process.env.MySQL_USER
const database = process.env.MySQL_DATABASE
const password = process.env.MySQL_PASSWORD


const knex = require('knex');

const db = knex({
    client: 'mysql',
    connection: {
        host,
        port: 2083,
        user,
        database,
        password
    }
});

class DB {

    constructor() {
        this.knex = db
    }

    query(sql, options, callback) {
        db.raw(sql, options).then(res => {
            callback && process.nextTick(() => callback(null, res))
        }).catch(err => {
            callback && process.nextTick(() => callback(err, null))
        })
    }

    knex() {
        return db
    }

}


module.exports = new DB();
module.exports = new DB();
module.exports = new DB();
module.exports = new DB();