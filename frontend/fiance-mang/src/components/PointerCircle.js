import React from "react";
import Paper from "@mui/material/Paper";

function PointerCircle() {
  return (
    <div>
      <Paper
        style={{
          height: "10px",
          width: "60%",
          left: "20%",
          position: "relative",
          marginTop: "10px",
        }}
      ></Paper>
    </div>
  );
}

export default PointerCircle;
