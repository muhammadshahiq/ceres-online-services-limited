import { makeStyles } from "@mui/styles";
export const useStyle = makeStyles((theme) => ({
    footer: {
        background: theme.palette.background.paper,
        height: 'auto',
        borderRadius: '0px',
        // maxWidth: '1440px'
    },
    textStyle: {
        color: theme.palette.background.paper,
    },
    gridStyle: {
        height: "auto",
        textAlign: 'center'
    },
    footerStyle2: {
        background: theme.palette.primary.main,
        textAlign: 'center'
    },
    iconStyling: {
        background: theme.palette.primary.main,
        padding: '8px',
        "&:hover": {
            background: theme.palette.secondary.main,
        }
    }
}));