// import { Icon } from "@iconify/react/dist/iconify.js";


// const IconText= ({iconName,displayText,active}) =>{
//   return <div className="flex items-center justify-start cursor-pointer">
//     <div className="px-5 py-3">
//       <Icon icon={iconName}
//       color= {active? "white":"gray"} fontSize={30}></Icon>
//     </div>


//     <div className={`${active?"text-white":"text-gray"}text-sm font-semi- bold hover:text-white`}>
//       {displayText}
//     </div> 
//   </div>


// }
// export default IconText;
import {Icon} from "@iconify/react";
import {Link} from "react-router-dom";

const IconText = ({iconName, displayText, active, targetLink, onClick}) => {
    return (
        <Link to={targetLink} className="block">
            <div
                className="flex items-center justify-start cursor-pointer"
                onClick={onClick}
            >
                <div className="px-5 py-2">
                    <Icon
                        icon={iconName}
                        color={active ? "white" : "gray"}
                        fontSize={27}
                    />
                </div>
                <div
                    className={`${
                        active ? "text-white" : "text-gray-400"
                    } text-sm font-semibold hover:text-white`}
                >
                    {displayText}
                </div>
            </div>
        </Link>
    );
};

export default IconText;