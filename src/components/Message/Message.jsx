import React from "react";
import "./Message.css";

const Message = ({ user, message, timeStamp, userImage }) => {
  console.log(user);
  console.log(userImage);
  return (
    <div className="message">
      <img src={userImage} className="message__img" />
      <div className="message__info">
        <h4>
          {user} <span>{new Date(timeStamp?.toDate()).toLocaleString()}</span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Message;
