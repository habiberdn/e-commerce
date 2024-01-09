const app = require('./app')
const port = process.env.port || 3001
const env = require('dotenv')
const kill = require('kill-port')

env.config({ path: './.env' })


 app.listen(port, () => {
    console.log(`App running on port ${port}`);
   
  });