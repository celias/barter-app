module.exports = {
    addToCart: (req, res, next) => {
     console.log(req.session);
    // console.log(req.session.cart);
    req.session.cart.push(req.body)
    res.status(200).send(req.session.cart)
},
    getCartData: (req, res, next) => {
    console.log(req.session)
    res.status(200).send(req.session.cart)
},
    checkout: (req, res, next) => {
    console.log(req.session);
    res.status(200).send( req.session.user );
}
  }