import { makeStyles } from "@material-ui/core/styles";
const RegulatiomStyles = makeStyles((theme) => ({
  root: {
    // border: "1px solid #d4d4d4",
    width: "100%",
  },
  button: {
    display: "none",
    [theme.breakpoints.up("lg")]: {
      display: "inline",
    },
  },
  go: {
    margin: 5,
    "& h6": {
      fontSize: "20px !important",
      fontFamily: "Noto Sans KR sans-serif",
    },
    "& p": {
      fontSize: "15px !important",
      marginTop: 5,
      fontFamily: "Noto Sans KR sans-serif",
      //   width: 160,
    },
  },
  goLast: {
    "&:last-of-type": {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#d4d4d4",
    },
  },
  auction: {
    width: "100%",
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));
export default RegulatiomStyles;
