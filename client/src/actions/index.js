import * as actionTypes from "../actions/types";
import streams from '../apis/streams';

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

export const createStream = (formValues) => {
    return async (dispatch) => {
        const response = await streams.post('/streams', formValues);

        dispatch({type: actionTypes.CREATE_STREAM, payload: response.data});
    }
}