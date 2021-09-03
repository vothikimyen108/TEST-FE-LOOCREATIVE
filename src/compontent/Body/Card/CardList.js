import { makeStyles } from "@material-ui/core/styles";
import contractImg1 from "../../../assets/Img/bill-oxford-OXGhu60NwxU-unsplash.png";
import contractImg2 from "../../../assets/Img/sai-kiran-anagani-5Ntkpxqt54Y-unsplash (1).png";
import contractImg3 from "../../../assets/Img/drew-beamer-Se7vVKzYxTI-unsplash.png";

import CardItem from "./CardItem";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    // padding: 10,
  },
  item: {
    margin: "5px",
    padding: "10px",
    height: "100%",
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      height: "100%",
      width: "300px",
    },
    transition: "transform .2s",
    "&:hover": {
      transform: "scale(1.1)",
      cursor: "pointer",
    },
  },
}));
const contractList = [
  {
    id: 1,
    img: contractImg1,
    title: "법적 효력",
    titleSub: "자세히 알아보기",
  },
  {
    id: 2,
    img: contractImg2,
    title: "서비스 보안 ",

    titleSub: "자세히 알아보기",
  },
  {
    id: 3,
    img: contractImg3,
    title: "위변조 검증",
    titleSub: "자세히 알아보기",
  },
];
const CardList = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {contractList.map((item) => {
        return (
          <div key={item.id} className={classes.item}>
            <CardItem
              key={item.id}
              img={item.img}
              title={item.title}
              titleSub={item.titleSub}
            ></CardItem>
          </div>
        );
      })}
    </div>
  );
};
export default CardList;
