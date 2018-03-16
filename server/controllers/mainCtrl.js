// HELPS ORGANIZE YOUR ENDPOINTS

const passport = require("passport");

const login = passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/#/userprofile",
    failureRedirect: "http://localhost:3000/#/" 
});

// const getUser = (req, res) => {
//     if(req.user) res.status(200).json(req.user);
//     else res.status(400).json({ message: "User not logged in." });
// }

const logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect('http://localhost:3001/#/login');
    });
}

module.exports = {
    login,
    logout
}
