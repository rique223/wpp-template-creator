import CloseIcon from "@mui/icons-material/Close";
import { Card, IconButton, Link, Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

type GenericTipCardProps = {
    open: boolean;
    icon?: React.ReactNode;
    title: string;
    onClick: Dispatch<SetStateAction<boolean>>;
    text: string;
    cta?: {
        ctaText: string;
        ctaHref: string;
    };
};

const GenericTipCard = ({
    open,
    icon,
    title,
    onClick,
    text,
    cta,
}: GenericTipCardProps) => {
    if (!open) {
        return null;
    }

    return (
        <Card
            elevation={0}
            sx={{
                padding: "16px",
                backgroundColor: "#F5F5F5",
                borderRadius: "8px",
            }}
        >
            <Stack spacing="4px">
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Stack spacing="8px" direction="row" alignItems="center">
                        {!!icon && icon}
                        <Typography variant="subtitle2">{title}</Typography>
                    </Stack>
                    <IconButton size="small" onClick={() => onClick(false)} data-test-id="close-tip-button">
                        <CloseIcon />
                    </IconButton>
                </Stack>
                <Typography variant="caption" color="rgba(0, 0, 0, 0.54)">
                    {!!text && text}
                </Typography>
                {cta && (
                    <Link href={cta.ctaHref} underline="none" data-test-id="tip-cta-link">
                        <Typography variant="caption">
                            {cta.ctaText}
                        </Typography>
                    </Link>
                )}
            </Stack>
        </Card>
    );
};

export default GenericTipCard;
