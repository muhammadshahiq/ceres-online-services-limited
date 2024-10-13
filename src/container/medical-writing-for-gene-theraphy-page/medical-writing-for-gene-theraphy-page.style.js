import { makeStyles } from '@mui/styles';
export const useStyle = makeStyles(theme => ({

    textStyle: {
        color: theme.palette.primary.main,
        fontFamily: 'Outfit',
        fontSize: 22,
        lineHeight: '33px',
        fontWeight: 300
    }
}))
