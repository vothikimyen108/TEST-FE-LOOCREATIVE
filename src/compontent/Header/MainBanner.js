import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Banner from "../../assets/Img/Vector Smart Object copy 4.png";
import IconArrow from "../../assets/icon/arrow_button.png";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url("${Banner}")`,
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
    height: "25vh",
    width: "100%",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    marginTop: 100,

    [theme.breakpoints.up("lg")]: {
      height: "657px",
      backgroundSize: "100% 100%",
      marginTop: 40,
    },
  },
  text: {
    width: "50%",
    "& h1": {
      fontSize: 15,
    },
    "& p": {
      //   width: "95%",
      fontSize: 10,
    },
    "& div": {
      marginTop: "1vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "flext-start",
      "& p": {
        display: "inline",
        width: 70,
      },
      "& img": {
        width: 20,
      },
      [theme.breakpoints.up("lg")]: {
        marginTop: "10vh",
        "& p": {
          display: "inline",
          width: 100,
        },
        "& img": {
          width: "35px",
          transition: "transform .2s",
          "&:hover": {
            transform: "scale(1.1)",
            cursor: "pointer",
          },
        },
      },
    },
    [theme.breakpoints.up("lg")]: {
      width: "25%",
      position: "absolute",
      top: "12%",
      left: "18%",
      "& h1": {
        fontSize: 40,
      },
      "& p": {
        width: "95%",
        fontSize: 13,
      },
    },
  },
}));

export default function MainBaner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.text}>
        <h1>
          가드시그니처로 <br></br>
          온라인 계약 하세요.
        </h1>
        <p>
          비즈니스 성공을 위한 첫 걸음을 가드 시그니처와 <br></br>
          함께 시작하세요. 모든 계약을 쉽고 간단하게 처리할 수 있고, <br></br>
          가드시그니처로 온라인 계약 하세요.
        </p>
        <div>
          <p>지금 확인하기</p>
          <img src={IconArrow} alt="img"></img>
        </div>
      </div>
    </div>
  );
}
