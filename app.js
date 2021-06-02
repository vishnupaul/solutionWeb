const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const PORT = process.env.PORT || 8000;
const db = require('./config/mongoose');

app.use(express.urlencoded());
app.use(express.static('./assets'));

app.use(cookieParser());

app.use(expressLayouts);
// extract style and scripts from sub page into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// use express router
app.use('/', require('./routes'));

//setup view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(PORT, console.log(`Server started On port ${PORT}`));
