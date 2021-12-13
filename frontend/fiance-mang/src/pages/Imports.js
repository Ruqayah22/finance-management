import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import { Avatar, Typography } from "@material-ui/core";
import logo from "../images/logo.ico";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MaterialTable from "material-table";
import { Link } from "react-router-dom";

const importsList = [
  {
    id: 1,
    sales: "120",
    debts: "500",
    total: "620",
    date: "3/12/2021",
  },
];

export default function Imports() {
  const [data, setData] = useState(importsList);

  const columns = [
    { title: "ID", field: "id", editable: false },
    { field: "sales", title: "المبيعات", width: 130, type: "number" },
    { field: "debts", title: "الديون", width: 130, type: "number" },
    {
      field: "total",
      title: "المجموع",
      width: 130,
      type: "number",
    },
    { field: "date", title: "التاريخ", width: 130, type: "number" },
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
            sx={{ maxWidth: "100%", my: 1, mx: "auto", p: 2 }}
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
                  Add Imports
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* table  */}
        <Grid item xs={16}>
          <Paper
            sx={{
              width: "95%",
              overflow: "hidden",
              margin: "20px",
              display: "flex",
            }}
          >
            <MaterialTable
              style={{
                backgroundColor: "#fff",
                width: "100%",
              }}
              title="Imports Data"
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
              }}
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
