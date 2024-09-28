import { makeStyles } from "@mui/styles";
export const useStyle = makeStyles((theme) => ({

    btnStyle: {
        textTransform: 'none',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 14,
        lineHeight: '20px',
        minHeight: '40px',
        color: theme.palette.background.paper,
        backgroundColor: theme.palette.primary.dark,
        borderRadius: '8px',
        '&:hover': {
            background: theme.palette.primary.dark,
            color: theme.palette.background.paper,
            // border: `1px solid ${theme.palette.background.paper}`
        }
    },
    btnStyle2: {
        textTransform: 'none',
        boxShadow: 'none',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 14,
        lineHeight: '20px',
        minHeight: '40px',
        color: theme.palette.primary.dark,
        backgroundColor: '#70E00033',
        borderRadius: '100px',
        '&:hover': {
            boxShadow: 'none',
            background: '#57a70733',
            color: theme.palette.primary.dark,
            // border: `1px solid ${theme.palette.background.paper}`
        }
    }

}));