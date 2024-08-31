import "./App.css";
import { Contact } from "./assets/components/Contact";
import { Footer } from "./assets/components/Footer";
import { HeroSection } from "./assets/components/HeroSection";
import { Navbar } from "./assets/components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Products } from "./assets/components/Products";
import { About } from "./assets/components/About";
import { CakesSec } from "./assets/components/CakesSec";
import { Error } from "./assets/components/Error";
import { PastriesSec } from "./assets/components/PastriesSec";
import { DonutsSec } from "./assets/components/DonutsSec";
import { SnacksSec } from "./assets/components/SnacksSec";
import { BeveragesSec } from "./assets/components/BeveragesSec";
import { BakerySec } from "./assets/components/BakerySec";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route index element={<HeroSection />} />
          <Route path="*" element={<Error/>}/>
          <Route path="contact" element={<Contact />} />
          <Route path="products" element={<Products />} />
          <Route path="about" element={<About />} />
          <Route path="products/cakescatagory" element={<CakesSec/>} />
          <Route path="products/pastriescatagory" element={<PastriesSec/>} />
          <Route path="products/snackscatagory" element={<SnacksSec/>} />
          <Route path="products/donutscatagory" element={<DonutsSec/>} />
          <Route path="products/bakerycatagory" element={<BakerySec/>} />
          <Route path="products/beveragescatagory" element={<BeveragesSec/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
