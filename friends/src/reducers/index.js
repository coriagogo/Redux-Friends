import { 
    LOGIN_START, 
    LOGIN_SUCCESS, 
    USER_UNAUTHORIZED, 
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS, 
    FETCH_DATA_FAULURE
} from '../actions';

const initialState ={
    friends: [],
    loggingIn: false,
    error: '',
    errorStatusCode: null,
    fetchingFriends: false,
    addingFriend: false,
    editingFriend: false,
    deletingFriend: false,
    token: localStorage.getItem('token')
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                token: action.payload
            };
        case FETCH_DATA_START:
            return {
                ...state,
                fetchingFriends: true
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                error: '',
                errorStatusCode: null,
                fetchingFriends: false,
                friends: action.payload
            };
        default:
            return state;

    }
}

export default reducer;