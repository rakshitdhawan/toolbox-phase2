import React, { useState } from "react";
import { useTable } from "react-table";

const ShowStudents = props => {
  // const studentData = [...props.items];
  // console.log(studentData)
  //const data = React.useMemo(() => [...studentData], []);
  const data=[...props.items]
  console.log(data)
  const columns = React.useMemo(
    () => [
      {
        Header: "RegId",
        accessor: "RegId"
      },
      {
        Header: "First Name",
        accessor: "fName"
      },
      {
        Header: "Last Name",
        accessor: "lName"
      },
      {
        Header: "Email Address",
        accessor: "Email"
      },
      {
        Header: "DOB",
        accessor: "dateOfBirth"
      },
      {
        Header: "CollegeName",
        accessor: "cName"
      },
      {
        Header: "CoursePicked",
        accessor: "cChoice"
      },
      {
        Header: "Status",
        accessor: "Status"
      },
      {
        Header: "Note",
        accessor: "note"
      }
    ],
    []
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data });

  return (
    <div>
      <table {...getTableProps()} style={{ border: "solid 1px blue" }}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: "solid 3px red",
                    background: "aliceblue",
                    color: "black",
                    fontWeight: "bold"
                  }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: "10px",
                        border: "solid 1px gray",
                        background: "papayawhip"
                      }}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ShowStudents;
