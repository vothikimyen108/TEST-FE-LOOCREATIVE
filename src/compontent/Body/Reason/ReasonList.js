import Reason from "./Reason";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    // padding: 10,
  },
  item: {
    margin: "10px",
    padding: "10px",
    height: "100%",
    width: "100%",
    // [theme.breakpoints.up("lg")]: {
    //   height: "248px",
    //   width: "200px",
    // },
  },
}));

const ReasonList = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {props.list.map((item) => {
        return (
          <div key={item.id} className={classes.item}>
            <Reason
              img={item.img}
              title={item.title}
              titleSub1={item.titleSub1}
              titleSub2={item.titleSub2}
            ></Reason>
          </div>
        );
      })}
    </div>
  );
};
export default ReasonList;
