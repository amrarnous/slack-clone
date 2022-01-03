import React from "react";
import styled from "styled-components";
import SidebarOption from "./SidebarOption";
import EditIcon from "@mui/icons-material/Edit";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AppsIcon from "@mui/icons-material/Apps";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
function Sidebar() {
  const [user] = useAuthState(auth);

  const [channels, loading,     ] = useCollection(db.collection("rooms"));

  const SidebarOptions = [
    {
      title: "Threads",
      icon: InsertCommentIcon,
    },
    {
      title: "Mentios & Reactions",
      icon: InboxIcon,
    },
    {
      title: "Saved Items",
      icon: DraftsIcon,
    },
    {
      title: "Channel Browser",
      icon: BookmarkBorderIcon,
    },
    {
      title: "People & user groups",
      icon: PeopleAltIcon,
    },
    {
      title: "Apps",
      icon: AppsIcon,
    },
    {
      title: "File Browser",
      icon: FileCopyIcon,
    },
  ];
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>{user?.displayName}</h2>
          <h3>
            <FiberManualRecordIcon />
            Amr Arnous
          </h3>
        </SidebarInfo>
        <EditIcon />
      </SidebarHeader>
      {SidebarOptions.map((option, index) => (
        <SidebarOption key={index} title={option.title} Icon={option.icon} />
      ))}
      <SidebarOption title="Show Less" Icon={ExpandLessIcon} />
      <hr />
      <SidebarOption title="Channels" Icon={ExpandMoreIcon} />
      <hr />
      <SidebarChannels>
        <SidebarOption title="Add Channel" Icon={AddIcon} addChannelOption />

        {channels?.docs.map((doc) => (
          <SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />
        ))}
      </SidebarChannels>
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  color: #fff;
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;
  height: calc(100vh - 60px);
  overflow-x: hidden;
  > hr {
    margin: 10px 0px;
    border: 1px solid #49274b;
  }
`;
const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;
  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: #fff;
    border-radius: 50px;
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
const SidebarChannels = styled.div``;
