import React, { useState } from "react";
import Stepper from '../Components/Stepper';

const ConfirmPage = ({ onSubmit, back }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (selectedOption) {
      onSubmit(); 
      alert("Form Submitted Successfully")// Call the onSubmit prop to move to the next step
    } else {
      alert("Please choose an option before submitting.");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
        className="max-w-lg mx-auto mt-3 bg-white rounded px-8 pt-6 pb-8 mb-4"
      >
        <hr className="border-t border-gray-300 mb-6" />

        <p className="mb-6 text-gray-700 font-bold">
          By clicking "Submit", you agree to our terms and conditions. Do you want to continue?
        </p>

        <div className="flex justify-between mb-6">
          <button
            type="button"
            className={`flex-1 mr-2 py-3 px-3 rounded border text-center font-bold ${selectedOption === "yes" ? "bg-blue-400 text-white" : "bg-gray-200 text-gray-600"}`}
            onClick={() => handleOptionChange("yes")}
          >
            Yes, I want it
          </button>
          <button
            type="button"
            className={`flex-1 py-3 px-3 rounded border text-center font-bold ${selectedOption === "no" ? "bg-blue-400 text-white" : "bg-gray-200 text-gray-600"}`}
            onClick={() => handleOptionChange("no")}
          >
            No, I don't want it
          </button>
        </div>

        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="flex items-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ConfirmPage;
