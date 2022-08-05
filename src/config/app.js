const convict = require('convict');
const { url } = require('convict-format-with-validator');

const schema = {
    app: {
        port: {
            doc: 'The port to bind.',
            format: 'port',
            default:7000
            env: 'PORT',
        }
    },
    db: {
        url: {
            default: 'mongodb://localhost:27017/googleAuth',
            doc: 'DB_URL',
        }
    },
    google: {
        clientID: {
            default: 'CLIENT_ID_NOT_SET',
            env: 'GOOGLE_CLIENT_ID',
        },
        clientSecret: {
            default: 'CLIENT_SECRET_NOT_SET',
            env: 'GOOGLE_CLIENT_SECRET',
            sensitive: true,
        },
        callbackURL: {
            default: '/auth/google/callback',
            env: 'GOOGLE_CALLBACK_URL',
        },
        scope: {
            format: Array,
            default: ['email', 'profile'],
        },
        pkce: {
            format: Boolean,
            default: true,
        },
        state: {
            format: Boolean,
            default: true,
        },
    },
}

convict.addFormat(url);
const config = convict(schema);
module.exports = { config };
