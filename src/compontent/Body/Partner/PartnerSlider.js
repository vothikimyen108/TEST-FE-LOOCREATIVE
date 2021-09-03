import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../assets/Logo/Layer 2774.png";
import img2 from "../../../assets/Logo/Layer 2778.png";
import img3 from "../../../assets/Logo/Layer 2782.png";
import img4 from "../../../assets/Logo/Layer 2786.png";
import img5 from "../../../assets/Logo/Layer 2790.png";
import img6 from "../../../assets/Logo/Layer 2790.png";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    height: "100px !important",
    width: "170px !important",
    color: "#fff",
    background: "#157eff",
    "& img": {
      width: "100%",
      height: "100%",
    },
  },
  slider: {
    width: "100% !important",
    height: "100% !important",
  },
}));

const PartnerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "30px",
        }}
      >
        <ul style={{ margin: "3px" }}> {dots} </ul>
      </div>
    ),
  };
  const slider = React.useRef(null);
  const classes = useStyles();
  return (
    <div className="slick-banner">
      <Slider ref={slider} {...settings} className={classes.slider}>
        <div className={classes.root}>
          <img src={img1} alt="img" />
        </div>
        <div className={classes.root}>
          <img src={img2} alt="img" />
        </div>
        <div className={classes.root}>
          <img src={img3} alt="img" />
        </div>
        <div className={classes.root}>
          <img src={img4} alt="img" />
        </div>
        <div className={classes.root}>
          <img src={img5} alt="img" />
        </div>
        <div className={classes.root}>
          <img src={img1} alt="img" />
        </div>
        <div className={classes.root}>
          <img src={img2} alt="img" />
        </div>
        <div className={classes.root}>
          <img src={img3} alt="img" />
        </div>
      </Slider>
    </div>
  );
};

export default PartnerSlider;
