import { Chip, Stack, Typography } from "@mui/material";

const FooterTextPreview = ({ footerText }: { footerText: string }) => {
    if (!footerText) {
        return null;
    }

    return (
        <Stack spacing="3px">
            <Chip
                size="medium"
                label={
                    <Typography
                        variant="caption"
                        fontWeight="700"
                        color="#41C352"
                    >
                        Footer
                    </Typography>
                }
                sx={{
                    borderRadius: "4px",
                    width: "fit-content",
                }}
            />
            <Typography variant="body2" color="rgba(0, 0, 0, 0.54)">
                Reply ‘STOP’ to opt out
            </Typography>
        </Stack>
    );
};

export default FooterTextPreview;
