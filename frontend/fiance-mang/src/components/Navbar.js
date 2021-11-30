import React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import logo from "../images/logo.ico";

// for bar
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
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
// for logo image :
function VariantAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar sx={{ width: 35, height: 46 }} variant="square">
        <img src={logo} width="56" height="46"></img>
      </Avatar>
    </Stack>
  );
}

function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{
          backgroundColor: "#40454b",
        }}
      >
        <Toolbar>
          <VariantAvatars />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          ></Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
// export { Header };
export default SearchAppBar;

////////////////////////////////////////////////////////////////
// import * as React from "react";
// import Stack from "@mui/material/Stack";
// import MenuIcon from "@mui/icons-material/Menu";
// import IconButton from "@mui/material/IconButton";
// import N from "../images/N.ico";

// const Header = () => {
//   return <div>Header</div>;
// };

// for logo image :
// function VariantAvatars() {
//   return (
//     <Stack direction="row" spacing={2}>
//       <Avatar
//         // src="../images/logo.ico"
//         sx={{ width: 35, height: 46 }}
//         variant="square"
//       >
//         <img src={logo} width="56" height="46"></img>
//       </Avatar>
//       <Avatar
//         // src="../images/N.ico"
//         sx={{ width: 35, height: 46 }}
//         variant="square"
//       >
//         <img src={N} width="56" height="46"></img>
//       </Avatar>
//     </Stack>
//   );
// }

// {
//   /* <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="open drawer"
//             sx={{ mr: 2 }}
//             aria-label="open drawer"
//           >
//             <MenuIcon />
//           </IconButton> */
// }
