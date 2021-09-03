import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import { Row, Item } from "@mui-treasury/components/flex";
import { Info, InfoTitle, InfoSubtitle } from "@mui-treasury/components/info";
import { useTutorInfoStyles } from "@mui-treasury/styles/info/tutor";
import ArrowRight from "../../../assets/icon/Shape 881 copy 4.png";

///css
import RegulatiomStyles from "./RegulatiomStyles";
export const Regulation = function TutorCard(props) {
  const styles = RegulatiomStyles();
  return (
    <div>
      <Row
        // p={1.5}
        // gap={2}
        borderRadius={0}
        key={props.key}
        className={styles.root}
      >
        <Item className={styles.go}>
          <Avatar src={props.img} className={styles.large} />
        </Item>
        <Info
          position={"middle"}
          useStyles={useTutorInfoStyles}
          className={styles.go}
        >
          <InfoTitle>{props.title}</InfoTitle>
          <InfoSubtitle>{props.titleSub}</InfoSubtitle>
          <InfoSubtitle>{props.titleSub1}</InfoSubtitle>
        </Info>

        <Item position={"middle"} className={styles.goLast}>
          {" "}
          <img src={ArrowRight} alt="anh"></img>
        </Item>
      </Row>
    </div>
  );
};
