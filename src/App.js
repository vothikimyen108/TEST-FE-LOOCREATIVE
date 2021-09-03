import logo from "./logo.svg";
import "./App.css";
import Header from "./compontent/Header/Header";
 import MainBaner from "./compontent/Header/MainBanner";
 import BannerQuick from "./compontent/Body/BannerQuick";

 import ContractLayout from "./compontent/Body/ContractLayout";
 import ParallaxCarousel from "./Ui/ParallaxCarousel";
 function App() {
   return (
     //  {/* <Header></Header>
     //  <MainBaner></MainBaner>
     //  <BannerQuick></BannerQuick>
     //  <ContractLayout></ContractLayout> */}

     <ParallaxCarousel></ParallaxCarousel>
   );
 }

export default App;
