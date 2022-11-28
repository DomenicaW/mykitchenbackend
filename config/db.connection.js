const mongoose = require('mongoose');
const connectionStr = "mongodb://localhost:27017/recipes" || process.env.MONGODB_URI
// const mongoURI = 'mongodb://localhost:27017/' + 'recipes';

// const db = mongoose.connection
mongoose.connect(connectionStr)

mongoose.connect(connectionStr, () =>{
    console.log('db is connected')
})

mongoose.connection.on('connected', () => {console.log('mongo is connected 🤠: ', connectionStr)});

mongoose.connection.on('error', () => console.log('mongo has an error 🥺'));
