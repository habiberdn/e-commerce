const express = require('express')
const cors = require('cors')
const path = require('path')
const userRouter = require('./router/userRouter')
const productRouter = require('./router/productRouter')
const ratingRouter = require('./router/ratingRoute')
const sellerRouter = require('./router/sellerRouter')

const cookieParser = require('cookie-parser');

const app = express()
app.use(cors(
  {
    origin: ['http://localhost:3000','http://localhost:3000/seller/login'],
    credentials: true,            //access-control-allow-credentials:true
    methods: ["POST", "GET"],
  }
));
app.use(function(req, res, next) {
  res.header('Content-Type', 'application/json;charset=UTF-8')
  res.header('Access-Control-Allow-Credentials', true)
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '10kb' }));
app.set('views', path.join(__dirname, 'src'));
app.use(express.static(path.join(__dirname, 'public')));

console.log(process.env.NODE_ENV)

app.use('/api/v1/users', userRouter)
app.use('/api/v1/rating', ratingRouter)
app.use('/api/v1/product', productRouter)
app.use('/api/v1/seller', sellerRouter)


module.exports = app