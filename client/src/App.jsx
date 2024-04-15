import BaseLayout from "@/layouts/Base/BaseLayout.jsx";
import ScrollToTopButton from "./components/Buttons/ScrollToTopButton/ScrollToTopButton";
import Navbar from "./components/Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { useScroll } from "./hooks/useScroll";
import AuthLayout from "./layouts/Auth/AuthLayout";
import HighwayWithCars from "./components/Animation/HighwayWithCars/HighwayWithCars";
import { useEffect } from "react";

function App() {
  const { isScrollingStart } = useScroll();
  const { pathname } = useLocation();

  useEffect(() => {
    const preventBodyScroll =
      pathname.includes("/cars") || pathname.includes("/sign");

    document.body.style.overflowY = preventBodyScroll ? "hidden" : "scroll";
    preventBodyScroll && window.scrollTo({ top: 0 });
  }, [pathname]);

  if (["/sign-in", "/sign-up"].includes(pathname)) {
    return (
      <AuthLayout>
        <HighwayWithCars />
        <Outlet />
      </AuthLayout>
    );
  }

  return (
    <>
      <BaseLayout>
        <Navbar />
        <Outlet />
        <Footer />
      </BaseLayout>
      <ScrollToTopButton show={isScrollingStart} />
    </>
  );
}

export default App;
