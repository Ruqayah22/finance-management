import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const pages = ["Products", "Pricing", "Blog", "Products", "Pricing", "Blog"];

const Bottombar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "#fff",
        width: "70%",
        marginLeft: "15%",
        borderRadius: "10px",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#40454b",
                  display: "block",
                  margin: "0 33px ",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Bottombar;

////////////////////////////////////////////////////////////////
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import MenuItem from "@mui/material/MenuItem";

// const settings = ["Profile", "Account", "Dashboard", "Logout"];

// const [anchorElUser, setAnchorElUser] = React.useState(null);

// const handleOpenNavMenu = (event) => {
//   setAnchorElNav(event.currentTarget);
// };
// const handleOpenUserMenu = (event) => {
//   setAnchorElUser(event.currentTarget);
// };

// const handleCloseUserMenu = () => {
//   setAnchorElUser(null);
// };

// {
//   /* <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton> */
// }
// {
//   /* <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "left",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: "block", md: "none" },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>*/
// }
// {
//   /* </Box> */
// }
