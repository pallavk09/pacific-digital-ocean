import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  ListItemButton,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  AccountCircle as AccountCircleIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";
import { Box } from "@mui/system";
import { Outlet } from "react-router-dom";

const drawerWidthOpen = 240;
const drawerWidthClosed = 60;

const RootLayout: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* Header */}
      <AppBar position="fixed" sx={{ zIndex: 1201 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Box
            display={"flex"}
            flexDirection="row"
            justifyContent={"space-between"}
            width={"100%"}
            p={2}
          >
            <Typography variant="body1" color="#fff" noWrap>
              <strong>Ship:</strong> Asia Liberty
            </Typography>
            <Typography variant="body1" color="#fff" noWrap>
              <strong>IMO:</strong> 9752694
            </Typography>
            <Typography variant="body1" color="#fff" noWrap>
              <strong>MMSI:</strong> 00000000
            </Typography>
            <Typography variant="body1" color="#fff" noWrap>
              <strong>Call Sign:</strong> 000000000
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: open ? drawerWidthOpen : drawerWidthClosed,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: open ? drawerWidthOpen : drawerWidthClosed,
            transition: "width 0.3s",
            overflowX: "hidden",
          },
        }}
      >
        <Toolbar />
        <List>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Home" />}
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Profile" />}
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Settings" />}
          </ListItemButton>
        </List>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          // marginLeft: open ? `${drawerWidthOpen}px` : `${drawerWidthClosed}px`,
          transition: "margin-left 0.3s",
        }}
      >
        {/* It acts as a spacer to push the content down below the AppBar without needing to manually add padding or margins.
        The height of <Toolbar /> automatically adjusts to the size of the AppBar, ensuring proper alignment. */}
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default RootLayout;
