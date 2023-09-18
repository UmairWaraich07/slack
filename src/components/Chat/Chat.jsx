import React, { useEffect, useState } from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import db from "../../firebaseConfig";
import Message from "../Message/Message";
import ChatInput from "../ChatInput/ChatInput";

const Chat = () => {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState("");
  const [roomMessages, setRoomMessages] = useState([]);

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timeStamp", "asc")
        .onSnapshot((snapshot) =>
          setRoomMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [roomId]);

  // console.log("Ⓜ️", roomMessages);

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__header-left">
          <h4>#{roomDetails?.name}</h4>
          <StarBorderIcon />
        </div>
        <div className="chat__header-right">
          <InfoOutlinedIcon />
          <p>Details</p>
        </div>
      </div>

      {roomMessages?.map(({ user, message, timeStamp, userImage }) => (
        <Message
          user={user}
          message={message}
          timeStamp={timeStamp}
          userImage={userImage}
        />
      ))}

      <ChatInput roomName={roomDetails?.name} roomId={roomId} />
    </div>
  );
};

export default Chat;
