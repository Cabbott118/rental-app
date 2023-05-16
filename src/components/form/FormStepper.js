import { Stepper, Step, StepLabel } from '@mui/material';
import { useState } from 'react';
import { Form1, Form2, Form3 } from './HostForms';

const FormStepper = ({ userId }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [formState, setFormState] = useState({
    legalName: {
      first: '',
      last: '',
    },
    address: {
      addressLineOne: '',
      city: '',
      state: '',
      zipCode: '',
    },
    phoneNumber: '',
    dateOfBirth: '',
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
            formState={formState}
            setFormState={setFormState}
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
            formState={formState}
            setFormState={setFormState}
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
            formState={formState}
            setFormState={setFormState}
            prevStep={() => setActiveStep(activeStep - 1)}
          />
        </>
      );
    default:
      return null;
  }
};

export default FormStepper;
