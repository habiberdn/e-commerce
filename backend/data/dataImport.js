const fs = require('fs');

const data = JSON.parse(fs.readFileSync(`${__dirname}/data.json`, 'utf-8'));

const importData = async()=>{
    try{

    }catch(err){
        console.log(err);
    }
}