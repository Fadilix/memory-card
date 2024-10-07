import React from "react";
import NavBar from "../components/NavBar";
import "../scss/Login.scss";
import Footer from "../components/Footer";
import toast from "react-hot-toast";

const Login = () => {
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
      const response = await fetch(
        "https://memory-card-api.vercel.app/api/v1/users/login",
        {
          methode: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      if (response.ok) {
        localStorage.setItem("token", response.id);
        localStorage.setItem("email", email);
        toast.success("Login successful!");
        window.location.href = "/";
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occured while logging in, please try again!");
    }
  };
  return (
    <div>
      <NavBar />
      <div className="login-container">
        <div className="login-form">
          <form onSubmit={handleLogin}>
            <div className="login-form-header">
              <h1>Login</h1>
            </div>
            <input type="text" placeholder="Email" autoFocus name="email" />
            <input type="password" placeholder="Password" name="password" />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
