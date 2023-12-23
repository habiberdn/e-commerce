const express = require('express')
const cors = require('cors')
const path = require('path')
const userRouter = require('./router/userRouter')
const productRouter = require('./router/productRouter')
const ratingRouter = require('./router/ratingRoute')
const sellerRouter = require('./router/sellerRouter')

const cookieParser = require('cookie-parser');

const app = express()
app.use(cookieParser());
app.use(cors(
    {
      origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
    }
  ));

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '10kb' }));
app.set('views', path.join(__dirname, 'src'));
app.use(express.static(path.join(__dirname, 'public')));

console.log(process.env.NODE_ENV)

app.use('/api/v1/users',userRouter)
app.use('/api/v1/rating',ratingRouter)
app.use('/api/v1/product',productRouter)
app.use('/api/v1/seller',sellerRouter)


module.exports = app