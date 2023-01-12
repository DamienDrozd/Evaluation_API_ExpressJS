const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
// const apiRouter = require('./routes');
const errorHandler = require('./src/middlewares/errorsHandling');

app.use(bodyParser.json());
let mongoose_url =  `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}${process.env.MONGO_DB_CLUSTER}/?retryWrites=true&w=majority`;
mongoose.connect(
 mongoose_url,
).then(() => { 
  console.log('successfully connect to database');
}).catch((err) => console.log("error whith db connection : ", err));
 
// app.use('/api/v1', apiRouter); 
// app.use(errorHandler);

// Méthod launch app
app.listen(process.env.PORT, () => {
  console.log('Server launch on port : ', process.env.PORT);
});

