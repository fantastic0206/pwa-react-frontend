import React, { Component, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import "../assets/css/chatstyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { faSmile } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

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

// const chatClient = StreamChat.getInstance("dz5f4d5kzrue");
// const userToken =
//   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoid2lsZC1idXNoLTEiLCJleHAiOjE2MTQ1Mzc3MDV9.H1Q6BBh0LaWpMGJVyIGk7BHzWLn2evZCnnGoGe9hgH8";

// chatClient.connectUser(
//   {
//     id: "wild-bush-1",
//     name: "wild",
//     image: "https://getstream.io/random_png/?id=wild-bush-1&name=wild",
//   },
//   userToken
// );

// const channel = chatClient.channel("messaging", "godevs", {
//   // add as many custom fields as you'd like
//   image:
//     "https://cdn.chrisshort.net/testing-certificate-chains-in-go/GOPHER_MIC_DROP.png",
//   name: "Talk about Go",
// });

function ChatModal(props) {
  const paperclip = <FontAwesomeIcon icon={faPaperclip} />;
  const smile = <FontAwesomeIcon icon={faSmile} />;
  const paperPlane = <FontAwesomeIcon icon={faPaperPlane} />;

  const [chatData, setChatData] = React.useState();
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

  console.log(chatDatas);

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Customer Chat
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <div className="page-content page-container" id="page-content">
          <div className="container d-flex">
            <div
              className="ps-container ps-theme-default ps-active-y"
              id="chat-content"
              style={{
                overflowY: "scroll !important",
                height: "400px !important",
              }}
            >
              {chatDatas.map((item, index) => {
                <h1>fad</h1>
              })}
              <div className="media media-chat">
                <div className="media-body">
                  <p>Hi</p>
                  <p className="meta">
                    <time dateTime="2018">00:06</time>
                  </p>
                </div>
              </div>
              <div className="media media-chat media-chat-reverse">
                <div className="media-body">
                  <p>
                    Long time no see! Tomorrow office. will be free on sunday.
                  </p>
                  <p className="meta">
                    <time dateTime="2018">00:06</time>
                  </p>
                </div>
              </div>
              <div className="chat-bottom mb-3 ml-2">
                <input className="shadow p-3 bg-body rounded chat-input-bottom" />
                <a className="publisher-btn ml-3" href="" data-abc="true">
                  <i>{smile}</i>
                </a>
                <span className="publisher-btn file-group ml-2">
                  <i className="file-browser">{paperclip}</i>
                  <input type="file" />
                </span>
                <button className="btn btn-send ml-5">
                  Send<i className="ml-2">{paperPlane}</i>
                </button>
                {/* <a className="publisher-btn text-info" href="#" data-abc="true">
                  <i className="fa fa-paper-plane"></i>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

export default ChatModal;
