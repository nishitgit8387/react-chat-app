import React from "react";
import "./List.css";
import ChatList from "./chatList/ChatList";
import Userinfo from "./userInfo/user-info";

const List = () => {
  return (
    <div className="list">
      <Userinfo />
      <ChatList />
    </div>
  );
};

export default List;
