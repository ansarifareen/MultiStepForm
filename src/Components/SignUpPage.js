import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Stepper from '../Components/Stepper'; 
const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  }
  if (!values.dateOfBirth) {
    errors.dateOfBirth = 'Required';
  }
  if (!values.emailAddress) {
    errors.emailAddress = 'Required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.emailAddress)) {
    errors.emailAddress = 'Invalid email address';
  }
  if (!values.address) {
    errors.address = 'Required';
  }
  return errors;
};

const SignUpPage = (props) => {
  const { handleSubmit, onSubmit } = props;

  const renderInput = ({ input, label, type, meta }) => {
    return (
      <div className="mb-4 flex-1">
        <label className="mb-3">{label}</label>
        <input {...input} placeholder={label} type={type} className="border rounded p-2 w-full mt-3" />
        {meta.touched && meta.error && <span className="text-red-500">{meta.error}</span>}
      </div>
    );
  };

  const handleFormSubmit = (formValues) => {
    console.log('Form Values:', formValues);
    onSubmit();
  };

  return (
    <div>
      {/* <Stepper currentStep={1} steps={['Sign Up', 'Message', 'Confirm']} /> */}
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="max-w-lg mx-auto mt-3 bg-white rounded px-8 pt-6 pb-8 mb-4 border-none"
      >
        <hr className="border-t border-gray-300 mb-8 " />
        <div className="flex mb-3 gap-5">
          <Field name="firstName" component={renderInput} label="First Name" type="text" />
          <Field name="lastName" component={renderInput} label="Last Name" type="text" />
        </div>
        <div className="flex mb-4 gap-5">
          <Field name="dateOfBirth" component={renderInput} label="Date of Birth" type="date" />
          <Field name="emailAddress" component={renderInput} label="Email Address" type="email" />
        </div>
        <Field name="address" component={renderInput} label="Address" />

        <div className="flex justify-end mt-6">
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'signup',
  validate,
})(SignUpPage);
