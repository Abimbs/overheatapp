import React from "react";

import { Formik } from "formik";
import * as Yup from "yup";
import PrimaryButton from "./PrimaryButton";
import PrimaryInput from "./PrimaryInput";
import { Link, } from "react-router-dom";



const StepTwo = ({ nextStep }) => {
 
    return (
        <div className=" xl:max-w-6xl mx-auto">
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
                onSubmit={() => {
                    console.log("true");
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
                        <Link to="/dashbaord">
                            <PrimaryButton
                                text="Next"
                                type="submit"
                                onSubmit={nextStep}
                            />
                        </Link>
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

export default StepTwo;
