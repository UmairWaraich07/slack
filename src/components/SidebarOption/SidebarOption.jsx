import React from "react";
import "./SidebarOption.css";
import db from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";

const SidebarOption = ({ Icon, title, id, addChannelOption }) => {
  const navigate = useNavigate();

  const selectChannel = () => {
    if (id) {
      navigate(`room/${id}`);
    } else {
      navigate(title);
    }
  };

  const addChannel = () => {
    const channelName = prompt("Enter channel name here");
    db.collection("rooms").add({
      name: channelName,
    });
  };
  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOption__icons" />}
      {Icon ? (
        <h4 className="sidebarOption__options">{title}</h4>
      ) : (
        <h4 className="sidebarOption__channel">
          <span className="sidebarOption__hash">#</span>
          {title}
        </h4>
      )}
    </div>
  );
};

export default SidebarOption;
