import React from "react";
import { withFormik, Form, Field } from "formik";
import { NavLink } from "react-router-dom";

const SignUp = () => {
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
      <Form>
        <div className="full-name">
          <div className="fname">
            <label>
              first name
              <Field type="text" name="fname" />
            </label>
          </div>
          <div className="lname">
            <label>
              last name
              <Field type="text" name="lname" />
            </label>
          </div>
        </div>
        <label>
          email
          <Field type="email" name="email" />
        </label>
        <label>
          password
          <Field type="password" name="password" className="max-width" />
        </label>

        <label>
          confirm password
          <Field type="password" name="confirm" className="max-width" />
        </label>

        <button type="submit">get started</button>
      </Form>
    </div>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    fname: "",
    lname: "",
    password: "",
    confirm: ""
  })
})(SignUp);
