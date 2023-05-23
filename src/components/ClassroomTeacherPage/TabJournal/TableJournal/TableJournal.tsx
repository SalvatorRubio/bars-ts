import React, { useEffect, useState } from "react";
import { Dayjs } from "dayjs";
import { useAuth } from "@hooks/useAuth";
import { getDisciplines } from "@utils/classroomTeacherNetwork";
import { TypeDisciplines } from "@type/types";
import { Paper, Table, TableContainer } from "@mui/material";
import TableHeaderJournal from "@components/ClassroomTeacherPage/TabJournal/TableJournal/TableHeaderJournal";
import TableBodyJournal from "./TableBodyJournal";

type props = {
  startDate: Dayjs | null;
  endDate: Dayjs | null;
};

const TableJournal: React.FC<props> = ({ startDate, endDate }) => {
  const { group } = useAuth();
  const [disciplines, setDisciplines] = useState<TypeDisciplines[]>([]);

  useEffect(() => {
    getDisciplines(group).then((res) => setDisciplines(res));
  }, [group]);
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 600 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHeaderJournal disciplines={disciplines} />
          <TableBodyJournal
            disciplines={disciplines}
            startDate={startDate}
            endDate={endDate}
          />
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TableJournal;
