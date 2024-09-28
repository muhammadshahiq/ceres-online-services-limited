import { makeStyles } from "@mui/styles";
export const useStyle = makeStyles((theme) => ({
    menu: {
        backgroundColor: theme.palette.background.paper,
        border: `1px solid #000`
    },
    menuItem: {
        color: theme.palette.primary.main,
        // border: `1px solid red`  
        "&:hover": {
            color: theme.palette.primary.dark,
        }
    },
    btnDropDown: {
        color: theme.palette.primary.main,
        textTransform: 'none'
    }
}));