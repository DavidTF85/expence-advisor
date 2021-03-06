import React, { Component } from "react";
import { Link } from "react-router-dom";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

function detailsFormatter(cell, row) {
  return (
    <span>
      <Button variant="outline-primary">
        <Link to={`/student/${row.studentNumber}`}>View</Link>
      </Button>
    </span>
  );
}

function deleteFormatter(cell, row) {
  return (
    <span>
      <Button variant="outline-primary">
        <Link to={`/student-archive/${row.studentNumber}`}>Archive</Link>
      </Button>
      &nbsp;&nbsp;
      <Button variant="outline-primary">
        <Link to={`/student-delete/${row.studentNumber}`}>Delete</Link>
      </Button>
    </span>
  );
}

export default function StudentListComponent(props) {
  const {
    students,
    searchTerm,
    filteredStudents,
    onSearchChange,
    onTableChange
  } = props;

  const columns = [
    {
      dataField: "firstName",
      text: "date Of transaction"
    },
    {
      dataField: "lastName",
      text: "asset(+) $ /debt(-) $"
    },
    {
      dataField: "fullName",
      text: "merchant"
    }
  ];

  // TODO: filter
  // TODO: add row and col
  return (
    <Container fluid>
      <Image
        src="https://www.llinstitute.com/wp-content/uploads/2018/03/logo-footer.png"
        width={75}
        height={85}
        rounded
      />
      <h2>Networth List</h2>
      <p> please list here your all your assets and debts </p>
      <Button variant="outline-primary">
        <Link to="student-create">register an new assets</Link>
      </Button>
      <br />
      <br />
      <Button variant="outline-primary">
        <Link to="student-create">register an new debts</Link>
      </Button>
      <br />
      <br />
      <input onChange={event => onSearchChange(event)} placeholder="search" />
      <br />
      <br />

      <BootstrapTable
        wrapperClasses="table-responsive"
        keyField={"income"}
        data={filteredStudents}
        columns={columns}
        pagination={paginationFactory()}
        onTableChange={onTableChange}
      />
      <br />
      <Button variant="outline-primary">
        <Link to="/dashboard">Back</Link>
      </Button>
    </Container>
  );
}
