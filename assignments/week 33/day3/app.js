const express = require('express');
const app = express()
const port = 1111
const passport = require("passport")
const facebookstrategy = require("passport-facebook").Strategy
const path = require('path');
const pathview = path.join(__dirname, "./src/views")
const config = require("./src/config")
app.use(passport.initialize())
app.use(passport.session())
passport.serializeUser(function (user, done) {
    done(null, user)
})
// passport.deserializeUser(function (user, done) {
//     done(null, user)
// })


app.set("view engine", "ejs")
app.set("views", pathview)
app.use(express.static(path.join(__dirname, "../public")))

app.get('/', (req, res) => {
    res.render("home")
})
app.get('/profile', (req, res) => {
    res.send(userprofile)
})
app.get("/error", (req, res) => {
    res.render("error")
})

passport.use(new facebookstrategy({
    clientID: config.clientID,
    clientSecret: config.clientSecret,
    callbackURL: "http://localhost:1111/auth/facebook/callback"
},
    function (accessToken, refreshToken, profile, done) {
        userprofile = profile
        return done(null, userprofile)
    }
));
app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
        successRedirect: '/profile',
        failureRedirect: '/error'
    }), function (req, res) {
        res.redirect("/profile")
    });

app.listen(port, () => console.log("port on ", port))