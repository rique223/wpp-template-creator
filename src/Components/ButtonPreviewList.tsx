import ButtonPreview from "./ButtonPreview";

const ButtonPreviewList = ({
    buttons,
}: {
    buttons: Record<string, string>;
}) => {
    if (!buttons) {
        return null;
    }

    return Object.values(buttons).map((currentButtonValue) =>
        currentButtonValue ? (
            <ButtonPreview
                key={currentButtonValue}
                label={currentButtonValue}
            />
        ) : null
    );
};

export default ButtonPreviewList;
