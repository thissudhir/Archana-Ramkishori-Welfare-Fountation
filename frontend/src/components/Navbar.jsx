import React, { useState, useEffect, useRef } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Stack,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Box,
  Fab,
  Slide,
  useScrollTrigger,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Close,
  VolunteerActivism,
  ArrowUpward,
} from "@mui/icons-material";
import { motion, useAnimation } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";
import LogoSvg from "../assets/arkwforg-logo-zip-file (2)/png/logo-no-background.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const controls = useAnimation();
  const mobileMenuAnchorRef = useRef(null);

  const ScrollTop = ({ children }) => {
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 100,
    });

    const handleClick = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    return (
      <Slide in={trigger} direction="up">
        <Box
          onClick={handleClick}
          role="presentation"
          sx={{ position: "fixed", bottom: 32, right: 32, zIndex: 1000 }}
        >
          {children}
        </Box>
      </Slide>
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
        controls.start({
          backgroundColor: "rgba(13, 71, 161, 0.98)",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
          transition: { duration: 0.3 },
        });
      } else {
        setScrolled(false);
        controls.start({
          backgroundColor: theme.palette.primary.main,
          boxShadow: "none",
          transition: { duration: 0.3 },
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls, theme]);

  return (
    <>
      <AppBar
        position="fixed"
        component={motion.div}
        animate={controls}
        initial={{
          backgroundColor: theme.palette.primary.main,
        }}
        sx={{
          backdropFilter: scrolled ? "blur(12px)" : "none",
          transition: "all 0.3s ease",
          background: scrolled
            ? `linear-gradient(90deg, rgba(13, 71, 161, 0.98) 0%, ${theme.palette.primary.dark} 100%)`
            : theme.palette.primary.main,
          zIndex: 1200,
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            py: scrolled ? 1 : 2,
            transition: "all 0.3s ease",
            px: { xs: 2, md: 4 },
          }}
        >
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              component={Link}
              to="/"
              sx={{ textDecoration: "none" }}
            >
              <motion.div
              // whileHover={{ rotate: 360 }}
              // transition={{ duration: 0.7 }}
              >
                <img
                  src={LogoSvg}
                  alt="ARKWF Logo"
                  style={{
                    height: scrolled ? "40px" : "48px",
                    width: "auto",
                    transition: "all 0.3s ease",
                  }}
                />
              </motion.div>
            </Stack>
          </motion.div>

          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                onClick={() => setMobileMenuOpen(true)}
                component={motion.div}
                whileTap={{ scale: 0.9 }}
                ref={mobileMenuAnchorRef}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={mobileMenuAnchorRef.current}
                open={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
                MenuListProps={{
                  component: motion.div,
                  initial: { opacity: 0, y: -20 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -20 },
                  transition: { duration: 0.2 },
                }}
                sx={{
                  "& .MuiPaper-root": {
                    backdropFilter: "blur(12px)",
                    minWidth: "200px",
                  },
                }}
              >
                <MenuItem
                  onClick={() => setMobileMenuOpen(false)}
                  sx={{ justifyContent: "flex-end", py: 0 }}
                >
                  <IconButton onClick={() => setMobileMenuOpen(false)}>
                    <Close color="inherit" />
                  </IconButton>
                </MenuItem>
                <MenuItem
                  component={motion.div}
                  whileHover={{ x: 5 }}
                  onClick={() => setMobileMenuOpen(false)}
                  sx={{ py: 1.5 }}
                >
                  <Typography
                    component={Link}
                    to="/"
                    sx={{
                      fontWeight: 500,
                      width: "100%",
                      textAlign: "center",
                      textDecoration: "none",
                      color: "inherit",
                      "&:hover": {
                        color: theme.palette.secondary.main,
                      },
                    }}
                  >
                    Home
                  </Typography>
                </MenuItem>
                <MenuItem
                  component={motion.div}
                  whileHover={{ x: 5 }}
                  onClick={() => setMobileMenuOpen(false)}
                  sx={{ py: 1.5 }}
                >
                  <Typography
                    component={Link}
                    to="/about-us"
                    sx={{
                      fontWeight: 500,
                      width: "100%",
                      textAlign: "center",
                      textDecoration: "none",
                      color: "inherit",
                      "&:hover": {
                        color: theme.palette.secondary.main,
                      },
                    }}
                  >
                    About
                  </Typography>
                </MenuItem>
                <MenuItem
                  component={motion.div}
                  whileHover={{ x: 5 }}
                  onClick={() => setMobileMenuOpen(false)}
                  sx={{ py: 1.5 }}
                >
                  <Typography
                    component={Link}
                    to="/contact-us"
                    sx={{
                      fontWeight: 500,
                      width: "100%",
                      textAlign: "center",
                    }}
                  >
                    Contact
                  </Typography>
                </MenuItem>
                <MenuItem
                  component={motion.div}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setMobileMenuOpen(false)}
                  sx={{ py: 1.5 }}
                >
                  <Button
                    component={Link}
                    to="/donate"
                    variant="contained"
                    color="secondary"
                    fullWidth
                    startIcon={<VolunteerActivism />}
                    sx={{
                      borderRadius: 4,
                      fontWeight: 600,
                      py: 1,
                      background: `linear-gradient(45deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.dark})`,
                    }}
                  >
                    Donate
                  </Button>
                </MenuItem>
              </Menu>
            </>
          ) : (
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Stack direction="row" spacing={3}>
                <Button
                  component={Link}
                  to="/about-us"
                  color="inherit"
                  sx={{
                    fontWeight: 500,
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      width: "0%",
                      height: "2px",
                      bottom: 0,
                      left: "50%",
                      transform: "translateX(-50%)",
                      backgroundColor: theme.palette.secondary.main,
                      transition: "width 0.3s ease",
                    },
                    "&:hover::after": {
                      width: "80%",
                    },
                  }}
                >
                  About
                </Button>
                <Button
                  component={Link}
                  to="/contact-us"
                  color="inherit"
                  sx={{
                    fontWeight: 500,
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      width: "0%",
                      height: "2px",
                      bottom: 0,
                      left: "50%",
                      transform: "translateX(-50%)",
                      backgroundColor: theme.palette.secondary.main,
                      transition: "width 0.3s ease",
                    },
                    "&:hover::after": {
                      width: "80%",
                    },
                  }}
                >
                  Contact
                </Button>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: `0 6px 20px ${theme.palette.secondary.main}`,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    component={Link}
                    to="/donate"
                    variant="contained"
                    color="secondary"
                    startIcon={<VolunteerActivism />}
                    sx={{
                      borderRadius: 6,
                      fontWeight: 600,
                      px: 3,
                      background: `linear-gradient(45deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.dark})`,
                      boxShadow: `0 4px 15px ${theme.palette.secondary.light}`,
                    }}
                  >
                    Donate Now
                  </Button>
                </motion.div>
              </Stack>
            </motion.div>
          )}
        </Toolbar>
      </AppBar>

      <ScrollTop>
        <Fab
          color="secondary"
          size="medium"
          aria-label="scroll back to top"
          component={motion.button}
          whileHover={{
            scale: 1.1,
            boxShadow: `0 5px 15px ${theme.palette.secondary.main}`,
          }}
          whileTap={{ scale: 0.9 }}
          sx={{
            background: `linear-gradient(45deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.dark})`,
          }}
        >
          <ArrowUpward />
        </Fab>
      </ScrollTop>
    </>
  );
}
