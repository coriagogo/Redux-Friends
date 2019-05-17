import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';

import './App.css';

function App() {
  return (
   
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/add-friend">Add Friend</Link>
            <Link to="/protected">Friends</Link>
          </li>
          
        </ul>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/protected" component={FriendsList} />
        <PrivateRoute exact path="/add-friend" component={AddFriend} />
      </div>
    </Router>
      
    
  );
}

export default App;
