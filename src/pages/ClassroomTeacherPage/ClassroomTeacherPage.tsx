import React, { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import styled from "styled-components";
import TabPanel from "@components/StudentPage/TabPanel";
import TabJournal from "@components/ClassroomTeacherPage/TabJournal";

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

const ClassroomTeacherPage: React.FC = () => {
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
          <Tab label="Журнал" {...tabProps(0)} />
          <Tab label="Статистика" {...tabProps(1)} />
        </Tabs>
      </ContainerTabs>
      <TabPanel index={0} value={value}>
        <TabJournal />
      </TabPanel>
      <TabPanel index={1} value={value}></TabPanel>
    </StyledBox>
  );
};

export default ClassroomTeacherPage;
