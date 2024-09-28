import { makeStyles } from "@mui/styles";
export const useStyle = makeStyles((theme) => ({
    textStyle: {
        color: theme.palette.primary.main,
        width: '100%'
    },
    borderTopStyle: {
        borderTop: '1px solid #bdbdbd',
    }
}));