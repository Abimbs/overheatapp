import React, { useState, useMemo } from "react";

import { Formik } from "formik";
import * as Yup from "yup";
import PrimaryButton from "./PrimaryButton";
import PrimaryInput from "./PrimaryInput";
import { Link,  } from "react-router-dom";
import Select from "react-select";
import countryList from "react-select-country-list";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const StepOne = ({ nextStep, step }) => {
    const [value, setValue] = useState("");
    const options = useMemo(() => countryList().getData(), []);

    const changeHandler = (value) => {
        setValue(value);
    };

    return (
        <div className=" xl:max-w-6xl mx-auto ">
           
            <Formik
                initialValues={{
                    firstName: "",

                    email: "",
                    country: "",
                    postcode: "",
                    Age: "",
                    gender: "",
                    dob: "",
                    password: "",
                    confirmPassword: "",
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string().required("This field is required"),
                    lastName: Yup.string().required("This field is required"),
                    email: Yup.string()
                        .email("Invalid email address")
                        .required("This field is required"),
                    password: Yup.string()
                        .required("Enter your password")
                        .matches(
                            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                            "Password must contain at least 8 characters, one uppercase, one number and one special case character"
                        ),
                    confirmPassword: Yup.string()
                        .required("Please confirm your password")
                        .oneOf(
                            [Yup.ref("password"), null],
                            "Passwords don't match."
                        ),
                })}
                onSubmit={(
                    { email, password, confirmPassword, firstName, lastName },
                    { setSubmitting }
                ) => {
                  
                }}
            >
                {(formik) => (
                    <form onSubmit={formik.handleSubmit}>
                        <PrimaryInput
                            id="firstName"
                            type="text"
                            label="FIRST NAME"
                            placeholder="Enter your first name "
                            formikTouched={formik.touched.firstName}
                            formikErrors={formik.errors.firstName}
                            getFieldProps={{
                                ...formik.getFieldProps("firstName"),
                            }}
                        />

                        <PrimaryInput
                            id="email"
                            type="email"
                            placeholder="Email Address"
                            formikTouched={formik.touched.email}
                            formikErrors={formik.errors.email}
                            getFieldProps={{
                                ...formik.getFieldProps("email"),
                            }}
                        />
                        <div className="border-2 shadow appearance-none   rounded-lg w-full py-4  px-3 text-gray-700 leading-tight bg-white">
                            <PhoneInput
                                placeholder="Enter phone number"
                                value={value}
                                onChange={setValue}
                                defaultCountry="RU"
                                international
                            />
                        </div>

                        <div className="border-2 shadow appearance-none  mt-5 rounded-lg w-full py-3  px-3 text-gray-700 leading-tight bg-white">
                            <Select
                                options={options}
                                value={value}
                                onChange={changeHandler}
                            />
                        </div>
                        <div className="mb-5" />

                        <PrimaryInput
                            id="postcode"
                            type="postcode"
                            label="postcode"
                            placeholder="Postcode"
                            formikTouched={formik.touched.postcode}
                            formikErrors={formik.errors.postcode}
                            getFieldProps={{
                                ...formik.getFieldProps("postcode"),
                            }}
                        />
                        <PrimaryInput
                            id="age"
                            type="age"
                            label="age"
                            placeholder="Age"
                            formikTouched={formik.touched.age}
                            formikErrors={formik.errors.age}
                            getFieldProps={{
                                ...formik.getFieldProps("age"),
                            }}
                        />
                        <PrimaryInput
                            id="gender"
                            type="gender"
                            label="gender"
                            placeholder="Gender"
                            formikTouched={formik.touched.gender}
                            formikErrors={formik.errors.gender}
                            getFieldProps={{
                                ...formik.getFieldProps("gender"),
                            }}
                        />
                        <PrimaryInput
                            id="dob"
                            type="date"
                            label="dob"
                            placeholder="Date of Birth"
                            formikTouched={formik.touched.dob}
                            formikErrors={formik.errors.dob}
                            getFieldProps={{
                                ...formik.getFieldProps("dob"),
                            }}
                        />
                        <PrimaryInput
                            id="password"
                            type="password"
                            label="PASWWORD"
                            placeholder=". . . . . . . . . ."
                            formikTouched={formik.touched.password}
                            formikErrors={formik.errors.password}
                            getFieldProps={{
                                ...formik.getFieldProps("password"),
                            }}
                            eye
                        />
                        <PrimaryInput
                            id="confirmPassword"
                            type="password"
                            label="CONFIRM PASWWORD"
                            placeholder=". . . . . . . . . ."
                            formikTouched={formik.touched.confirmPassword}
                            formikErrors={formik.errors.confirmPassword}
                            getFieldProps={{
                                ...formik.getFieldProps("confirmPassword"),
                            }}
                            eye
                        />
                        <PrimaryButton text="Next" type="submit" onSubmit={nextStep} />
                    </form>
                )}
            </Formik>
            <div className=" mt-10 text-center">
                <p>
                    Do you have an account?{" "}
                    <span className="font-bold text-textpurple">
                        <Link to="/">Sign In</Link>
                    </span>
                </p>
            </div>
            
        </div>
    );
};

export default StepOne;
