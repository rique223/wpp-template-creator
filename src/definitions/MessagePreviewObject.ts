export type MessagePreviewObject = {
    selectedImage: string | undefined;
    bodyMessage: string;
    footerText: string;
    buttons: Record<string, string>;
};
