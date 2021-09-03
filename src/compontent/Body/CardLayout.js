import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardList from "./Card/CardList";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    height: "auto",
    padding: 50,
    background: "#f4f5f8",
    "& h3": {
      fontSize: "20px",
      margin: 20,
    },
    "& p": {
      fontSize: "16px",
    },
    [theme.breakpoints.up("lg")]: {
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

export default function CardLayout() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <h3>안전한 안심 제도</h3>
      <p>
        가드 시그니처는 [전자문서및전자거래기본법 제4조 제1항]과<br></br>{" "}
        [전자서명법 제3조 제3항]에 따라 확실한 법적효력을
      </p>
      <CardList></CardList>
    </Grid>
  );
}
