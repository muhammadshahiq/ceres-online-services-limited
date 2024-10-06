import { makeStyles } from '@mui/styles';
export const useStyle = makeStyles(theme => ({
   
    btnStyleBanner: {
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
            color: theme.palette.background.paper,
            background: theme.palette.secondary.main,
            border: `1px solid ${theme.palette.background.paper}`,
        }
    }
}))
