import { makeStyles } from "@mui/styles";
export const useStyle = makeStyles((theme) => ({
    card: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: '8px',
        cursor: 'pointer',
        // "&:hover": {
        //     border: `1px solid #fff`
        // }
    },
    selectedCard: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: '8px',
        // "&:hover": {
        //     border: `1px solid ${theme.palette.secondary.main}`
        // }
    },
    cardContent: {
        backgroundColor: theme.palette.secondary.light,
        minHeight: '260px'
    },
    selectedCardContent: {
        backgroundColor: theme.palette.secondary.main,
        minHeight: '260px'
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
    btn: {
        textTransform: 'none',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 14,
        lineHeight: '20px',
        borderRadius: '50px',
        color: theme.palette.secondary.main,
        border: `1px solid ${theme.palette.secondary.main}`,
        '&:hover': {
            background: theme.palette.secondary.main,
            color: theme.palette.background.paper,
            border: `1px solid ${theme.palette.background.paper}`
        }
    },
    selectedBtn: {
        textTransform: 'none',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 14,
        lineHeight: '20px',
        borderRadius: '50px',
        background: theme.palette.secondary.main,
        color: theme.palette.background.paper,
        border: `1px solid ${theme.palette.background.paper}`,
        '&:hover': {
            color: theme.palette.background.paper,
            border: `1px solid ${theme.palette.background.paper}`,
        }
    }
}));
