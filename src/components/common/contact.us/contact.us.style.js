import { makeStyles } from "@mui/styles";
export const useStyle = makeStyles((theme) => ({
    contactForm: {
        backgroundColor: '#fff',
        borderRadius:"10px"
    },
    textStyle: {
        color: theme.palette.primary.main,
    },
    btnForm: {
        textTransform: 'none',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: 16,
        lineHeight: '20px',
        borderRadius: '50px',
        color: theme.palette.primary.main,
        background: theme.palette.background.paper,
        border: `1px solid ${theme.palette.background.paper}`,
        '&:hover': {
            color: theme.palette.primary.main,
            background: theme.palette.primary.light,
            border: `1px solid ${theme.palette.background.paper}`,
        }
    }
}));
