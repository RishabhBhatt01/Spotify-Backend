import spotify_logo from '../assets/white_logo.svg';
import IconText from '../components/shared/IconText';
import '../App.css'

import {Icon} from "@iconify/react";
import NavbarText from "../components/shared/NavbarText";
import { Navigate, useNavigate } from 'react-router-dom';
import TextInput from '../components/shared/TextInput';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="h-full w-full flex">


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
                                active;
                            }}
                            className='pointer-cursor'
                        >
                        <IconText
                            iconName={"material-symbols:home"}
                            displayText={"Home"}
                            
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
                        <IconText
                        iconName={"mdi:account-music-outline"}
                        displayText={"My Music"}
                        />
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








            {/* This second div will be the right part(main content) */}
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
                {/* ✅ Fixed: Upload Song button is now clickable */}
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
      <div className='text-2xl font-semibold mb-5 mt-7'> Upload your Music

      </div>

      <div className='2/3 flex space-x-4'>

      <div className='w-1/2'>
      <TextInput label= "Song Name" placeholder={"Enter Song Name"} />
      </div>


      <div className='w-1/2'>
      <TextInput label= "Thumbnail" placeholder={"Thumbnail"} />
      </div>

      </div>


      
      
      <TextInput placeholder={"Enter songs"} />





    </div>
     </div>

        </div>
    );
};
export default Home;
