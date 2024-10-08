import React from "react";
import toast from "react-hot-toast";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../scss/Register.scss";

const Register = () => {
  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if (!name || !email || !password || !confirmPassword) {
      toast.error("Please fill in all fields!");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch(
        "https://memory-card-api-v2.vercel.app/api/v1/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        }
      );
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        toast.success("User registered successfully!");
        window.location.href = "/login";
      } else {
        toast.error(data.message || "Error registering user!");
      }
    } catch (error) {
      toast.error("Error registering user!");
      console.error(error);
    }
  };
  return (
    <div>
      <NavBar />
      <div className="register-container">
        <div className="register-form">
          <form onSubmit={handleRegister}>
            <div className="register-form-header">
              <h1>Register</h1>
            </div>
            <input type="text" placeholder="Name" name="name" />
            <input type="email" placeholder="Email" name="email" />
            <input type="password" placeholder="Password" name="password" />
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
            />
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
