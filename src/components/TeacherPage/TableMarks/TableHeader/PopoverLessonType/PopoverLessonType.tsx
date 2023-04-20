import React from "react";
import { Box, Popover } from "@mui/material";
import { TypeTopic } from "@type/types";
import styled from "styled-components";

const StyledBox = styled(Box)`
  min-width: 150px;
  text-align: center;
  padding: 10px;
`;

type props = {
  popover: HTMLElement | null;
  closePopover: () => void;
  text: TypeTopic;
};

const PopoverLessonType: React.FC<props> = ({
  popover,
  closePopover,
  text,
}) => {
  const open = Boolean(popover);
  return (
    <Popover
      sx={{
        pointerEvents: "none",
      }}
      open={open}
      anchorEl={popover}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      onClose={closePopover}
      disableRestoreFocus
    >
      <StyledBox component="span" display="flex" flexDirection="column">
        {Object.entries(text).length > 0 && (
          <>
            {text.lesson_type}
            {text.topic ? ` - ${text.topic}` : ""}
          </>
        )}
      </StyledBox>
    </Popover>
  );
};

export default PopoverLessonType;
