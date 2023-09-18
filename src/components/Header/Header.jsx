import React from "react";
import "./Header.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Avatar } from "@mui/material";
import { getDataLayerValue } from "../../DataLayer";

const Header = () => {
  const [{ user }] = getDataLayerValue();

  return (
    <div className="header">
      <div className="header__left">
        <AccessTimeIcon className="header__left-time" />
      </div>
      <div className="header__search">
        <input type="text" placeholder="Search through slack" />
        <TuneIcon className="header__search-tune" />
        <SearchIcon className="header__search-search" />
      </div>
      <div className="header__right">
        <HelpOutlineIcon className="header__right-help" />
        <Avatar
          src={user?.photoURL}
          alt={user?.displayName}
          variant="rounded"
        />
      </div>
    </div>
  );
};

export default Header;
