import { Stepper, Step, StepLabel } from '@mui/material';
import { useState } from 'react';
import { Form1, Form2, Form3 } from './HostForms';

const FormStepper = ({ userId }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    phoneNumber: '',
    address: {
      addressLineOne: '',
      city: '',
      state: '',
      zipCode: '',
    },
    agreedToTermsAndConditions: false,
    isRegistered: true,
  });

  const steps = ['Step 1', 'Step 2', 'Step 3'];

  switch (activeStep) {
    case 0:
      return (
        <>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          <Form1
            data={formData}
            setData={setFormData}
            nextStep={() => setActiveStep(activeStep + 1)}
          />
        </>
      );
    case 1:
      return (
        <>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          <Form2
            data={formData}
            setData={setFormData}
            prevStep={() => setActiveStep(activeStep - 1)}
            nextStep={() => setActiveStep(activeStep + 1)}
          />
        </>
      );
    case 2:
      return (
        <>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          <Form3
            userId={userId}
            data={formData}
            setData={setFormData}
            prevStep={() => setActiveStep(activeStep - 1)}
          />
        </>
      );
    default:
      return null;
  }
};

export default FormStepper;
