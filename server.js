const express = require('express')
const path = require('path')
var session = require('express-session');

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(session({ secret: 'Ankit' ,saveUninitialized:true,resave:false}));

app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
app.use('/api', require('./routes/api').route)


app.listen(3000, () => console.log('Server started at http://localhost:3000'))