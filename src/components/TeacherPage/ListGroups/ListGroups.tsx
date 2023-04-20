import React, { useEffect, useState } from "react";
import { TypeGroupsList, TypeSelectItem } from "@type/types";
import { getGroups } from "@utils/teacherNetwork";
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

const ListGroups: React.FC<TypeSelectItem> = ({ handleChange }) => {
  const { group, id } = useAuth();
  const [groups, setGroups] = useState<TypeGroupsList[]>([]);
  useEffect(() => {
    getGroups(id).then((res) => {
      setGroups(res);
    });
  }, []);
  return (
    <StyledBox>
      <StyledTitle>Группа: </StyledTitle>
      <StyledFormControl variant="standard">
        <Select
          defaultValue={0}
          sx={{ textAlign: "center" }}
          value={group!}
          onChange={handleChange}
        >
          <MenuItem value={0} disabled></MenuItem>
          {groups.map(({ groups_id, course, name, number }) => {
            return (
              <MenuItem key={groups_id} value={groups_id}>
                {course}
                {name}
                {number}
              </MenuItem>
            );
          })}
        </Select>
      </StyledFormControl>
    </StyledBox>
  );
};

export default ListGroups;
