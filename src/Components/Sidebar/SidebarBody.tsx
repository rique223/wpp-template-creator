import Crop169Icon from "@mui/icons-material/Crop169";
import FormatSizeIcon from "@mui/icons-material/FormatSize";
import HighlightIcon from "@mui/icons-material/Highlight";
import ImageIcon from "@mui/icons-material/Image";
import { OutlinedInput, Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";

import { MessagePreviewObject } from "../../definitions/MessagePreviewObject";
import ButtonInput from "./ButtonInput";
import GenericCard from "./GenericCard";
import GenericTipCard from "./GenericTipCard";
import UploadImage from "./UploadImage";

type SidebarBodyProps = {
    setMessagePreview: Dispatch<SetStateAction<MessagePreviewObject>>;
    messagePreview: MessagePreviewObject;
};

type InputTypes = "selectedImage" | "bodyMessage" | "footerText" | "buttons";

const SidebarBody = ({
    setMessagePreview,
    messagePreview,
}: SidebarBodyProps) => {
    const [isTipOpen, setIsTipOpen] = useState(true);

    const { bodyMessage, buttons } = messagePreview;

    const cleanInput = (inputType: InputTypes) => {
        const inputTypesObjects = {
            selectedImage: () =>
                setMessagePreview((prevState) => ({
                    ...prevState,
                    selectedImage: "",
                })),
            bodyMessage: () =>
                setMessagePreview((prevState) => ({
                    ...prevState,
                    bodyMessage: "",
                })),
            footerText: () =>
                setMessagePreview((prevState) => ({
                    ...prevState,
                    footerText: "",
                })),
            buttons: () =>
                setMessagePreview((prevState) => ({
                    ...prevState,
                    buttons: {
                        button1: "",
                        button2: "",
                        button3: "",
                    },
                })),
        };

        return inputTypesObjects[inputType];
    };

    return (
        <>
            <Typography
                variant="body1"
                fontWeight="500"
                sx={{ "&&": { mb: "16px" } }}
            >
                Content
            </Typography>

            <GenericCard
                icon={<ImageIcon color="action" />}
                title="Header"
                required={false}
                sx={{ "&&": { mt: "0" } }}
                onDisable={cleanInput("selectedImage")}
            >
                <UploadImage setMessagePreview={setMessagePreview} />
                <GenericTipCard
                    open={isTipOpen}
                    icon={<HighlightIcon />}
                    title="Image header tips"
                    onClick={setIsTipOpen}
                    text="Images can enrich the message experience and help maintain
        engagement. Use eye-catching images that summarize the
        message (eg discounts, gifts etc.)"
                    cta={{ ctaText: "Learn More", ctaHref: "#" }}
                />
            </GenericCard>

            <GenericCard
                icon={<FormatSizeIcon color="action" />}
                title="Body message"
                required
                onDisable={cleanInput("bodyMessage")}
            >
                <OutlinedInput
                    placeholder="Write your message here"
                    multiline
                    minRows={11}
                    maxRows={11}
                    fullWidth
                    endAdornment={
                        <Typography sx={{ ml: "auto", mt: "auto" }}>
                            {bodyMessage.length}/1024
                        </Typography>
                    }
                    sx={{
                        padding: "12px",
                        marginBlockStart: "16px",
                    }}
                    onChange={(event) =>
                        setMessagePreview((prevState) => ({
                            ...prevState,
                            bodyMessage: event.target.value,
                        }))
                    }
                />
            </GenericCard>

            <GenericCard
                icon={<FormatSizeIcon color="action" />}
                title="Footer text"
                required={false}
                onDisable={cleanInput("footerText")}
            />

            <GenericCard
                icon={<Crop169Icon color="action" />}
                title="Buttons"
                required={false}
                onDisable={cleanInput("buttons")}
            >
                <Stack spacing="16px">
                    <ButtonInput
                        id="button1"
                        title="Button 1"
                        buttonText={buttons["button1"]}
                        setMessagePreview={setMessagePreview}
                    />
                    <ButtonInput
                        id="button2"
                        title="Button 2"
                        buttonText={buttons["button2"]}
                        setMessagePreview={setMessagePreview}
                    />
                    <ButtonInput
                        id="button3"
                        title="Button 3"
                        buttonText={buttons["button3"]}
                        setMessagePreview={setMessagePreview}
                    />
                </Stack>
            </GenericCard>
        </>
    );
};

export default SidebarBody;
