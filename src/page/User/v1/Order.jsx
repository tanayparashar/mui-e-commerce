import React from "react";
import TitleBar from "./components/TitleBar";
import OrderTable from "./components/OrderTable";

export default function Order() {
  return (
    <div>
      <TitleBar heading={"Order"} btn={true} btnText={"Order Info"} />
      <OrderTable />
    </div>
  );
}
