import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import RegulationList from "./Regulation/RegulationList";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
const useStyles = makeStyles((theme) => ({
  root: {
    // padding: 100,
    height: "auto",
    "& h3": {
      fontSize: "20px",
      marginBotton: 30,
    },
    "& p": {
      fontSize: "16px",
    },
    [theme.breakpoints.up("lg")]: {
      height: "600px",
      "& h3": {
        fontSize: "40px",
      },
      "& p": {
        fontSize: "18px",
      },
    },
  },
  center: {
    marginTop: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  top: {
    margin: 0,
    textAlign: "center",
  },
  button: {
    background: "#333333",
    borderRadius: 50,
    color: "white",
    height: 40,
    padding: "0 30px",
    fontSize: "10px",
    "&:hover": {
      background: "#333333",
    },
    [theme.breakpoints.up("lg")]: {
      height: 50,
      padding: "0 30px",
      fontSize: "16px",
    },
  },
  label: {
    textTransform: "capitalize",
  },
}));

export default function RegulationLayout() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} className={classes.top}>
        <h3>다양한 계약서에 필수적 사용</h3>
        <p>
          근로 계약서, 각종 동의서, 입점 계약서, 가맹 계약서,<br></br> 용역
          계약서, 공급 계약서<br></br> 이외에도 사용 가능한 계약서를
        </p>
      </Grid>
      <Grid item xs={12} className={classes.center}>
        <RegulationList></RegulationList>
      </Grid>
      <Grid item xs={12} className={classes.top}>
        <p>그 외 사용가능한 계약서가 궁금하신가요?</p>
        <Button
          variant="contained"
          size="large"
          classes={{
            root: classes.button, // class name, e.g. `classes-nesting-root-x`
            label: classes.label, // class name, e.g. `classes-nesting-label-x`
          }}
          endIcon={<ArrowForwardIosIcon />}
        >
          전자계약 체험하기
        </Button>
      </Grid>
    </Grid>
  );
}
