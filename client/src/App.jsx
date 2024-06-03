import BaseLayout from "@/layouts/Base/BaseLayout.jsx";
import ScrollToTopButton from "./components/Buttons/ScrollToTopButton/ScrollToTopButton";
import Navbar from "./components/Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { useScroll } from "./hooks/useScroll";
import AuthLayout from "./layouts/Auth/AuthLayout";
import HighwayWithCars from "./components/Animation/HighwayWithCars/HighwayWithCars";
import { useEffect } from "react";
import ProfileLayout from "./layouts/Profile/ProfileLayout";
import { useCarStore } from "./store/car.store";
import { carsDataToLoad } from "./mock/cars.data";

function App() {
  const { createCar, getCars } = useCarStore();
  const { isScrollingStart } = useScroll();
  const { pathname } = useLocation();

  useEffect(() => {
    getCars().then((cars) => {
      if (!cars.length) {
        carsDataToLoad.forEach((carData) => {
          createCar(carData);
        });
      }
    });
  }, []);

  useEffect(() => {
    const preventBodyScroll = pathname.includes("/sign");

    document.body.style.overflowY = preventBodyScroll ? "hidden" : "auto";
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

  if (pathname.startsWith("/profile")) {
    return (
      <>
        <ProfileLayout>
          <Outlet />
        </ProfileLayout>
        <ScrollToTopButton show={isScrollingStart} />
      </>
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
