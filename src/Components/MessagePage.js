import { Field, reduxForm } from "redux-form";
import React from "react";
import Stepper from '../Components/Stepper'; 

// Validation function to ensure the message is not empty
const validate = (values) => {
  const errors = {};
  if (!values.message) {
    errors.message = "Required";
  }
  return errors;
};

const MessagePage = (props) => {
  const { handleSubmit, back, onSubmit } = props; // Added onSubmit from props

  const renderTextarea = ({ input, label, meta }) => {
    return (
      <div className="mb-4">
        <label className="mb-1 ">{label}</label>
        <textarea
          {...input}
          placeholder={label}
          className="border rounded p-2 w-full h-24 mt-3"
        />
        {meta.touched && meta.error && (
          <span className="text-red-500">{meta.error}</span>
        )}
      </div>
    );
  };

  const handleFormSubmit = (formValues) => {
    console.log("Form Values:", formValues);
    if (onSubmit) onSubmit(); // Call the onSubmit prop to move to the next step
  };

  return (
    <div>
    {/* <Stepper currentStep={2} steps={['Sign Up', 'Message', 'Confirm']} /> */}
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="max-w-lg mx-auto mt-3 bg-white rounded px-8 pt-6 pb-8 mb-4 border-none"
    >
      <hr className="border-t border-gray-300 mb-4" /> 

      <Field
        name="message" // Changed to lowercase
        component={renderTextarea}
        label="Type your Message"
      />

      <div className="flex justify-end mt-6">
        <button
          type="button"
          onClick={back}
          className="flex items-center text-black py-2 px-4"
        >
          Back
        </button>
        <button
          type="submit"
          className="flex items-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Next Step
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5-5 5M6 12h12"
            />
          </svg>
        </button>
      </div>
    </form>
    </div>
  );
};

export default reduxForm({
  form: 'message', // Ensure this form name is unique
  validate, // Add the validate function
})(MessagePage);
