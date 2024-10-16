// AWTable
import React from "react";
import {
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  // Button,
} from "@mui/material";
import webColor from "../../assets/colors/Colors";

const CustomeTable = ({ columns, rows , title  }) => {
  return (
    <Box>
      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: "greyLight",
          border: "none",
          borderRadius: 3,

        }}
      >
        <Table sx={{
          overflowX: "scroll",

          minWidth: 650,
          borderCollapse: 'separate',
          borderSpacing: '0px 12px',
          backgroundColor: "#F7F7F7"
        }}>
          <TableHead className= {title ?  "text-center" : "d-none" }>
            <TableRow >
              <TableCell className="fw-bold fs-6" align="center" colSpan={4}>
                {title}
              </TableCell>
              {/* <TableCell align="right">Price</TableCell> */}
            </TableRow>
          </TableHead>
          <TableHead>

            <TableRow className="" style={{ backgroundColor: webColor.themeColor, color: "white" }}>
              {columns?.map((col, index) => (
                <TableCell
                  key={index}
                  sx={{
                    width: `${100 / columns.length}%`,
                    fontWeight: 550,
                    color: "white"
                  }}
                >
                  {col?.Header}
                </TableCell>
              ))}
            </TableRow>



          </TableHead>
          <TableBody>
            {rows?.map((row, rowIndex) => (
              <TableRow key={rowIndex} >
                {columns?.map((col, colIndex) => (
                  <TableCell
                    key={colIndex}
                    style={{
                      width: `${100 / columns.length}%`,
                      // fontWeight: 550,
                      borderRadius: 10,
                      backgroundColor: "white",
                      // border:"1px solid grey" 

                    }}

                  >
                    {/* Render Cell component if provided */}
                    {col.Cell ? (
                      <col.Cell row={row} />
                    ) : (
                      // Otherwise, render row data
                      row[col?.accessor]
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CustomeTable;
