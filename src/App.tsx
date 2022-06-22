import "bootstrap/dist/css/bootstrap.min.css";
import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ItemPage from "./components/ItemPage/ItemPage";
import AccessoriesPage from "./pages/AccessoriesPage";
import AirpodsPage from "./pages/AirpodsPage";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import IPadPage from "./pages/IPadPage";
import IPhonePage from "./pages/IPhonePage";
import MacPage from "./pages/MacPage";
import SupportPage from "./pages/SupportPage";
import WatchPage from "./pages/WatchPage";
import { getItemsAsync } from "./store/products/action";

const App: FC = () => {
  let location = useLocation();
  const pathname = location.pathname;
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getItemsAsync(pathname));
  }, [pathname]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/homepage" />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/iphone" element={<IPhonePage />} />
        <Route path="/ipad" element={<IPadPage />} />
        <Route path="/mac" element={<MacPage />} />
        <Route path="/watch" element={<WatchPage />} />
        <Route path="/airpods" element={<AirpodsPage />} />
        <Route path="/accessories" element={<AccessoriesPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/bag" element={<CartPage />} />
        <Route path={`/${pathname}`} element={<ItemPage />} />
      </Routes>
    </>
  );
};

export default App;
