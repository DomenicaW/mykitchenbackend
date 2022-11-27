require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const methodOverride = require('method-override');

const Recipe = require('./models/Recipe.js')

//importing db
require('./config/db.connection.js')

//*-*-*-MIDDLEWARE-*-*-*
//making sure form submits info to server:
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(methodOverride('_method'));

require('./config/db.connection.js')


//import recipe from models folder:



app.get('/', (req, res) =>{
  res.send('im working here')
})
app.listen(PORT, () =>{
  console.log('server is running 🥳')
})

Recipe.find((err, recipes) =>{
  console.log(recipes)

})
