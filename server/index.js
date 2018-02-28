require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const session = require("express-session");
const cors = require("cors");
const passport = require("passport");
const massive = require("massive");
const Auth0Strategy = require('passport-auth0');
const path = require("path");

const mainCtrl = require('./controllers/mainCtrl');

const port = 3001;

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
        console.log("dbconeccted")
    })
    .catch(console.log);


app.use(json());
app.use(cors());

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false, 
        cookie: {
            maxAge: 100000
        }
    })
);

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
    app
      .get('db') // fetch the reference to my database and then fetch from my database
      .getUserByAuthid(profile.id)
      .then(response => {
          console.log(profile.id);
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
app.get('/api/getUser', mainCtrl.getUser);
app.get('/api/logout', mainCtrl.logout);


app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});