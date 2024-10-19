import { makeStyles } from "@mui/styles";
export const useStyle = makeStyles((theme) => ({
    header: {
        height: 'auto',
        // height: '90vh',
        borderRadius: '0px',
        width: '100%',
        // background:'red'
    },
    headerOnTablet: {
        // background: theme.palette.gradientColor3.main,
        height: '500px',
        borderRadius: '0px',
    },
    responsiveHeader: {
        // background: theme.palette.gradientColor3.main,
        height: '450px',
        borderRadius: '0px',
    },
    textStyle: {
        color: theme.palette.primary.main,
        textTransform: 'uppercase'
    }

}));