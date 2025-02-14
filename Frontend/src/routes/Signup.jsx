import { Icon } from "@iconify/react";
import TextInput from "../components/shared/TextInput";
import { Link } from "react-router-dom";
const SignupComponent = () =>{
  return(
    <div className="w-full h-full flex flex-col items-center">
      <div className="logo p-5 border-b border-solid border-gray-450 w-full flex justify-center">
      <Icon icon="logos:spotify" width="217.61" height="68" /> 
      </div>

    <div className="Inputregion w-1/3 py-10 flex items-center justify-center flex-col">
      {/* {i will have my email and pass. and signup button} */}
      <div className="font-bold mb-4 text-2xl">Signup for free to start listening.</div>

      
       <TextInput label = "What's your email ?" placeholder = "Enter your email."
       className= "my-4"
       />
       <TextInput label = "Confirm your email" placeholder = "Enter your email again."
       className= "my-4"
       />
       

       <TextInput label = "Create a password" placeholder = "Create a password."
       className= "my-4"
       />

        <TextInput label = "What should we call you ?" placeholder = "Enter a profile name."
        className= "my-4"
        />

       <div className="w-full flex items-center justify-center my-7">
       <button className="bg-green-400 text-lg font-semibold p-3 px-10 rounded-full">
        Sign Up
      </button>
       </div>
       <div className="w-full border border-solid <bodrder-gray-300></bodrder-gray-300"></div>

       <div className="my-6 font-semibold text-lg">
        Already have an Account?
       </div>
       <div className="border border-gray-400 w-full flex items-center justify-center rounded-full py-4 text-gray-500 font-bold">

       <Link to= "/login">
        LOG IN INSTEAD
        </Link>

       </div>





    </div> 
    </div>

  );
};
export default SignupComponent;