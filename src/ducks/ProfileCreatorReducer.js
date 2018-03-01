import axios from 'axios';

// INITIAL STATE
const initialProfileState = {
    displayName: '',
    userAbout: '',
    userLocation: '',
    userEmail: '',
    userMediums: '',
    userBarters: '',
    userWants: ''
}

// CONSTANTS
const UPDATE_DISPLAY_NAME = "UPDATE_DISPLAY_NAME";
const UPDATE_USER_ABOUT = "UPDATE_USER_ABOUT";
const UPDATE_USER_LOCATION = "UPDATE_USER_LOCATION";
const UPDATE_USER_EMAIL = "UPDATE_USER_EMAIL";
const UPDATE_USER_MEDIUMS = "UPDATE_USER_MEDIUMS";
const UPDATE_USER_BARTERS = "UPDATE_USER_BARTERS";
const UPDATE_USER_WANTS = "UPDATE_USER_WANTS";



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
        return Object.assign({}, state, { userMediums: action.payload } );
        
        case UPDATE_USER_BARTERS:
        return Object.assign({}, state, { userBarters: action.payload } );
        
        case UPDATE_USER_WANTS:
        return Object.assign({}, state, { userWants: action.payload } );
        
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
    return {
        type: UPDATE_USER_MEDIUMS,
        payload: mediums
    }
}

export function getUserBarters(barter){
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