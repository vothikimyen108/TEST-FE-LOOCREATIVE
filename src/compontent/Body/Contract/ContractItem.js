import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    textAlign: "center",
    width: "100%",
    "& p": {
      fontSize: "24px",
      margin: 10,
      fontWeight: 900,
      "&:last-child": {
        fontSize: "18px",
        fontWeight: 200,
      },
    },
    "& img": {
      display: "block",
      margin: "0px auto",
    },
  },
}));

const ContractItem = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={props.img} alt="img"></img>
      <div>
        <p>{props.title}</p>
        <p>{props.titleSub}</p>{" "}
      </div>
    </div>
  );
};
export default ContractItem;
