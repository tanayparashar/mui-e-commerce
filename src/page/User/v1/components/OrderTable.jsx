import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Button, Typography, Chip, Box, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

import OrderDetail from "../OrderDetail";

const columns = [
  { id: "name", label: "Order #", minWidth: 170 },
  { id: "items", label: "Items", minWidth: 200 },
  {
    id: "status",
    label: "Status",
    minWidth: 170,
    align: "left",
  },
  {
    id: "purchaseDate",
    label: "Purchase Date",
    minWidth: 170,
    align: "right",
  },
  {
    id: "total",
    label: "Total",
    minWidth: 170,
    align: "right",
  },
  {
    id: "action",
    label: "Actions",
    minWidth: 370,
    align: "left",
  },
];

function createData(id, name, items, status, purchaseDate, total, action) {
  return { id, name, items, status, purchaseDate, total, action };
}

export default function OrderTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    // Simulate fetching data from a database or API
    // Replace this with your actual data fetching logic
    async function fetchData() {
      try {
        // Make an API request to fetch data
        const response = await fetch("/public/order.json");
        const data = await response.json();

        // Map the fetched data into rows
        const mappedRows = data.map((item) =>
          createData(
            item.id,
            item.orderNumber,
            item.items,
            item.status,
            item.purchaseDate,
            item.total
          )
        );

        setRows(mappedRows);
        setLoading(false); // Data has arrived, set loading to false
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // If there's an error, set loading to false
      }
    }

    fetchData();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleViewClick = (row) => {
    const orderNumber = row.id;
    navigate(`/user/orders/${orderNumber}`);
    // // You can open a dialog or navigate to a new page here
  };
  const handleViewPopup = (row) => {
    setSelectedOrder(row);
  };

  return (
    <>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        {loading ? ( // Show a loading indicator when loading is true
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 350, // Adjust the height as needed
            }}
          >
            <CircularProgress color="secondary" />
          </Box>
        ) : (
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      {columns.map((column) => (
                        <TableCell key={column.id} align={column.align}>
                          {column.id === "items" && Array.isArray(row.items) ? (
                            <Box
                              sx={{
                                display: "flex",
                                gap: 0.3,
                              }}
                            >
                              {row.items.map((item, index) => (
                                <div key={index}>
                                  <img
                                    src={item.imageUrl}
                                    alt={`Product ${index + 1}`}
                                    width="50"
                                    height="50"
                                    style={{ borderRadius: "4px" }}
                                  />
                                </div>
                              ))}
                            </Box>
                          ) : column.id === "status" ? (
                            <div>
                              {row.status.map((status, index) => (
                                <Chip
                                  key={index}
                                  label={status}
                                  color={
                                    status === "Deliver"
                                      ? "success"
                                      : status === "Pending"
                                      ? "warning"
                                      : "default"
                                  }
                                />
                              ))}
                            </div>
                          ) : (
                            <Box>
                              {column.id === "action" ? (
                                <Box sx={{ display: "flex", gap: 0.4 }}>
                                  <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => handleViewClick(row)}
                                  >
                                    View
                                  </Button>
                                  <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => handleViewPopup(row)}
                                  >
                                    View popup
                                  </Button>
                                  <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={() => handleViewClick(row)}
                                  >
                                    Print Invoice
                                  </Button>
                                </Box>
                              ) : (
                                row[column.id]
                              )}
                            </Box>
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <Dialog
        open={!!selectedOrder}
        onClose={() => setSelectedOrder(null)}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle>Order Details</DialogTitle>
        <DialogContent>
          {selectedOrder && (
            <>
              <OrderDetail />
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSelectedOrder(null)} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      ;
    </>
  );
}
