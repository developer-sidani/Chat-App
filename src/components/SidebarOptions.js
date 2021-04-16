import { useDispatch } from "react-redux";
import styled from "styled-components";
import { enterRoom } from "../features/appSlice";
import AddChannel from './AddChannel'
import React, { useState } from "react";
const SidebarOptionsContainer = styled.div`
    display: flex;
    font-size: 12px;
    align-items: center;
    padding-left: 2px;
    cursor: pointer;
    :hover {
      opacity: 0.9;
      background-color: #3b444b;
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
function SidebarOptions({ Icon, title, id, AddChannelOption, mystate, setmystate, myit, setmyit }) {
  const [addnewChannel, setAddnewChannel] = useState(false);
  const dispatch = useDispatch();
  const addChannel = () => {
    setAddnewChannel(true)

  };
  const selectChannel = () => {
    if (id) {
      dispatch(
        enterRoom({
          roomId: id,
        })
      );
    }
  };


  return (
    <>
      {addnewChannel && <AddChannel changestate={setAddnewChannel} />}

      <SidebarOptionsContainer
        onClick={() => {
          AddChannelOption ? addChannel() : selectChannel();
          if (title === 'Chat') {
            mystate === false ? setmystate(true) : setmystate(false)
          }
          if (title === 'Show Less' || title === 'Show More') {
            myit === false ? setmyit(true) : setmyit(false)
          }
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
    </>
  );
}

export default SidebarOptions;
