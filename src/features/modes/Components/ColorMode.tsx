
import clsx from "clsx";
import { MdDarkMode } from "react-icons/md";
import { FiSun } from "react-icons/fi";
import useColorModeStore from "../actions/colorModeStore";

function ColorMode() {
  const { theme, toggleTheme } = useColorModeStore();
  console.log("Current theme:", theme);

  return (
    <div
      className={clsx("min-h-screen p-4", {
        "bg-gray-900 text-white": theme,
        "bg-white text-black": !theme,
      })}
    >
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dark Mode App</h1>
        <button
          onClick={toggleTheme}
          className={clsx("p-2 rounded", {
            "bg-gray-700 text-white": theme,
            "bg-gray-200 text-black": !theme,
          })}
        >
          {theme ? <FiSun /> : <MdDarkMode />}
        </button>
      </header>
      <main className="mt-4">
        <p className="text-lg">
          Dark mode is currently <strong>{theme ? "enabled" : "disabled"}</strong>.
        </p>
        <p>Theme state: {theme ? "Dark" : "Light"}</p>
      </main>
    </div>
  );
}

export default ColorMode;
