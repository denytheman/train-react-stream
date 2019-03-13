import * as actionTypes from "../actions/types";

export const signIn = (userId) => {
    return {
        type: actionTypes.SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: actionTypes.SIGN_OUT
    }
}