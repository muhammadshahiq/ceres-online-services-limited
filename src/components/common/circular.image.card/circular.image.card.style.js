import { makeStyles } from "@mui/styles";
export const useStyle = makeStyles((theme, props) => ({
    cardBackgroundColor: {
        backgroundColor: '#f7f7f7',
        borderRadius: '24px',
        cursor: 'pointer',
        border: '0px',
        boxShadow: 'none',
        // border: '0px'
        "&:hover": {
            backgroundColor: theme.palette.ternary.main,
        }
    },
    card: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: '8px',
        cursor: 'pointer',
        border: `1.5px solid ${theme.palette.primary.main}`,
        // border: '0px'
        "&:hover": {
            backgroundColor: theme.palette.ternary.main,
        }
    },
    selectedCard: {
        backgroundColor: theme.palette.ternary.main,
        borderRadius: '8px',
        border: `1.5px solid ${theme.palette.primary.main}`,
        // "&:hover": {
        //     border: `1px solid ${theme.palette.secondary.main}`
        // }
    },
    cardContent: {
        // backgroundColor: theme.palette.background.paper,
        // border: `1.5px solid ${theme.palette.primary.main}`,
        // minHeight: '150px',
        boxShadow: 'none',
        // "&:hover": {
        //     backgroundColor: theme.palette.ternary.main,
        // }
    },
    selectedCardContent: {
        // backgroundColor: theme.palette.ternary.main,
        // border: `1.5px solid ${theme.palette.primary.main}`,
        // minHeight: '150px',
        boxShadow: 'none'
    },
    cardMedia: {
        // objectFit: 'cover',
        // height: "100%",
        width: '100%',
        // background: theme.palette.gradientColor3.main
        "&:hover": {
            border: `1px solid transparent`
        }
    },
    cardMediaOnTablet: {
        // objectFit: 'cover',
        // height: "100%",
        width: '100%',
        // background: theme.palette.gradientColor3.main
        "&:hover": {
            border: `1px solid transparent`
        }

    },
    cardMediaOnMobile: {
        // objectFit: 'cover',
        // height: "100%",
        width: '100%',
        // background: theme.palette.gradientColor3.main
        "&:hover": {
            border: `1px solid transparent`
        }
    },
    cardAction: {
        // backgroundColor: '#F6F3FF'
    },
    textStyle: {
        color: theme.palette.primary.main,
    },
    selectedTextStyle: {
        color: theme.palette.background.paper,
    },
    tagStyle: {
        color: theme.palette.secondary.light,
        background: theme.palette.secondary.main,
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    linkStyle: {
        fontWeight: 500,
        textDecoration: 'underline',
        "&:hover": {
            fontWeight: 600,
            color: theme.palette.primary.main
        }
    }
}));
