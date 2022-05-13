require('dotenv').config();

/*[ START -- Library Imports ]*/
const express = require('express');
const handlebars = require('express-handlebars');
const debug = require('debug')('server:server');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const moment = require('moment');
/*[ END -- Library Imports ]*/

/*[ START -- Functions ]*/

/*[ END -- Functions ]*/


/*[ START -- Server Config ]*/
const app = express();
const handlebarsHelpers = handlebars.create({
  helpers: {
       formatPrice: (price) => {
            return price == undefined ? '$0.00' : '$' + price.toFixed(2);
       },
       formatDate: (date) => moment(date).format('MMMM Do YYYY'),
       fromNow: (date) => moment(date).fromNow(),
       not: (value) => !value,
       eq: (a, b) => a == b,
       or: (a, b) => a || b,
       and: (a, b) => a && b,
       tern: (condition, a, b) => (condition ? a : b),
  },
});
app.engine('handlebars', handlebars.engine());

app.set('view engine', 'handlebars');
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/*[ END -- Server Config ]*/

/*[ START -- Routes ]*/
app.get('/', (req, res) => {
  res.render('home', {title: "Home"});

});
/*[ END -- Routes ]*/

/*[ START -- API Routers ]*/

/*[ END -- API Routers ]*/

/*[ START -- Route Routers ]*/

/*[ END -- Route Routers ]*/

/*[ START -- Static Files ]*/
app.use(express.static('public'));
app.use('/bootstrap', express.static('node_modules/bootstrap/dist'));
app.use('/jquery', express.static('node_modules/jquery/dist'));
app.use('/bootswatch', express.static('node_modules/bootswatch/dist'));
app.use('/images', express.static('images'));
/*[ END -- Static Files ]*/

/*[ START -- Server Start ]*/
    const port = process.env.PORT  || 3000;
    const hostname = process.nextTick.HOSTNAME || 'localhost';
    app.listen(port, debug(`Server start at http://${hostname}:${port} @ ${moment().format('h:mm:ss a')}`))
/*[ END -- Server Start ]*/
