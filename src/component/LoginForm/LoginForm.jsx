// import React from "react";
import "./LoginForm.css";
import { Navigate, useNavigate } from "react-router-dom";
import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";

const FormContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 40%;
  margin: auto;
  color: white;
  border: 1px solid black;
  background-color: transparent;
`;

const InputField = styled(Field)`
  color: white;
  background-color: #9393e6;
  padding: 20px 20px;

  outline: none;
  border: none;
  width: 90%;
  margin: auto;
  margin-top: 20px;
`;

const SubmitButton = styled(Button)`
  width: 50%;
  margin: auto;
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 20px;
`;

const LoginForm = () => {
  const navigate = useNavigate();
  const sumbitForm = (values) => {
    console.log(values);
    navigate("/otpform");
    // alert("your form is successfully filled");
  };

  const regex = "[A-Z]{5}[0-9]{4}[A-Z]{1}";
  const formvalidationSchema = yup.object().shape({
    username: yup
      .string()
      .required("please enter your full name")
      .min(5, "min 5 character required")
      .max(15, "max 15 character required"),

    email: yup
      .string()
      .required("Please Enter Your Email")
      .email("please Enter valid Email"),

    mobileNo: yup
      .string()
      .length(10)
      .required("Please Enter Your Mobile Number "),

    city: yup.string().required("City Name is required"),

    panNumber: yup
      .string()
      .uppercase()
      .required("Enter Your PAN Number")
      .matches(regex, "please enter your valid PAN Number"),

    // .minUppercase(6,"please enter your valid PAN Number")
    // .minNumbers(4,"please enter your valid PAN Number")
  });

  return (
    <div className="formContainer">
      <h1>User Login Form!!</h1>

      <Formik
        initialValues={{
          username: "",
          email: "",
          mobileNo: "",
          city: "",
          panNumber: "",
        }}
        validationSchema={formvalidationSchema}
        onSubmit={sumbitForm}
      >
        <Form>
          <FormContainer>
            <InputField
              type="text"
              id="outlined-basic"
              label="Full Name"
              placeholder="Enter Your Full Name"
              variant="outlined"
              name="username"
            />
            <p>
              <ErrorMessage name="username" />
            </p>

            <InputField
              type="email"
              id="outlined-basic"
              label="Email"
              placeholder="Enter Your Email"
              variant="outlined"
              name="email"
            />

            <p>
              <ErrorMessage name="email" />
            </p>

            <InputField
              type="number"
              id="outlined-basic"
              placeholder="Enter Your Mobile Number"
              label="Mobile Number"
              variant="outlined"
              name="mobileNo"
            />
            <p>
              <ErrorMessage name="mobileNo" />
            </p>

            <InputField
              type="text"
              id="outlined-basic"
              label="City"
              placeholder="Enter Your Current City"
              variant="outlined"
              name="city"
            />
            <p>
              <ErrorMessage name="city" />
            </p>

            <InputField
              type="text"
              id="outlined-basic"
              label="PAN Number"
              placeholder="Enter Your PAN Number"
              variant="outlined"
              name="panNumber"
            />
            <p>
              <ErrorMessage name="panNumber" />
            </p>

            <SubmitButton variant="outlined" type="submit">
              Submit
            </SubmitButton>
          </FormContainer>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
