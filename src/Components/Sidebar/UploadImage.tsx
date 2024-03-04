import { Button, MenuItem, Select, Stack, Typography } from "@mui/material";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

import { MessagePreviewObject } from "../../definitions/MessagePreviewObject";

const UploadImage = ({
    setMessagePreview,
}: {
    setMessagePreview: Dispatch<SetStateAction<MessagePreviewObject>>;
}) => {
    const handleImageUpload = (clickEvent: ChangeEvent<HTMLInputElement>) => {
        const image = clickEvent.target.files?.[0];

        if (image) {
            const fileReader = new FileReader();

            fileReader.onloadend = () => {
                setMessagePreview((prevState) => ({
                    ...prevState,
                    selectedImage: fileReader.result as string,
                }));
            };

            fileReader.readAsDataURL(image);
        }
    };

    return (
        <Stack spacing="10px" marginBlockEnd="16px" marginBlockStart={1.5}>
            <Select id="file-type" sx={{ height: "45px" }} defaultValue="image">
                <MenuItem value="image">Image</MenuItem>
            </Select>
            <Typography variant="caption">
                Image size recommendation: 800 x 418 pixel.
            </Typography>
            <Button
                component="label"
                variant="outlined"
                sx={{ width: "fit-content" }}
            >
                Upload Image
                <input
                    type="file"
                    hidden
                    onChange={handleImageUpload}
                />
            </Button>
        </Stack>
    );
};

export default UploadImage;
