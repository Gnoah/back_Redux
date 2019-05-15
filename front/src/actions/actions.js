export const FETCH_POSTS = 'FETCH_POSTS';
export const NEW_POST = 'NEW_POST';

export const FETCH_ELEVES_PENDING = 'FETCH_ELEVES_PENDING';
export const FETCH_ELEVES_SUCCESS = 'FETCH_ELEVES_SUCCESS';
export const FETCH_ELEVES_ERROR = 'FETCH_ELEVES_ERROR';


export function fetchElevesPending() {
    return {
        type: FETCH_ELEVES_PENDING
    }
}

export function fetchElevesSuccess(eleves) {
    return {
        type: FETCH_ELEVES_SUCCESS,
        eleves: eleves
    }
}

export function fetchElevesError(error) {
    return {
        type: FETCH_ELEVES_ERROR,
        error: error
    }
}
