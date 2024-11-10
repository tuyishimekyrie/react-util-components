import { Outlet } from "react-router-dom";
import LanguageSwitcher from "../../features/languages/components/LanguageSwitcher";
import useColorModeStore from "../../features/modes/actions/colorModeStore";
import clsx from "clsx";
import Navbar from "../../components/Navbar";

const RootLayout = () => {
  const { theme } = useColorModeStore();
  return (
    <div>
      <div
        className={clsx("space-x-4 flex justify-between", {
          "bg-gray-900": theme,
        })}
      >
        <LanguageSwitcher />
        {/* <SwitchMode /> */}
      </div>
      <div
        className={clsx("space-x-4 h-screen ", {
          "bg-gray-900 text-white": theme,
        })}
      >
        <Navbar />

        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
