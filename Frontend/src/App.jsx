import { useState } from 'react'

import '../src/App.css'
import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom";
import LoginComponent from './routes/Login';
import SignupComponent from './routes/Signup';
import HomeComponent from "./routes/Home";
import { useCookies } from 'react-cookie';
import LoggedInHomeComponent from './routes/LoggedInHome';
import UploadSong from "./routes/UploadSong";



function App(){
  const [cookie,setCookie] = useCookies(["token"]);
  cookie.token;





  return <div className='w-screen h-screen custom-font'>


    <BrowserRouter>
      {cookie.token ? ( // this means if cookie.token exists

        // Logged in routes
      <Routes>
        <Route path="/home" element = {<LoggedInHomeComponent/>} />
        <Route path = "/uploadSong" element = {<UploadSong/>} />
        <Route path='*' element={<Navigate to="/home" />}/>
      </Routes>

) : (
  // Logged out routes
      <Routes>
        <Route path="/login" element = {<LoginComponent/>} />
        <Route path='/signup' element= {<SignupComponent/>} />
        <Route path="/home" element = {<HomeComponent/>}  />
        <Route path='*' element={<Navigate to="/login" />} />
  
  </Routes>
 )}
    </BrowserRouter>
    
  </div>
}


export default App
