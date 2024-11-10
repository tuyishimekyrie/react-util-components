import clsx from "clsx";
import useColorModeStore from "../../modes/actions/colorModeStore";

const SkeletonLoader = () => {
  const { theme } = useColorModeStore();

  return (
    <div
      className={clsx("w-80 h-full  rounded-lg flex flex-col gap-4", {
        " bg-gray-700": theme, // Dark Mode
        "bg-gray-600": !theme, // Light Mode": !theme
      })}
    >
      {/* <div
        className={clsx(
          "w-80 border border-slate-500 rounded-lg flex flex-col gap-4",
          { "border-slate-900": !theme }
        )}
      >
        <div className="w-full h-40 animate-pulse">
          <div
            className={clsx("w-full h-40", {
              "bg-gray-700": theme, // Dark Mode
              "bg-gray-600": !theme, // Light Mode
            })}
          ></div>
        </div>
        <div className="space-y-4">
          <p
            className={clsx("animate-pulse", {
              "bg-gray-700": theme, // Dark Mode
              "bg-gray-600": !theme, // Light Mode
              "h-10": true,
            })}
          ></p>
          <p
            className={clsx("animate-pulse", {
              "bg-gray-700": theme, // Dark Mode
              "bg-gray-600": !theme, // Light Mode
              "h-40": true,
            })}
          ></p>
        </div>
      </div> */}
    </div>
  );
};

export default SkeletonLoader;
