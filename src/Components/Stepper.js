import React from 'react';

const Stepper = ({ currentStep, steps }) => {
  return (
    <div className="flex items-center justify-center  mt-6 gap-4">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <div
            className={`flex items-center justify-center w-8 h-8 rounded-full font-bold mr-3 ${
              currentStep === index + 1 ? 'bg-blue-400 text-white' : 'bg-gray-200 text-gray-600'
            }`}
          >
            {index + 1}
          </div>
          {step}
          {index < steps.length - 1 && (
            <div className="flex-1 border-t border-gray-300 mx-2"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
