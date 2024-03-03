import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { IconButton, OutlinedInput, Stack, Typography } from "@mui/material";
import { ChangeEvent, useEffect } from "react";
import { MessagePreviewObject } from "../definitions/MessagePreviewObject";

type ButtonInputProps = {
    title: string;
    buttonText: string;
    setMessagePreview: React.Dispatch<
        React.SetStateAction<MessagePreviewObject>
    >;
};

const ButtonInput = ({
    title,
    buttonText,
    setMessagePreview,
}: ButtonInputProps) => {
    const handleButtonTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMessagePreview((prevState) => ({
            ...prevState,
            buttons: {
                ...prevState.buttons,
                [title]: event.target.value,
            },
        }));
    };

    useEffect(() => {
        setMessagePreview((prevState) => ({
            ...prevState,
            buttons: {
                ...prevState.buttons,
                [title]: "",
            },
        }));
    }, [setMessagePreview, title]);

    return (
        <Stack spacing="8px">
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
            >
                <Typography variant="subtitle2">{title}</Typography>
                <IconButton size="small">
                    <DeleteOutlineIcon
                        sx={{
                            color: "rgba(0, 0, 0, 0.54)",
                        }}
                    />
                </IconButton>
            </Stack>
            <OutlinedInput
                placeholder="Enter text"
                endAdornment={
                    <Typography sx={{ ml: "auto" }}>
                        {buttonText ? buttonText.replace(" ", "").length : 0}/25
                    </Typography>
                }
                sx={{ height: "45px" }}
                onChange={handleButtonTextChange}
            />
        </Stack>
    );
};

export default ButtonInput;
