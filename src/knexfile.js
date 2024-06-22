module.exports = {
    development: {
        client: 'mysql2',
        connection: {
            host: '127.0.0.1',
            user: 'root',
            password: '',
            database: 'client_backend'
        }
    },
    production: {
        client: 'mysql2',
        connection: {
            host: '127.0.0.1',
            user: 'your_db_user',
            password: 'your_db_password',
            database: 'client_backend'
        }
    }
};