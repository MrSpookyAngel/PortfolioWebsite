import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  AppBar,
  Box,
  Container,
  Toolbar,
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

import AccountBoxIcon from "@mui/icons-material/AccountBox";
import BuildIcon from "@mui/icons-material/Build";
import DescriptionIcon from "@mui/icons-material/Description";
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import MenuIcon from "@mui/icons-material/Menu";

import HideOnScroll from "./HideOnScroll";

export default function Navbar() {
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  function toggleDrawer(open: boolean) {
    return function () {
      setDrawerOpen(open);
    };
  }

  const navLinks = [
    { label: "Home", icon: <HomeIcon />, href: "/" },
    { label: "About", icon: <InfoIcon />, href: "/about" },
    { label: "Projects", icon: <BuildIcon />, href: "/projects" },
    { label: "Resume", icon: <DescriptionIcon />, href: "/resume" },
    { label: "Contact", icon: <AccountBoxIcon />, href: "/contact" },
    {
      label: "GitHub",
      icon: <GitHubIcon />,
      href: "https://github.com/MrSpookyAngel",
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
          outlineWidth: "0.2rem",
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
              <img
                src="v-universe.png"
                alt="v-universe logo"
                style={{ height: "3.5rem" }}
              />
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
                    (link) => link.href === location.pathname
                  )}
                  sx={{
                    "& .MuiTab-root": {
                      textTransform: "none",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      color: "primary.main",
                      "&:hover": {
                        color: "text.primary",
                        // adds a line below the text
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          width: "100%",
                          height: "2%",
                          backgroundColor: "text.primary",
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
                  {navLinks.map((link) => {
                    const isExternalLink =
                      link.href.startsWith("https://") ||
                      link.href.startsWith("http://");
                    return (
                      <Tab
                        key={link.label}
                        component={Link}
                        to={link.href}
                        icon={link.icon}
                        label={link.label}
                        target={isExternalLink ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        tabIndex={0}
                      />
                    );
                  })}
                </Tabs>
              </Box>
            )}

            {/* Mobile Menu */}
            {isMobile && (
              <IconButton
                edge="end"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ color: "text.primary" }}
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
                backgroundColor: "background.paper",
              },
            }}
          >
            <List
              sx={{
                width: "calc(50vw)",
              }}
            >
              {/* Navigation links */}
              {navLinks.map((link) => {
                const isExternalLink =
                  link.href.startsWith("https://") ||
                  link.href.startsWith("http://");
                return (
                  <ListItem
                    key={link.label}
                    component={Link}
                    to={link.href}
                    onClick={toggleDrawer(false)}
                    target={isExternalLink ? "_blank" : undefined}
                    rel="noopener noreferrer"
                  >
                    <ListItemIcon sx={{ color: "text.primary" }}>
                      {link.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={link.label}
                      sx={{ color: "text.primary" }}
                    />
                  </ListItem>
                );
              })}
            </List>
          </Drawer>
        )}
      </AppBar>
    </HideOnScroll>
  );
}
