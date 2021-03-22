import { useDispatch } from "react-redux";
import styled from "styled-components";
import { db } from "../firebase";
import { enterRoom } from "../features/appSlice";

import React from "react";

function SidebarOptions({ Icon, title, id, AddChannelOption }) {
  const dispatch = useDispatch();
  const addChannel = () => {
    const channelName = prompt("Enter Channel Name");
    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };
  const selectChannel = () => {
    if (id) {
      dispatch(
        enterRoom({
          roomId: id,
        })
      );
    } else {
      console.log("no");
    }
  };

  const SidebarOptionsContainer = styled.div`
    display: flex;
    font-size: 12px;
    align-items: center;
    padding-left: 2px;
    cursor: pointer;
    :hover {
      opacity: 0.9;
      background-color: #340e36;
    }
    > h3 {
      font-weight: 500;
    }
    > h3 > span {
      padding: 15px;
    }
  `;
  const SidebarOptionChannel = styled.h3`
    padding: 10px 0;
    font-weight: 300;
  `;
  return (
    <SidebarOptionsContainer
      onClick={() => {
        AddChannelOption ? addChannel() : selectChannel();
      }}
    >
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span>
          {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionsContainer>
  );
}

export default SidebarOptions;
