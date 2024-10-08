import React, { useState } from "react";
import NavBar from "../components/NavBar";
import "../scss/Login.scss";
import Footer from "../components/Footer";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(email, password);

    if (!email || !password) {
      toast.error("Please fill in all fields!");
      return;
    }

    try {
      setIsLoading(true);
      const response = await fetch(
        "https://memory-card-api-v2.vercel.app/api/v1/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();
      console.log(data);
      if (response.ok) {
        localStorage.setItem("token", data.user.id);
        localStorage.setItem("email", email);
        localStorage.setItem("name", data.user.name);
        toast.success("Login successful!");
        window.location.href = "/";
      } else {
        toast.error(data.message || "Login failed!");
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while logging in, please try again!");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="appear">
      <NavBar />
      <div className="login-container">
        <div className="login-form">
          <form onSubmit={handleLogin}>
            <div className="login-form-header">
              <h1>Login</h1>
            </div>
            <input type="text" placeholder="Email" autoFocus name="email" />
            <input type="password" placeholder="Password" name="password" />
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Loading..." : "Login"}
            </button>
          </form>
          {/* don't have an acccount register here */}
          <p
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            Don't have an account?{" "}
            <Link
              to="/register"
              style={{
                color: "orange",
              }}
            >
              Register
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
