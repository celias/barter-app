module.exports = function( req, res, next ) {
    const { session } = req;
  
    if ( !session.cart ) {
      session.cart = [];
    } 
        next();
  };