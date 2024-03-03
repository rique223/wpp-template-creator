import ImageIcon from "@mui/icons-material/Image";
import HighlightIcon from "@mui/icons-material/Highlight";
import FormatSizeIcon from "@mui/icons-material/FormatSize";
import Crop169Icon from "@mui/icons-material/Crop169";
import { OutlinedInput, Stack, Typography } from "@mui/material";
import GenericCard from "./GenericCard";
import UploadImage from "./UploadImage";
import GenericTipCard from "./GenericTipCard";
import ButtonInput from "./ButtonInput";
import { Dispatch, SetStateAction, useState } from "react";
import { MessagePreviewObject } from "../definitions/MessagePreviewObject";

type SidebarBodyProps = {
    setMessagePreview: Dispatch<SetStateAction<MessagePreviewObject>>;
    messagePreview: MessagePreviewObject;
};

const SidebarBody = ({
    setMessagePreview,
    messagePreview,
}: SidebarBodyProps) => {
    const [isTipOpen, setIsTipOpen] = useState(true);

    const { bodyMessage, buttons } = messagePreview;

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
                required={true}
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
            />

            <GenericCard
                icon={<Crop169Icon color="action" />}
                title="Buttons"
                required={false}
            >
                <Stack spacing="16px">
                    <ButtonInput
                        title="Button 1"
                        buttonText={buttons["Button 1"]}
                        setMessagePreview={setMessagePreview}
                    />
                    <ButtonInput
                        title="Button 2"
                        buttonText={buttons["Button 2"]}
                        setMessagePreview={setMessagePreview}
                    />
                    <ButtonInput
                        title="Button 3"
                        buttonText={buttons["Button 3"]}
                        setMessagePreview={setMessagePreview}
                    />
                </Stack>
            </GenericCard>
        </>
    );
};

export default SidebarBody;
