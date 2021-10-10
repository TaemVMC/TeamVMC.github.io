import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BrightnessAutoIcon from "@mui/icons-material/BrightnessAuto";
import ClassIcon from "@mui/icons-material/Class";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";

//NavButton
//   <ListItem button> << 쓰면 dataGrid랑 충돌 일어남.
export const mainListItems = (
  <div>
    <ListItem>
      <ListItemIcon>
        <BrightnessAutoIcon />
      </ListItemIcon>
      {/* <ListItemText primary="Certification" /> */}
      <Link to="/certification" style={{ color: "black", textDecoration: "none" }}>
        Certification{" "}
      </Link>
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <ClassIcon />
      </ListItemIcon>
      {/* <ListItemText primary="My Certifications" /> */}
      <Link to="/mycertification" style={{ color: "black", textDecoration: "none" }}>
        My Certification{" "}
      </Link>
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      {/* <ListItemText primary="Profile" /> */}
      <Link to="/Mypage" style={{ color: "black", textDecoration: "none" }}>
        My page{" "}
      </Link>
    </ListItem>
  </div>
);
