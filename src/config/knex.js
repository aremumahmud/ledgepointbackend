const dot = require('dotenv')

dot.config()


//environmet variables
const host = process.env.MySQL_HOST
const user = process.env.MySQL_USER
const database = process.env.MySQL_DATABASE
const password = process.env.MySQL_PASSWORD


const fs = require('fs');
const path = require('path');

const caCertPath = path.resolve(__dirname, './ca.pem');
const caCert = fs.readFileSync(caCertPath).toString();
// console.log(caCert)
const knex = require('knex');

const db = knex({
    client: 'mysql',
    connection: {
        host,
        port: 31579,
        user,
        database,
        password,
        ssl: {
            rejectUnauthorized: true,
            ca: `${caCert.toString()}`
        }
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