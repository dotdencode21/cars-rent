import styles from "./rules-in-progress.module.css";
import BaseButton from "@/components/Buttons/BaseButton/BaseButton";
import CarCard from "@/components/Cards/Car/CarCard";
import { useMemo, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const RulesInProgressStep = ({
  setOfRules,
  chosenCar,
  chosenRule,
  onClose,
  onPickAnotherCar,
  onPickAnotherRule,
}) => {
  const [step, setStep] = useState(0);
  const [rulesAnswers, setRulesAnswers] = useState([
    false,
    false,
    false,
    false,
  ]);

  const currentRuleTitle = `${chosenRule[0].toUpperCase()}${chosenRule.slice(
    1
  )}`
    .replace("Rule", "")
    .split(/(?=[A-Z])/)
    .join(" ");

  const handleNo = ({ order }) => {
    setRulesAnswers((prev) => {
      const newArray = [...prev];
      newArray[order] = false;
      return newArray;
    });
    setStep((prev) => prev + 1);
  };

  const handleYes = ({ order }) => {
    setRulesAnswers((prev) => {
      const newArray = [...prev];
      newArray[order] = true;
      return newArray;
    });
    setStep((prev) => prev + 1);
  };

  const isCompleted = step >= 4;

  const [currentRule] = setOfRules.slice(step, step + 1);

  const mainRules = useMemo(() => {
    return setOfRules.map((rule) => rule.mainRule);
  }, [setOfRules]);

  const result =
    isCompleted &&
    rulesAnswers[1] === mainRules[1] &&
    rulesAnswers[2] === mainRules[2];

  return (
    <div className={styles["rules-in-progress-modal-content"]}>
      <div className={styles["rules-in-progress-modal-content-header"]}>
        <span
          className={styles["rules-in-progress-modal-content-header-title"]}
        >
          Chosen rule: {currentRuleTitle}
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
      <div className={styles["rules-in-progress-modal-content-grid"]}>
        <CarCard hasHover={false} {...chosenCar} />
        <div className={styles["rules-in-progress-modal-content-grid-rules"]}>
          {!isCompleted ? (
            <>
              <span
                className={
                  styles["rules-in-progress-modal-content-grid-rules-title"]
                }
              >
                {currentRule.title}
              </span>
              <div
                className={
                  styles["rules-in-progress-modal-content-grid-rules-actions"]
                }
              >
                <BaseButton
                  label="No"
                  style={{
                    backgroundColor: "var(--primary-red-color)",
                    width: "6rem",
                  }}
                  onClick={() => handleNo(currentRule)}
                />
                <BaseButton
                  label="Yes"
                  style={{
                    backgroundColor: "var(--primary-green-color)",
                    width: "6rem",
                  }}
                  onClick={() => handleYes(currentRule)}
                />
              </div>
            </>
          ) : (
            <>
              <span
                className={
                  styles["rules-in-progress-modal-content-grid-rules-result"]
                }
              >
                The car you have chosen {result ? "match" : "does not match"}{" "}
                the type {currentRuleTitle}
              </span>
              <div
                className={
                  styles["rules-in-progress-modal-content-grid-rules-actions"]
                }
              >
                <BaseButton
                  label="Another car"
                  style={{
                    backgroundColor: "var(--primary-red-color)",
                    width: "10rem",
                  }}
                  onClick={() => onPickAnotherCar(true)}
                />
                <BaseButton
                  label="Another rule"
                  style={{
                    backgroundColor: "var(--primary-green-color)",
                    width: "11rem",
                  }}
                  onClick={() => onPickAnotherRule(true)}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RulesInProgressStep;
