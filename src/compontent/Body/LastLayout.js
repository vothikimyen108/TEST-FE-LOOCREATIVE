import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ReasonLayout from "./Reason/ReasonLayout";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    height: "auto",
    background: "#f4f5f8",
    paddingTop: 50,
    paddingBottom: 100,
    "& h3": {
      fontSize: "20px",
      marginBotton: 30,
    },
    "& p": {
      fontSize: "16px",
    },
    [theme.breakpoints.up("lg")]: {
      "& h3": {
        fontSize: "40px",
        margin: 0,
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
  center1: {
    marginBottom: 30,
    margin: 0,
    textAlign: "center",
  },
  top: {
    margin: 0,
    textAlign: "center",
  },
  button: {
    background: "#333333",
    borderRadius: 50,
    marginTop: 50,
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

export default function LastLayoutt() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <h3>안전한 안심 제도</h3>
      <p>
        가드 시그니처는 [전자문서및전자거래기본법 제4조 제1항]과 <br></br>
        [전자서명법 제3조 제3항]에 따라 확실한 법적효력을 갖는 전자계약 서비스
        입니다.
      </p>
      <div style={{ width: "70%" }}>
        {" "}
        <ReasonLayout></ReasonLayout>
      </div>

      <Button
        variant="contained"
        classes={{
          root: classes.button, // class name, e.g. `classes-nesting-root-x`
          label: classes.label, // class name, e.g. `classes-nesting-label-x`
        }}
        endIcon={<ArrowForwardIosIcon />}
      >
        전자계약 체험하기
      </Button>
    </Grid>
  );
}
