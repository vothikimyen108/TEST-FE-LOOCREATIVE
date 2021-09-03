import Header from "./compontent/Header/Header";
import MainBaner from "./compontent/Header/MainBanner";
import BannerQuick from "./compontent/Body/BannerQuick";
import ContractLayout from "./compontent/Body/ContractLayout";
import SlideLayout from "./compontent/Body/SlideLayout";
import RegulationLayout from "./compontent/Body/RegulationLayout";
import BuleLayout from "./compontent/Body/BuleLayout";
import CardLayout from "./compontent/Body/CardLayout";
import PartnerLayout from "./compontent/Body/PartnerLayout";
import Footer from "./compontent/Footer/Footer";
import LastLayoutt from "./compontent/Body/LastLayout";
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
      <PartnerLayout></PartnerLayout>
      <LastLayoutt></LastLayoutt>
      <Footer></Footer>
    </>
  );
}

export default App;
