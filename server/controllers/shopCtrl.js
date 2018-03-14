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

    // change these!!!
    removeFromCart: (req, res, next) => {
    const { cart } = req.session.user;
      if( selectedProduct === true ){
          cart.splice( selectedProduct, 1);
      }
    res.status(200).send( req.session.user );
},

    checkout: (req, res, next) => {
    const { user } = req.session;
    user.cart = [];
    user.total = 0;

    res.status(200).send( req.session.user );
    },



}