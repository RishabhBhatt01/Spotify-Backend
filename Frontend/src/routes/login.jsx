import { Icon } from "@iconify/react";
import TextInput from "../components/shared/TextInput";
import { Link } from "react-router-dom";

const LoginComponent = () =>{
  return(
    <div className="w-full min-h-full flex flex-col items-center overflow-y-auto">
      <div className="logo p-5 border-b border-solid border-gray-450 w-full flex justify-center">
      <Icon icon="logos:spotify" width="217.61" height="68" /> 
      </div>

    <div className="Inputregion w-1/3 py-10 flex items-center justify-center flex-col">
      {/* {i will have my email and pass. and signup button} */}
      <div className="font-bold mb-4">To continue , log in to Spotify</div>
       <TextInput label = "Email address or username" placeholder = "Email address or username"
       className= "my-4"
       />


       <TextInput label = "Password" placeholder = "Password"/>

       <div className="w-full flex items-center justify-end my-7">
       <button className="bg-green-400 text-lg font-semibold p-3 px-10 rounded-full">
        LOG IN
      </button>
       </div>
       <div className="w-full border border-solid <bodrder-gray-300></bodrder-gray-300"></div>

       <div className="my-6 font-semibold text-lg">
        Don't have an account?
       </div>
       <div className="border border-gray-400 w-full flex items-center justify-center rounded-full py-4 text-gray-500 font-bold">
        <Link to= "/signup">
        SIGN UP FOR SPOTIFY
        </Link>
        
       </div>





    </div> 
    </div>

  );
};
export default LoginComponent;