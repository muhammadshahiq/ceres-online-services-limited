import { makeStyles } from "@mui/styles";
export const useStyle = makeStyles((theme) => ({
    textStyle: {
        color: theme.palette.primary.main,
        textDecoration:'underline',
        "&:hover": {
            fontWeight: '400 !important'
        }
    }
}));