import { Outlet } from "react-router-dom";
import BackToTopBtn from "../../components/BackToTopBtn";
import ScrollToTop from "../../components/ScrollToTop";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <BackToTopBtn />
      <Outlet />   
      <Footer />
    </>
  );
}