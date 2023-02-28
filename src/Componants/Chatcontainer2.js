import React, { useState } from "react";
import "./Chatcontainer.css";
import "./Chatcontainer.css";
import ChatMessage from "./ChatMessage";
import EmojiPicker from "emoji-picker-react";

let name = "Barun";
function Chatcontainer2() {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const [openEmojiBox, setOpenEmojiBox] = useState(false);

  const [list, setList] = useState([]);
  const sendMessage = (e) => {
    e.preventDefault();
    console.log("you typed >>", input);
    setInput(input);

    setList((oldList) => [...oldList, input]);
  };

  return (
    <div className="chat-container">
      <div className="chat-container-header">
        <div className="chat-user-info">
          <div className="chat-user-img">
            <img src="./barun.png" />
          </div>
          <p>{name}</p>
        </div>
        <div className="chat-container-header-btn">
          <img src="./three.png" />
        </div>
      </div>
      <div className="chat-display-container">
        {list.map((item, index) => {
          return <ChatMessage key={index} message={item} time="22-02-2023" />;
        })}
      </div>
      <div className="chat-input">
        {openEmojiBox && (
          <EmojiPicker
            onEmojiClick={(event, emojiObject) =>
              setMessage(message + emojiObject.emoji)
            }
          />
        )}

        <div className="chat-input-btn">
          <img
            src="./imoge.png"
            alt=""
            onClick={() => setOpenEmojiBox(!openEmojiBox)}
          />
          <img src="./attach.png" alt="" />
        </div>
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type={"text"}
            placeholder="Type a message"
          />
        </form>
        <div className="chat-input-send-bt">
          <button onClick={sendMessage} type="Submit">
            {" "}
            Send a message
          </button>
        </div>
      </div>
    </div>
  );
}
export default Chatcontainer2;
