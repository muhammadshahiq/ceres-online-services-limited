import { makeStyles } from "@mui/styles";
export const useStyle = makeStyles((theme) => ({
    contactForm: {
        backgroundColor: '#000',
        borderRadius:"10px"
    },
    textStyle: {
        color: theme.palette.secondary.main,
    },
    btnForm: {
        textTransform: 'none',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: 16,
        lineHeight: '20px',
        borderRadius: '50px',
        color: theme.palette.secondary.main,
        background: theme.palette.background.paper,
        border: `1px solid ${theme.palette.background.paper}`,
        '&:hover': {
            color: theme.palette.secondary.main,
            background: theme.palette.secondary.light,
            border: `1px solid ${theme.palette.background.paper}`,
        }
    }
}));
