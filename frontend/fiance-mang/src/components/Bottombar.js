import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const Bottombar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
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
      <Button
        onClick={handleCloseNavMenu}
        sx={{
          my: 2,
          color: "#40454b",
          width: "100%",
          display: "block",
          margin: "0 10px ",
          fontSize: "30px",
          fontWeight: "bold",
          backgroundColor: "#fff",

          "&:hover": { background: "#40454b", color: "#fff" },
        }}
      >
        الواردات
      </Button>
      <Button
        onClick={handleCloseNavMenu}
        sx={{
          my: 2,
          color: "#40454b",
          width: "100%",
          display: "block",
          margin: "0 10px ",
          fontSize: "30px",
          fontWeight: "bold",
          backgroundColor: "#fff",

          "&:hover": { background: "#40454b", color: "#fff" },
        }}
      >
        المصاريف
      </Button>
      <Button
        onClick={handleCloseNavMenu}
        sx={{
          my: 2,
          color: "#40454b",
          width: "100%",
          display: "block",
          margin: "0 10px ",
          fontSize: "30px",
          fontWeight: "bold",
          backgroundColor: "#fff",

          "&:hover": { background: "#40454b", color: "#fff" },
        }}
      >
        المبيعات
      </Button>
      <Button
        onClick={handleCloseNavMenu}
        sx={{
          my: 2,
          color: "#40454b",
          width: "100%",
          display: "block",
          margin: "0 10px ",
          fontSize: "30px",
          fontWeight: "bold",
          backgroundColor: "#fff",

          "&:hover": { background: "#40454b", color: "#fff" },
        }}
      >
        المشتريات
      </Button>
      <Button
        onClick={handleCloseNavMenu}
        sx={{
          my: 2,
          color: "#40454b",
          width: "100%",
          display: "block",
          margin: "0 10px ",
          fontSize: "30px",
          fontWeight: "bold",
          backgroundColor: "#fff",

          "&:hover": { background: "#40454b", color: "#fff" },
        }}
      >
        الرواتب
      </Button>
    </ButtonGroup>
  );
};
export default Bottombar;
