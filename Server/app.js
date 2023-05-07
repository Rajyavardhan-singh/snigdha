const express = require ('express');
const mongoose = require ('mongoose')    //Importing Mongoose for DB
const cors = require('cors');           //Connecting the frontend and backend
//const bodyParser = require('body-parser');
const route = require ("./Route/index");

const Port = 5500;
const hostname = 'localhost';
const atlasDbUrl = 'mongodb+srv://Sucharita7:UJtNT36T8nBmunJb@cluster0.6fe6e9q.mongodb.net/Zomato-76?retryWrites=true&w=majority';  //MongoDb Atlas Connection Url

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200
}

const app = express();
//app.use(bodyParser.json());     // in 4.4 above version of express we don't need body-parser anymore
app.use(cors(corsOptions));
app.use(express.json());
app.use('/', route);

mongoose.connect(atlasDbUrl, {                      //Creating a MongoDB Connection
    useNewUrlParser: true, useUnifiedTopology: true          //Creating a new connection with DB and using the MongoDB Driver's connection management engine
})

    .then(res => {
        app.listen(Port, hostname, () => {
            console.log(`Server is running at ${hostname}: ${Port}`)
        });
    })
    .catch(err => console.log(err));
