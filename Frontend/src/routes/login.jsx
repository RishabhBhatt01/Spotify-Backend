// import { Icon } from "@iconify/react";
// import TextInput from "../components/shared/TextInput";
// import { Link, Navigate, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { makeUnauthenticatedPOSTRequest } from "../utils/serverHelper";
// import { useCookies } from "react-cookie";
// import PasswordInput from "../components/shared/PasswordInput";


// const LoginComponent = () =>{

//   const [email,setEmail] = useState("");
//   const [password,setPassword] = useState("");
//   const [cookie,setCookie] = useCookies(["token"]);
//   const navigate = useNavigate();

//     const login = async () => {
//         const data = {email, password};
//         const response = await makeUnauthenticatedPOSTRequest(
//             "/auth/login",
//             data
//         );
//         if (response && !response.err) {
//             const token = response.token;
//             const date = new Date();
//             date.setDate(date.getDate() + 30);
//             setCookie("token", token, {path: "/", expires: date});
//             alert("Success");
//             navigate("/home");
//         } else {
//             alert("Failure");
//         }
//     };




//   return(
//     <div className="w-full min-h-full flex flex-col items-center overflow-y-auto bg-[#121212] text-white">
//       <div className="logo p-5 border-b border-solid border-gray-450 w-full flex justify-center">
//       <Icon icon="logos:spotify" width="217.61" height="68" /> 
//       </div>

//     <div className="Inputregion w-1/3 py-10 flex items-center justify-center flex-col">
//       {/* {i will have my email and pass. and signup button} */}
//       <div className="font-bold mb-4">To continue , log in to Spotify</div>
//        <TextInput 
//        label = "Email address or username"
//         placeholder = "Email address or username"
//        className= "my-4"
//        value={email}
//        setValue={setEmail}
//        />


//        <PasswordInput label = "Password" placeholder = "Password"
//        value={password}
//        setValue={setPassword}
//        />

//        <div className="w-full flex items-center justify-end my-7">
//        <button className="bg-green-400 text-lg font-semibold p-3 px-10 rounded-full" onClick={(e) => {
//         e.preventDefault();
//         login();

//        }}>
//         LOG IN
//       </button>
//        </div>
//        <div className="w-full border border-solid <bodrder-gray-300></bodrder-gray-300"></div>

//        <div className="my-6 font-semibold text-lg">
//         Don't have an account?
//        </div>
//        <div className="border border-gray-400 w-full flex items-center justify-center rounded-full py-4 text-gray-500 font-bold">
//         <Link to= "/signup">
//         SIGN UP FOR SPOTIFY
//         </Link>
        
//        </div>





//     </div> 
//     </div>

//   );
// };
// export default LoginComponent;

// Github Code
// import {useState} from "react";
// import {Icon} from "@iconify/react";
// import TextInput from "../components/shared/TextInput";
// import PasswordInput from "../components/shared/PasswordInput";
// import {Link, useNavigate} from "react-router-dom";
// import {makeUnauthenticatedPOSTRequest} from "../utils/serverHelpers";
// import {useCookies} from "react-cookie";

// import { Icon } from "@iconify/react";
// import TextInput from "../components/shared/TextInput";
// import { Link, Navigate, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { makeUnauthenticatedPOSTRequest } from "../utils/serverHelper";
// import { useCookies } from "react-cookie";
// import PasswordInput from "../components/shared/PasswordInput";

// const LoginComponent = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [cookies, setCookie] = useCookies(["token"]);
//     const navigate = useNavigate();

//     const login = async () => {
//       console.log("Login function called");
//         const data = {email, password};

//         console.log("Sending API Request to:", backendUrl + "/auth/login");
//         console.log("Request Payload:", data);

//         // try{
//         const response = await makeUnauthenticatedPOSTRequest(
//             "/auth/login",data
//         );

//         if (response && !response.err) {
//             const token = response.token;
//             const date = new Date();
//             date.setDate(date.getDate() + 30);
//             setCookie("token", token, {path: "/", expires: date});
//             alert("Success");
//             navigate("/home");
//         } else {
//             alert("Failure");
//         }
//       // }catch{
//       //   console.error("login failed",error);
//       // }
//     };

//     return (
//         <div className="w-full h-full flex flex-col items-center">
//             <div className="logo p-5 border-b border-solid border-gray-300 w-full flex justify-center">
//                 <Icon icon="logos:spotify" width="150" />
//             </div>
//             <div className="inputRegion w-1/3 py-10 flex items-center justify-center flex-col">
//                 {/*  I will have my 2 inputs(email and password) and I will have my sign up instead button*/}
//                 <div className="font-bold mb-4">
//                     To continue, log in to Spotify.
//                 </div>
//                 <TextInput
//                     label="Email address or username"
//                     placeholder="Email address or username"
//                     className="my-6"
//                     value={email}
//                     setValue={setEmail}
//                 />
//                 <PasswordInput
//                     label="Password"
//                     placeholder="Password"
//                     value={password}
//                     setValue={setPassword}
//                 />
//                 <div className=" w-full flex items-center justify-end my-8">
//                     <button
//                         className="bg-green-400 font-semibold p-3 px-10 rounded-full"
//                         onClick={(e) => {
//                             e.preventDefault();
//                             login();
//                         }}
//                     >
//                         LOG IN
//                     </button>
//                 </div>
//                 <div className="w-full border border-solid border-gray-300"></div>
//                 <div className="my-6 font-semibold text-lg">
//                     Don't have an account?
//                 </div>
//                 <div className="border border-gray-500 text-gray-500 w-full flex items-center justify-center py-4 rounded-full font-bold">
//                     <Link to="/signup">SIGN UP FOR SPOTIFY</Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LoginComponent;










// 3rd Attempt


import {useState} from "react";
import {Icon} from "@iconify/react";
import TextInput from "../components/shared/TextInput";
import PasswordInput from "../components/shared/PasswordInput";
import {Link, useNavigate} from "react-router-dom";
import {makeUnauthenticatedPOSTRequest} from "../utils/serverHelper";
import {useCookies} from "react-cookie";

const LoginComponent = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cookies, setCookie] = useCookies(["token"]);
    const navigate = useNavigate();

    const login = async () => {
      console.log("login function is called");
        const data = {email, password};
        const response = await makeUnauthenticatedPOSTRequest(
            "/auth/login",
            data
        );
        if (response && !response.err) {
            const token = response.token;
            const date = new Date();
            date.setDate(date.getDate() + 30);
            setCookie("token", token, {path: "/", expires: date});
            alert("Success");
            navigate("/home");
        } else {
            alert("Failure somehow");
        }
    };

    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="logo p-5 border-b border-solid border-gray-300 w-full flex justify-center">
                <Icon icon="logos:spotify" width="150" />
            </div>
            <div className="inputRegion w-1/3 py-10 flex items-center justify-center flex-col">
                {/*  I will have my 2 inputs(email and password) and I will have my sign up instead button*/}
                <div className="font-bold mb-4">
                    To continue, log in to Spotify.
                </div>
                <TextInput
                    label="Email address or username"
                    placeholder="Email address or username"
                    className="my-6"
                    value={email}
                    setValue={setEmail}
                />
                <PasswordInput
                    label="Password"
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                />
                <div className=" w-full flex items-center justify-end my-8">
                    <button
                        className="bg-green-400 font-semibold p-3 px-10 rounded-full"
                        onClick={(e) => {
                            e.preventDefault();
                            login();
                        }}
                    >
                        LOG IN
                    </button>
                </div>
                <div className="w-full border border-solid border-gray-300"></div>
                <div className="my-6 font-semibold text-lg">
                    Don't have an account?
                </div>
                <div className="border border-gray-500 text-gray-500 w-full flex items-center justify-center py-4 rounded-full font-bold">
                    <Link to="/signup">SIGN UP FOR SPOTIFY</Link>
                </div>
            </div>
        </div>
    );
};

export default LoginComponent;