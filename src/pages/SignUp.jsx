import React, { useState } from "react";
import StepOne from "../componets/StepOne";
import Stepper from "../componets/Stepper";
import StepTwo from "../componets/StepTwo";
import Dashboard from "./Dashboard";

const SignUp = () => {
    const [step, setStep] = useState(0);

    //procced to next step
    const nextStep = () => setStep((prevStep) => prevStep + 1);

    // go back to prev step

    const backStep = () => setStep((prevStep) => prevStep - 1);

    const stepper = () => {
        switch (step) {
            case 0:
                return <StepOne nextStep={nextStep} step={step} />;
            case 1:
                return <StepTwo backStep={backStep} step={step} />;
         

              default: return 'Unknow step'
        }
    };

    return (
        <div className="xl:max-w-6xl mx-auto">
            <div className="text-textpurple text-center font-bold pt-32 ">
                <p className="text-4xl">Welcome to</p>
                <p className="text-5xl">Me</p>
            </div>
            <p className="text-textpurple font-bold mt-14">
                Create New account
            </p>
            <Stepper step={step} />
            {stepper()}
        </div>
    );
};

export default SignUp;
