import ButtonPreview from "./ButtonPreview";

const ButtonPreviewList = ({
    buttons,
}: {
    buttons: Record<string, string>;
}) => {
    if (!buttons) {
        return null;
    }

    return Object.keys(buttons).map((currentButtonKey) =>
        currentButtonKey && buttons[currentButtonKey] ? (
            <ButtonPreview
                key={currentButtonKey}
                label={buttons[currentButtonKey]}
            />
        ) : null
    );
};

export default ButtonPreviewList;
