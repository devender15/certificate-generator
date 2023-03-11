import React from "react";

export default function Stepper({ currentStep }) {
  return (
    <ul className="steps">
      <li className={`step ${currentStep >= 1 ? 'step-primary' : ''}`}>Select template</li>
      <li className={`step ${currentStep >= 2 ? 'step-primary' : ''}`}>Enter details</li>
      <li className={`step ${currentStep >= 3 ? 'step-primary' : ''}`}>Review</li>
      <li className={`step ${currentStep >= 4 ? 'step-primary' : ''}`}>Export</li>
    </ul>
  );
}
