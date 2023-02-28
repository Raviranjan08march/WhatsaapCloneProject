import React from "react";
import "./UserProfile.css";
function UserProfile({ name, photoURL, l }) {
  return (
    <div className="user-profile">
      <div className="user-img">
        <img src={photoURL} alt="" />
      </div>
      <div className="user-info">
        <h2 className="user-name"> {name}</h2>
        <p className="lastmessage>">{l}</p>
      </div>
    </div>
  );
}
export default UserProfile;
