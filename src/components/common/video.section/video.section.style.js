import { makeStyles } from "@mui/styles";
export const useStyle = makeStyles((theme) => ({
    textStyle: {
        color: theme.palette.primary.main,
    },
    textStyleMobile: {
        color: theme.palette.background.paper,

    }
}));