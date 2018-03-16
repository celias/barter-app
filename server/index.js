require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const session = require("express-session");
const cors = require("cors");
const passport = require("passport");
const massive = require("massive");
const Auth0Strategy = require('passport-auth0');
const path = require("path");


const checkForSession = require('./middlewares/checkForSession');

const mainCtrl = require('./controllers/mainCtrl');
const userCtrl = require('./controllers/userCtrl');
const shopCtrl = require('./controllers/shopCtrl');

const port = process.env.PORT || 3001

const app = express();

const {
    CONNECTION_STRING,
    DOMAIN,
    CLIENT_ID,
    CLIENT_SECRET,
    SESSION_SECRET
} = process.env;

massive(process.env.CONNECTION_STRING)
    .then(db => {
        app.set("db", db);
    })
    .catch(console.log);


app.use(json());
app.use(cors());

// app.use(express.static(`${__dirname}/../build`));

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false, 
        cookie: {
            maxAge: 1000000
        }
    })
);

app.use( checkForSession );

app.use(passport.initialize());
app.use(passport.session());
passport.use(new Auth0Strategy({
    domain: DOMAIN, 
    clientSecret: CLIENT_SECRET,
    clientID: CLIENT_ID,
    scope: 'openid profile',
    callbackURL:'/auth'
},
(accessToken, refreshToken, extraParams, profile, done) => {
    // console.log(profile);
    app
      .get('db') // fetch the reference to my database and then fetch from my database
      .getUserByAuthid(profile.id)
      .then(response => {
          console.log(response)
          if(!response[0]){
            app.get('db').createUserByAuthid([profile.id, profile.displayName])
            .then(create => done(null, create[0]));
          } else {
              return done(null, response[0]);
          }
      });
    }
));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));


app.get("/auth", mainCtrl.login)
app.get('/api/user', userCtrl.getUser);
app.get('/api/logout', mainCtrl.logout);
app.put("/api/getUserUpdate", userCtrl.getUserUpdate);

app.put("/api/getUserImg", userCtrl.getUserImg);

app.get("/api/getBarterData", userCtrl.getBarterData);
app.get("/api/getProductData/:id", userCtrl.getProductData);
app.post("/api/getUserBarter", userCtrl.getUserBarter);



// CART
app.get("/api/getCartData", shopCtrl.getCartData);

app.post("/api/cart", shopCtrl.addToCart);
app.post("/api/cart/checkout", shopCtrl.checkout);
app.delete("/api/cart", shopCtrl.removeFromCart);

// SEND CART STUFF TO DB
app.post("/api/createConfirmedBarter", userCtrl.createConfirmedData);


// app.get('*', (req, res) =>{
//     res.sendFile(path.join(__dirname, '../build/index.html'));
// });


app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});