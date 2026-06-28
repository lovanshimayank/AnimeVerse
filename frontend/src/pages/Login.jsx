import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { login } from "../services/authService";
import { loginSuccess } from "../redux/slices/authSlice";

import "./Auth.css";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await login(form);
      console.log("Login Response: ",data);

      localStorage.setItem("token", data.token);
      console.log("Token after save:", localStorage.getItem("token"));

      dispatch(loginSuccess(data));

      alert("Login Successful");

      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="auth-page">
      <form className="auth-box" onSubmit={handleSubmit}>

        <h1>Welcome Back</h1>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />

        <button type="submit">
          Login
        </button>

        <p>
          New User?{" "}
          <Link to="/register">
            Register
          </Link>
        </p>

      </form>
    </div>
  );
}

export default Login;