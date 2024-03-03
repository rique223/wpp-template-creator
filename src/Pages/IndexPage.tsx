import { Container, Stack } from "@mui/material";

import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

import { useState } from "react";
import MessagePreview from "../Components/MessagePreview";
import { MessagePreviewObject } from "../definitions/MessagePreviewObject";

const IndexPage = () => {
    const [messagePreview, setMessagePreview] = useState<MessagePreviewObject>({
        selectedImage: "",
        bodyMessage: "",
        footerText: "",
        buttons: {},
    });

    return (
        <Container maxWidth={false} sx={{ height: "100vh" }} disableGutters>
            <Stack direction="row" height="100%" width="100%">
                <Navbar />
                <Stack height="100%" width="100%">
                    <Header />

                    <Stack direction="row" height="93%" width="100%">
                        <Sidebar
                            setMessagePreview={setMessagePreview}
                            messagePreview={messagePreview}
                        />
                        <MessagePreview messagePreview={messagePreview} />
                    </Stack>
                </Stack>
            </Stack>
        </Container>
    );
};

export default IndexPage;
