import { LOADING, GET_FRIENDS, ERROR } from '../actions/index';

const initialState = {
    friends: [],
    fetchingFriends: false,
    deletingFriend: false,
    loggingIn: false,
    savingFriends: false,
    updatingFriend: false,
    error: null
    
    }

export const friendsReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOADING:
            return Object.assign({}, state, {fetchingFriends: true})
        case GET_FRIENDS:
            return Object.assign({}, state, {fetchingFriends: false, error: '', friends: action.friends})
        case ERROR:
            return Object.assign({}, state, {fetchingFriends: false, error: action.errorMessage})
        default:        
            return state;
    }
}

export default friendsReducer;