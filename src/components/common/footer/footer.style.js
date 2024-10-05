import { makeStyles } from "@mui/styles";
export const useStyle = makeStyles((theme) => ({
    footer: {
        background: theme.palette.background.paper,
        height: 'auto',
        borderRadius: '0px',
        // maxWidth: '1440px'
    },
    textStyle: {
        color: theme.palette.primary.main,
    },
    gridStyle: {
        backgroundColor: theme.palette.background.paper,
        height: "100%"
    },
    footerBannerStyle: {
        border: `1.5px solid ${theme.palette.primary.main}`,
        borderRadius: '6.64px',
    },
    rightBanner: {
        height: '120px'
    },
    resRightBanner: {
        backgroundColor: '#70E000',
        minHeight: '50px'
    },
    leftBanner: {
        minHeight: '120px'
    }
}));