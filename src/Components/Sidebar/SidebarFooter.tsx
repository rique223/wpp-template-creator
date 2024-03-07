import CloseIcon from "@mui/icons-material/Close";
import { Button, IconButton, Snackbar, Stack } from "@mui/material";
import { SyntheticEvent, useState } from "react";

const SidebarFooter = () => {
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

    const handleSave = () => {
        setIsSnackbarOpen(true);
    };

    const handleClose = (_: SyntheticEvent | Event, reason?: string) => {
        if (reason === "clickaway") {
            return;
        }

        setIsSnackbarOpen(false);
    };

    return (
        <Stack
            spacing="12px"
            padding="24px"
            width="360px"
            borderRight="1px solid #E4E5EA"
            borderTop="1px solid #E4E5EA"
        >
            <Button variant="contained" onClick={handleSave} data-test-id="save-button">
                Save
            </Button>
            <Button variant="outlined" data-test-id="delete-button">Delete</Button>
            <Snackbar
                open={isSnackbarOpen}
                autoHideDuration={6000}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                onClose={handleClose}
                message="Message template saved successfully"
                action={
                    <IconButton
                        size="small"
                        aria-label="close"
                        color="inherit"
                        onClick={handleClose}
                    >
                        <CloseIcon fontSize="small" />
                    </IconButton>
                }
            />
        </Stack>
    );
};

export default SidebarFooter;
