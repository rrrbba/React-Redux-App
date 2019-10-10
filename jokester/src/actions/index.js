import axios from 'axios';


//action types
export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';


export const fetchFacts = () => dispatch => {

    dispatch({ type: START_FETCHING });

    axios
        .get(
            'https://programming-quotes-api.herokuapp.com/quotes/lang/en'
            )
        .then(res => dispatch(
            { type: FETCH_SUCCESS, payload: res.data}))
        .catch(err => dispatch(
            { type: FETCH_FAILURE, payload: err.response}))
}