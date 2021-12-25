import React from 'react'
import { Formik } from 'formik';
import * as Yup from "yup"
import PrimaryButton from '../componets/PrimaryButton';
import PrimaryInput from '../componets/PrimaryInput';
import {Link, useNavigate } from "react-router-dom"

const SignIn = () => {
    const navigate = useNavigate()
    return (
        <div className="h-screen xl:max-w-6xl mx-auto">
            <div className="text-textpurple text-center font-bold pt-32">
                <p className="text-4xl">Welcome to</p>
                <p className="text-5xl">Me</p>
            </div>
            <p className="text-textpurple font-bold mt-14">
                Login to your account
            </p>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                validationSchema={Yup.object({
                    email: Yup.string()
                        .email("Invalid email address")
                        .required("This field is required"),
                    password: Yup.string()
                        .required("Enter your password")
                        .matches(
                            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                            "Password must contain at least 8 characters, one uppercase, one number and one special case character"
                        ),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    navigate("/");
                }}
            >
                {(formik) => (
                    <form onSubmit={formik.handleSubmit}>
                        <PrimaryInput
                            id="email"
                            type="email"
                            placeholder="Enter Email"
                            formikTouched={formik.touched.email}
                            formikErrors={formik.errors.email}
                            getFieldProps={{
                                ...formik.getFieldProps("email"),
                            }}
                        />
                        <PrimaryInput
                            id="password"
                            type="password"
                            label="PASWWORD"
                            placeholder="Password"
                            formikTouched={formik.touched.password}
                            formikErrors={formik.errors.password}
                            getFieldProps={{
                                ...formik.getFieldProps("password"),
                            }}
                            eye
                        />
                        <Link to="/">
                            <p className="text-blue-400 flex justify-end"></p>
                        </Link>
                    </form>
                )}
            </Formik>
            <div>
                <p className="float-right text-textpurple font-semibold">
                    Reset password
                </p>
                <Link to="/dashboard">
                    <PrimaryButton text="SignIn" />
                </Link>{" "}
            </div>

            <div className=" mt-44 text-center ">
                <p>
                    Don't have an account?{" "}
                    <span className="font-bold text-textpurple">
                        <Link to="/signup">Sign Up</Link>
                    </span>
                </p>
            </div>
        </div>
    );
}

export default SignIn
