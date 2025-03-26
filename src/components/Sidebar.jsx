import { useState } from "react";
import { 
  Grid, User, Bell, Mail, Gavel, Upload, Settings, Users, Shield 
} from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [active, setActive] = useState("Portfolio");

  const menuItems = [
    { name: "Dashboard", icon: <Grid size={20} /> },
    { name: "Portfolio", icon: <User size={20} /> },
    { name: "Notifications", icon: <Bell size={20} /> },
    { name: "Notices", icon: <Mail size={20} /> },
    { name: "Auction", icon: <Gavel size={20} /> },
    { name: "Data Upload", icon: <Upload size={20} /> },
    { name: "Control Panel", icon: <Settings size={20} /> },
    { name: "User Management", icon: <Users size={20} /> },
    { name: "Permissions", icon: <Shield size={20} /> },
  ];

  return (
    <div className="w-60 h-full bg-white shadow-lg p-4 absolute top-[10%]">
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <Link 
            key={item.name} 
            to={`/${item.name.toLowerCase().replace(/\s+/g, "")}`} 
            className="no-underline"
          >
            <li
              className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer 
                ${
                  active === item.name
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              onClick={() => setActive(item.name)}
            >
              {item.icon}
              <span>{item.name}</span>
            </li>
          </Link>
        ))}
      </ul>
      <div className="mt-[50%] inline-flex justify-center content-center">
        Powered by
        <img
          className="w-10 h-10 rounded-full object-cover ml-[7px]"
          src="https://media.licdn.com/dms/image/v2/D4D0BAQHAyuNp49Ljsw/company-logo_200_200/company-logo_200_200/0/1728028889873/resollect_logo?e=2147483647&v=beta&t=gTSqQuCuoz6mWgSSLKR--owZUk4QcFXTuCMv3nOEHws"
          alt="Logo"
        />
      </div>
    </div>
  );
};

export default Sidebar;
