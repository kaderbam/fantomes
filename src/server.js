const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json()) // bodyParser va nous permettre d'acceder a notre route
// connexion de a la base de donnée
const dbConfig = require('./config/database.config.js');

mongoose.Promise = global.Promise;
mongoose.set('strictQuery', true);

mongoose.connect('mongodb://127.0.0.1:27017/projFantome')

.then(() => {
    console.log("Databse Connected Successfully!!");    
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});

app.get('/', (req, res) => {
    res.json({"message": "Bienvenue sur le site des Fantomes"});
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

const UserRoute = require('./app/routes/User.js')

app.use('/user',UserRoute)