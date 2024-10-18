import { makeStyles } from '@mui/styles';
export const useStyle = makeStyles(theme => ({
    appNavbar: {
        // background: theme.palette.background.paper,
        // background:'transparent',
        // height: '72px',
        left: '0px',
        top: "0px",
        boxShadow: 'none !important',
    },
    responsiveAppNavbar: {
        background: theme.palette.background.paper,
        height: 'auto',
        left: '0px',
        top: "0px",
        boxShadow: 'none !important',
        zIndex: 1000
    },
    appBarSpacer: theme.mixins.toolbar,
    toolbar: {
        padding: "0px"
    },

    btn: {
        color: '#fff',
        textTransform: 'none',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 16,
        lineHeight: '16px',
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.background.paper,
        borderRadius: '8px',
        // border: `1px solid ${theme.palette.primary.main}`,
        '&:hover': {
            background: theme.palette.primary.extraLight,
        }
    },
    btn2: {
        boxShadow: 'none !important',
        color: '#fff',
        backgroundColor: theme.palette.secondary.dark,
        borderRadius: '10px',
        height: '52px',
        fontWeight: 700,
        fontSize: 15,
        '&:hover': {
            background: theme.palette.secondary.main,
            color: "#fff",
        }
    },
    btnText: {
        fontSize: '14px',
        fontFamily: 'Nunito',
        fontWeight: '500',
        textTransform: 'none',
        fontStyle: 'normal',
    },
    iconStyle: {
        border: `1px solid #5B3BD0`,
    },
    selectStyle: {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 14,
        lineHeight: '19px',
        textAlign: 'center',
        color: '#574D68',
    },
    drawerPaper: {
        background: theme.palette.background.paper,
        // marginTop: '60px',
        width: '70%',
        boxShadow: 'none !important'
    },
    drawerOnTablet: {
        background: theme.palette.background.paper,
        // marginTop: '60px',
        width: '240px',
        boxShadow: 'none !important'
    },
    contentOnTablet: {
        maxWidth: '254px',
        // background: '#D8D8D8',
        boxShadow: '4px 0px 10px rgba(0, 0, 0, 0.15)',
        padding: '24px 5px',
        boxShadow: 'none !important'
    },
    contentOnMobile: {
        width: '100%',
        // background: '#D8D8D8',
        boxShadow: '4px 0px 10px rgba(0, 0, 0, 0.15)',
        padding: '24px 16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: 'none !important'
    },

    stickySection: {
        borderRadius: '8px',
        position: 'sticky !important',
        top: 0,
        zIndex: 10
        /* This sticks the section at the top of the viewport */
    },
    textStyle: {
        color: theme.palette.primary.main
    },

    contactDrawerPaper: {
        background: theme.palette.background.paper,
        // marginTop: '60px',
        width: '80%',
        boxShadow: 'none !important'
    },
    contactDrawerOnTablet: {
        background: theme.palette.background.paper,
        // marginTop: '60px',
        width: '580px',
        boxShadow: 'none !important'
    },
}))
