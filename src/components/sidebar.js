import Logo from "../assets/logo.png"
import { IoSearch } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { FaRegNewspaper } from "react-icons/fa";
import { LiaPagerSolid } from "react-icons/lia";
import { FiUser } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";


const Sidebar = () => {
    return (
        <div className="hidden md:flex md:flex-col md:items-center">
            <img className="w-20" src={Logo} alt='logo' />
            <IoSearch className="text-2xl mt-3 cursor-pointer text-gray-500 text-center" />
            <div className="mt-20">
                <GoHome className="text-2xl cursor-pointer text-gray-500 text-center" />
                <FaRegNewspaper className="text-2xl mt-8 cursor-pointer text-gray-500 text-center" />
                <LiaPagerSolid className="text-2xl mt-8 cursor-pointer text-gray-500 text-center" />
                <FiUser className="text-2xl mt-8 cursor-pointer text-gray-500 text-center" />
            </div>
            <div style={{position: "absolute", bottom: "25px"}}>
                <IoNotificationsOutline className="text-2xl cursor-pointer text-gray-500 text-center"/>
                <TbLogout className="text-2xl cursor-pointer ml-0.5 mt-5 text-gray-500 text-center"/>
            </div>
        </div>
    )
}

export default Sidebar