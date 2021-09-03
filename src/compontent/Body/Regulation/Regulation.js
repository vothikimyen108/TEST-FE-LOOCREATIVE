import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import { Row, Item } from "@mui-treasury/components/flex";
import { Info, InfoTitle, InfoSubtitle } from "@mui-treasury/components/info";
import { useTutorInfoStyles } from "@mui-treasury/styles/info/tutor";
import Productimg from "../../assets/product/product.svg";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useSpring, animated } from "react-spring";
import { NavLink } from "react-router-dom";
import Auction from "./Auction";
///css
import ProductStyles from "./ProductStyles";
export const Product = function TutorCard(props) {
  const styles = ProductStyles();
  //animate
  const stylesSpring = useSpring({
    loop: { reverse: true },
    from: { x: 0 },
    to: { x: 20 },
  });
  //true hiện aution
  const isAution = props.isAution;
  //true hiện đi đấu giá
  const isGo = props.isGo;
  return (
    <div>
      <Row
        p={1.5}
        gap={2}
        bgcolor={"#f5f5f5"}
        borderRadius={10}
        key={props.key}
        className={styles.root}
      >
        <Item className={styles.go}>
          <Avatar src={Productimg} />
        </Item>
        <Info
          position={"middle"}
          useStyles={useTutorInfoStyles}
          className={styles.go}
        >
          <InfoTitle>Chè khoai môn - khởi điểm: 10k</InfoTitle>
          <InfoSubtitle>hạn chót: 2020-1-1</InfoSubtitle>
        </Info>

        {isGo && (
          <Item position={"middle"} className={styles.goLast}>
            {" "}
            <NavLink to="/photo/1" className={styles.link}>
              <animated.div
                style={{
                  ...stylesSpring,
                }}
              >
                <ArrowForwardIosIcon></ArrowForwardIosIcon>
                <ArrowForwardIosIcon></ArrowForwardIosIcon>
              </animated.div>{" "}
            </NavLink>
          </Item>
        )}
      </Row>

      {isAution && <Auction></Auction>}
    </div>
  );
};
