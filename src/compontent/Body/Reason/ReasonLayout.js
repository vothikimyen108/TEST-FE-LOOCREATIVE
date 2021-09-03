import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import img from "../../../assets/Img/-e-reason_img_1.png";
import reason1 from "../../../assets/icon/-e-reason_icon_1.png";
import reason2 from "../../../assets/icon/-e-reason_icon_2.png";
import reason3 from "../../../assets/icon/-e-reason_icon_3.png";
import reason6 from "../../../assets/icon/-e-reason_icon_6.png";
import reason4 from "../../../assets/icon/-e-reason_icon_4.png";
import reason5 from "../../../assets/icon/-e-reason_icon_5.png";
import ReasonList from "./ReasonList";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  center: {
    "& img": {
      width: "100%",
    },
  },
  right: {
    textAlign: "center",
    [theme.breakpoints.up("lg")]: {
      textAlign: "right",
    },
  },
  left: {
    textAlign: "center",
    [theme.breakpoints.up("lg")]: {
      textAlign: "left",
    },
  },
}));
const listLeft = [
  {
    id: 1,
    img: reason1,
    title: "쉽고 편리하게",
    titleSub1: "번거로운 절차 없이 누구나",
    titleSub2: "빠르게 계약을 체결할 수 있습니다.",
  },
  {
    id: 3,
    img: reason3,
    title: "안전한 보안",
    titleSub1: "데이터는 암호화되어 전송되고",
    titleSub2: "안전한 곳에 저장됩니다.",
  },
  {
    id: 5,
    img: reason5,
    title: "다양한 파일형식",
    titleSub1: "한글, 오피스부터 PDF, JPG와",
    titleSub2: " 같은 이미지 파일도 변환없이 지원",
  },
];
const listRight = [
  {
    id: 1,
    img: reason2,
    title: "간단한 본인인증",
    titleSub1: "공인인증서와 ActiveX없이도 ",
    titleSub2: "본인인증을 할 수 있습니다.",
  },
  {
    id: 2,
    img: reason4,
    title: "효율적인 작업",
    titleSub1: "자주 사용하는 문서들을 저장하고",
    titleSub2: "불러와 작업할 수 있습니다.",
  },
  {
    id: 3,
    img: reason6,
    title: "계약서 관리",
    titleSub1: "관리가 필요한 문서를 한 눈에 보고",
    titleSub2: " 체계적으로 관리할 수 있습니다.",
  },
];
export default function ReasonLayout() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item lg={3} className={classes.left}>
          <ReasonList list={listLeft}></ReasonList>
        </Grid>
        <Grid item lg={6} className={classes.center}>
          <img src={img} alt="anh"></img>
        </Grid>
        <Grid item lg={3} className={classes.right}>
          <ReasonList list={listRight}></ReasonList>
        </Grid>
      </Grid>
    </div>
  );
}
