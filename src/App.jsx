import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { useState } from "react";
import BackToTop from "./components/ui/BackToTop";

import Footer from "./components/layout/Footer";
import Checkout from "./pages/public/Checkout";


import Navbar from "./components/layout/Navbar";

import Home from "./pages/public/Home";
import ProductDetails from "./pages/public/ProductDetails";
import ScrollToTop from "./utils/ScrollToTop";
import Marketplace from "./pages/public/Marketplace";
import Farmers from "./pages/public/Framers";
import Impact from "./pages/public/Impact";
import Contact from "./pages/public/Contact";
import SplashScreen from "./components/SplashScreen";



function App() {
  const [loading, setLoading] = useState(true);

  // 🚀 SPLASH SCREEN CONTROL
  if (loading) {
    return <SplashScreen onFinish={() => setLoading(false)} />;
  }

  return (
    <BrowserRouter>
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/farmers" element={<Farmers />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/" element={<Home />} />

        <Route
             path="/checkout"
             element={<Checkout />}
          />

        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer/>
      <BackToTop />
    </BrowserRouter>
  );
}
export default App;