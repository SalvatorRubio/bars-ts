import React from "react";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  TableCell,
} from "@mui/material";
import styled from "styled-components";

const StyledTableCell = styled(TableCell)`
  cursor: pointer;
  padding: 0 !important;
`;

const StyledFormControl = styled(FormControl)`
  width: 65px;
  height: 30px;
`;

type props = {
  mark: number | string;
  changeMark: (e: SelectChangeEvent<number | string>, index: number) => void;
  index: number;
};

const SelectMark: React.FC<props> = ({ mark, changeMark, index }) => {
  return (
    <StyledTableCell align="center">
      <StyledFormControl>
        <Select
          sx={{ height: "100%" }}
          value={mark}
          onChange={(e) => changeMark(e, index)}
        >
          <MenuItem sx={{ height: "30px" }} value={0}></MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value="н">н</MenuItem>
        </Select>
      </StyledFormControl>
    </StyledTableCell>
  );
};

export default SelectMark;
