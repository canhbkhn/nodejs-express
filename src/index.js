const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const path = require('path');
const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

// http logger
//app.use(morgan('combined'));

// template engine
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

console.log('PATH: ' + path.join(__dirname, 'resources/views'));
app.set('views', path.join(__dirname, 'resources/views'));

app.use(express.urlencoded());
app.use(express.json());

route(app);

app.listen(port, ()=>console.log(`Server listening from: ${port}`));