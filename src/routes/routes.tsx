import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import ProductPage from "../pages/ProductPage/ProductPage";
import SellerPage from "../pages/SellerPage/SellerPage";
import NotFound from "../pages/NotFound/NotFound";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/seller/:id" element={<SellerPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesMain;
