const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/' + 'recipes';

const db = mongoose.connection

mongoose.connect(mongoURI, () =>{
    console.log('db is connected')
})

db.on('connected', () => {console.log('mongo is connected 🤠: ', mongoURI)});

db.on('error', () => console.log('mongo has an error 🥺'));
