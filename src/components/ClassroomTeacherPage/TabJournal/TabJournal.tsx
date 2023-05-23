import React, { useState } from "react";
import { Box, SelectChangeEvent } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import DateRangePicker from "@UI/DateRangePicker/DateRangePicker";
import ListGroups from "@UI/ListGroups";
import { useAuth } from "@hooks/useAuth";
import TableJournal from "@components/ClassroomTeacherPage/TabJournal/TableJournal";
import styled from "styled-components";

const StyledBox = styled(Box)`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledBoxHeader = styled(Box)`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const TabJournal: React.FC = () => {
  const { group, setGroup } = useAuth();
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

  const handleChange = (event: SelectChangeEvent<number>) => {
    setGroup(event.target.value as number);
  };

  return (
    <StyledBox>
      <StyledBoxHeader>
        <ListGroups handleChange={handleChange} />
        <DateRangePicker
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
      </StyledBoxHeader>

      {group ? <TableJournal startDate={startDate} endDate={endDate} /> : ""}
    </StyledBox>
  );
};

export default TabJournal;
