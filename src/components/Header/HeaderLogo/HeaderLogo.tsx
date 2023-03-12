import React from "react";
import { Stack, Typography } from "@mui/material";

import AutoStoriesIcon from "@mui/icons-material/AutoStories";

const HeaderLogo: React.FC = () => {
  return (
    <Stack direction="row" spacing={2}>
      <AutoStoriesIcon />
      <Typography>Цифровой журнал</Typography>
    </Stack>
  );
};

export default HeaderLogo;
