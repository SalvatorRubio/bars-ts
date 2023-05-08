import React, { useState } from "react";
import styled from "styled-components";
import { Box } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import DateRangePicker from "@UI/DateRangePicker/DateRangePicker";
import TableMarks from "@components/StudentPage/TabMarks/TableMarks";

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const TabMarks: React.FC = () => {
  const [startDate, setStartDate] = useState<Dayjs | null>(
    localStorage.getItem("startDate")
      ? dayjs(localStorage.getItem("startDate"))
      : dayjs(new Date(new Date().setDate(new Date().getDate() - 14)))
  );
  const [endDate, setEndDate] = useState<Dayjs | null>(
    localStorage.getItem("endDate")
      ? dayjs(localStorage.getItem("endDate"))
      : dayjs(new Date())
  );
  return (
    <StyledBox>
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />
      <TableMarks startDate={startDate} endDate={endDate} />
    </StyledBox>
  );
};

export default TabMarks;
