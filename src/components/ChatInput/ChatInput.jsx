import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import SendIcon from "@mui/icons-material/Send";

import "./ChatInput.css";
import db from "../../firebaseConfig";
import { getDataLayerValue } from "../../DataLayer";

const ChatInput = ({ roomName, roomId }) => {
  console.log(roomId);
  const [input, setInput] = useState("");
  const [{ user }, dispatch] = getDataLayerValue();

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("message");
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .add({
          message: input,
          user: user?.displayName,
          userImage: user?.photoURL,
          timeStamp: firebase.firestore.Timestamp.fromDate(new Date()),
        });
    }
    setInput("");
  };

  return (
    <div className="chatinput">
      <form>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${roomName?.toLowerCase()}`}
        />
        <button type="submit" onClick={sendMessage}>
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
