import React, { Component } from "react";

//router
import { Link } from "react-router-dom";

//Bootstrap
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory, { Type } from "react-bootstrap-table2-editor";

function priceFormatter(cell, row) {
  return <span>${row.price}</span>;
}

function detailsFormatter(cell, row) {
  return (
    <span>
      <a href={`/Income-Update/${row.slug}`} class="btn btn-primary">
        Edite
      </a>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a href={`/tree/${row.slug}`} class="btn btn-primary">
        Delete
      </a>
    </span>
  );
}

export default function IncomeListComponent(props) {
  const { trees } = props;

  const columns = [
    {
      dataField: "name",
      text: "Mechant"
    },
    {
      dataField: "price",
      text: "amouth",
      formatter: priceFormatter
    },
    {
      dataField: "amount",
      text: "Date",
      formatter: cell => {
        let dateObj = cell;
        if (typeof cell !== "object") {
          dateObj = new Date(cell);
        }
        return `${("0" + dateObj.getUTCDate()).slice(-2)}/${(
          "0" +
          (dateObj.getUTCMonth() + 1)
        ).slice(-2)}/${dateObj.getUTCFullYear()}`;
      },
      editor: { type: Type.DATE }
    },
    {
      dataField: "slug",
      text: "Options",
      formatter: detailsFormatter
    }
  ];

  return (
    <div>
      <h2>Income List</h2>
      <p> please list here al your posible income sources </p>
      <br />
      <br />
      <a href="/cretate-Income" class="btn btn-primary">
        New transaction
      </a>
      <br />
      <br />
      <BootstrapTable keyField="slug" data={trees} columns={columns} />
      <br />
      <a href="/dashboard" class="btn btn-primary">
        Go back
      </a>
    </div>
  );
}
