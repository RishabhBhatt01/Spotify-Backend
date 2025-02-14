import { useState } from 'react'

import '../src/App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import LoginComponent from './routes/Login';
import SignupComponent from './routes/Signup';
import HomeComponent from "./routes/Home";




function App(){
  return <div className='w-screen h-screen custom-font'>


    <BrowserRouter>
      <Routes>
        <Route path="/login" element = {<LoginComponent/>} />
        <Route path='/signup' element= {<SignupComponent/>} />
        <Route path="/home" element = {<HomeComponent/>}  />
      </Routes>
    </BrowserRouter>
    
  </div>
}


export default App
