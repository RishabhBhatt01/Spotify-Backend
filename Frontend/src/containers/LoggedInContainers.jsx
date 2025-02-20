import spotify_logo from '../assets/white_logo.svg';
import IconText from '../components/shared/IconText';
import '../App.css'
import { Children, useContext, useState } from 'react';
import {Icon} from "@iconify/react";
import NavbarText from "../components/shared/NavbarText";
import { Navigate, useNavigate } from 'react-router-dom';
import {Howl, Howler} from 'howler';
import songContext from '../contexts/songContext';


const LoggedInContainers  = ({children}) => {
    const navigate = useNavigate();
    const [soundPlayed, setSoundPlayed] = useState(null);
    const [songData, setSongData] = useState([]);
    const [isPaused, setIsPaused] = useState(true);
    const {currentSong,setCurrentSong} = useContext(songContext);
    console.log(currentSong);
    


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

   const pauseSound = () => {
    soundPlayed.pause();
   };

   const togglePlayPause =() =>{
    if(isPaused){
        playSound(currentSong.track);

        setIsPaused(false);
    }else{
        pauseSound();
        setIsPaused(true);
    }
   }
    


    return (
        <div className="h-full w-full">
            <div className={`${currentSong? "h-9/10" : "h-full" } w-full flex `}>


            {/* This first div will be the left panel */}
            <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10">
                <div>
                    {/* This div is for logo */}
                    <div className="logoDiv p-6">
                        <img
                            src={spotify_logo}
                            alt="spotify logo"
                            width={125}
                        />
                    </div>
                    <div className="py-5">
                        <div 
                            onClick={() => {
                                navigate("/home");
                                
                            }}
                            className='pointer-cursor'
                        >
                        <IconText
                            iconName={"material-symbols:home"}
                            displayText={"Home"}
                            active
                            
                        />
                        </div>
                        <IconText
                            iconName={"material-symbols:search-rounded"}
                            displayText={"Search"}
                        />
                        <IconText
                            iconName={"icomoon-free:books"}
                            displayText={"Library"}
                        />
                        <div 
                        onClick={()=>{
                            navigate("/mymusic");
                        }}
                        >
                        <IconText
                        iconName={"mdi:account-music-outline"}
                        displayText={"My Music"}
                        />
                        </div>
                    </div>
                    <div className="pt-5">
                        <IconText
                            iconName={"material-symbols:add-box"}
                            displayText={"Create Playlist"}
                        />
                        <IconText
                            iconName={"mdi:cards-heart"}
                            displayText={"Liked Songs"}
                        />
                    </div>
                </div>
                <div className="px-5">
                    <div className="border border-gray-100 text-white w-2/5 flex px-2 py-1 rounded-full items-center justify-center hover:border-white cursor-pointer">
                        <Icon icon="carbon:earth-europe-africa" />
                        <div className="ml-2 text-sm font-semibold">
                            English
                        </div>
                    </div>
                </div>
            </div>








            {/* Right header*/}
            <div className="h-full w-4/5 bg-app-black overflow-auto">
    <div className="navbar w-full h-1/10 bg-black bg-opacity-30 flex items-center justify-end">
        <div className="w-1/2 flex h-full">
            <div className="w-2/3 flex justify-around items-center">
                <NavbarText displayText={"Premium"} />
                <NavbarText displayText={"Support"} />
                <NavbarText displayText={"Download"} />
                <div className="h-1/2 border-r border-white"></div>
            </div>
            <div className="w-1/3 flex justify-around h-full items-center">
                
                <div 
                    onClick={() => navigate("/uploadsongs")} 
                    className="cursor-pointer"
                >
                    <NavbarText displayText="Upload Song" />
                </div>

                <div className="bg-white h-10 w-10 text-black flex items-center justify-center rounded-full font-semibold cursor-pointer">
                    RB
                </div>
            </div>
        </div>
    </div>


    

    {/* This is content body */}
    <div className="content p-8 pt-0 overflow-auto">
      {children}
    </div>


        </div>
        </div>

        {/* This div is current playing song */}
        {
            currentSong &&
        

        <div className='w-full h-1/10 flex navbar flex px-4  bg-black bg-opacity-30 '>

        <div className='w-1/4 flex items-cente r'>
            <img src={currentSong.thumbnail} alt="alag aasmaan" 
            className=' flex justify-center w-12 h-12'/>

        <div className='w-full h-full flex flex-col pl-3 justify-center '>
            <div className='text-sm pb-1 text-white hover:underline cursor-pointer'>{currentSong.name}</div>
            <div className='text-xs text-white hover:underline cursor-pointer'>{currentSong.artist.firstName + currentSong.artist.lastName}</div>
            </div>
        </div>

        <div className='w-1/2 h-full flex  justify-center items-center flex-col'>

        <div className='flex w-1/3 justify-between items-center'>


        {/* Controlls are here... */}


        <Icon icon="solar:skip-previous-outline" fontSize={25} className='cursor-pointer text-gray-500 hover:text-white '/>
        {/* circum:pause-1 */}
        
        <Icon icon={isPaused?"circum:play-1" : "circum:pause-1" }
         fontSize={40}
         className='cursor-pointer text-gray-500 hover:text-white '
         onClick={togglePlayPause}
        
        />

        <Icon icon="solar:skip-next-linear" fontSize={25}className='cursor-pointer text-gray-500 hover:text-white '/>
        
        
        </div>





        {/* Progress Bar will be here */}
        <div> Progress Bar here</div>
        
        </div>
        <div className='w-1/4 flex items-center justify-end'>Hello</div>

        </div>
            }


        
        </div>
    );
};


export default LoggedInContainers;
