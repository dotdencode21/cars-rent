import { useMemo, useState } from "react";

import styles from "./select.module.css";

import { MdExpandMore, MdExpandLess } from "react-icons/md";
import { useTranslation } from "react-i18next";

export const Select = ({ name = "", options, minWidth = 0, hasIcons = false, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [chosenOption, setChosenOption] = useState(null);

  const { t } = useTranslation();

  const defaultSelectValue = useMemo(() => {
    if (name.length) return options.filter(option => option.default).find(option => option.name === name);
    return options.filter(option => option.default)[0];
  }, [options]);

  const handleClick = (option) => {
    setChosenOption(option);
    return onClick(option);
  }

  return (
    <div
      style={{
        minWidth: `${minWidth / 16}rem`
      }}
      className={styles["select"]}
      onClick={() => setIsOpen(prev => !prev)}
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
