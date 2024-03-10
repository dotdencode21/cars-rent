import { useState } from "react";
import styles from "./handbook.module.css";
import AboutUsContent from "./Content/AboutUs/AboutUs";
import OurValuesContent from "./Content/OurValues/OurValues";
import MissionContent from "./Content/Mission/Mission";
import { useTranslation } from "react-i18next";

const TABS_CONTENTS = {
  "about_us": <AboutUsContent />,
  "our_values": <OurValuesContent />,
  "mission": <MissionContent />
};  

const Handbook = () => {
  const [currentTab, setCurrentTab] = useState("about_us");
  const { t } = useTranslation()

  return (
    <div className={styles["handbook"]}>
      <span className={styles["handbook-title"]}>
        {t("Our adventages section title")}
      </span>
      <div className={styles["handbook-content"]}>
        <div className={styles["handbook-content-tabs"]}>
          {
            [
              { name: "about_us", title: t("Our adventages section about us tab") },
              { name: "our_values", title:  t("Our adventages section our values tab") },
              { name: "mission", title:  t("Our adventages section mission tab") }
            ].map((tab, tabIndex) => {
              return (
                <button
                  key={tabIndex}
                  className={`
                    ${styles["handbook-content-tabs-item"]} 
                    ${currentTab === tab.name && styles["handbook-content-tabs-item-active"]}
                  `}
                  onClick={() => setCurrentTab(tab.name)}
                >
                  <span className={styles["handbook-content-tabs-item-title"]}>
                    {tab.title}
                  </span>
                </button>
              );
            })
          }
        </div>
        {TABS_CONTENTS[currentTab]}
      </div>
    </div>
  );
};

export default Handbook;