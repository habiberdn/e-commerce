const express = require('express')
const cors = require('cors')
const path = require('path')
const userRouter = require('./router/userRouter')
const productRouter = require('./router/productRouter')
const ratingRouter = require('./router/ratingRoute')
const sellerRouter = require('./router/sellerRouter')
const session = require('express-session');
const errorGlobal = require('./controller/errorController')
const cookieParser = require('cookie-parser');

const app = express()
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(express.json({ limit: '10kb' }));
app.use(session({
  secret: process.env.JWT_SECRET, // Replace with a secret key for session encryption
  resave: false,
  saveUninitialized: false,
}));
app.use(cors(
  {
    origin: ['http://localhost:3000','http://localhost:3001','http://127.0.0.1:3000','http://127.0.0.1:3000/seller','http://127.0.0.1:3000/seller/login','http://localhost:3000/seller','http://localhost:3000/seller/login','http://localhost:3000/seller/signup', 'https://e-commerce-e0oczhy7l-daizy11s-projects.vercel.app/'],
    credentials: true,            //access-control-allow-credentials:true
    methods: ["POST", "GET","DELETE"],
  }
));
app.use(function(req, res, next) {
  res.header('Content-Type', 'application/json;charset=UTF-8')
  res.header('Access-Control-Allow-Credentials', true)
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
    'Access-Control-Allow-Origin'
  )
  res.header('Access-Control-Allow-Origin', '*',''); // Replace with your client's origin
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next()
})
app.use(cookieParser());


app.set('views', path.join(__dirname, 'src'));
app.use(express.static(path.join(__dirname, 'public')));

console.log(process.env.NODE_ENV)

app.use('/api/v1/users', userRouter)
app.use('/api/v1/rating', ratingRouter)
app.use('/api/v1/product', productRouter)
app.use('/api/v1/seller', sellerRouter)

app.use(errorGlobal)

module.exports = app
