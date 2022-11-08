import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Breadcrumb from "react-bootstrap/Breadcrumb";

function Bread() {
  return (
    <div
      style={{ display: "block", width: 700, padding: 10 }}
      className="d-none d-lg-block"
    >
      <Breadcrumb className="Text-breadcrumb">
        <Breadcrumb.Item active>Catalog</Breadcrumb.Item>
        <Breadcrumb.Item active>Sneakers </Breadcrumb.Item>
        <Breadcrumb.Item active>Free Trainer 3 / MMW</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}

export default Bread;
