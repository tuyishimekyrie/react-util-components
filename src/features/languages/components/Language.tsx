// src/components/Welcome.tsx
import React from "react";
import { useTranslation } from "react-i18next";
import useColorModeStore from "../../modes/actions/colorModeStore";
import clsx from "clsx";

const Language: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useColorModeStore();

  return (
    <div
      className={clsx("min-h-screen p-4", {
        "bg-gray-900 text-white": theme,
        "bg-white text-black": !theme,
      })}
    >
      <h1>{t("welcome")}</h1>
      <p>{t("greeting")}</p>
    </div>
  );
};

export default Language;
