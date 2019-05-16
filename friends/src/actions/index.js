import axios from 'axios';

export const LOADING = 'LOADING';
export const GET_FRIENDS = 'GET_FRIENDS';
export const ERROR = 'ERROR';



export const getFriends = () => {
    return(dispatch) => {
        dispatch({ type: LOADING });
        axios
            .get(`http://localhost:5000/api/friends`)
            .then(res => {
                dispatch({ type: GET_FRIENDS, friends: res.data})
            })
            .catch(err => {
                dispatch({ type: ERROR, errorMessage: "Are you lonely? We couldn't find your friends."})
            });
    }
}

export const addFriend = (newFriend) => {
    return(dispatch) => {
        dispatch({ type: LOADING });
        axios
            .post(`http://localhost:5000/api/friends`, newFriend)
            .then(res => {
                dispatch({ type: GET_FRIENDS, friends: res.data})
            })
            .catch(err => {
                dispatch({ type: ERROR, errorMessage: "Are you lonely? We couldn't find your friends."})
            });
    }
}

export const deleteFriend = (id) => {
    return (dispatch) => {
        dispatch({type: LOADING});
        axios
            .delete(`http://localhost:5000/api/friends/${id}`)
            .then(response => {
                dispatch({type: GET_FRIENDS, friends: response.data})
            })
            .catch(err => {
                dispatch({type: ERROR, errorMessage: "We had some trouble removing your friend."})
            });
        
    }
}

export const updateFriend = (id, updatedFriend) => {
    return (dispatch) => {
        dispatch({type: LOADING});
        axios
            .put(`http://localhost:5000/api/friends/${id}`, updatedFriend)
            .then(response => {
                dispatch({type: GET_FRIENDS, friends: response.data})
            })
            .catch(err => {
                dispatch({type: ERROR, errorMessage: "We had some trouble updating your friend's info."})
            });
    }
}

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ABSOLUTE_FAILURE = 'LOGIN_ABSOLUTE_FAILURE';

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios
        .post("http://localhost:5000/api/login", creds)
        .then(res => {
            localStorage.setItem("token", res.data.payload);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
        })
        .catch(err => console.log(err));
}
