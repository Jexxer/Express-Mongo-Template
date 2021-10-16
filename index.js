// Base imports
const express = require('express');
const cors = require('cors');

// Controllers:
const userController = require('./controllers/users')

// Initialize express server as app and set defaults.
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Create servers routes.
app.get('/', (req, res) => {res.send('Server running.')});
app.use('users', userController);

// Set the port server will run on.
app.set('port', process.env.PORT || 8000);

// Start the server.
app.listen(app.get('port'), () => {
    console.log(`Listening on Port: ${app.get('port')}`)
})