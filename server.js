// Bring in all dependencies
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config')

// Initialize express into the app variable
const app = express();

// Express has bodyParser
app.use(express.json());

//DB Config
const dbURI = config.get('mongoURI');

//connect to Mongo
const connectDB = async () => {
    await mongoose.
        connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
        .then(() => console.log('MongoDB connected ...'),
            err => {
                console.error(`Connection error: ${err.stack}`)
                process.exit(1)
            }
        )
}

connectDB().catch(err => console.error(err))

// Bring in routes from the api
//Use routes / All requests going to the api/categories goes the categories variable at the top categories.js file
app.use('/api/categories', require('./routes/api/categories'));


//Edit for deployment || serve static assets if in production
if (process.env.NODE_ENV === 'production') {

    //Set a static folder for frontend build
    app.use(express.static('client/build'));

    //anything coming will be redirected here
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
    //Let's create a post build script in package.json
}

//port to run on: env when deployed and 5000 locally/heroku
const port = process.env.PORT || 5000;


//When server started listen the port
app.listen(port, () => console.log(`Server is running on port ${port}`));