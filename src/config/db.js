const { connect, connection } = require('mongoose');
const { config } = require('./app');

const dbUrl = config.get('db.url');
const port = config.get('app.port');

const params = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

module.exports = {
    dbConfig: () => {
        connect(`${dbUrl}`, params)
        connection.on('connected', () => {
            console.log(`DB has been connected to ${port}`);
        })
    }
}