import React, { Component, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import "../assets/css/chatstyle.css";

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

  console.log("============", chatData);

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Customer Chat
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        {chatData.map((data, index) => {
            <div className={data.userId === "user1" ? "user-one-style" : "user-two-style"}>
                {data.message}
            </div>
        })}
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
