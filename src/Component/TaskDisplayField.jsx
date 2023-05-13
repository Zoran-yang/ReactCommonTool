import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Chip } from "@mui/material";
import mainTheme from "./mainTheme.jsx";
import { ThemeProvider } from "@mui/material/styles";

export default function TaskDisplayField({ sopData, children }) {
  let childrenData = JSON.parse(sopData.sop);
  let tasktag = sopData.tasktag;
  if (tasktag === "null") tasktag = '[{"title":"None"}]';
  return (
    <>
      {/* <ThemeProvider theme={mainTheme}> */}
        <TableContainer component={Paper}>
          <Table sx={{ width: "100%" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {/* <TableCell align="center" colSpan={2} sx={{ fontSize: "30px" }}> */}
                <TableCell align="center" colSpan={2}>
                  My SOP Panel
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                key="tasktype"
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {/* <TableCell component="th" scope="row" sx={{ fontSize: "20px" }}> */}
                <TableCell component="th" scope="row">
                  Type
                </TableCell>
                <TableCell
                  align="right"
                  // sx={{ fontSize: "20px" }}
                >
                  {JSON.parse(sopData["tasktype"]).title}
                </TableCell>
              </TableRow>
              <TableRow
                key="taskname"
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  // sx={{ fontSize: "20px" }}
                >
                  Name
                </TableCell>
                <TableCell
                  align="right"
                  // sx={{ fontSize: "20px" }}
                >
                  {JSON.parse(sopData.taskname).title}
                </TableCell>
              </TableRow>
              <TableRow
                key="tasktag"
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  // sx={{ fontSize: "20px" }}
                >
                  Tag
                </TableCell>
                <TableCell align="right">
                  {JSON.parse(tasktag).map((item) => (
                    <Chip
                      label={`${item.title}`}
                      key={`${item.title}`}
                      variant="outlined"
                    />
                  ))}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          {children && children(childrenData)}
        </TableContainer>
      {/* </ThemeProvider> */}
    </>
  );
}
