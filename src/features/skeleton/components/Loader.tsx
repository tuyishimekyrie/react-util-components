import SkeletonLoader from "./SkeletonLoader";
import clsx from "clsx";
import useColorModeStore from "../../modes/actions/colorModeStore";

const Loader = () => {
  const { theme } = useColorModeStore();
  return (
    <div>
      <div
        className={clsx(
          "w-80 border border-slate-500 rounded-lg flex flex-col gap-4",
          { "border-slate-900": !theme }
        )}
      >
        <div className="w-full h-40 ">
          <div className="h-40">
            <SkeletonLoader />
          </div>
        </div>
        <div className="space-y-4">
          <p className="h-10">
            {" "}
            <SkeletonLoader />
          </p>
          <p className="h-40">
            {" "}
            <SkeletonLoader />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
