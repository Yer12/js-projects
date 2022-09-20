import * as React from "react";
// @ts-ignore
import Logo from "../../images/logo.png";
import SearchIcon from "../../images/search_icon.svg";
import MenuIcon from "../../images/menu.svg";

const Header = () => {
    return (
        <header className="flex max-w-full ml-auto mr-auto justify-between items-center">
            <img src={Logo} alt="Logo" />
            <a href="src/components/header/header#">+7 (777) 77 77</a>
            <a href="src/components/header/header#">+7 (777) 77 77</a>
            <p className="font-semibold">Алматы</p>
            <div className="flex items-center border-solid border-2 border-gray-300 rounded-xl pt-[7px] pb-[7px] pr-[7px]">
                <input type="text" className="pl-2 focus:outline-none" />
                <div className="bg-orange-500 rounded-md">
                    <img src={SearchIcon} alt="Search" className="p-1" />
                </div>
            </div>
            <img src={MenuIcon} alt="Menu Icon" />
        </header>
    );
};

export default Header;
