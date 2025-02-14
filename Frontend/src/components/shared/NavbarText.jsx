import { Icon } from "@iconify/react/dist/iconify.js";

const NavbarText= ({displayText,active}) =>{
  return (<div className="flex items-center justify-start cursor-pointer">
    {/* <div className="px-5 py-3">
      <Icon icon={iconName}
      color= {active? "white":"gray"} fontSize={30}></Icon>
    </div> */}

    <div className={`${active ? "text-white" : "text-gray-200"}font-semibold hover:text-white `}>
      {displayText}
    </div> 
  </div>
);

};
export default NavbarText;