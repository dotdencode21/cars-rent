import MainLayout from "@/layouts/Main/main.layout.jsx";
import { useEffect, useState } from "react";
import ScrollToTopButton from "./components/Buttons/ScrollToTopButton/ScrollToTopButton";

const Y_OFFSET = 125;

function App() {
  const [scrollValue, setSrollValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setSrollValue(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrollValue]);

  return (
    <>
      <MainLayout />
      {scrollValue >= Y_OFFSET && <ScrollToTopButton /> }
    </>
  );
}

export default App;
