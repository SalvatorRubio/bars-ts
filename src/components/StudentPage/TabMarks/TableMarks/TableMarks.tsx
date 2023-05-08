import React from "react";
import { Paper, Table, TableContainer } from "@mui/material";
import { TypeDateRange } from "@type/types";
import TableHeaderMarks from "@components/StudentPage/TabMarks/TableMarks/TableHeaderMarks";
import TableBodyMarks from "@components/StudentPage/TabMarks/TableMarks/TableBodyMarks";

const TableMarks: React.FC<TypeDateRange> = (props) => {
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 600 }}>
        <Table stickyHeader>
          <TableHeaderMarks {...props} />

          <TableBodyMarks {...props} />
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TableMarks;
