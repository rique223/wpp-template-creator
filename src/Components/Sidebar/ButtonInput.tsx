import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { IconButton, OutlinedInput, Stack, Typography } from "@mui/material";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

import { MessagePreviewObject } from "../../definitions/MessagePreviewObject";

type ButtonInputProps = {
    id: string;
    title: string;
    buttonText: string;
    setMessagePreview: Dispatch<SetStateAction<MessagePreviewObject>>;
    dataTestId: string;
};

const ButtonInput = ({
    id,
    title,
    buttonText,
    setMessagePreview,
    dataTestId,
}: ButtonInputProps) => {
    const handleButtonTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMessagePreview((prevState) => ({
            ...prevState,
            buttons: {
                ...prevState.buttons,
                [id]: event.target.value,
            },
        }));
    };

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
                endAdornment={<Typography sx={{ ml: "auto" }}>0/25</Typography>}
                sx={{ height: "45px" }}
                onChange={handleButtonTextChange}
                value={buttonText}
                data-test-id={dataTestId}
            />
        </Stack>
    );
};

export default ButtonInput;
