import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsList from "./pages/ProductsList.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import "./index.css";
import Home from "./Home.jsx";
import { CertificatesSection } from "./pages/OurStory.jsx";
import SolutionDetail from "./pages/SolutionDetail.jsx";
import News from "./pages/News.jsx";
import NewsDetails from "./pages/NewsDetails.jsx";
import MainLayout from "./pages/MainLayout.jsx";
import ScrollToTop from "./Component/ScrollTop.jsx";
import Email_ProductDetails from "./pages/GetQoute_Product.jsx";
import GetQuotePage from "./pages/GetQoute.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<ProductsList />} />
        <Route path="products/:id" element={<ProductDetails />}></Route>
        <Route path="ourstory" element={<CertificatesSection />}></Route>
        {/* <Route path="solutions/:id" element={<SolutionDetail />} /> */}
        {/* they dont need that Part I dont know ? */}
        <Route path="news" element={<News />}></Route>
        <Route path="getqoute" element={<GetQuotePage />}></Route>
        <Route path="news/:id" element={<NewsDetails />}></Route>
        <Route path="getqoute/:id" element={<Email_ProductDetails />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
