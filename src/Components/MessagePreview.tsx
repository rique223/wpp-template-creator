import { Card, Stack } from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import MessagePreviewHeader from "./MessagePreviewHeader";
import MessagePreviewContent from "./MessagePreviewContent";
import { MessagePreviewObject } from "../definitions/MessagePreviewObject";

const MessagePreview = ({
    messagePreview,
}: {
    messagePreview: MessagePreviewObject;
}) => (
    <Stack
        width="100%"
        alignItems="center"
        justifyContent="center"
        className="dotted-background"
    >
        <Card
            sx={{
                width: "304px",
                padding: "12px",
                borderRadius: "8px",
            }}
        >
            <Stack spacing="14px">
                <MessagePreviewHeader
                    icon={<MessageIcon sx={{ fontSize: "16px" }} />}
                    title="Message Example"
                />
                <MessagePreviewContent messagePreview={messagePreview} />
            </Stack>
        </Card>
    </Stack>
);

export default MessagePreview;
