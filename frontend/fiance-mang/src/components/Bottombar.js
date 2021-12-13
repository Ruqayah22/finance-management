import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

const Bottombar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Grid>
      <Grid>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
          style={{
            backgroundColor: "#fff",
            position: "relative",
            width: "60%",
            left: "20%",
            borderRadius: "10px",
          }}
        >
          <Link
            to={"/imports"}
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "#40454b",
                width: "100%",
                display: "block",
                margin: "0 25px ",
                fontSize: "30px",
                fontWeight: "bold",
                backgroundColor: "#fff",

                "&:hover": { background: "#40454b", color: "#fff" },
              }}
            >
              الواردات
            </Button>
          </Link>
          <Link
            to={"/expenses"}
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "#40454b",
                width: "100%",
                display: "block",
                margin: "0 25px ",
                fontSize: "30px",
                fontWeight: "bold",
                backgroundColor: "#fff",

                "&:hover": { background: "#40454b", color: "#fff" },
              }}
            >
              المصاريف
            </Button>
          </Link>
          <Link to={"/sales"} style={{ textDecoration: "none", color: "#fff" }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "#40454b",
                width: "100%",
                display: "block",
                margin: "0 25px ",
                fontSize: "30px",
                fontWeight: "bold",
                backgroundColor: "#fff",

                "&:hover": { background: "#40454b", color: "#fff" },
              }}
            >
              المبيعات
            </Button>
          </Link>
          <Link
            to={"/purchases"}
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "#40454b",
                width: "100%",
                display: "block",
                margin: "0 25px ",
                fontSize: "30px",
                fontWeight: "bold",
                backgroundColor: "#fff",

                "&:hover": { background: "#40454b", color: "#fff" },
              }}
            >
              المشتريات
            </Button>
          </Link>
          <Link
            to={"/salary"}
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "#40454b",
                width: "100%",
                display: "block",
                margin: "0 25px ",
                fontSize: "30px",
                fontWeight: "bold",
                backgroundColor: "#fff",

                "&:hover": { background: "#40454b", color: "#fff" },
              }}
            >
              الرواتب
            </Button>
          </Link>
        </ButtonGroup>
      </Grid>
      <Grid>
        <Paper
          style={{
            backgroundColor: "#fff",
            position: "relative",
            width: "60%",
            left: "20%",
            height: "10px",
            marginTop: "10px",
          }}
        ></Paper>
      </Grid>
    </Grid>
  );
};
export default Bottombar;
