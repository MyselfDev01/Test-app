import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/Inbox";

import { useMenu } from "./useMenu";
import logo from "../../../public/Images/logo.png";

const useStyles = makeStyles({
  drawer: {
    "& .mui-style-4t3x6l-MuiPaper-root-MuiDrawer-paper": {
      marginTop: "3.2rem",
    },
  },
  header: {
    justifyContent: "space-between",
  },
});

export const Mobile = () => {
  const classes = useStyles();
  const menu = useMenu();
  const [open, setOpen] = useState({
    right: false,
  });

  const toggleNav = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen({ ...open, [anchor]: open });
  };

  const menuData = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleNav(anchor, false)}
      onKeyDown={toggleNav(anchor, false)}
    >
      <List>
        {menu?.map((page, index) => {
          return (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>

                <ListItemText primary={page?.title}></ListItemText>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
          }}
        >
          <CssBaseline />
          <Toolbar className={classes.header}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleNav("left", true)}
            >
              <MenuIcon sx={{ fill: "black" }} />
            </IconButton>
            <Link href="/">
              <Image
                src={logo}
                alt="Monkey Logo"
                width={45}
                height={45}
                priority
              />
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer
        className={classes.drawer}
        anchor="left"
        open={open["left"]}
        onClose={toggleNav("left", false)}
      >
        {menuData("left")}
      </Drawer>
    </>
  );
};
