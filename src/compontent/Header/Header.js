import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/core/Menu";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "auto",
    background: "#fff",
    // padding: 15,
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    "& div": {
      height: "100%",
    },
  },
  title: {
    padding: 10,
    height: "100%",
    color: "#157eff",
    width: "50%",
    "& p": {
      fontFamily: "Arial, Helvetica, sans-serif",
      fontWeight: 900,
      width: 100,
      fontSize: 15,
      textTransform: "uppercase",
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    [theme.breakpoints.up("lg")]: {
      width: "20%",
      justifyContent: "flex-end",
    },
  },
  menu: {
    width: "60%",
    display: "none",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.up("lg")]: {
      display: "flex",
    },
  },
  login: {
    width: "20%",
    fontSize: 15,
    display: "none",
    alignItems: "center",
    justifyContent: "flex-start",
    [theme.breakpoints.up("lg")]: {
      display: "flex",
    },
  },
  navMenu: {
    listStyleType: "none",
    margin: 0,
    padding: 0,
    "& li": {
      display: "inline",
      padding: "0px 15px",
      "& a": {
        color: "#000",
        textDecoration: "none",
      },
    },
  },
  sectionMobile: {
    display: "flex",
    width: "30%",
    alignItems: "center",
    justifyContent: "flex-end",
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const mobileMenuId = "primary-search-account-menu-mobile";
  const [menuHideMoreAnchorEl, setMenuHide] = useState(null);

  const isMenuHideOpen = Boolean(menuHideMoreAnchorEl);
  const handleMenuHideClose = () => {
    setMenuHide(null);
  };
  const handleMenuHideOpen = (event) => {
    setMenuHide(event.currentTarget);
  };
  const renderMenuHide = (
    <Menu
      anchorEl={menuHideMoreAnchorEl}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      transformOrigin={{ vertical: "top", horizontal: "center" }}
      id={mobileMenuId}
      PaperProps={{
        style: {
          transform: "translateX(10px) translateY(50px)",
        },
      }}
      open={isMenuHideOpen}
      onClose={handleMenuHideClose}
      keepMounted={false}
    >
      <MenuItem>서비스 소개</MenuItem>
      <MenuItem>법적효력·보안</MenuItem>
      <MenuItem>활용 분야</MenuItem>
      <MenuItem>활용 분야</MenuItem>
      <MenuItem>이용 혜택</MenuItem>
      <MenuItem>요금 안내</MenuItem>
      <MenuItem>고객센터</MenuItem>
      <MenuItem>로그인</MenuItem>
      <MenuItem>회원가입</MenuItem>
    </Menu>
  );
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <p>Guard Signature</p>
      </div>
      <div className={classes.menu}>
        <ul className={classes.navMenu}>
          <li>
            <a href="#home">서비스 소개</a>
          </li>
          <li>
            <a href="#news">법적효력·보안</a>
          </li>
          <li>
            <a href="#contact">활용 분야</a>
          </li>
          <li>
            <a href="#about">이용 혜택</a>
          </li>
          <li>
            <a href="#about">요금 안내</a>
          </li>
          <li>
            <a href="#about">고객센터</a>
          </li>
        </ul>
      </div>
      <div className={classes.login}>
        <ul className={classes.navMenu}>
          <li>
            <a href="#home">로그인</a>
          </li>
          <li>
            <a href="#news">회원가입</a>
          </li>
        </ul>
      </div>
      <div className={classes.sectionMobile}>
        <IconButton
          aria-label="show more"
          aria-controls={mobileMenuId}
          aria-haspopup="true"
          onClick={handleMenuHideOpen}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
      </div>
      {renderMenuHide}
    </div>
  );
}
