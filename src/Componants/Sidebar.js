import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Sidebar.css";
import UserProfile from "./UserProfile";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-header-img">
          <img src="./user.png" alt="" />
        </div>

        <div className="sidebar-header-btn">
          <img src="./toll.png" alt="" />
          <img src="./insert.png" alt="" />
          <img src="./three.png" alt="" />
        </div>
      </div>
      <div className="sidebar-search">
        <div className="sidebar-search-input">
          <div className="sidebar-search-img">
            <img src="./search.png" alt="" />
          </div>

          <input
            type="text"
            name="search"
            placeholder="Search or start new chat"
          />
        </div>
      </div>
      <NavLink
        to="/ChatPage"
        style={{ color: "black", textDecoration: "none" }}
      >
        <div className="first">
          <UserProfile name="Raviranjan" l="22/02/2023" photoURL="./pro.png" />
        </div>
      </NavLink>

      <NavLink
        to="/ChatPage2"
        style={{ color: "black", textDecoration: "none" }}
      >
        <div className="secound">
          <UserProfile name="Barun" l="21/02/2023" photoURL="./barun.png" />
        </div>
      </NavLink>

      <NavLink
        to="/ChatPage3"
        style={{ color: "black", textDecoration: "none" }}
      >
        <div className="third">
          <UserProfile name="Mani" l="21/02/2023" photoURL="./mani.png" />
        </div>
      </NavLink>

      {/*<div className='sidebar-chat-list' onClick={event=> window.location.href='/ChatPage'}>
    
       <UserProfile name="Raviranjan" l="22/02/2023" photoURL="./user.png" />
       <UserProfile  name="Barun"l="21/02/2023" photoURL="./user.png"  />
       <UserProfile  name="Mani" l="19/02/2023"photoURL="./user.png"    />
       <UserProfile  name="Nitesh" l="20/02/2023"photoURL="./user.png"  />
       <UserProfile  name="Suraj Singh"l="18/02/2023" photoURL="./user.png"  />
       <UserProfile name="Raviranjan" l= "12/01/2023" photoURL="./user.png"/>
       <UserProfile  name="Barun"l="10/01/2023" photoURL="./user.png"  />
  </div>*/}
    </div>
  );
}
export default Sidebar;
