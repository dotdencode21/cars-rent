import { useMemo, useState } from "react";

import styles from "./select.module.css";

import { MdExpandMore, MdExpandLess } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export const Select = ({ type = "base", name = "", options, hasIcons = false, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [chosenOption, setChosenOption] = useState(null);

  const [lang, setLang] = useLocalStorage("lang", "en");

  const { t } = useTranslation();

  const isChangeLanguageSelect = type === "lang";

  const defaultSelectValue = useMemo(() => {
    if (isChangeLanguageSelect) {
      return options.find(option => option.countryCode === localStorage.getItem("lang") || "en");
    }
    return options.filter(option => option.default).find(option => option.name === name);
  }, [type]);

  const handleClick = (option) => {
    if (isChangeLanguageSelect) setLang(option.countryCode);
    setChosenOption(option);
    return onClick(option);
  };

  return (
    <div
      tabIndex={0}
      data-select-component
      className={styles["select"]}
      onClick={() => setIsOpen(prev => !prev)}
      onBlur={() => setIsOpen(false)}
    >
      <div className={styles["select-default-value"]}>
        {
          hasIcons && (
            <img
              src={(chosenOption && Object.keys(chosenOption).length) ? chosenOption.icon : defaultSelectValue.icon}
              className={styles["select-default-value-icon"]}
            />
          )
        }
        <span className={styles["select-default-value-title"]}>
          {(chosenOption && Object.keys(chosenOption).length) ? t(chosenOption.title) : t(defaultSelectValue.title)}
        </span>
      </div>
      {
        isOpen ? <MdExpandLess className={styles["select-arrow-icon"]} /> : <MdExpandMore className={styles["select-arrow-icon"]} />
      }
      {
        isOpen && (
          <div className={styles["select-list"]}>
            {
              options.map(option => {
                return (
                  <div
                    key={option.id}
                    onClick={() => handleClick(option)}
                    className={styles["select-list-item"]}
                  >
                    {
                      hasIcons && (
                        <img
                          src={option.icon}
                          className={styles["select-list-item-icon"]}
                        />
                      )
                    }
                    <span className={styles["select-list-item-title"]}>
                      {t(option.title)}
                    </span>
                  </div>
                )
              })
            }
          </div>
        )
      }
    </div>
  );
};
