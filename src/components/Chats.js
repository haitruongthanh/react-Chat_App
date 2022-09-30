import React from "react";

const Chats = () => {
  return (
    <div className="chats">
      {[1, 2, 3, 4, 5].map((item, i) => {
        return (
          <div className="userChat" key={i}>
            <img
              src="https://images.pexels.com/photos/4045599/pexels-photo-4045599.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <div className="userChatInfo">
              <span>Jane</span>
              <p>Hello</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Chats;
