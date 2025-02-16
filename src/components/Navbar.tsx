import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import {
  Tabs,
  Tab,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import BuildIcon from "@mui/icons-material/Build";
import DescriptionIcon from "@mui/icons-material/Description";
import GitHubIcon from "@mui/icons-material/GitHub";
import Home from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import MenuIcon from "@mui/icons-material/Menu";

import HideOnScroll from "./HideOnScroll";

function Navbar() {
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (open: boolean) => () => setDrawerOpen(open);

  const navLinks = [
    { label: "Home", icon: <Home />, path: "/" },
    { label: "About", icon: <InfoIcon />, path: "/about" },
    { label: "Projects", icon: <BuildIcon />, path: "/projects" },
    { label: "Resume", icon: <DescriptionIcon />, path: "/resume" },
    {
      label: "GitHub",
      icon: <GitHubIcon />,
      path: "https://github.com/MrSpookyAngel",
    },
  ];

  return (
    <HideOnScroll>
      <AppBar
        color="secondary"
        position="sticky"
        elevation={0}
        sx={{
          width: "95%",
          marginY: "1%",
          marginX: "auto",
          borderRadius: "3.125rem",
          outlineColor: "gray",
          outlineWidth: "0.1rem",
          outlineStyle: "solid",
        }}
      >
        <Container maxWidth={false}>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              position: "relative",
            }}
          >
            {/* First icon / text */}
            <Link aria-label="Home" to="/">
              <img src="v-universe.png" style={{ height: "3.5rem" }} />
            </Link>

            {/* Desktop */}
            {!isMobile && (
              <Box
                sx={{
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <Tabs
                  value={navLinks.findIndex(
                    (link) => link.path === location.pathname
                  )}
                  sx={{
                    "& .MuiTab-root": {
                      textTransform: "none",
                      fontWeight: 500,
                      fontSize: "1rem",
                      minWidth: 100,
                      color: theme.palette.primary.main,
                      "&:hover": {
                        color: theme.palette.text.primary,
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          width: "100%",
                          height: "2%",
                          backgroundColor: theme.palette.text.primary,
                          bottom: 0,
                          left: 0,
                          zIndex: 1,
                        },
                      },
                    },
                    "& .MuiTab-labelIcon": {
                      flexDirection: "row",
                    },
                    "& .MuiSvgIcon-root": {
                      marginRight: "0.5rem",
                    },
                    "& .MuiTabs-indicator": {
                      height: "2%",
                      zIndex: 0,
                    },
                  }}
                >
                  {/* Navigation links */}
                  {navLinks.map((link) => (
                    <Tab
                      key={link.label}
                      component={Link}
                      to={link.path}
                      icon={link.icon}
                      label={link.label}
                    />
                  ))}
                </Tabs>
              </Box>
            )}

            {/* Mobile Menu */}
            {isMobile && (
              <IconButton
                edge="end"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ color: theme.palette.text.primary }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>

        {/* Mobile Drawer */}
        {isMobile && (
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            PaperProps={{
              sx: {
                backgroundColor: theme.palette.background.paper,
              },
            }}
          >
            <List
              sx={{
                width: "calc(50vw)",
              }}
            >
              {/* Navigation links */}
              {navLinks.map((link) => (
                <ListItem
                  key={link.label}
                  component={Link}
                  to={link.path}
                  onClick={toggleDrawer(false)}
                >
                  <ListItemIcon sx={{ color: theme.palette.text.primary }}>
                    {link.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={link.label}
                    sx={{ color: theme.palette.text.primary }}
                  />
                </ListItem>
              ))}
            </List>
          </Drawer>
        )}
      </AppBar>
    </HideOnScroll>
  );
}

export default Navbar;
