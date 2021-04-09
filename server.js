const express = require('express');
const app = express();
const routes = require('./routes')
const session = require('express-session');

const PORT = 3000;


app.set('view engine','ejs');
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static(__dirname + "/public"))

app.use(session({
    name: "sessionid",//session name
    resave: false, 
    saveUninitialized: false, 
    secret: "amazon-node-js", 
    cookie: {
        maxAge : 1000 * 60 * 60 * 12, //trajanje sesije: 1000milisek *60sec*60*12 sati
        sameSite: true, //origin policy
        secure : false //true for https
    }
}))


//-> routes/index.js
app.use('/',routes)


app.listen(PORT, () => {
    console.log(`Server radi na portu ${PORT}`);
})


