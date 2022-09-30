import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Small Chat</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/4045599/pexels-photo-4045599.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <span>John</span>
        <button>Log out</button>
      </div>
    </div>
  );
};

export default Navbar;
