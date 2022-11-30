const express = require('express');
const { result } = require('lodash');
const mongoose = require('mongoose');
const products = require('./routes/Products');
const blogs = require('./routes/Blogs');
const services = require('./routes/Services');

const app = express();

app.use(express.json());
app.use(express.static('public'));

// Connection to mongoDB
const URI = 'mongodb+srv://Biztron:biztron1234@biztron-demo-db.jayzmrz.mongodb.net/Blogs-DB?retryWrites=true&w=majority';
mongoose.connect(URI)
     .then((result) => console.log("connected to db..."))
     .catch((err) => console.log(err));


app.listen(4000);

app.set("view engine", "ejs");

app.use('/products', products);
app.use('/blogs', blogs);
app.use('/services', services);



app.use((req,res) => {

  res.status(404);
  console.log("Error has occured..");
});





