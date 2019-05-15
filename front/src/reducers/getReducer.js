import {FETCH_ELEVES_PENDING, FETCH_ELEVES_SUCCESS, FETCH_ELEVES_ERROR} from '../actions/actions';

const initialState = {
    pending: false,
    eleves: [],
    error: null
}

export function ElevesReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_ELEVES_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_ELEVES_SUCCESS:
            return {
                ...state,
                pending: false,
                eleves: action.payload
            }
        case FETCH_ELEVES_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}

export const getEleves = state => state.ELEVES;
export const getElevesPending = state => state.pending;
export const getElevesError = state => state.error;