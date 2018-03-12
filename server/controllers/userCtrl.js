
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

const getUserImg = (req, res, next) => {
    console.log(req.body);
    const db = req.app.get("db")
    db.updateUserProfile([req.body.userImg])
    .then(user => res.status(200).send(user)
    .catch((err) => res.status(500).send)
)}
// // Is getUserBarters even relevant???
// const getUserBarters = (req, res, next) => {
//     console.log(req.body);
//     const db = req.app.get("db")
//     db.updateUserProfile([req.body.userBarters])
//     .then(user => res.status(200).send(user)
//     .catch((err) => res.status(500).send)
// )}

// this one might be relevant...
const getUserBarter = (req, res, next) => {
    console.log("HITIOTITIT")
 console.log(req.body)
    const db = req.app.get("db")
    db.createUserBarter([req.body.barterInfo, req.body.barterName, req.user.id, req.body.barterImg])
    .then(user => {console.log(user); res.status(200).send(user)})
    .catch((err) => {console.log(err); res.status(500).send}
)}

const getBarterData = (req, res, next) => {

    console.log("IM IN USER BARTERE DATA")
    console.log(req.body, "no cursing");
    const db = req.app.get("db")
    db.postUserBarter() // this is not actually a post ...it's getting stuff
    .then(user => {console.log(user); res.status(200).send(user)})
    .catch((err) => {console.log(err); res.status(500).send}
)}

const getProductData = (req, res, next) => {
    const db = req.app.get("db")
    db.getProductInfo([req.params.id])
    .then(user => {console.log(user); res.status(200).send(user)})
    .catch((err) => {console.log(err); res.status(500).send}
)}

// the join will be a getrequest too

module.exports = {
    getUser,
    getUserUpdate,
    getUserImg,
    getBarterData,
    getUserBarter,
    getProductData
}