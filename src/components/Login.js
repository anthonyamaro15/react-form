import React from "react";
import { withFormik, Form, Field } from "formik";
import { NavLink } from "react-router-dom";

const Login = () => {
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
        <label>
          email
          <Field type="email" name="email" />
        </label>
        <label>
          password
          <Field type="password" name="password" className="max-width" />
        </label>

        <button type="submit">log in</button>
      </Form>
    </div>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    email: "",
    password: ""
  })
})(Login);
