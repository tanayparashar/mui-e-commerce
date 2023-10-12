import React from "react";
import ReactPdf from "./ReactPdf";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Button } from "@mui/material";

export default function DownloadInvoice({ color }) {
  return (
    <>
      <PDFDownloadLink document={<ReactPdf />} fileName="invoice">
        {({ loading }) =>
          loading ? (
            <Button variant="contained" color={color} mt={2}>
              loading ...
            </Button>
          ) : (
            <Button variant="contained" color={color} mt={2}>
              Print Invoice
            </Button>
          )
        }
      </PDFDownloadLink>
    </>
  );
}
