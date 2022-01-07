module.exports = {
    config(options) {
        let config = {}

        if (options.env === 'edwinpoueriet.dev') {
            config.dbConfig = {
                username: 'postgres',
                password: 'password',
                database: 'library',
                host: 'localhost',
                port: '5432',
                dialect: 'postgres'
            }
        }
        return config
    }
}