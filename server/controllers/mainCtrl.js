const passport = require("passport");
const login = passport.authenticate("auth0", {
    successRedirect: "/#/userprofile",
    failureRedirect: "/#/" 
});
const logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/#/login');
    });
}
module.exports = {
    login,
    logout
}
