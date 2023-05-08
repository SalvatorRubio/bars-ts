import React from "react";
import { TypeDateRange } from "@type/types";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "dayjs/locale/ru";
import { Dayjs } from "dayjs";
import { Box } from "@mui/material";
import styled from "styled-components";

const StyledBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  width: 520px;
  padding: 30px;
`;

const DateRangePicker: React.FC<TypeDateRange> = ({
  setStartDate,
  setEndDate,
  startDate,
  endDate,
}) => {
  const changeStartDate = (value: Dayjs | null) => {
    setStartDate!(value);
    localStorage.setItem("startDate", value!.toString());
  };
  const changeEndDate = (value: Dayjs | null) => {
    setEndDate!(value);
    localStorage.setItem("endDate", value!.toString());
  };
  return (
    <StyledBox>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
        <DatePicker
          label="Начало"
          value={startDate}
          onChange={changeStartDate}
        />
        <DatePicker label="Конец" value={endDate} onChange={changeEndDate} />
      </LocalizationProvider>
    </StyledBox>
  );
};

export default DateRangePicker;
