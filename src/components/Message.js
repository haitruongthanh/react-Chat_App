import React from "react";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://images.pexels.com/photos/1824961/pexels-photo-1824961.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img
          src="https://images.pexels.com/photos/1914837/pexels-photo-1914837.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
      </div>
    </div>
  );
};

export default Message;
