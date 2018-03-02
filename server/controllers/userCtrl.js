
const getUser = (req, res, next) => {
    console.log(req.user)
    const db = req.app.get("db")
    db.getUserByAuthid([req.user.authid])
    .then(user => { res.status(200).send(user)})
    .catch((err) =>{console.log(err); res.status(500).send}
)}

const updateUserProfile = (req, res, next) => {
    console.log(req.body);
}

module.exports = {
    getUser,
    updateUserProfile
}