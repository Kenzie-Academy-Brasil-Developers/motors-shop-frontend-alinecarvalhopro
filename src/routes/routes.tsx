import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
// import { ProtectedRoutes } from "./protectedRoutes";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path="/seller" element={<ProtectedRoutes />}>
        <Route index element={<Home />} />
      </Route> */}
    </Routes>
  );
};

export default RoutesMain;
