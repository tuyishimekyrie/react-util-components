import clsx from "clsx";
import React from "react";
import { useTranslation } from "react-i18next";
import useColorModeStore from "../../modes/actions/colorModeStore";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const { theme } = useColorModeStore();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className={clsx("space-x-4", { "bg-gray-900 text-white": theme })}>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("fr")}>French</button>
      <button onClick={() => changeLanguage("kiny")}>Kinyarwanda</button>
    </div>
  );
};

export default LanguageSwitcher;
