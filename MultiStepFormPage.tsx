// MultiStepFormPage.tsx
import React, { useState } from 'react';
import FormStep from './FormStep';

const MultiStepFormPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  return (
    <div>
      {currentStep === 1 && <FormStep onNext={handleNext} />}
      {/* Implement other steps similarly */}
    </div>
  );
};

export default MultiStepFormPage;
