import { makeStyles } from "@mui/styles";
export const useStyle = makeStyles((theme) => ({
    textStyle: {
        color: theme.palette.primary.main,
    },
    btn: {
        color: '#fff',
        textTransform: 'none',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 14,
        lineHeight: '20px',
        color: '#fff',
        backgroundColor: theme.palette.secondary.dark,
        borderRadius: '50px',
        '&:hover': {
            background: theme.palette.background.paper,
            color: theme.palette.secondary.main,
            border: `1px solid ${theme.palette.secondary.main}`
        }
    },
    btnDiv: {
        backgroundColor: theme.palette.secondary.light
    }
}));
