const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const cors = require('cors');
const bodyParser = require('body-parser');


const userRoute = require('./routes/userrouter');
const courseRoute = require('./routes/courserouter');
// const postRoute = require('./routes/post');


dotenv.config();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true
}).then(() => {
    console.log('Database connected sucessfully !')
},
    error => {
        console.log('Database could not be connected : ' + error)
    }
)

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.use('/users', userRoute)
app.use('/courses', courseRoute)



// app.all('*', (req, _, next) => {
//     next(new AppError(`can not find route ${req.originalUrl} in this server`, 404))
// })





const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log('Connected to port ' + port)
})

//Error Handling
app.use((req, res, next) => {
    next(createError(404));
});

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});