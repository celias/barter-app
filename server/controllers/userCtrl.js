
const getUser = (req, res, next) => {
    // console.log(req.user)
    const db = req.app.get("db")
    db.getUserByAuthid([req.user.authid])
    .then(user => { res.status(200).send(user)})
    .catch((err) =>{res.status(500).send}
)}

const getUserUpdate = (req, res, next) => {
    console.log(req.user, req.body);
    const db = req.app.get("db")
    db.updateUserProfile([
        req.body.userImg,   
        req.body.displayName, req.body.userAbout, req.body.userLocation, req.body.userMediums, req.body.userBarters, req.body.userWants, req.user.authid])
    .then(user => {res.status(200).send(user)})
    .catch((err) => {res.status(500).send}
)}

const getUserImg = (req, res, next) => {
    console.log(req.body);
    const db = req.app.get("db")
    db.updateUserProfile([req.body.userImg])
    .then(user => res.status(200).send(user)
    .catch((err) => res.status(500).send)
)}


const getUserBarter = (req, res, next) => {
    console.log("hit")
    console.log(req.body)
    const db = req.app.get("db")
    db.createUserBarter([req.body.barterInfo, req.body.barterName, req.user.id, req.body.barterImg])
    .then(user => {res.status(200).send(user)})
    .catch((err) => {res.status(500).send}
)}

const getBarterData = (req, res, next) => {
    console.log("IM IN USER BARTER DATA")
    console.log(req.body, "no cursing");
    const db = req.app.get("db")
    db.postUserBarter() // this is not actually a post ...it's getting stuff
    .then(user => {res.status(200).send(user)})
    .catch((err) => {res.status(500).send}
)}

const getProductData = (req, res, next) => {
    const db = req.app.get("db")
    db.getProductInfo([req.params.id])
    .then(user => {res.status(200).send(user)})
    .catch((err) => {res.status(500).send}
)}

// Inserting confirmed barters into the DB. Probably won't do anything else 
// with this.
const createConfirmedData = (req, res, next) => {
    const db = req.app.get("db")

    console.log(req.body, "A USER")
    db.createConfirmedBarter([req.body.barterCartName, req.body.userCartWant, req.body.userCartProductId, req.body.userCartId, req.body.userCartDescription, req.body.userCartImg, req.user.id ])
    .then(user => {
        db.deleteBarter([req.body.userCartProductId])
        req.session.cart.length = 0;
    })
    .catch((err) => {console.log(err); res.status(500).send}
)}



module.exports = {
    getUser,
    getUserUpdate,
    getUserImg,
    getBarterData,
    getUserBarter,
    getProductData,
    createConfirmedData
}