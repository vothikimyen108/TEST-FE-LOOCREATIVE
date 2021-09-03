import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import IconButton from "@material-ui/core/IconButton";
const useStyles = makeStyles((theme) => ({
  root: {
    // width: "300px",
    boxShadow: "none",
    background: "#fff",
    // marginLeft: 40,
    textAlign: "left",
  },
  media: {
    height: 150,
  },
  action: {
    display: "flex",
    justifyContent: "flex-start",
    width: "100%",
    padding: 13,
  },
  iconButton: {
    flexBasis: "50%",
    textAlign: "center",
    display: "flex",
    justifyContent: "flex-end",
    [theme.breakpoints.up("lg")]: {
      flexBasis: "60%",
    },
  },
  text: {
    fontSize: "20px !important",
    fontFamily: "Noto Sans KR sans-serif",
  },
}));

export default function CardItem(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.img}
          title="Contemplative Reptile"
        />
      </CardActionArea>
      <CardContent>
        <Typography variant="body2" component="p" className={classes.text}>
          {props.title} <br></br> {props.titleSub}
        </Typography>
      </CardContent>
      <CardActions className={classes.action}>
        <div>
          {" "}
          <Button size="small">More view</Button>
        </div>
        <div className={classes.iconButton}>
          <IconButton aria-label="delete">
            <ArrowForwardIcon />
          </IconButton>
        </div>
      </CardActions>
    </Card>
  );
}
