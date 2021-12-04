import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SidebarNavMenu from "./SidebarNavMenu";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import logo from "../images/logo.ico";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";

function VariantAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar sx={{ width: 35, height: 46 }} variant="square">
        <img src={logo} width="56" height="46"></img>
      </Avatar>
    </Stack>
  );
}

export default function MenuAppBar() {
  const [value, setValue] = React.useState(new Date());
  const color = "#fff";

  return (
    <Box position="relative" sx={{ flexGrow: 1 }}>
      <AppBar
        position="relative"
        style={{
          backgroundColor: "#40454b",
        }}
      >
        <Toolbar>
          <SidebarNavMenu />
          <Typography sx={{ flexGrow: 1 }}></Typography>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              renderInput={(props) => (
                <TextField
                  {...props}
                  variant="standard"
                  sx={{
                    svg: { color },
                    input: { color },
                  }}
                />
              )}
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
            />
          </LocalizationProvider>
          <Typography sx={{ flexGrow: 1 }}></Typography>
          <VariantAvatars />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
