import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({
  root: {
    background: "#f4f5f8",
    color: "#000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      height: "382px",
    },
  },
  text: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#333333",
    "& h1": {
      fontSize: "24px",

      fontFamily: "Arial, Helvetica, sans-serif",
      fontWeight: 800,
      //   width: "25%",
      position: "none",
      marginTop: 40,
      [theme.breakpoints.up("lg")]: {
        position: "absolute",
        top: "0px",
        left: "42%",
        margin: 0,
        color: "#333333",
        fontSize: "48px",
        width: 300,
      },
      [theme.breakpoints.up("md")]: {
        position: "absolute",
        top: "-12px",
        left: "42%",
        margin: 0,
        fontSize: "40px",
        color: "#333333",
      },
    },
    "& p": {
      fontSize: "12px",
      padding: 10,
      width: "100%",
      [theme.breakpoints.up("lg")]: {
        margin: 0,
        fontSize: "16px",
        width: "95%",
        color: "#333333",
        padding: 0,
      },
    },

    "&:first-child": {
      width: "10%",
      position: "relative",
    },
  },
}));

const BannerQuick = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={5} lg={5} className={classes.text}>
          <h1>Easy and quick.</h1>
        </Grid>
        <Grid item xs={12} md={7} lg={7} className={classes.text}>
          <p>
            가드 시그니처에서는 복잡한 절차를 거치지 않고 수월하게 계약을 진행할
            수 있습니다. 준비해둔 계약 문서를 곧바로 업로드하고,<br></br>
            <br></br> 서명을 요청하세요. 상대방도 별도의 회원가입이나 복잡한
            인증 과정없이 서명이 가능합니다.<br></br> <br></br>계약이 진행되는
            모든 과정을 효과적으로 체크할 수 있고, 언제 어디서든 5분이면 계약이
            완료됩니다.<br></br> <br></br>
            <br></br>
            <br></br>가드 시그니처와 함께 빠르고 신속하게 상대방과의 계약을
            체결하고 관리하세요.
          </p>
        </Grid>
      </Grid>
    </div>
  );
};
export default BannerQuick;
