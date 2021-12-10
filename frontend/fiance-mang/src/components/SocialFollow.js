import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import Grid from "@mui/material/Grid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import IconButton from "@mui/material/IconButton";

function SocialFollow() {
  return (
    <Grid
      container
      sx={{
        position: "relative",
        display: "block",
        color: "#fff",
        left: "95%",
        top: "30%",
      }}
    >
      <Grid item xs={8}>
        <IconButton
          href="https://web.facebook.com/alnawfaly1/?_rdc=1&_rdr"
          target="_blank"
          sx={{
            color: "#fff",
          }}
        >
          <FacebookOutlinedIcon />
        </IconButton>
      </Grid>
      <Grid item xs={8}>
        <IconButton
          href="https://goo.gl/maps/NQ9RhvuJy3S2sGay8"
          target="_blank"
          sx={{
            color: "#fff",
          }}
        >
          <LocationOnIcon />
        </IconButton>
      </Grid>
      <Grid item xs={8}>
        <IconButton
          href="mailto:radwan_alnawfali90@yahoo.com"
          value="email"
          target="_blank"
          sx={{
            color: "#fff",
          }}
        >
          <EmailIcon />
        </IconButton>
      </Grid>

      <Grid item xs={8}>
        <IconButton
          href="tel:+9647507229130"
          value="phone"
          target="_blank"
          sx={{
            color: "#fff",
          }}
        >
          <LocalPhoneIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default SocialFollow;
