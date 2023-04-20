import React, { useEffect, useState } from "react";
import { TypeDisciplinesList, TypeSelectItem } from "@type/types";
import { getDisciplines } from "@utils/teacherNetwork";
import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import styled from "styled-components";
import { useAuth } from "@hooks/useAuth";

const StyledBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 30px;

  @media (max-width: 540px) {
    width: 100%;
  }
`;

const StyledTitle = styled(Typography)`
  margin-right: 10px !important;

  @media (max-width: 540px) {
    width: 150px;
  }
`;

const StyledFormControl = styled(FormControl)`
  width: 120px;

  @media (max-width: 540px) {
    width: 100%;
  }
`;

const ListDisciplines: React.FC<
  TypeSelectItem & {
    state: number;
  }
> = ({ state, handleChange }) => {
  const { group } = useAuth();
  const [disciplines, setDisciplines] = useState<TypeDisciplinesList[]>([]);
  useEffect(() => {
    getDisciplines(15, group!).then((res) => {
      setDisciplines(res);
    });
  }, [group]);
  return (
    <StyledBox>
      <StyledTitle>Дисциплина: </StyledTitle>
      <StyledFormControl variant="standard">
        <Select
          sx={{ textAlign: "center" }}
          defaultValue={0}
          value={state}
          onChange={handleChange}
          disabled={group === 0}
        >
          <MenuItem disabled value={0}></MenuItem>
          {disciplines.map(({ discipline_id, name }) => {
            return (
              <MenuItem key={discipline_id} value={discipline_id}>
                {name}
              </MenuItem>
            );
          })}
        </Select>
      </StyledFormControl>
    </StyledBox>
  );
};

export default ListDisciplines;
