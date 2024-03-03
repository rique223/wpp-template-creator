import { makeStyles } from "@material-ui/core/styles";

export const useScrollbarStyles = makeStyles(() => ({
    customScrollbar: {
        "&::-webkit-scrollbar": {
            display: "none",
        },
    },
}));
