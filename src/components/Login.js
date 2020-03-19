import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Login = ({ errors, touched, status }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    status && setData(status);
  }, [status]);
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
        {errors.password && touched.password && <span>{errors.password}</span>}

        <button type="submit">log in</button>
      </Form>
    </div>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    email: "",
    password: ""
  }),
  validationSchema: yup.object().shape({
    email: yup.string().required("Please Enter Email"),
    password: yup.string().required("Please Enter Password")
  }),
  handleSubmit: (values, { resetForm, setStatus }) => {
    axios
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        setStatus(res.data);
        resetForm();
      })
      .catch(err => console.log(err));
  }
})(Login);
