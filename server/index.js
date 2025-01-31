const express= require('express');
const port = 5000;
const app = express();

const signupRoute = require('./signup').router;
const loginRoute = require('./login');
const homeRoute = require('./home');

app.use('/signup',signupRoute)
app.use('/login',loginRoute)
app.use('/home',homeRoute)



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })