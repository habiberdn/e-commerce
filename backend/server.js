const app = require('./app')
const port = process.env.port || 3001
const env = require('dotenv')
const mongoose = require('mongoose')

env.config({ path: './config.env' })

const db = process.env.DATABASE;
mongoose
.connect(db, {
  useNewUrlParser: true, //its just some option in order to deal with deprecation warning
})
.then(() => console.log('Connection succesfull'));

 app.listen(port, () => {
    console.log(`App running on port ${port}`);
   
  });