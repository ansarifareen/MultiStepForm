import React, { useState } from "react";
import SignUpPage from "./Components/SignUpPage";
import MessagePage from "./Components/MessagePage";
import Stepper from "./Components/Stepper"; 
import ConfirmPage from "./Components/ConfirmPage";

function App() {
  const [step, setStep] = useState(1);

  const next = () => {
    setStep((prev) => prev + 1);
  };

  const back = () => {
    setStep((prev) => prev - 1);
  };

  const handleFormSubmit = () => {
    console.log("Form has been submitted.");
  };
  // Define your steps here
  const steps = ["Sign Up", "Message", "Confirm"];
  console.log(step);
  return (
    <div className="container mx-auto p-4">
      {/* Only render the Stepper once */}
      <Stepper currentStep={step} steps={steps} />
     

      {/* Render the current step content */}
      {step === 1 && <SignUpPage onSubmit={next} />}
      {step === 2 && <MessagePage onSubmit={next} back={back} />}
      {step === 3 &&  <ConfirmPage onSubmit={handleFormSubmit} />}
    </div>
  );
}

export default App;
