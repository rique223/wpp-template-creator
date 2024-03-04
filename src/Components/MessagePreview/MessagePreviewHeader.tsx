import { Stack, Typography } from "@mui/material";
import { ReactNode } from "react";

type MessagePreviewHeaderProps = { title: string; icon: ReactNode };

const MessagePreviewHeader = ({ icon, title }: MessagePreviewHeaderProps) => (
    <Stack direction="row" spacing="8px" alignItems="center">
        <Stack
            bgcolor="#7986CB"
            borderRadius="50%"
            height="32px"
            width="32px"
            alignItems="Center"
            justifyContent="center"
            color="#fff"
        >
            {icon}
        </Stack>
        <Typography variant="subtitle1" fontWeight="500">
            {title}
        </Typography>
    </Stack>
);

export default MessagePreviewHeader;
