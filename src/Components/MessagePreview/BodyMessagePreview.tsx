import { Chip, Divider, Stack, Typography } from "@mui/material";

const BodyMessagePreview = ({ bodyMessage }: { bodyMessage: string }) => {
    if (!bodyMessage || bodyMessage.match(/^\s*$/) !== null) {
        return null;
    }

    return (
        <>
            <Stack spacing="3px">
                <Chip
                    size="medium"
                    label={
                        <Typography
                            variant="caption"
                            fontWeight="700"
                            color="#41C352"
                        >
                            Body message
                        </Typography>
                    }
                    sx={{
                        borderRadius: "4px",
                        width: "fit-content",
                    }}
                />
                <Typography variant="body2" color="#000">
                    {bodyMessage}
                </Typography>
            </Stack>
            <Divider
                sx={{
                    borderStyle: "dashed",
                    borderColor: "#25D366",
                }}
            />
        </>
    );
};

export default BodyMessagePreview;
