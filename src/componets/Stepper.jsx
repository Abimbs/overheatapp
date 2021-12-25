import React from "react";

const Stepper = ({ step }) => {
    return (
        <div>
            <div className=" xl:max-w-6xl mx-auto">
                <div className="">
                    <div className="flex items-center">
                        <div className="flex items-center text-purple-500 relative">
                            <div
                                className="
            rounded-full
            transition
            duration-500
            ease-in-out
            h-6
            w-6
           
            border-2 border-purple-500 bg-purple
          "
                            ></div>
                        </div>
                        <div
                            className={
                                step === 1
                                    ? " flex-auto border-t-4 transition duration-500 ease-in-out border-purple "
                                    : " flex-auto border-t-4 transition duration-500 ease-in-out border-white "
                            }
                        ></div>

                        {/* second one */}
                        <div className="flex items-center text-purple-500 relative">
                            <div
                                className={
                                    step === 1
                                        ? " rounded-full transition  duration-500 ease-in-out h-6 w-6  border-purple bg-purple"
                                        : " rounded-full transition  duration-500 ease-in-out h-6 w-6  border-purple bg-white"
                                }
                            ></div>
                        </div>
                        <div
                            className={
                                step === 2
                                    ? " flex-auto border-t-4 transition duration-500 ease-in-out border-purple "
                                    : " flex-auto border-t-4 transition duration-500 ease-in-out border-white "
                            }
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stepper;
