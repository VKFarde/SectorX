import { HiMenuAlt4 } from "react-icons/hi";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/logo.png";

const NavItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar2 = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-rose-300 to-rose-50" >
      <div className="bg-gradient-to-r from-indigo-500 via purple-50 to pink-50..."></div>
      <nav className="w-full flex md:justify-left justify-between items-center p-4">
        <div className="md:flex-[0.5] flex-initial justify-center items-center">
          <img src={logo} alt="logo" className="w-32 cursor-pointer" />
        </div>

        <ul className="text-black md:flex hidden list-none flex-row justify-between items-center flex-initial">
          {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
            <NavItem key={item + index} title={item} />
          ))}
          <li className="bg-[#ce4a77] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#da7899] ">

            Login
          </li>
        </ul>
        <div className="flex relative">
          {toggleMenu
            ? <AiOutlineClose fontSize={30} className="text-rose md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
            : <HiMenuAlt4 fontSize={30} className="text-rose md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />}
          {toggleMenu && (
            <ul
              className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
             flex flex-col justify-start items-end rounded-md blue-glassmorphism text-black animate-slide-in"
            >
              <li className="text-xl w-full my-2">
                <AiOutlineClose onClick={() => setToggleMenu(false)} />
              </li>
              {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
                <NavItem key={item + index} title={item} classprops="my-2 text-lg" />
              ))}
            </ul>
          )}
        </div>

      </nav>
    </nav>
  );
};


export default Navbar2;