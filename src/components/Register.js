import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

export default function Register({ loggedIn, users, setUsers }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      if (users.find((element) => element.username === values.username)) {
        alert("User already exists");
      } else {
        let newUser = { username: values.username, password: values.password };
        setUsers([...users, newUser]);
        navigate("/login")
      }
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().required("Username is required!"),
      password: Yup.string().required("Password is required!"),
    }),
  });

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={formik.handleSubmit}>
        <div className="login-item">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="login-item">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <div className="login-right">
        <div className="login-title">The Wandering Inn</div>
        <img src="/images/horns-register.png" alt="" />
      </div>
    </div>
  );
}
