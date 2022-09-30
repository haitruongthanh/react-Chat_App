import React from "react";

const LoginPage = () => {
  return (
    <div className="formContainer">
      <div className="formWapper">
        <span className="logo">Small Chat</span>
        <span className="title">Login</span>

        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign In</button>
        </form>
        <p>You don't have an account? Register</p>
      </div>
    </div>
  );
};

export default LoginPage;
