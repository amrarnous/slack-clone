import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { db } from "../../firebase";
import firebase from "firebase/compat/app";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
function ChatInput({ ChannelName, channelId, chatRef }) {
  const [user] = useAuthState(auth);

  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    if (!channelId || !input) {
      return false;
    }
    db.collection("rooms")
      .doc(channelId)
      .collection("messages")
      .add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL,
      })
      .then(() => {
        setInput("");
        chatRef.current.scrollIntoView({
          behavior: "smooth",
        });
      });
  };
  return (
    <ChatInputContainer>
      <form action="">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${ChannelName}`}
        />
        <Button
          style={{ display: "none" }}
          variant="contained"
          hidden
          type="submit"
          onClick={sendMessage}
        >
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  > form {
    position: fixed;
    bottom: 0;
    right: 0;
    width: calc(100% - 260px);
  }
  > form > input {
    width: 100%;
    height: 70px;
    border: none;
    outline: 0;
    border-top: 1px solid lightgray;
    padding-left: 8px;
    box-sizing: border-box;
  }
`;
