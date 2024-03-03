import { Stack } from "@mui/material";
import SidebarHeader from "./SidebarHeader";
import { useScrollbarStyles } from "../hooks/useScrollbarStyles";
import { MessagePreviewObject } from "../definitions/MessagePreviewObject";
import SidebarFooter from "./SidebarFooter";
import SidebarBody from "./SidebarBody";

type SidebarProps = {
    setMessagePreview: React.Dispatch<
        React.SetStateAction<MessagePreviewObject>
    >;
    messagePreview: MessagePreviewObject;
};

const Sidebar = ({ setMessagePreview, messagePreview }: SidebarProps) => {
    const classes = useScrollbarStyles();

    return (
        <Stack>
            <Stack
                height="100%"
                width="360px"
                borderRight="1px solid #E4E5EA"
                padding="24px"
                overflow="scroll"
                className={classes.customScrollbar}
            >
                <Stack spacing="24px">
                    <SidebarHeader title="Edit Message" />

                    <SidebarBody
                        setMessagePreview={setMessagePreview}
                        messagePreview={messagePreview}
                    />
                </Stack>
            </Stack>

            <SidebarFooter />
        </Stack>
    );
};

export default Sidebar;
