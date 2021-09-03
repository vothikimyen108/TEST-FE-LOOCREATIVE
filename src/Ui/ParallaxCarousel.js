import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ParallaxSlide from "@mui-treasury/components/slide/parallax";
import DotIndicator from "./DotIndicator";
import ArrowLeft1 from "../assets/icon/Shape 881.png";
import ArrowRight from "../assets/icon/Shape 881 copy 3.png";
import Tab from "../assets/icon/Tab.png";
import Img1 from "../assets/Img/Layer 2975.png";
import Img2 from "../assets/Img/img1.png";
import Img3 from "../assets/Img/img2.png";
const data = [
  {
    id: 1,
    title: "Huarache",
    subtitle: "Gripp",
    image: Img1,
    // eslint-disable-next-line max-len
  },
  {
    id: 2,
    title: "Air Max",
    subtitle: "270 P",
    image: Img2,
  },
  {
    id: 3,
    title: "Air Max",
    subtitle: "Deluxe",
    image: Img3,
  },
];

const useStyles = makeStyles(({ palette, breakpoints, spacing }) => ({
  root: {
    // a must if you want to set arrows, indicator as absolute
    position: "relative",
    margin: 0,
    textAlign: "center",
    width: "100%",
    height: "auto",
  },
  slide: {
    backgroundSize: "100% 100%",
    width: "100%",
    height: "230px",
    backgroundImage: `url("${Tab}")`,
    marginLeft: 0,
    margin: 0,
    textAlign: "center",
    position: "relative",
    [breakpoints.up("md")]: {
      height: "600px",
    },
    [breakpoints.up("lg")]: {
      marginLeft: 480,
      width: "600px",
      height: "360px",
    },
  },
  imageContainer: {
    position: "absolute",
    width: "81%",
    height: "82%",
    top: "8%",
    left: "9.8%",
    [breakpoints.up("lg")]: {
      top: 30,
      left: 55,
    },
  },
  image: {
    width: "100%",
    height: "100%",
  },
  arrow: {
    display: "none",
    position: "absolute",
    top: "40%",
    transform: "translateY(-50%)",
    [breakpoints.up("lg")]: {
      display: "inline",
    },
    "& .MuiSvgIcon-root": {
      width: 80,
      height: 200,
    },
    [breakpoints.up("lg")]: {
      display: "inline",
    },
  },
  arrowLeft: {
    left: 0,
    [breakpoints.up("lg")]: {
      left: "25%",
    },
  },
  arrowRight: {
    right: 0,
    [breakpoints.up("lg")]: {
      right: "24%",
    },
  },

  indicatorContainer: {
    textAlign: "center",
    margin: 0,
    [breakpoints.up("lg")]: {
      marginTop: 20,
    },
  },
  pre: {
    width: "300px",
    height: "300px",
    position: "absolute",
    top: "5%",
    left: 0,
    "& img": {
      width: "100%",
      height: "100%",
    },
    display: "none",
    [breakpoints.up("lg")]: {
      display: "inline",
    },
  },
  pos: {
    width: "300px",
    height: "300px",
    position: "absolute",
    right: 0,
    top: "5%",
    "& img": {
      width: "100%",
      height: "100%",
    },
    display: "none",
    [breakpoints.up("lg")]: {
      display: "inline",
    },
  },
}));

const ParallaxCarousel = () => {
  const classes = useStyles();
  const renderElements = ({ index, onChangeIndex }) => {
    let pre = 0;
    let pos = 0;
    if (index === 0) {
      pre = 2;
    } else if (index < 3) {
      pre = index - 1;
    }
    if (index === 2) {
      pos = 0;
    } else if (index < 3) {
      pos = index + 1;
    }
    console.log(pre);
    return (
      <>
        <div className={classes.pre}>
          <img src={data[pre].image} alt={"slide"} />
        </div>
        <div className={classes.pos}>
          <img src={data[pos].image} alt={"slide"} />
        </div>
        <Button
          className={cx(classes.arrow, classes.arrowLeft)}
          disabled={index === 0}
          onClick={() => onChangeIndex(index - 1)}
        >
          <img src={ArrowLeft1} alt={"slide"} />
        </Button>
        <Button
          className={cx(classes.arrow, classes.arrowRight)}
          // classes={arrowStyles}
          disabled={index === data.length - 1}
          onClick={() => onChangeIndex(index + 1)}
        >
          {" "}
          <img src={ArrowRight} alt={"slide"} />
        </Button>

        <div className={classes.indicatorContainer}>
          {data.map(({ id }, i) => (
            <DotIndicator
              key={id}
              active={i === index}
              onClick={() => onChangeIndex(i)}
            />
          ))}
        </div>
      </>
    );
  };
  const renderChildren = ({ injectStyle, fineIndex }) =>
    data.map(({ id, title, subtitle, image }, i) => (
      <div key={id} className={classes.slide}>
        <div className={classes.imageContainer}>
          <img className={classes.image} src={image} alt={"slide"} />
        </div>
      </div>
    ));
  return (
    <div className={classes.root}>
      <ParallaxSlide renderElements={renderElements}>
        {renderChildren}
      </ParallaxSlide>
    </div>
  );
};

export default ParallaxCarousel;
