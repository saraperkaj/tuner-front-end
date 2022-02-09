import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";

import { createTheme, useTheme, ThemeProvider } from "@mui/material";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
// import { makeStyles} from "@mui/styles";

//Importing medias from assets
import AppLogo from "../Assets/appLogo.png";

//React Router
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      light: "#121212",
      main: "#121212",
      dark: "#121212",
      contrastText: "#121212",
    },
    secondary: {
      light: "#121212",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#8C8BD6",
  "&:hover": {
    backgroundColor: "#A7A6E7",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const FootBar = () => {
  //     const theme = useTheme();

  // const useStyle = makeStyles(() => ({
  //     footer: {
  //       background: "green",
  //     },

  //   }));

  //   const classes = useStyle();

  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleHomeLogo = () => {
    return navigate("/");
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <HomeIcon />
        </IconButton>
        <p>Home</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{ top: "auto", bottom: 0, height: 80, background: "#7B79C6" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
          <IconButton
            aria-label="footer-home"
            aria-controls="footer-home"
            aria-haspopup="true"
            color="inherit"
            sx={{ display: "block", margin: 0 }}
          >
            <HomeIcon
              color="disabled"
              fontSize="large"
              sx={{ color: "white" }}
            />
            <Typography variant="subtitle1">Home</Typography>
          </IconButton>
          <IconButton
            size="large"
            aria-label="footer-search"
            aria-controls="footer-search"
            aria-haspopup="true"
            color="inherit"
            sx={{ display: "block", margin: 0 }}
          >
            <SearchIcon
              color="disabled"
              fontSize="large"
              sx={{ color: "white" }}
            />
            <Typography variant="subtitle1">Search</Typography>
          </IconButton>
          <IconButton
            size="large"
            aria-label="footer-library"
            aria-controls="footer-library"
            aria-haspopup="true"
            color="inherit"
            sx={{ display: "block", margin: 0 }}
          >
            <LibraryMusicIcon
              color="disabled"
              fontSize="large"
              sx={{ color: "white" }}
            />
            <Typography variant="subtitle1">Library</Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};

export default FootBar;
