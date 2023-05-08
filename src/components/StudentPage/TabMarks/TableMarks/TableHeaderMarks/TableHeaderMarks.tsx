import React, { useEffect, useState } from "react";
import { TypeDateRange, TypeDatesStudent } from "@type/types";
import { TableCell, TableHead, TableRow } from "@mui/material";
import { getDates } from "@utils/studentNetwork";

const TableHeaderMarks: React.FC<TypeDateRange> = ({ startDate, endDate }) => {
  const [dates, setDates] = useState<TypeDatesStudent[]>([]);
  useEffect(() => {
    getDates(startDate, endDate).then((res) => setDates(res));
  }, [startDate, endDate]);
  return (
    <TableHead>
      <TableRow>
        <TableCell>Дисциплина</TableCell>
        {dates.map((date) => {
          return (
            <TableCell key={date.id} align="center">
              {date.cur_date}
            </TableCell>
          );
        })}

        <TableCell sx={{ borderLeft: "1px solid #ccc" }} align="center">
          Аттестация
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeaderMarks;
