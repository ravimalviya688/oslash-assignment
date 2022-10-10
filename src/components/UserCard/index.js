import { Avatar, List, Switch } from "antd";
import React from "react";
import AccessPopover from "../AccessPopover";
import "./index.css";

function UserCard({ title, desc, icon, type, access, handleAccessClick }) {
  return (
    <div className="user-card">
      <div className="user-info">
        <Avatar src="https://joeschmoe.io/api/v1/random" />
        <div className="user-detail">
          <h5>{title}</h5>
          <p>{desc}</p>
        </div>
      </div>
      <div>
        {type === "people" ? (
          <AccessPopover
            defaulAccess={access}
            handleAccessClick={handleAccessClick}
          />
        ) : (
          <Switch />
        )}
      </div>
    </div>
  );
}
export default UserCard;
