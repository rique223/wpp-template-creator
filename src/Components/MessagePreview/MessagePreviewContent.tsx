import { Card, Stack, Typography } from "@mui/material";

import { MessagePreviewObject } from "../../definitions/MessagePreviewObject";
import BodyMessagePreview from "./BodyMessagePreview";
import ButtonPreviewList from "./ButtonPreviewList";
import FooterTextPreview from "./FooterTextPreview";
import SelectedImagePreview from "./SelectedImagePreview";

const MessagePreviewContent = ({
    messagePreview,
}: {
    messagePreview: MessagePreviewObject;
}) => {
    const { selectedImage, bodyMessage, footerText, buttons } = messagePreview;

    const isMessagePreviewEmpty =
        (!selectedImage || selectedImage === "") &&
        bodyMessage.match(/^\s*$/) !== null &&
        footerText.match(/^\s*$/) !== null &&
        Object.values(buttons).every(
            (button) => button.match(/^\s*$/) !== null
        );

    if (isMessagePreviewEmpty)
        return (
            <Typography>
                Interact with the sidebar and your message preview will appear
                here
            </Typography>
        );

    const isMediaTextContentEmpty =
        (!selectedImage || selectedImage === "") &&
        bodyMessage.match(/^\s*$/) !== null &&
        footerText.match(/^\s*$/) !== null;

    return (
        <Card
            elevation={0}
            sx={{
                padding: "20px",
                backgroundColor: "#F5F5F5",
                borderRadius: "8px",
            }}
        >
            <Stack spacing="8px">
                {!isMediaTextContentEmpty && (
                    <Card
                        sx={{
                            padding: "7px",
                            borderRadius: "5px",
                        }}
                    >
                        <Stack spacing="8px">
                            <SelectedImagePreview
                                selectedImage={selectedImage}
                            />
                            <BodyMessagePreview bodyMessage={bodyMessage} />
                            <FooterTextPreview footerText={footerText} />
                        </Stack>
                    </Card>
                )}
                <ButtonPreviewList buttons={buttons} />
            </Stack>
        </Card>
    );
};

export default MessagePreviewContent;
