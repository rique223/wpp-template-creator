import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Stack, Typography } from "@mui/material";

const SidebarHeader = ({ title }: { title: string }) => (
    <Stack direction="row" justifyContent="space-between">
        <Typography variant="h5">{title}</Typography>
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
);

export default SidebarHeader;
