var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var dotenv = require('dotenv')

var usersRouter = require('./routes/users');
var postsRouter = require('./routes/posts');
var commentsRouter = require('./routes/comments');

const app = express()
const port = process.env.PORT || 4000


dotenv.config()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))



app.use('/api/users', usersRouter);
app.use('/api/posts', postsRouter);
app.use('/api/comments', commentsRouter);


app.use(express.static(path.join(__dirname,'../frontend/build')))
app.get('*', (req,res) => res.sendFile(path.join(__dirname, '../frontend/build/index')))
console.log(__dirname)

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message})
})


app.listen(port, () => {
    console.log(`Server Listening at http://localhost:${port}`)
})

module.exports = app;


