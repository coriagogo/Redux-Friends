import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios
        .post("http://localhost:5000/api/login", creds)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
        })
        .catch(err => console.log(err));
}

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const USER_UNAUTHORIZED = 'FETCH_DATA_FAILURE';

export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA_START });
    axios
        .get('http://localhost:5000/api/friends', {
            headers: {Authorization: localStorage.getItem('token') }
        })
        .then(res => {
            dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
        })
        .catch(err => {
            if (err.response.status === 403) {
                dispatch({ type: USER_UNAUTHORIZED, payload: err.response});
            } else {
                dispatch({ type: FETCH_DATA_FAILURE, payload: err.response });
            }
        });
}

// export const LOADING = 'LOADING';
// export const GET_FRIENDS = 'GET_FRIENDS';
// export const ERROR = 'ERROR';



// export const getFriends = () => {
//     return(dispatch) => {
//         dispatch({ type: LOADING });
//         axios
//             .get(`http://localhost:5000/api/friends`)
//             .then(res => {
//                 dispatch({ type: GET_FRIENDS, friends: res.data})
//             })
//             .catch(err => {
//                 dispatch({ type: ERROR, errorMessage: "Are you lonely? We couldn't find your friends."})
//             });
//     }
// }

// export const addFriend = (newFriend) => {
//     return(dispatch) => {
//         dispatch({ type: LOADING });
//         axios
//             .post(`http://localhost:5000/api/friends`, newFriend)
//             .then(res => {
//                 dispatch({ type: GET_FRIENDS, friends: res.data})
//             })
//             .catch(err => {
//                 dispatch({ type: ERROR, errorMessage: "Are you lonely? We couldn't find your friends."})
//             });
//     }
// }

// export const deleteFriend = (id) => {
//     return (dispatch) => {
//         dispatch({type: LOADING});
//         axios
//             .delete(`http://localhost:5000/api/friends/${id}`)
//             .then(response => {
//                 dispatch({type: GET_FRIENDS, friends: response.data})
//             })
//             .catch(err => {
//                 dispatch({type: ERROR, errorMessage: "We had some trouble removing your friend."})
//             });
        
//     }
// }

// export const updateFriend = (id, updatedFriend) => {
//     return (dispatch) => {
//         dispatch({type: LOADING});
//         axios
//             .put(`http://localhost:5000/api/friends/${id}`, updatedFriend)
//             .then(response => {
//                 dispatch({type: GET_FRIENDS, friends: response.data})
//             })
//             .catch(err => {
//                 dispatch({type: ERROR, errorMessage: "We had some trouble updating your friend's info."})
//             });
//     }
// }


