import React from "react";
import clsx from "clsx";
import { MdDarkMode } from "react-icons/md";
import { FiSun } from "react-icons/fi";
import useColorModeStore from "../features/modes/actions/colorModeStore";

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useColorModeStore(); 
  return (
    <nav
      className={clsx(
        "flex items-center justify-between p-4 shadow-md", 
        {
          "bg-gray-800 text-white": theme, 
          "bg-white text-black": !theme, 
        }
      )}
    >
      <div className="text-xl font-bold">My App</div>
      

      <div className="space-x-4">
        <a href="/" className="hover:underline">Home</a>
        <a href="/mode" className="hover:underline">Color</a>
        <a href="/language" className="hover:underline">I18n</a>
        <a href="/skeleton" className="hover:underline">Skeleton</a>
      </div>


      <button
        onClick={toggleTheme}
        className={clsx(
          "p-2 rounded-full focus:outline-none",
          {
            "bg-gray-700 text-white": theme, 
            "bg-gray-200 text-black": !theme, 
          }
        )}
      >
        {!theme ? <MdDarkMode /> : <FiSun />} 
      </button>
    </nav>
  );
};

export default Navbar;
