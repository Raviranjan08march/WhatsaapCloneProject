import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Componants/Home";
import ChatPage from "./Componants/ChatPage";
import Chatpage2 from "./Componants/Chatpage2";
import Chatpage3 from "./Componants/Chatpage3";
import { useState } from "react";

function App() {
  const [user, setUser] = useState();

  return (
    <div className="App">
      <Routes>
        <Route path="/chatpage" element={<ChatPage />} />

        <Route path="/chatpage2" element={<Chatpage2 />} />

        <Route path="/chatpage3" element={<Chatpage3 />} />

        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
