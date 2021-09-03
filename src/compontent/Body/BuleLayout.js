import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    height: "418px",
    color: "#fff",
    background: "#157eff",
    "& p": {
      fontSize: "18px",
    },
    "& h3": {
      fontSize: "40px",
      margin: 10,
    },
    [theme.breakpoints.up("lg")]: {
      //   "& h3": {
      //     fontSize: "40px",
      //   },
      //   "& p": {
      //     fontSize: "18px",
      //   },
    },
  },
  button: {
    background: "#157eff",
    borderRadius: 50,
    color: "white",
    height: 40,
    padding: "0 30px",
    fontSize: "10px",
    boxShadow: "none",
    border: "1px solid #fff",
    marginTop: 30,
    "&:hover": {
      background: "#157eff",
      boxShadow: "none",
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

export default function BuleLayout() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      {/* <Grid item xs={12}> */}
      <p>지금 바로 시작하세요!</p>
      <h3>
        설명이 필요 없는 간단한 계약 과정,<br></br> 직접 경험해보세요!
      </h3>
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
