import { makeStyles } from '@mui/styles'
export const useStyles = makeStyles((theme) => ({
  textColor: {
    color: theme.palette.primary.main,
  },
  nooutline: {
    outline: 'none',
  },
  noBorder: {
    border: 'none',
  },
  iconColor: {
    color: theme.palette.primary.main,
  },
  endAdn: {
    paddingRight: '3.5px'
  },
  startAdn: {
    paddingLeft: '0px'
  },
  // input: {
  //   height: 8,
  //   minWidth: '13%',
  //   textOverflow: "ellipsis",
  //   fontSize: '14px'
  // },
  input: {
    // minWidth: '13%',
    textOverflow: "ellipsis",
    height: 8,
    fontSize: 14,
    fontWeight: 300,
    boxShadow: 'none',
    fontFamily: 'Outfit',
  },
  // inputTextArea: {
  //   textOverflow: "ellipsis",
  //   height: 8,
  //   fontSize: 14,
  //   fontWeight: 300,
  //   boxShadow: 'none',
  //   fontFamily: 'Outfit',
  //   height: '120px'
  // },
  passwordInput: {
    marginLeft: theme.spacing(1),
    flex: 1,
    fontSize: '14px',
    paddingTop: '4px'
  },
  mobileInput: {
    height: 8,
    fontSize: 12,
    fontWeight: 300,
    boxShadow: 'none',
    fontFamily: 'Outfit',
    textOverflow: "ellipsis",
  },
  inputPassword: {
    width: "90%",
    minWidth: '13%',
    textOverflow: "ellipsis"
  },

  disabled: {
    height: '45px',
    // border: `0px !important`,
    borderRadius: '5px',
    position: "relative",
    boxShadow: 'none',
    outline: 'none',
    background: "#d6e0eb",
    borderRadius: '8px',
    fontFamily: 'Outfit',
    // border: '0.5px solid #161A1D80',
    display: 'flex',
    alignItems: 'center',
    overflow: 'auto'
  },
  paperRoot: {
    height: '45px',
    // border: `0px !important`,
    borderRadius: '0px',
    position: "relative",
    boxShadow: 'none',
    outline: 'none',
    background: '#fff',
    borderRadius: '8px',
    fontFamily: 'Outfit',
    border: '0.5px solid #161A1D80',
    display: 'flex',
    alignItems: 'center',
    overflow: 'auto'
  },
  textArea: {
    minHeight: '130px',
    // border: `0px !important`,
    borderRadius: '0px',
    position: "relative",
    boxShadow: 'none',
    outline: 'none',
    background: '#fff',
    borderRadius: '8px',
    fontFamily: 'Outfit',
    border: '0.5px solid #161A1D80',
    display: 'flex',
    alignItems: 'center',
    overflow: 'auto'
  },
  textColor: {
    color: theme.palette.primary.main,
  },
  selectedPaper: {
    boxShadow: '0 0 2px 0 #701367 !important',
    background: '#fff !important',
  },
  iconSize: {
    fontSize: '15px !important',
    width: '25px'
  },
  iconButton: {
    padding: 12,
  },
}))
