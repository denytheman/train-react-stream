import * as actionTypes from "../actions/types";

export const signIn = () => {
    return {
        type: actionTypes.SIGN_IN
    }
}

export const signOut = () => {
    return {
        type: actionTypes.SIGN_OUT
    }
}