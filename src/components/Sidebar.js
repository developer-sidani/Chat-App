import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import styled from "styled-components";
import CreateIcon from "@material-ui/icons/Create";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import DraftsIcon from "@material-ui/icons/Drafts";
import SidebarOptions from "./SidebarOptions";
import InboxIcon from "@material-ui/icons/Inbox";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import { db } from "../firebase";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { useState } from "react";
const Sidebar = () => {
  const [showChannels, setShowChannels] = useState(true)
  const [showitems, setShowitems] = useState(false)
  const [user] = useAuthState(auth);
  const [channels] = useCollection(db.collection("rooms"));
  const SidebarContainer = styled.div`
  ::-webkit-scrollbar {
    width: 10px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  overflow:auto;
    background-color: var(--slack-color);
    color: white;
    flex: 0.3;
    border-top: 1px solid #49274b;
    max-width: 260px;
    margin-top: 60px;
    > hr {
      margin-top: 10px;
      margin-bottom: 10px;
      border: 1px solid #49274b;
    }
  `;
  const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding-bottom: 10px;
    padding: 13px;

    > .MuiSvgIcon-root {
      cursor: pointer;
      :hover {
        opacity: 0.8;
      }
      padding: 8px;
      color: #49274b;
      font-size: 18px;
      background-color: white;
      border-radius: 999px;
    }
  `;
  const SidebarInfo = styled.div`
    flex: 1;
    > h2 {
      font-size: 15px;
      font-weight: 900;
      margin-bottom: 5px;
    }
    > h3 {
      display: flex;
      font-size: 13px;
      font-weight: 400;
      align-items: center;
    }
    > h3 > .MuiSvgIcon-root {
      font-size: 14px;
      margin-top: 1px;
      margin-right: 2px;
      color: green;
    }
  `;
  const ChatContainer = styled.div`
    
    `;
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Messaging App</h2>
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>

      <SidebarOptions Icon={PeopleAltIcon} title="People & User Groups" />
      <SidebarOptions Icon={InsertCommentIcon} title="Threads" />
      <SidebarOptions Icon={InboxIcon} title="Mentions & Reactions" />
      {showitems && <>
        <SidebarOptions Icon={DraftsIcon} title="Saved Items" />
        <SidebarOptions Icon={BookmarkBorderIcon} title="Channel Browser" />
        <SidebarOptions Icon={AppsIcon} title="Apps" />
        <SidebarOptions Icon={FileCopyIcon} title="File Browser" />
      </>
      }
      <SidebarOptions Icon={showitems ? ExpandLessIcon : ExpandMoreIcon} title={showitems ? "Show Less" : "Show More"} myit={showitems} setmyit={setShowitems} />
      <hr />
      <SidebarOptions Icon={showChannels ? ExpandLessIcon : ExpandMoreIcon} title="Chat" mystate={showChannels} setmystate={setShowChannels} />
      <hr />
      <ChatContainer>
        {showChannels &&
          <SidebarOptions Icon={AddIcon} title="Add Channel" AddChannelOption />}

        {showChannels && channels?.docs.map((doc) => (
          <SidebarOptions title={doc.data().name} id={doc.id} key={doc.id} />
        ))}
      </ChatContainer>

    </SidebarContainer>
  );
};

export default Sidebar;