// import axios from "axios";

// // CONSTANTS
// const GET_USER = "GET_USER";

// // ACTION CREATORS
// export function getUser() {
//     console.log("hit!")
//     return {
//         type: GET_USER,
//         payload: axios
//           .get("/api/user")
//           .then(response => {
//               console.log(response)
//               return response.data[0];
//           })
//           .catch(err => {
//               return err.message;
//           })
//     };
//  }

//  // INITIAL STATE
//  const initialState = {
//      user: {},
//      isLoading: false,
//      didErr: false,
//      errMessage: null
//  };

//  export default function userReducer(state = initialState, action) {
//      switch(action.type) {
//          case `${GET_USER}_PENDING`:
//            return Object.assign({}, state, { isLoading: true });

//          case`${GET_USER}_FULFILLED`:
//            return Object.assign({}, state, {
//                isLoading: false,
//                user: action.payload
//         });

//          case `${GET_USER}_REJECTED`:
//           return Object.assign({}, state, {
//               isLoading: false,
//               didErr: true,
//               errMessage: action.payload
//         });

//         default:
//           return state;
//      }
//  }
