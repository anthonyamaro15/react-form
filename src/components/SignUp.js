import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";
import { NavLink } from "react-router-dom";
import axios from "axios";

const SignUp = ({ errors, touched, status }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    status && setData(status);
  }, [status]);
  return (
    <div>
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
      </div>
      <p>{data.fname}</p>
      <p>{data.lname}</p>
      <p>{data.email}</p>
    </div>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirm: ""
  }),
  validationSchema: yup.object().shape({
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
      .required("please confirm password")
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
})(SignUp);
