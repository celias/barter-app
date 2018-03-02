
const getUser = (req, res, next) => {
    // console.log(req.user)
    const db = req.app.get("db")
    db.getUserByAuthid([req.user.authid])
    .then(user => { res.status(200).send(user)})
    .catch((err) =>{console.log(err); res.status(500).send}
)}

const getUserUpdate = (req, res, next) => {
    console.log(req.user, req.body);
    const db = req.app.get("db")
    db.updateUserProfile([
        req.body.userImg,   
        req.body.displayName, req.body.userAbout, req.body.userLocation, req.body.userMediums, req.body.userBarters, req.body.userWants, req.user.authid])
    .then(user => {console.log(user); res.status(200).send(user)})
    .catch((err) => {console.log(err); res.status(500).send}
)}

module.exports = {
    getUser,
    getUserUpdate
}