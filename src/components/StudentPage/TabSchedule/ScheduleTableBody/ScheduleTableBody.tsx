import React, { useEffect, useState } from "react";
import { TableBody, TableCell, TableRow, Typography } from "@mui/material";
import { TypeScheduleTommorow } from "@type/types";
import { useAuth } from "@hooks/useAuth";
import { getSchedule } from "@utils/studentNetwork";
import styled from "styled-components";

const StyledTableCellNumPair = styled(TableCell)`
  max-width: 100px;
  border-right: 1px solid #ccc;
`;

const StyledTypography = styled(Typography)`
  font-size: 12px;
`;

const StyledTypographyName = styled(StyledTypography)`
  && {
    font-size: 13px;
  }
  top: 60%;
  left: 2%;
  position: absolute;
`;

const StyledTypographyAudit = styled(StyledTypography)`
  && {
    font-size: 13px;
  }
  top: 0;
  right: 2%;
  position: absolute;
`;

const ScheduleTableBody: React.FC = () => {
  const [schedule, setSchedule] = useState<TypeScheduleTommorow[]>([]);
  const { group } = useAuth();

  useEffect(() => {
    getSchedule(group).then((res) => setSchedule(res));
  }, []);
  const arrNumPairs: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <TableBody>
      {arrNumPairs.map((item) => {
        if (schedule.find((lesson) => Number(lesson.number_pair) === item)) {
          return schedule.map((lesson) => {
            if (Number(lesson.number_pair) === item)
              return (
                <TableRow key={lesson.shedule_id} hover tabIndex={-1}>
                  <StyledTableCellNumPair align="center">
                    {item}
                  </StyledTableCellNumPair>
                  <TableCell
                    sx={{
                      justifyContent: "center",
                      display: "flex",
                      position: "relative",
                    }}
                  >
                    <StyledTypographyName>
                      {lesson.surname} {lesson.name} {lesson.father_name}
                    </StyledTypographyName>
                    <Typography>{lesson.discipline}</Typography>
                    <StyledTypographyAudit>
                      {lesson.number}
                    </StyledTypographyAudit>
                  </TableCell>
                </TableRow>
              );
          });
        } else {
          return (
            <TableRow key={item} hover tabIndex={-1}>
              <StyledTableCellNumPair align="center">
                {item}
              </StyledTableCellNumPair>
              <TableCell align="center"></TableCell>
            </TableRow>
          );
        }
      })}
    </TableBody>
  );
};

export default ScheduleTableBody;
