import React, { useContext, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import Post from './store/PostContext';
import ViewPost from './Pages/ViewPost';
import { AuthContext } from './store/Context';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase/config';

function App() {
  const { user, setUser } = useContext(AuthContext);
  useEffect(() => {
    // console.log(user);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        // const uid = user.uid;
      } else {
        // User is signed out
        // ...
      }
    });
  })
  return (
    <div>
      <Post>
        <Router>
          <Routes >
            <Route exact path='/' Component={Home}></Route>
            <Route  path='/signup' Component={Signup}></Route>
            <Route path='/login' Component={Login}></Route>
            <Route path='/create' Component={Create}></Route>
            <Route path='/view' Component={ViewPost}></Route>
          </Routes>
        </Router>
      </Post>

    </div>
  );
}

export default App;
