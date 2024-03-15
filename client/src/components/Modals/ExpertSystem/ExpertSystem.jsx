import BaseModal from "../BaseModal/BaseModal";
import ChooseCarStep from "./Steps/ChooseCar/ChooseCar";
import { useState } from "react";
import ChooseRuleStep from "./Steps/ChooseRule/ChooseRule";
import RulesInProgressStep from "./Steps/RulesInProgress/RulesInProgress";
import { rules } from "@/constants/rules";

const ExpertSystemModal = ({ open, onClose, cars }) => {
  const [chosenCar, setChosenCar] = useState(null);
  const [chosenRule, setChosenRule] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [isAnotherCarPicked, setIsAnotherCarPicked] = useState(false);
  const [isAnotherRulePicked, setIsAnotherRulePicked] = useState(false);

  const handleCarChoose = (chosenCar) => {
    setChosenCar(chosenCar);
    setCurrentStep((prev) => prev + 1);
  };

  const handleRuleChoose = (chosenRule) => {
    setChosenRule(chosenRule);
    setCurrentStep((prev) => prev + 1);
  };

  const setOfRules = rules[chosenRule];

  const handleClose = () => {
    onClose();
    setCurrentStep(1);
  };

  const handlePickAnotherCar = (value) => {
    setIsAnotherRulePicked(false);
    setIsAnotherCarPicked(value);
    setCurrentStep(1);
  };

  const handlePickAnotherRule = (value) => {
    setIsAnotherCarPicked(false);
    setIsAnotherRulePicked(value);
    setCurrentStep(2);
  };

  return (
    <BaseModal open={open}>
      {(currentStep === 1 || isAnotherCarPicked) && currentStep === 1 && (
        <ChooseCarStep
          cars={cars}
          onClose={handleClose}
          onCarChoose={handleCarChoose}
        />
      )}
      {(currentStep === 2 || isAnotherRulePicked) && currentStep === 2 && (
        <ChooseRuleStep onRuleChoose={handleRuleChoose} onClose={handleClose} />
      )}
      {currentStep === 3 && (
        <RulesInProgressStep
          setOfRules={setOfRules}
          chosenCar={chosenCar}
          chosenRule={chosenRule}
          onClose={handleClose}
          onPickAnotherCar={handlePickAnotherCar}
          onPickAnotherRule={handlePickAnotherRule}
        />
      )}
    </BaseModal>
  );
};

export default ExpertSystemModal;
