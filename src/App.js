import React, { useEffect } from 'react';
import Sidebar from './Components/Sidebar';
import './App.css';
import Chat from './Components/Chat';
import { useDispatch, useSelector } from 'react-redux';
import {selectUser} from './features/userSlice'
import Login from './Components/Login';
import { auth } from './Components/firebase';
import {login,logout} from './features/userSlice'
function App() {
  const dispatch=useDispatch()
  const user=useSelector(selectUser)
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if (authUser){
        dispatch(login({
          uid:authUser.uid,
          photo:authUser.photoURL,
          email:authUser.email,
          displayName:authUser.displayName
        }))
        
      }else{
        dispatch(logout)
      }
    })
  },[dispatch])

  return (
    <div className="App">
      {user?(
        <>
        <Sidebar/>
      <Chat/>
      </>):(
       <Login/>
      )
      
      }
      
    </div>
  );
}

export default App;
