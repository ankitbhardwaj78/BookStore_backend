const express = require('express')
const path = require('path')
var session = require('express-session');

const app = express();

app.use(session({ secret: 'Ankit', saveUninitialized: true, resave: false }));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/uploads', express.static('uploads'))
app.use('/api', require('./routes/api').route)

app.set('port', process.env.PORT || 3000)
app.listen(app.get('port'), function () {
    console.log('server started at http://localhost:3000/');

})