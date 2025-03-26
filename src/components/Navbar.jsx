import { useState } from "react";import { ChevronDown } from "lucide-react";

const Navbar = () => {
    const [user,setUser]=useState({name:'user',email:'usermail@gmail.com'})
  return (
    <nav className="w-full h-[10%] bg-white shadow-lg p-4 absolute top-0  px-6 py-4 flex justify-between items-center ">

<img className="w-16 h-16 rounded-full object-cover ml-[4%]" src="https://media.licdn.com/dms/image/v2/D4D0BAQHAyuNp49Ljsw/company-logo_200_200/company-logo_200_200/0/1728028889873/resollect_logo?e=2147483647&v=beta&t=gTSqQuCuoz6mWgSSLKR--owZUk4QcFXTuCMv3nOEHws"/>



      <div className="flex items-center space-x-4">
        <img
          src="https://static.vecteezy.com/system/resources/previews/010/577/232/non_2x/user-group-icon-logo-illustration-customer-symbol-template-for-graphic-and-web-design-collection-free-vector.jpg"
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="hidden md:block">
          <p className="text-sm font-semibold">{user.name}</p>
          <p className="text-xs text-gray-300">{user.email}</p>
        </div>
        <button className=" hover:bg-sky-400" ><ChevronDown className="w-6 h-6 text-gray-500" /></button>
      </div>
    </nav>
  );
};

export default Navbar;
