import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { Avatar, Typography } from "@material-ui/core";
import logo from "../images/logo.ico";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MaterialTable from "material-table";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import { Link } from "react-router-dom";

const cusList = [
  {
    id: 1,
    Name: "jon",
    phoneNumber: "0770",
    debt: "10",
    debtDate: "3/12/2021",
    payment: "5",
    paymentDate: "5/12/2021",
    buyer: "door",
  },
];

function Customers() {
  const [data, setData] = useState(cusList);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const columns = [
    { field: "id", title: "ID", editable: false },
    { field: "Name", title: "الاسم", width: 130 },
    { field: "phoneNumber", title: "الهاتف", width: 130, type: "number" },
    { field: "debt", title: "الديون", width: 130, type: "number" },
    { field: "debtDate", title: "التاريخ الدين", width: 130, type: "number" },
    { field: "payment", title: "التسديد", width: 130, type: "number" },
    {
      field: "paymentDate",
      title: "التاريخ التسديد",
      width: 130,
      type: "number",
    },
    {
      field: "buyer",
      title: "البضاعة ",
      width: 130,
    },
  ];
  const printcolumns = [
    { field: "id", title: "ID", editable: false },
    { field: "Name", title: "الاسم", width: 130 },
    { field: "debt", title: "الديون", width: 130, type: "number" },
    { field: "debtDate", title: "التاريخ الدين", width: 130, type: "number" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        m: 1,
        width: "100%",
        height: 100,
        flexGrow: 1,
      }}
      style={{
        backgroundColor: "#40454b",
        height: "100%",
        margin: "0",
        padding: "0",
      }}
    >
      <Grid container spacing={4} style={{ margin: "0 5px 0 5px" }}>
        <Grid item xs={16}>
          <Paper
            sx={{
              maxWidth: "100%",
              my: 1,
              mx: "auto",
              p: 2,
            }}
            style={{ margin: "0 20px 0px 20px" }}
          >
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Link to={"/"}>
                  <Avatar
                    src={logo}
                    variant="square"
                    style={{
                      width: 65,
                      height: 76,
                      left: 50,
                      top: 10,
                      margin: "10px",
                    }}
                  />
                </Link>
              </Grid>
              <Grid item xs>
                <Typography
                  noWrap
                  variant="h5"
                  // component="div"
                  style={{ flex: "2", marginLeft: "40px", marginTop: "30px" }}
                >
                  Add Customers
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        {/*print button */}
        <Grid xs={16} container direction="row" justifyContent="center">
          <Button
            onClick={handleClickOpen}
            variant="contained"
            endIcon={<LocalPrintshopIcon />}
            sx={{ mt: 2, ml: 2 }}
            style={{
              fontWeight: "bold",
              fontSize: "25px",
              backgroundColor: "#fff",
              borderRadius: "10px",
              width: "10%",
            }}
          >
            طباعة
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogContent style={{ backgroundColor: "#40454b" }}>
              <Paper
                sx={{
                  width: "96.5%",
                  overflow: "hidden",
                  display: "flex",
                }}
              >
                <MaterialTable
                  style={{
                    backgroundColor: "#fff",
                    width: "100%",
                  }}
                  title="فواتير الحساب"
                  data={data}
                  columns={printcolumns}
                  editable={{
                    onRowDelete: (selectedRow) =>
                      new Promise((resolve, reject) => {
                        const index = selectedRow.tableData.id;
                        const updatedRows = [...data];
                        updatedRows.splice(index, 1);
                        setTimeout(() => {
                          setData(updatedRows);
                          resolve();
                        }, 2000);
                      }),
                  }}
                  options={{
                    actionsColumnIndex: -1,
                    addRowPosition: "first",
                    exportButton: true,
                  }}
                />
              </Paper>
            </DialogContent>
          </Dialog>
        </Grid>
        {/* table  */}
        <Grid item xs={16}>
          <Paper
            sx={{
              width: "96.5%",
              overflow: "hidden",
              margin: "0px 20px 20px 30px",
              display: "flex",
            }}
          >
            <MaterialTable
              style={{
                backgroundColor: "#fff",
                width: "100%",
              }}
              title="Customers Data"
              data={data}
              columns={columns}
              editable={{
                onRowAdd: (newRow) =>
                  new Promise((resolve, reject) => {
                    const updatedRows = [
                      ...data,
                      { id: Math.floor(Math.random() * 100), ...newRow },
                    ];
                    setTimeout(() => {
                      setData(updatedRows);
                      resolve();
                    }, 2000);
                  }),
                onRowDelete: (selectedRow) =>
                  new Promise((resolve, reject) => {
                    const index = selectedRow.tableData.id;
                    const updatedRows = [...data];
                    updatedRows.splice(index, 1);
                    setTimeout(() => {
                      setData(updatedRows);
                      resolve();
                    }, 2000);
                  }),
                onRowUpdate: (updatedRow, oldRow) =>
                  new Promise((resolve, reject) => {
                    const index = oldRow.tableData.id;
                    const updatedRows = [...data];
                    updatedRows[index] = updatedRow;
                    setTimeout(() => {
                      setData(updatedRows);
                      resolve();
                    }, 2000);
                  }),
              }}
              options={{
                actionsColumnIndex: -1,
                addRowPosition: "first",
                // exportButton: true,
              }}
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Customers;
