import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { NavMenu, NavItem } from "@mui-treasury/components/menu/navigation";
import N from "../../assets/icon/N.png";
import F from "../../assets/icon/f.png";
import B from "../../assets/icon/B.png";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "300px",
    padding: 20,
    "& p": {
      marginLeft: 10,
      color: "grey",
      padding: "6px",
    },
    "& a": {
      color: "#000",
      fontWeight: 900,
    },
    fontSize: "12px",
    [theme.breakpoints.up("lg")]: {
      fontSize: "16px",
    },
  },
  right: {
    display: "flex",
    justifyContent: "flex-end",
    height: "200px",
  },
  img: {
    width: "12%",
    [theme.breakpoints.up("lg")]: {
      width: "6%",
    },
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.root}>
        <Grid item xs={12} lg={5}>
          <NavMenu>
            <NavItem>이용약관 </NavItem>
            <NavItem>개인정보처리방침</NavItem>
            <NavItem>고객센터</NavItem>
          </NavMenu>
          <p>
            (주) 가드시그니처 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 :
            356-00-00000 이메일 : test0101@guardsignature.co.kr｜ FAX :
            070-0000-0000 서울특별시 강남구 도산대로 8길 17 2층
            <br></br>
            Copyright© GUARDSIGNATURE All rights reserved.
          </p>
        </Grid>
        <Grid item xs={12} lg={5} className={classes.right}>
          <div className={classes.img}>
            {" "}
            <img src={N} alt={"img"}></img>
          </div>
          <div className={classes.img}>
            {" "}
            <img src={F} alt={"img"}></img>
          </div>
          <div className={classes.img}>
            {" "}
            <img src={B} alt={"img"}></img>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
