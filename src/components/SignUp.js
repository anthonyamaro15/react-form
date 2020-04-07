import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { NavLink } from "react-router-dom";
import axios from "axios";

const validationSchema = yup.object().shape({
  fname: yup.string().required("please enter name"),
  lname: yup.string().required("please enter last name"),
  email: yup
    .string()
    .lowercase()
    .email("Invalid email")
    .required("Plese enter email"),
  password: yup
    .string()
    .min(5, "Too Short!")
    .max(15, "Too Long!")
    .required("please enter password"),
  confirm: yup
    .string()
    .oneOf([yup.ref("password")], "Password does not match!")
    .required("please confirm password"),
});

const SignUp = () => {
  const [data, setData] = useState({});
  return (
    <div className="container">
      <div className="toggle">
        <NavLink to="/signup" activeClassName="active">
          sign up
        </NavLink>
        <NavLink to="/login" activeClassName="active">
          log in
        </NavLink>
      </div>

      <h2>sing up for free</h2>
      <Formik
        initialValues={{
          fname: "",
          lname: "",
          email: "",
          password: "",
          confirm: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetFom }) => {
          setData(values);
          resetFom();
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="full-name">
              <div className="fname">
                <label>
                  first name
                  <Field type="text" name="fname" />
                </label>
                {errors.fname && touched.fname && <span>{errors.fname}</span>}
              </div>
              <div className="lname">
                <label>
                  last name
                  <Field type="text" name="lname" />
                </label>
                {errors.lname && touched.lname && <span>{errors.lname}</span>}
              </div>
            </div>
            <label>
              email
              <Field type="email" name="email" />
            </label>
            {errors.email && touched.email && <span>{errors.email}</span>}

            <label>
              password
              <Field type="password" name="password" className="max-width" />
            </label>
            {errors.password && touched.password && (
              <span>{errors.password}</span>
            )}

            <label>
              confirm password
              <Field type="password" name="confirm" className="max-width" />
            </label>
            {errors.confirm && touched.confirm && <span>{errors.confirm}</span>}

            <button type="submit">get started</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
