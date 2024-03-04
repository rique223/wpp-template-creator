import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, Divider, Stack } from "@mui/material";

const Navbar = () => {
    return (
        <Stack
            height="100%"
            width="56px"
            bgcolor="#20232A"
            direction="column"
            alignItems="center"
        >
            <Box
                display="flex"
                height="70px"
                width="100%"
                justifyContent="center"
                alignItems="center"
            >
                <WhatsAppIcon sx={{ color: "#fff" }} />
            </Box>
            <Divider flexItem sx={{ bgcolor: "#616161" }} />
        </Stack>
    );
};

export default Navbar;
