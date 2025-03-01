import spotify_logo from '../assets/white_logo.svg';
import IconText from '../components/shared/IconText';
import '../App.css'
import CloudinaryUpload from '../components/shared/CloudinaryUpload';
import { makeAuthenticatedPOSTRequest } from '../utils/serverHelper';
import {Icon} from "@iconify/react";
import NavbarText from "../components/shared/NavbarText";
import { Navigate, useNavigate } from 'react-router-dom';
import TextInput from '../components/shared/TextInput';
import { useState } from 'react';

const UploadSongComponent = () => {
    const [name,setName] = useState("");
    const [thumbnail,setThumbnail] = useState("");

    const[playlistUrl,setPlaylistUrl] = useState("");
    const[uploadedSongFileName, setUploadedSongFileName] = useState();

    const submitSong = async () => {
        console.log(name);
        console.log(thumbnail);
        console.log(playlistUrl);

        const data = {name,thumbnail, track:playlistUrl};
        const response = await makeAuthenticatedPOSTRequest("/song/create",data);
        if(response.err){
            alert("could not create song");
            return;
        }
        alert("Success");
        Navigate("/home");

    };




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








            {/* Right Header */}
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
                <div className="bg-white h-10 w-10 text-black flex items-center justify-center rounded-full font-semibold cursor-pointer">
                    RB
                </div>
            </div>
        </div>
    </div>


    

    {/* This is content body */}
    <div className="content p-8 pt-0 overflow-auto flex flex-col  items-center">
      <div className='text-2xl font-semibold  my-12'> Upload your Music

      </div>

      <div className='w-2/3 flex space-x-7'>

        <div className='w-1/2'>
        <TextInput 
        label= "Song Name"
         placeholder={"Enter Song Name"}

        value={name}
        setValue={setName}
         
         />
        </div>


        <div className='w-1/2'>
        <TextInput 
        label= "Thumbnail"
         placeholder={"Thumbnail"}
        value={thumbnail}
        setValue={setThumbnail}
          />
        </div>

        </div>


      
      <div className='flex py-9'>
        {
            uploadedSongFileName ? (
                <div className='bg-white rounded-full p-3 w-1/2 text-black flex justify-center items-center my-11'>
                    {uploadedSongFileName.substring(0,30)}
                </div>
            ): (
            <CloudinaryUpload
            setUrl = {setPlaylistUrl}
            setName={setUploadedSongFileName}
                
            />
            )
        }


 
      </div>

      <div className='bg-white text-black w-1/6 flex justify-center items-center rounded-full p-3 font-semibold cursor-pointer my-11' onClick={submitSong}>
        Submit Song
      </div>




    </div>
     </div>

        </div>
    );
};
export default UploadSongComponent;
