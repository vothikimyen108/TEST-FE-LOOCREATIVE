import logo from "./logo.svg";
import "./App.css";
import Header from "./compontent/Header/Header";
 import MainBaner from "./compontent/Header/MainBanner";
 import BannerQuick from "./compontent/Body/BannerQuick";

 import ContractLayout from "./compontent/Body/ContractLayout";
import { Regulation } from "./compontent/Body/Regulation/Regulation";
import SlideLayout from "./compontent/Body/SlideLayout";
import RegulationList from "./compontent/Body/Regulation/RegulationList";
import RegulationLayout from "./compontent/Body/RegulationLayout";
import BuleLayout from "./compontent/Body/BuleLayout";
import CardLayout from "./compontent/Body/CardLayout";
function App() {
  return (
    <>
      <Header></Header>
      <MainBaner></MainBaner>
      <BannerQuick></BannerQuick>
      <ContractLayout></ContractLayout>
      <SlideLayout></SlideLayout>

      <RegulationLayout></RegulationLayout>
      <BuleLayout></BuleLayout>
      <CardLayout></CardLayout>
    </>
  );
}

export default App;
