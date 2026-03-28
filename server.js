const express = require('express');
const bookRouter = require('./routes/booksRouter');
const connectDB = require('./config/dbConnect'); //Export ettiğimizi, buraya import ediyoruz.

const app = express();
const PORT = 3000;

//! Connect to DB
connectDB();

//Başarılıysa .then, başarısızsa .catch e girecek şekilde ayarlıyorsun

//!Middlewares
app.use(express.json()) // pass JSON Data. app.use diyerek Middleware kullanabilirsin

//! Routes
app.use('/api/v1/books',bookRouter);


app.listen(PORT, console.log(`Server is running on the ${PORT} ..`)
)



