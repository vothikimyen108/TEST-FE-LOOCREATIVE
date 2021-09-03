import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ParallaxCarousel from "../../Ui/ParallaxCarousel";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    background: "#f4f5f8",
    margin: 0,
    textAlign: "center",
    "& p": {
      fontSize: "20px",
    },
    height: "auto",
    [theme.breakpoints.up("lg")]: {
      "& p": {
        fontSize: "40px",
      },
    },
  },
  button: {
    background: "#157eff",
    borderRadius: 50,
    color: "white",
    height: 40,
    padding: "0 30px",
    fontSize: "10px",
    "&:hover": {
      background: "#157eff",
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
  bottom: {
    margin: 50,
  },
}));

export default function SlideLayout() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <p>
          짧고 간단한 절차 <br></br>지금 직접 확인해보세요
        </p>
      </Grid>
      <Grid item xs={12}>
        <ParallaxCarousel></ParallaxCarousel>
      </Grid>
      <Grid item xs={12} className={classes.bottom}>
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
