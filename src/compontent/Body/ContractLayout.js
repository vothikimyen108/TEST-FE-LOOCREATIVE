import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Contract from "./Contract/Contract";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    textAlign: "center",
    height: "auto",
    "& h3": {
      fontSize: "20px",
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
  bottom: {
    // marginTop: 30,
  },
}));

export default function ContractLayout() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <h3>5분 만에 끝내는 계약 업무</h3>
        <p>
          계약서 파일을 업로드하여 서명을 요청해 보세요.<br></br> 상대방은
          회원가입 없이 이메일, 카카오톡 링크를 통해 서명할 수 있습니다.
          <br></br> 언제 어디서든 5분만에 계약을 체결해 보세요.
        </p>
      </Grid>
      <Grid item xs={12} className={classes.bottom}>
        <Contract></Contract>
      </Grid>
    </Grid>
  );
}
