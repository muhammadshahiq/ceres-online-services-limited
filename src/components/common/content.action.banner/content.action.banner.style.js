import { makeStyles } from '@mui/styles';
export const useStyle = makeStyles(theme => ({
    content: {
        padding: '56px 168px'
    },
    textStyle: {
        color: theme.palette.primary.main,
        // fontWeight: '300 !important',
        // fontFamily: 'Roboto !important'
    },
    contentBannerStyle: {
        backgroundColor: theme.palette.secondary.main,
        borderRadius: '32px',
        minHeight: '350px',
        // opacity: 0.9
    }
}))