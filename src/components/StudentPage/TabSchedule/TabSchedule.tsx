import React from "react";
import {
  Box,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import ScheduleTableBody from "@components/StudentPage/TabSchedule/ScheduleTableBody";
import dayjs from "dayjs";
import styled from "styled-components";

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-top: 40px;
`;

const now = new Date();
const date = dayjs(new Date(now.getTime() + 24 * 60 * 60 * 1000)).format(
  "DD.MM.YYYY"
);

const TabSchedule: React.FC = () => {
  return (
    <StyledBox>
      <Typography>Расписание на {date}</Typography>
      <Paper sx={{ maxWidth: "700px", width: "100%" }}>
        <TableContainer sx={{ maxHeight: 600 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ width: "100px" }} align="center">
                  Номер пары
                </TableCell>
                <TableCell sx={{ borderLeft: "1px solid #ccc" }} align="center">
                  Название дисциплина
                </TableCell>
              </TableRow>
            </TableHead>
            <ScheduleTableBody />
          </Table>
        </TableContainer>
      </Paper>
    </StyledBox>
  );
};

export default TabSchedule;
