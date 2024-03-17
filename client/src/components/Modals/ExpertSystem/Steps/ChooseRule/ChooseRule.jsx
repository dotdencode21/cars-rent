import styles from "./choose-rule.module.css";

import BaseButton from "@/components/Buttons/BaseButton/BaseButton";
import { IoCloseOutline } from "react-icons/io5";
import { MdFamilyRestroom, MdOutlineSportsScore } from "react-icons/md";
import { FaPiggyBank } from "react-icons/fa6";

const ChooseRuleStep = ({ onRuleChoose, onClose }) => {
  return (
    <div className={styles["choose-rule-modal-content"]}>
      <div className={styles["choose-rule-modal-content-header"]}>
        <span className={styles["choose-rule-modal-content-header-title"]}>
          Choose a rule
        </span>
        <BaseButton
          label={
            <IoCloseOutline size="1.75rem" color="var(--primary-black-color" />
          }
          style={{
            backgroundColor: "transparent",
            padding: 0,
          }}
          onClick={onClose}
        />
      </div>
      <div className={styles["choose-rule-modal-content-grid"]}>
        {[
          {
            id: Math.random() * Date.now(),
            title: "Rules for determining the family type of car",
            name: "familyCarRule",
            backgroundColor: "rgba(92, 151, 217, 0.25)",
            color: "rgb(92, 151, 217)",
            icon: <MdFamilyRestroom size="1.5rem" color="rgb(92, 151, 217)" />,
          },
          {
            id: Math.random() * Date.now(),
            title: "Rules for determining the sport type of car",
            backgroundColor: "rgba(236, 117, 117, 0.25)",
            color: "rgb(236, 117, 117)",
            name: "sportCarRule",
            icon: (
              <MdOutlineSportsScore size="1.75rem" color="rgb(236, 117, 117)" />
            ),
          },
          {
            id: Math.random() * Date.now(),
            title: "Rules for determining the economical type of car",
            backgroundColor: "rgba(231, 168, 85, 0.25)",
            color: "rgb(231, 168, 85)",
            name: "economicalCarRule",
            icon: <FaPiggyBank size="1.5rem" color="rgb(231, 168, 85)" />,
          },
        ].map((rule) => {
          return (
            <div
              key={rule.id}
              style={{ backgroundColor: rule.backgroundColor }}
              className={styles["choose-rule-modal-content-grid-item"]}
              onClick={() => onRuleChoose(rule.name)}
            >
              {rule.icon}
              <span
                style={{ color: rule.color }}
                className={styles["choose-rule-modal-content-grid-item-title"]}
              >
                {rule.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChooseRuleStep;
