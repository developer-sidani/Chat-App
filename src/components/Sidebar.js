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
const Sidebar = () => {
  const [user] = useAuthState(auth);
  const [channels] = useCollection(db.collection("rooms"));
  const SidebarContainer = styled.div`
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

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Sidani's Server</h2>
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>

      <SidebarOptions Icon={InsertCommentIcon} title="Threads" />
      <SidebarOptions Icon={InboxIcon} title="Mentions & Reactions" />
      <SidebarOptions Icon={DraftsIcon} title="Saved Items" />
      <SidebarOptions Icon={BookmarkBorderIcon} title="Channel Browser" />
      <SidebarOptions Icon={PeopleAltIcon} title="People & User Groups" />
      <SidebarOptions Icon={AppsIcon} title="Apps" />
      <SidebarOptions Icon={FileCopyIcon} title="File Browser" />
      <SidebarOptions Icon={ExpandLessIcon} title="Show Less" />
      <hr />
      <SidebarOptions Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SidebarOptions Icon={AddIcon} title="Add Channel" AddChannelOption />
      {channels?.docs.map((doc) => (
        <SidebarOptions title={doc.data().name} id={doc.id} key={doc.id} />
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;
