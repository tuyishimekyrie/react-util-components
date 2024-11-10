import clsx from "clsx";
import useColorModeStore from "../actions/colorModeStore";
import { FiSun } from "react-icons/fi";
import { MdDarkMode } from "react-icons/md";

const SwitchMode = () => {
  const { theme, toggleTheme } = useColorModeStore();
  return (
    <div>
      {" "}
      <button
        onClick={toggleTheme}
        className={clsx("p-2 rounded", {
          "bg-gray-700 text-white": theme,
          "bg-gray-200 text-black": !theme,
        })}
      >
        {theme ? <FiSun /> : <MdDarkMode />}
      </button>
    </div>
  );
};

export default SwitchMode;
