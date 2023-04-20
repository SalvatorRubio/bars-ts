import React from "react";
import { Paper, TableContainer, Table } from "@mui/material";
import TableHeader from "@components/TeacherPage/TableMarks/TableHeader";
import TableMain from "@components/TeacherPage/TableMarks/TableMain";
import { TypeTableMarks } from "@type/types";
import styled from "styled-components";

const StyledPaper = styled(Paper)`
  margin: 20px 40px 0;
`;

const StyledTableContainer = styled(TableContainer)`
  max-height: 650px;
`;

const TableMarks: React.FC<TypeTableMarks> = (props) => {
  return (
    <StyledPaper>
      <StyledTableContainer>
        <Table stickyHeader>
          <TableHeader {...props} />
          <TableMain {...props} />
        </Table>
      </StyledTableContainer>
    </StyledPaper>
  );
};

export default TableMarks;
