import React from "react";
import Img from "../img/img.png";
import Attach from "../img/attach.png";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="text something..." />
      <div className="send">
        <img src={Attach} alt="" />
        <input style={{ display: "none" }} type="file" id="inputFile" />
        <label htmlFor="inputFile">
          <img src={Img} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
