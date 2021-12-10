import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
const drawerWidth = 200;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(0),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(open && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            height: "100%",
            top: "8.4%",
            backgroundColor: "#40454b",
            borderRadius: "0 10px  10px 0",
            color: "#fff",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <Link
            to={"/employees"}
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <Button
              sx={{
                my: 2,
                color: "#fff",
                width: "100%",
                display: "block",
                margin: "0 20px ",
                fontSize: "20px",
                fontWeight: "bold",
                "&:hover": { background: "#f7f7f7", color: "#40454b" },
              }}
            >
              العمال
            </Button>
          </Link>
          <Link
            to={"/customers"}
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "#fff",
                width: "100%",
                display: "block",
                margin: "0 20px ",
                fontSize: "20px",
                fontWeight: "bold",
                "&:hover": { background: "#f7f7f7", color: "#40454b" },
              }}
            >
              الزبائن
            </Button>
          </Link>
          <Link
            to={"/managerExpenses"}
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "#fff",
                width: "100%",
                display: "block",
                margin: "0 20px ",
                fontSize: "20px",
                fontWeight: "bold",
                "&:hover": { background: "#f7f7f7", color: "#40454b" },
              }}
            >
              مصاريف المدير
            </Button>
          </Link>
          <Link
            to={"/generalExpenses"}
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "#fff",
                width: "100%",
                display: "block",
                margin: "0 20px ",
                fontSize: "20px",
                fontWeight: "bold",
                "&:hover": { background: "#f7f7f7", color: "#40454b" },
              }}
            >
              مصاريف عامة
            </Button>
          </Link>
        </List>
        <Divider />
        <List>
          <Link to={""} style={{ textDecoration: "none", color: "#fff" }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "#fff",
                width: "100%",
                display: "block",
                margin: "0 20px ",
                fontSize: "20px",
                fontWeight: "bold",
                "&:hover": { background: "#f7f7f7", color: "#40454b" },
              }}
            >
              الجرد
            </Button>
          </Link>
          <Link to={"/notes"} style={{ textDecoration: "none", color: "#fff" }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "#fff",
                width: "100%",
                display: "block",
                margin: "0 20px ",
                fontSize: "20px",
                fontWeight: "bold",
                "&:hover": { background: "#f7f7f7", color: "#40454b" },
              }}
            >
              الملاحظات
            </Button>
          </Link>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}
