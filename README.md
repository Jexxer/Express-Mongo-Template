# Express-Mongo-Template
This is a bare bones set-up of a Express/Mongo backend that serves a front-end.

## Getting started

### Step 1:
Fork the repo, then clone it down. (I recomend changing the name)

### Step 2:
Install dependencies using:
```
npm install
````

### Step 3:
Inside the db directory you will see in a file named connection.js:
```js
const mongoURI = process.env.NODE_ENV === 'production'
    ? process.env.DB_URL
    : 'mongodb://localhost/YOUR_MONGO_DB';
```
Replace `YOUR_MONGO_DB` with your own db hosted on your local machine.

### Step 4:
Create a .env file and add to it at minimum:
```
NODE_ENV=development (Change this to production when deploying)
DB_URL=<YOUR_DEPLOYED_DB> (This is your Deployed database. Such at atlasdb)
```

### Step 5:
Navigate to the index.js file and if needed, add, change, or remove the controllers and routes as you see fit.  
Examples:
```js
const userController = require('./controllers/users');
const calculationController = require('./controllers/calculations');

app.use('calculations', calculationController)
app.use('users', userController);
```

### Step 6:
Depending on your use, you may want to set up Schema's for the data you will be storing. To do this, navigate to the models directory and create them there. I have provided an example file for users called userModel.js. Delete this or refactor it to your own needs. Be sure to keep at the top of your file:
```js
const mongoose = require('../db/connection')
```
at the bottom of the file:
```js
// Place schema inside variable.
const User = mongoose.model("User", userSchema);

// Export the variable.
module.exports = User;
```
Place your Schema inbetween.

### Step 7:
Finally, you will need to set up a way to handle your requests. I have provided an example of a users controller in this repo and you can see some additinal examples of how you might handle requests in `/controllers/users.js`. 

It is important to remember that in our index.js we told our server to to use `users` for our `userController` where `users` is a direct reference to `users` endpoint: ie; `localhost:8000/users`. 
```js
const userController = require('./controllers/users');
app.use('users', userController);
```
The line above is explicitly telling our express server that we will be using the userController located at `./controllers/users` for our `users` endpoint.

#### Notes
This was quickly set up and if you noticed any mistakes feel free to throw a pull request my way.