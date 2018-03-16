import axios from 'axios';

// INITIAL STATE
const initialProfileState = {
    displayName: '',
    userAbout: '',
    userLocation: '',
    userEmail: '',
    userMediums: '',
    userBarters: '', // this is useless - leave it alone!
    userWants: '',
    userImg: '',
    
    barterInfo: '', // NOT USELESS
    barterName: '',
    userId: '',
    itemId: '',
    barterImg: '',
    
    barterData: [],
    cartData: [],
    // productData: {},
    cart: [],
    
    // KEEPING TRACK OF USER FULFILLED BARTERS IN MY DB
    barterItemName: '',
    confirmedData: []
}
// CONSTANTS
const UPDATE_DISPLAY_NAME = "UPDATE_DISPLAY_NAME";
const UPDATE_USER_ABOUT = "UPDATE_USER_ABOUT";
const UPDATE_USER_LOCATION = "UPDATE_USER_LOCATION";
const UPDATE_USER_EMAIL = "UPDATE_USER_EMAIL";
const UPDATE_USER_MEDIUMS = "UPDATE_USER_MEDIUMS";
const UPDATE_USER_BARTERS = "UPDATE_USER_BARTERS"; // this is also useless but leave it alone!
const UPDATE_USER_WANTS = "UPDATE_USER_WANTS"; // CONFIRMING THE USER PURCHASE/BARTER
const UPDATE_USER_IMG = "UPDATE_USER_IMG";
const GET_USER_UPDATE = "GET_USER_UPDATE";
const GET_USER = "GET_USER";
const GET_BARTER_INFO = "GET_BARTER_INFO";
const GET_BARTER_NAME = "GET_BARTER_NAME";
const GET_USER_ID = "GET_USER_ID";
const GET_ITEM_ID = "GET_ITEM_ID";
const GET_BARTER_IMG = "GET_BARTER_IMG";
const GET_BARTER_DATA = "GET_BARTER_DATA";
const GET_USER_BARTER = "GET_USER_BARTER";

const ADD_TO_CART = "ADD_TO_CART";
const GET_CART_DATA = "GET_CART_DATA";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const CHECKOUT = "CHECKOUT";

// DB RECORDS OF BARTERS
const GET_BARTER_ITEM_NAME = "GET_BARTER_ITEM_NAME";
const CREATE_CONFIRMED_DATA = "GET_CONFIRMED_DATA";


export default function profileReducer( state = initialProfileState, action ) {
    switch(action.type){
        case UPDATE_DISPLAY_NAME:
        
        return Object.assign({}, state, { displayName: action.payload } );
        
        case UPDATE_USER_ABOUT:
        return Object.assign({}, state, { userAbout: action.payload } );
        
        case UPDATE_USER_LOCATION:
        return Object.assign({}, state, { userLocation: action.payload } );
        
        case UPDATE_USER_EMAIL:
        return Object.assign({}, state, { userEmail: action.payload } );
        
        case UPDATE_USER_MEDIUMS:
        console.log(action.payload, "MEDIUMS")
        return Object.assign({}, state, { userMediums: action.payload } );
        
        case UPDATE_USER_BARTERS:
        return Object.assign({}, state, { userBarters: action.payload } ); // useless!!!!!!
        
    
        case `${UPDATE_USER_WANTS}_PENDING`:
        return Object.assign({}, state, { isLoading: true });

        case `${UPDATE_USER_WANTS}_FULFILLED`:
        return Object.assign({}, state, { 
            loading: false,
            barterData: action.payload
        });

        case `${UPDATE_USER_WANTS}_REJECTED`:
        return Object.assign({}, state, {
            isLoading: false,
            didErr: true,
            errMessage: action.payload
        });


        case UPDATE_USER_IMG:
        return Object.assign({}, state, { userImg: action.payload } );

        case GET_USER_UPDATE + '_PENDING':
        return Object.assign({}, state, { loading: true });

        case GET_USER_UPDATE + '_FULFILLED':
        return Object.assign({}, state, { loading: false });

        case GET_USER_UPDATE + '_REJECTED':
        return Object.assign({}, state, { loading: false });

        case `${GET_USER}_PENDING`:
           return Object.assign({}, state, { isLoading: true });

        case`${GET_USER}_FULFILLED`: console.log(action.payload)
           return Object.assign({}, state, {
               isLoading: false,
               displayName: action.payload.name,
               userAbout: action.payload.bio,
               userLocation: action.payload.location,
               userEmail: action.payload.email,
               userMediums: action.payload.mediums,
               userBarters: action.payload.barters,
               userWants: action.payload.wants,
               userImg: action.payload.profile_img

        });

        case `${GET_USER}_REJECTED`:
          return Object.assign({}, state, {
              isLoading: false,
              didErr: true,
              errMessage: action.payload
        });



        case `${GET_BARTER_DATA}_PENDING`:
        return Object.assign({}, state, { isLoading: true });

        case `${GET_BARTER_DATA}_FULFILLED`:
        return Object.assign({}, state, { 
            loading: false,
            barterData: action.payload
        });

        case `${GET_BARTER_DATA}_REJECTED`:
        return Object.assign({}, state, {
            isLoading: false,
            didErr: true,
            errMessage: action.payload
        });

        case `${GET_CART_DATA}_PENDING`:
        return Object.assign({}, state, {isLoading: true } );

        case `${GET_CART_DATA}_FULFILLED`:
        return Object.assign({}, state, { 
            loading: false,
            cartData: action.payload
        });

        case `${GET_CART_DATA}_REJECTED`:
        return Object.assign({}, state, {
            isLoading: false,
            didErr: true,
            errMessage: action.payload
        });

        case ADD_TO_CART + '_FULFILLED':
        return Object.assign({}, state, { cart: action.payload });

        case REMOVE_FROM_CART + '_FULFILLED':
        return Object.assign({}, state, { cart: action.payload });

        case CHECKOUT + '_FULFILLED':
        return Object.assign({}, state, { cart: action.payload });



        case GET_BARTER_INFO:
        return Object.assign({}, state, { barterInfo: action.payload } );

        case GET_BARTER_NAME:
        return Object.assign({}, state, { barterName: action.payload } );

        case GET_USER_ID:
        return Object.assign({}, state, { userId: action.payload });

        case GET_ITEM_ID:
        return Object.assign({}, state, { itemId: action.payload });

        case GET_BARTER_IMG:
        return Object.assign({}, state, { barterImg: action.payload } );

        
        //DB BARTER DATA FOR FULFILLED SALES
        case GET_BARTER_ITEM_NAME:
        return Object.assign({}, state, { barterItemName: action.payload } );

        case CREATE_CONFIRMED_DATA:
        return Object.assign({}, state, { confirmedData: action.payload } );
   
        default: return state;
    }
}


export function getDisplayName(name){
    return {
        type: UPDATE_DISPLAY_NAME,
        payload: name
    }
}

export function getUserAbout(about){
    return {
        type: UPDATE_USER_ABOUT,
        payload: about
    }
}

export function getUserLocation(location){
    return {
        type: UPDATE_USER_LOCATION,
        payload: location
    }
}

export function getUserEmail(email){
    return {
        type: UPDATE_USER_EMAIL,
        payload: email
    }
}

export function getUserMediums(mediums){
    console.log(mediums, "MEDIUMSSS")
    return {
        type: UPDATE_USER_MEDIUMS,
        payload: mediums
    }
}

export function getUserBarters(barter){ // useless!!!
    console.log(barter, "ARRRGHHH A BARTER!")
    return {
        type: UPDATE_USER_BARTERS,
        payload: barter
    }
}

export function getUserWants(want){
    return {
        type: UPDATE_USER_WANTS,
        payload: want
    }
}

export function getUserImg(img){
    console.log(img, "img")
    return{
        type: UPDATE_USER_IMG,
        payload: img
    }
}

export function getUserUpdate(displayName,
    userAbout,
    userLocation,
    userEmail,
    userMediums,
    userBarters, // useless
    userWants,
    userImg){
    return{
        type: GET_USER_UPDATE,
        payload: axios
        .put("/api/getUserUpdate", {displayName,
            userAbout,
            userLocation,
            userMediums,
            userBarters, // useless
            userWants,
            userImg})
        .then(response => response.data)
        .catch(console.log)
    };
 }

 export function getUser() {
    console.log("hit!")
    return {
        type: GET_USER,
        payload: axios
          .get("/api/user")
          .then(response => {
              console.log(response)
              return response.data[0];
          })
          .catch(err => {
              return err.message;
          })
    };
 }

 export function getBarterInfo(info){
    return {
        type: GET_BARTER_INFO,
        payload: info
    }
 }

 export function getBarterName(name){
     return {
         type: GET_BARTER_NAME,
         payload: name
     }
 }

 export function getUserId(userid){
     return {
         type: GET_USER_ID,
         payload: userid
     }
 }

 export function getItemId(itemid){
     return {
         type: GET_ITEM_ID,
         payload: itemid
     }
 }

 export function getBarterImg(img){
     return {
         type: GET_BARTER_IMG,
         payload: img
     }
 }

export function getBarterData(){
    console.log("fired barter data")
    return {
        type: GET_BARTER_DATA,
        payload: axios
          .get("/api/getBarterData")
          .then(response => {
            console.log(response, "this is crap")
            return response.data;
        })
        .catch(err => {
            return err.message;
        })
  };
}

export function getUserBarter(barterInfo, barterName, userId, itemId, barterImg){
    console.log("fired, yeppper", barterInfo, barterName, userId, itemId, barterImg)
    return {
        type: GET_USER_BARTER,
        payload: axios
          .post("/api/getUserBarter", { barterInfo, barterName, userId, itemId, barterImg })
          .then(response => {
            console.log(response)
            return response.data[0];
          })
          .catch(err => {
              return err.message
          })
    }
}

export function addToCart( item ){
    return{
        type: ADD_TO_CART,
        payload: axios.post("/api/cart", item )
        .then( response => response.data )
    }
}

export function getCartData( item ){
    return{
        type: GET_CART_DATA,
        payload: axios.get("/api/getCartData", item )
        .then( response => response.data )
    }
}

export function removeFromCart( product_id ) {
    return {
      type: REMOVE_FROM_CART,
      payload: axios.delete("/api/cart", {} ).then( response => response.data )
    };
  }

  export function checkout() {
    return {
      type: CHECKOUT,
      payload: axios.post("/api/cart/checkout", URL.checkout ).then( response => response.data )
    };
  }


  export function getBarterItemName( item_name ) {
      return {
          type: GET_BARTER_ITEM_NAME,
          payload: item_name
      }
  }



  export function createConfirmedData( barterCartName, userCartWant, userCartProductId, userCartId, userCartDescription, userCartImg ) {
        return {
          type: CREATE_CONFIRMED_DATA,
          payload: axios
          .post("/api/createConfirmedBarter", { barterCartName, userCartWant, userCartProductId, userCartId, userCartDescription, userCartImg } )
          .then(response => {
            console.log(response, "this is crap")
            return response.data;
        })
        .catch(err => {
            return err.message;
        })
  };
}
