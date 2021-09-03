import { makeStyles } from "@material-ui/core/styles";
import contractImg1 from "../../../assets/icon/-e-upload_icon_1.png";
import contractImg2 from "../../../assets/icon/-e-upload_icon_2.png";
import contractImg3 from "../../../assets/icon/-e-upload_icon_3.png";
import contractImg4 from "../../../assets/icon/-e-upload_icon_4.png";

import ContractItem from "./ContractItem";
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
    margin: "10px",
    padding: "20px",
    height: "248px",
    width: "200px",
  },
}));
const contractList = [
  {
    id: 1,
    img: contractImg1,
    title: "업로드하기",
    titleSub: "필요한 계약서 파일을 업로드합니다.",
  },
  {
    id: 2,
    img: contractImg2,
    title: "서명 요청하기",
    titleSub: "업로드한 계약서 파일에 서명 요청을 하세요.",
  },
  {
    id: 3,
    img: contractImg3,
    title: "서명 입력하기",
    titleSub: "상대방이 간단한 절차를 통해 서명할 수 있습니다.",
  },
  {
    id: 4,
    img: contractImg4,
    title: "계약 완료",
    titleSub: "언제 어디서든 5분 만에 계약 완료!.",
  },
];
const Contract = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {contractList.map((item) => {
        return (
          <div key={item.id} className={classes.item}>
            <ContractItem
              img={item.img}
              title={item.title}
              titleSub={item.titleSub}
            ></ContractItem>
          </div>
        );
      })}
    </div>
  );
};
export default Contract;
