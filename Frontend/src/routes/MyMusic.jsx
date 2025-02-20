import '../App.css'
import { Navigate, useNavigate } from 'react-router-dom';
import SingleSongCard from '../components/shared/SingleSongCard';
import { makeAuthenticatedGETRequest } from '../utils/serverHelper';
import { useState,useEffect } from 'react';
// import {Howl, Howler} from 'howler';
import LoggedInContainers from '../containers/LoggedInContainers';


const MyMusicComponent = () =>{
    // const navigate = useNavigate();
    const [soundPlayed, setSoundPlayed] = useState(null);
     const [songData, setSongData] = useState([]);
 
 
     const playSound = (songSrc) =>{
      if(soundPlayed){
        soundPlayed.stop();
      }
      let sound = new Howl({
        src: [songSrc],
        html5: true
      });
   
    setSoundPlayed(sound);
    sound.play();
 }
     useEffect(() => {
       const getData = async () => {
        try{
           const response = await makeAuthenticatedGETRequest(
               "/song/get/mysongs"
           );
           setSongData(response.data);

          }catch(error){
            console.log("Error fetching song",error);
          }
       };
       getData();
   }, []);

   
    return(
        <LoggedInContainers>
            

        <div className='text-white text-xl font-semibold pb-6 pl-2 pt-8'>
            My Songs 
        </div>
       <div className='space-y-6 overflow-auto'>
           {
             songData.map((item) => {
                return <SingleSongCard  info = {item}  playSound={()=>{}}/>
             })}

        </div>
                        
      

        </LoggedInContainers>
    )
}
export default MyMusicComponent;


