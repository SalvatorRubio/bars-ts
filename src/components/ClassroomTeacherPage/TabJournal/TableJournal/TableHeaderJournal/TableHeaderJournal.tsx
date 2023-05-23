import React from "react";
import { TypeDisciplines } from "@type/types";
import { TableCell, TableHead, TableRow } from "@mui/material";
import styled from "styled-components";

type props = {
  disciplines: TypeDisciplines[];
};

const StyledTableRow = styled(TableRow)`
  min-height: 100px;
  border: none;
`;

const StyledTableCell = styled(TableCell)`
  text-align: center;
  writing-mode: vertical-rl;
  transform: scale(-1);
  border-bottom: none;
  border-top: 1px solid rgba(224, 224, 224, 1);
  border-left: 1px solid rgba(224, 224, 224, 1);
`;

const TableHeaderJournal: React.FC<props> = ({ disciplines }) => {
  return (
    <TableHead>
      <StyledTableRow>
        <TableCell sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>
          Ученик
        </TableCell>
        {disciplines.map((item) => {
          return (
            <StyledTableCell key={item.discipline_id}>
              {item.name}
            </StyledTableCell>
          );
        })}
      </StyledTableRow>
    </TableHead>
  );
};

export default TableHeaderJournal;
