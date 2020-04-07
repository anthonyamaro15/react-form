import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { NavLink } from "react-router-dom";
import axios from "axios";

const validationSchema = yup.object().shape({
  email: yup.string().required("Please Enter Email"),
  password: yup.string().required("Please Enter Password"),
});

const Login = () => {
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

      <h2>welcome back!</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          axios
            .post("https://reqres.in/api/users/", values)
            .then((res) => {
              setData(res.data);
              resetForm();
            })
            .catch((err) => console.log(err));
        }}
      >
        {({ errors, touched }) => (
          <Form>
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

            <button type="submit">log in</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
