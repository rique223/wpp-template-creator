import { Box, Chip, Divider, Typography } from "@mui/material";

const SelectedImagePreview = ({
    selectedImage,
}: {
    selectedImage: string | undefined;
}) => {
    if (!selectedImage) {
        return null;
    }

    return (
        <>
            <Box position="relative">
                <Chip
                    size="medium"
                    label={
                        <Typography
                            variant="caption"
                            fontWeight="700"
                            color="#41C352"
                        >
                            Header
                        </Typography>
                    }
                    sx={{
                        borderRadius: "4px",
                        width: "fit-content",
                        position: "absolute",
                        top: "7px",
                        left: "9px",
                        bgcolor: "#fff",
                    }}
                />
                <Box
                    component="img"
                    alt="Uploaded image"
                    src={selectedImage}
                    width="100%"
                    height="auto"
                />
            </Box>
            <Divider
                sx={{
                    borderStyle: "dashed",
                    borderColor: "#25D366",
                }}
            />
        </>
    );
};

export default SelectedImagePreview;
