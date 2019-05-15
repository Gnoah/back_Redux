import {fetchElevesPending, fetchElevesSuccess, fetchElevesError} from './actions';
import axios from 'axios';

function fetchEleves() {
    return dispatch => {
        dispatch(fetchElevesPending());
        axios.get('http://localhost:8070//eleve/')
        .then(res => {this.setState({
            eleves: res.data
        })})
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchElevesSuccess(res.eleves));
            return res.eleves;
        })
        .catch(error => {
            dispatch(fetchElevesError(error));
        })
    }
}

export default fetchEleves;