import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  title: {
    fontSize: "24px",
    margin: 0,
    padding: 0,
    fontWeight: 900,
    "&:last-child": {
      fontSize: "16px",
      fontWeight: 200,
    },
  },
}));
const Reason = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={props.img} alt={"anh"}></img>
      <p className={classes.title}>{props.title}</p>
      <p className={classes.title}>
        {props.titleSub1}
        <br></br>
        {props.titleSub2}
      </p>
    </div>
  );
};
export default Reason;
