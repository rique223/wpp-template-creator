import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Paper, Stack, Typography } from "@mui/material";

const Header = () => {
  return (
    <Paper
      sx={{
        height: "70px",
        width: "100%",
        borderRadius: "0",
        zIndex: "1",
      }}
      elevation={3}
    >
      <Stack
        height="100%"
        direction="row"
        alignItems="center"
        paddingInline="24px"
        justifyContent="space-between"
      >
        <Typography variant="body1" fontWeight="500">
          Create a Campaign
        </Typography>
        <IconButton
          sx={{
            height: "40px",
            width: "40px",
            backgroundColor: "#F5F5F5",
          }}
        >
          <CloseIcon />
        </IconButton>
      </Stack>
    </Paper>
  );
};

export default Header;
