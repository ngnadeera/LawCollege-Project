import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { CssBaseline } from "@mui/material";
import { Link } from "react-router-dom";

const styles = {
  appBar: {
    backgroundColor: "rgba(66, 66, 67, 0.90)",
    opacity: 1,
    maxHeight: "50px",
  },
};

const pages = [
  "Home",
  "Current Student",
  "Staff",
  "Alumni",
  "Union and Societies",
];
const pageRoutes = ["", "/CurrentStudent", "/Staff", "/Alumni", "/Unions"];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    setAnchorElNav(null);
  };

  return (
    <div>
      <CssBaseline />
      <AppBar position="fixed" style={styles.appBar}>
        <Container maxWidth="xl" position="relative">
          <Toolbar disableGutters position="absolute">
            <Box
              flexGrow={1}
              display={{ xs: "flex", md: "none" }}
              sx={{ marginTop: "-10px" }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page, index) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Link
                      to={pageRoutes[index]}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <Typography textAlign="center">{page}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box
              flexGrow={1}
              display={{ xs: "none", md: "flex" }}
              position="absolute"
              top={-9}
              left={-75}
            >
              {pages.map((page, index) => (
                <Link
                  key={page}
                  to={pageRoutes[index]}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    className="btn"
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      mr: 2,
                      "&:active": { backgroundColor: "white", color: "white" }, // Set the button color to white when active/clicked
                      "&:hover": { backgroundColor: "gray", color: "white" },
                      textTransform: "capitalize",
                    }}
                  >
                    {page}
                  </Button>
                </Link>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default NavBar;
