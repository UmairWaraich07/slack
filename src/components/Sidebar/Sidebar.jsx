import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import EditIcon from "@mui/icons-material/Edit";
import SidebarOption from "../SidebarOption/SidebarOption";
import CommentIcon from "@mui/icons-material/Comment";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AppsIcon from "@mui/icons-material/Apps";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import db from "../../firebaseConfig";
import { getDataLayerValue } from "../../DataLayer";

const Sidebar = () => {
  const [channels, setChannels] = useState([]);
  const [{ user }] = getDataLayerValue();

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__header-info">
          <h3>React Programmer 🚀</h3>
          <h4>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h4>
        </div>

        <EditIcon fontSize="larger" />
      </div>

      <SidebarOption Icon={CommentIcon} title="Threads" />
      <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
      <SidebarOption Icon={DraftsIcon} title="Saved items" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
      <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
      <SidebarOption Icon={AppsIcon} title="Apps" />
      <SidebarOption Icon={FileCopyIcon} title="File browser" />
      <SidebarOption Icon={ExpandLessIcon} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
      <hr />

      <SidebarOption Icon={AddIcon} title="Add channels" addChannelOption />

      {channels?.map((channel) => (
        <SidebarOption key={channel.id} title={channel.name} id={channel.id} />
      ))}
    </div>
  );
};

export default Sidebar;
