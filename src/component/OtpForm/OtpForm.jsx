// import React from "react";
import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./OtpForm.css";
import * as yup from "yup";
import styled from "styled-components";
import { Formik, ErrorMessage, Form, Field } from "formik";

const OtpFormContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: auto;
  padding: 50px;
  border: 1px solid black;
`;

const OtpinputField = styled(Field)`
  background-color: #9393e6;
  outline: none;
  border: none;
  width: 100%;
  margin: auto;
  margin-top: 20px;
`;

const OtpFormButtons = styled(Button)`
  width: 30%;
  margin: auto;
  /* margin-top: 20px; */
  /* padding: 10px 20px; */
  font-size: 20px;
`;

const OtpForm = () => {
  const sumbitOtpForm = (values) => {
    console.log(values);
  };
  const [otpValue, setOtpValue] = useState();

  useEffect(() => {
    setOtpValue(() => {
      setTimeout(() => {
        let num = Math.random() * 1000000;
        let otpValue = Math.round(num);
        console.log(otpValue);
      }, 3000);
    });
  }, [otpValue]);

  const validateOtp = yup.object().shape({
    mobileotp: yup.string().min(6).required("please enter your mobile OTP"),
    emailotp: yup.string().min(6).required("please enter your Email OTP"),
  });

  return (
    <Formik
      initialValues={{
        mobileotp: "",
        emailotp: "",
      }}
      validationSchema={validateOtp}
      onSubmit={sumbitOtpForm}
    >
      <Form className="form">
        <h1>Please Enter Your OTP</h1>
        <OtpFormContainer>
          <OtpinputField
            className="otpfield"
            type="password"
            id="outlined-basic"
            label="Enter Your Mobile Number OTP"
            variant="outlined"
            name="mobileotp"
          />
          <div className="links">
            <a onClick={setOtpValue} href="#">
              Resend Mobile Number OTP
            </a>
            <p>
              <ErrorMessage name="mobileotp" />
            </p>
          </div>

          <OtpinputField
            className="otpfield"
            type="password"
            id="outlined-basic"
            label="Enter Your Email OTP"
            variant="outlined"
            name="emailotp"
          />
          <div className="links">
            <a onClick={setOtpValue} href="#">
              Resend Email OTP
            </a>

            <p>
              <ErrorMessage name="emailotp" />
            </p>
          </div>

          <div className="btn">
            <OtpFormButtons type="submit" variant="outlined">
              Submit Your OTP
            </OtpFormButtons>
          </div>
        </OtpFormContainer>
      </Form>
    </Formik>
  );
};

export default OtpForm;
