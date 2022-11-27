require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const methodOverride = require('method-override');

//*-*-*-MIDDLEWARE-*-*-*
//making sure form submits info to server:
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(methodOverride('_method'));


//import recipe from models folder:
const Recipe = require('./models/recipes.js')



app.get('/', (req, res) =>{
  res.send('im working here')
})
app.listen(PORT, () =>{
  console.log('server is running 🥳')
})
