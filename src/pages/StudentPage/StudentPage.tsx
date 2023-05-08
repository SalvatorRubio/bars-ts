import React, { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import TabPanel from "@components/StudentPage/TabPanel";
import TabSchedule from "@components/StudentPage/TabSchedule";
import styled from "styled-components";
import TabMarks from "@components/StudentPage/TabMarks";

const StyledBox = styled(Box)`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 15px 20px 0;
`;

const ContainerTabs = styled(Box)`
  width: 100%;
`;

const tabProps = (index: number) => {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
};

const StudentPage: React.FC = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <StyledBox>
      <ContainerTabs>
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{ borderBottom: 1, borderColor: "divider" }}
        >
          <Tab label="Расписание" {...tabProps(0)} />
          <Tab label="Оценки" {...tabProps(1)} />
        </Tabs>
      </ContainerTabs>
      <TabPanel index={0} value={value}>
        <TabSchedule />
      </TabPanel>
      <TabPanel index={1} value={value}>
        <TabMarks />
      </TabPanel>
    </StyledBox>
  );
};

export default StudentPage;
