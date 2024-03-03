import InfoIcon from "@mui/icons-material/Info";
import { Box, Card, Chip, Stack, Switch, Typography } from "@mui/material";
import { ChangeEvent, ReactNode, useState } from "react";

type GenericCardProps = {
    icon: ReactNode;
    title: string;
    required: boolean;
    children?: ReactNode;
    sx?: Record<string, string | object>;
};

const GenericCard = ({
    icon,
    title,
    required,
    children,
    sx,
}: GenericCardProps) => {
    const [isEnabled, setIsEnabled] = useState(required);

    const handleEnableCard = (event: ChangeEvent<HTMLInputElement>) => {
        setIsEnabled(event.target.checked);
    };

    return (
        <Card
            variant="outlined"
            sx={{ ...sx, paddingBlock: "16px", paddingInline: "24px" }}
        >
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
            >
                <Stack direction="row" alignItems="center">
                    <Box marginInlineEnd="8px">{icon}</Box>
                    <Typography
                        variant="body1"
                        fontWeight="500"
                        marginInlineEnd="4px"
                    >
                        {title}
                    </Typography>
                    <InfoIcon color="action" sx={{ fontSize: "14px" }} />
                </Stack>
                {required ? (
                    <Chip
                        size="small"
                        label={
                            <Typography variant="caption" fontWeight="700">
                                Required
                            </Typography>
                        }
                        sx={{ borderRadius: "4px" }}
                    />
                ) : (
                    <Switch checked={isEnabled} onChange={handleEnableCard} />
                )}
            </Stack>
            {isEnabled ? children : null}
        </Card>
    );
};

export default GenericCard;
