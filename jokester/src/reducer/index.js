import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE } from '../actions';


const initialState = {
    funFacts: [],
    isFetching: false,
    error: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case START_FETCHING:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCH_SUCCESS:
            return {
                ...state, 
                isFetching: false,
                error: '',
                funFacts: action.payload
            };
        case FETCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default: 
            return state;
    }
}

export default reducer;