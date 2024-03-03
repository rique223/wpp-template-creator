import { Card, Link, Typography } from "@mui/material";

const ButtonPreview = ({ label }: { label: string }) => {
    return (
        <Card
            sx={{
                textAlign: "center",
                paddingBlock: "5px",
            }}
        >
            <Link href="#" underline="none">
                <Typography variant="body2">
                    {label}
                </Typography>
            </Link>
        </Card>
    );
};

export default ButtonPreview;
