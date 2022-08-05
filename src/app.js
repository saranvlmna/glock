const  express  = require('express');
const  path  = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const { dbConfig } = require('./config');
const { googleAuth }= require('./router');

const app = express();


//middleware
app.use(session({ secret: 'kannappan' }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(cookieParser());

dbConfig();
app.use('/auth', googleAuth);

module.exports = { app };