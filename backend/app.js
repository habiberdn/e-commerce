const express = require('express')
const cors = require('cors')
const path = require('path')
const userRouter = require('./router/userRouter')
const productRouter = require('./router/productRouter')

const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '10kb' }));

app.set('views', path.join(__dirname, 'src'));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/v1/users',userRouter)
app.use('/api/v1/product',productRouter)

module.exports = app