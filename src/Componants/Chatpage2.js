import React from "react";

import Chatcontainer2 from "./Chatcontainer2";

import Sidebar from "./Sidebar";
import "./Chatpage2.css";

function chatpage2() {
  return (
    <div className="chatpage2">
      <div className="chatpage2-container">
        <Sidebar />
        <Chatcontainer2 />
      </div>
    </div>
  );
}
export default chatpage2;
