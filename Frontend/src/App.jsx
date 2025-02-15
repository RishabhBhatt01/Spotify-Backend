import { useState } from 'react'

import '../src/App.css'
import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom";
import LoginComponent from './routes/Login';
import SignupComponent from './routes/Signup';
import HomeComponent from "./routes/Home";
import { useCookies } from 'react-cookie';




function App(){
  const [cookie,setCookie] = useCookies(["token"]);
  cookie.token;





  return <div className='w-screen h-screen custom-font'>


    <BrowserRouter>
      {cookie.token ? ( // this means if cookie.token exists


      <Routes>
        <Route path="/home" element = {<HomeComponent/>}  />
        <Route path='*' element={<Navigate to="/home" />}/>
      </Routes>

) : (
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
