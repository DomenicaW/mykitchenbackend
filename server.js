require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const methodOverride = require('method-override');
const cors = require('cors');

const routes = require('./routes');

const Recipe = require('./models/Recipe.js')

//importing db connection
require('./config/db.connection.js')

const whitelist = ['http://localhost:3000/', `${process.env.FRONTEND_URL}`]
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Im sorry, the subscriber cannot be reached'))
    }
  }
}

let baseURL = "";

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3000";
} else {
  baseURL = "http://localhost:3000/";
}
console.log("current baseURL", baseURL)

//*-*-*-MIDDLEWARE-*-*-*
//making sure form submits info to server:
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(cors());

require('./config/db.connection.js')


//Routes folder
app.use('/recipes', routes.recipes);


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
