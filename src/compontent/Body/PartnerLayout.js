import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PartnerSlider from "./Partner/PartnerSlider";
const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: "column",
    textAlign: "center",
    height: "300px",
    color: "#000",
    padding: 10,
    background: "#fff",
    "& p": {
      fontSize: "10px",
    },
    "& h3": {
      fontSize: "25px",
      margin: 10,
    },
    [theme.breakpoints.up("lg")]: {
      padding: 100,
      "& h3": {
        fontSize: "40px",
      },
      "& p": {
        fontSize: "18px",
      },
    },
  },
}));

export default function PartnerLayout() {
  const classes = useStyles();

  return (
    <div container className={classes.root}>
      <h3>많은 우수 기업과 함께 하고 있습니다.</h3>
      <p>가드 시그니처를 믿고 신뢰하는 고객사들이 있습니다.</p>
      <PartnerSlider></PartnerSlider>
    </div>
  );
}
