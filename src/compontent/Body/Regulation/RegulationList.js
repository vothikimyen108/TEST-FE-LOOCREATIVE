import { makeStyles } from "@material-ui/core/styles";
import contractImg1 from "../../../assets/icon/-e-contract_icon_1.png";
import contractImg2 from "../../../assets/icon/-e-contract_icon_2.png";
import contractImg3 from "../../../assets/icon/-e-contract_icon_3.png";
import contractImg4 from "../../../assets/icon/-e-contract_icon_4.png";
import contractImg5 from "../../../assets/icon/-e-contract_icon_5.png";
import contractImg6 from "../../../assets/icon/-e-contract_icon_6.png";
import { Regulation } from "./Regulation";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      width: "80%",
    },
  },
  item: {
    margin: "20px",
    padding: "15px",
    height: "auto",
    width: "100%",
    border: "1px solid #d4d4d4",
    [theme.breakpoints.up("lg")]: {
      height: "auto",
      width: "33%",
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
    title: "각종 동의서",
    titleSub: "용도에 따라 필요한 ",
    titleSub1: "동의서, 확인서, 신청서 등",
  },
  {
    id: 2,
    img: contractImg2,
    title: "근로 계약서",
    titleSub: "근로자가 취업 후 필요로 하는",
    titleSub1: "근로 계약서, 연봉 계약서 등",
  },
  {
    id: 3,
    img: contractImg3,
    title: "입점 계약서",
    titleSub: "입점 등을 위한 계약 내용을 적은",
    titleSub1: "쇼핑몰, 사무실 입점 계약서 등",
  },
  {
    id: 4,
    img: contractImg4,
    title: "가맹 계약서",
    titleSub: "가맹과 관련된 계약 체결을 위한 ",
    titleSub1: "가맹 [프랜차이즈], 대리점 계약서 등",
  },
  {
    id: 5,
    img: contractImg5,
    title: "용역 계약서",
    titleSub: "용역 계약과 관련된 ",
    titleSub1: "용역, 외주, 위탁, 아웃소싱 계약서 등",
  },
  {
    id: 6,
    img: contractImg6,
    title: "공급 계약서",
    titleSub: "회사의 물품과 관련된 모든",
    titleSub1: "공급, 주문, 발주, 납품 계약서 등",
  },
];
const RegulationList = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {contractList.map((item) => {
        return (
          <div key={item.id} className={classes.item}>
            <Regulation
              img={item.img}
              title={item.title}
              titleSub={item.titleSub}
              titleSub1={item.titleSub1}
            ></Regulation>
          </div>
        );
      })}
    </div>
  );
};
export default RegulationList;
