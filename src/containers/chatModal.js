import React, { Component, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import "../assets/css/chatstyle.css";

import {
  Chat,
  Channel,
  ChannelHeader,
  Thread,
  Window,
} from "stream-chat-react";
import { MessageList, MessageInput } from "stream-chat-react";
import { StreamChat } from "stream-chat";

import "stream-chat-react/dist/css/index.css";

const chatClient = StreamChat.getInstance("dz5f4d5kzrue");
const userToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoid2lsZC1idXNoLTEiLCJleHAiOjE2MTQ1Mzc3MDV9.H1Q6BBh0LaWpMGJVyIGk7BHzWLn2evZCnnGoGe9hgH8";

chatClient.connectUser(
  {
    id: "wild-bush-1",
    name: "wild",
    image: "https://getstream.io/random_png/?id=wild-bush-1&name=wild",
  },
  userToken
);

const channel = chatClient.channel("messaging", "godevs", {
  // add as many custom fields as you'd like
  image:
    "https://cdn.chrisshort.net/testing-certificate-chains-in-go/GOPHER_MIC_DROP.png",
  name: "Talk about Go",
});

function ChatModal(props) {
  const [chatData, setChatData] = React.useState([]);
  const chatDatas = [
    {
      userId: "user1",
      message:
        "Hello, How much for a case of. … abc def ghi. abc def ghi.abc def ghi.abc def ghi.abc def ghi.abc def ghi.",
    },
    {
      userId: "user2",
      message:
        "Yes, abc def ghi.abc def ghi.abc def ghi.abc def ghi.abc def ghi.abc def.",
    },
    {
      userId: "user1",
      message: "Can you send pictures ?",
    },
  ];

  useEffect(() => {
    setChatData(chatDatas);
  }, chatData);

  console.log("======++++++", chatClient);

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Customer Chat
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Chat client={chatClient} theme="messaging light">
          <Channel channel={channel}>
            <Window>
              <ChannelHeader />
              <MessageList />
              <MessageInput />
            </Window>
            <Thread />
          </Channel>
        </Chat>
        {/* <Container> */}
        {/* </Container> */}
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

export default ChatModal;
