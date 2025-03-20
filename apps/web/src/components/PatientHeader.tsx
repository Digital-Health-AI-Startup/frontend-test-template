import { Box, Stack, Typography } from "@mui/material";
import { FallbackUserAvatar } from "./FallbackUserAvatar";

export const PatientHeader = () => {
  return (
    <Box
      sx={(theme) => ({
        background: theme.palette.common.white,
        p: 4,
      })}
    >
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          height: "75px",
        }}
      >
        <FallbackUserAvatar />
        <Box sx={{ ml: 1.5 }}>
          <Typography variant="h6" fontWeight={700}>
            Smith, Jane
          </Typography>
          <Typography variant="body2" color="textSecondary">
            05/04/1995
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};
