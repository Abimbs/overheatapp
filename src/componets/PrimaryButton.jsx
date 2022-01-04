import React from "react";

const PrimaryButton = ({ text, type,  onSubmit,  }) => {
    return (
        <button
            onClick={onSubmit}
            className="w-full py-3 px-6 bg-purple border-2 rounded-lg text-center font-bold text-white"
            type={type}
        >
            {text}
        </button>
    );
};

export default PrimaryButton;
