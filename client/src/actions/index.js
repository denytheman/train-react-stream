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
    return async (dispatch, getState) => {
        const { userId } = getState().auth;
        const response = await streams.post('/streams', { ...formValues, userId });

        dispatch({ type: actionTypes.CREATE_STREAM, payload: response.data });
    }
}

export const fetchStreams = () => {
    return async (dispatch) => {
        const response = await streams.get('/streams');

        dispatch({ type: actionTypes.FETCH_STREAMS, payload: response.data });
    }
}

export const fetchStream = (streamId) => {
    return async (dispatch) => {
        const response = await streams.get(`/streams/${streamId}`);

        dispatch({ type: actionTypes.FETCH_STREAM, payload: response.data });
    }
}

export const editStream = (streamId, formValues) => {
    return async (dispatch) => {
        const response = await streams.put(`/streams/${streamId}`, formValues);

        dispatch({ type: actionTypes.EDIT_STREAM, payload: response.data });
    }
}

export const deleteStream = (streamId) => {
    return async (dispatch) => {
        await streams.delete(`/streams/${streamId}`);

        dispatch({ type: actionTypes.DELETE_STREAM, payload: streamId });
    }
}