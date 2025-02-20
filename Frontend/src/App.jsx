import { useState } from 'react'

import '../src/App.css'
import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom";
import LoginComponent from './routes/Login';
import SignupComponent from './routes/Signup';
import HomeComponent from "./routes/Home";
import { useCookies } from 'react-cookie';
import LoggedInHomeComponent from './routes/LoggedInHome';
import UploadSongComponent from './routes/UploadSong';
import MyMusicComponent from './routes/MyMusic';
import songContext from './contexts/songContext';




function App(){
  const [cookie,setCookie] = useCookies(["token"]);
  cookie.token;
  const [currentSong,setCurrentSong]=useState(null);




  return <div className='w-screen h-screen custom-font'>
    <BrowserRouter>
      {cookie.token ? ( // this means if cookie.token exists
        <songContext.Provider value={{currentSong,setCurrentSong}}>
        {/*  Logged in routes */}
      <Routes>
        
        <Route path="/home" element = {<LoggedInHomeComponent/>}  />
        <Route path="/uploadsongs" element = {<UploadSongComponent/>}  />
        <Route path="/mymusic" element = {<MyMusicComponent/>}  />
        <Route path='*' element={<Navigate to="/home" />}/>

        
      </Routes>                    
      </songContext.Provider>

) : (

  
  // Logged out Routes only these three paths can be accessed if the user is not logged in..
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
