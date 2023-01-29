const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const apiRouter = require('./routes');
const errorHandler = require('./middlewares/errorsHandling');
var cors = require('cors');

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.json());


let mongoose_url =  `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}${process.env.MONGO_DB_CLUSTER}/?retryWrites=true&w=majority`;
mongoose.connect(
 mongoose_url,
).then(() => { 
  console.log('successfully connect to database');
}).catch((err) => console.log("error whith db connection : ", err));
 


app.use('/api/', apiRouter); 
app.use(errorHandler);

app.use((req, res, next) => {
  console.log('Requête reçue !');
  console.log(req.body);
});

// Méthod launch app
app.listen(process.env.PORT, () => {
  console.log('Server launch on port : ', process.env.PORT);
});

 