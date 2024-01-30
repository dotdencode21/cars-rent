import FirstClassRentalSection from "./Sections/FirstClassRental/FirstClassRental";
import IntroductionSection from "./Sections/Introduction/Introduction";
import WhyChooseUsSection from "./Sections/WhyChooseUs/WhyChooseUs";

const HomePage = () => {
  return (
    <>
      <IntroductionSection />
      <FirstClassRentalSection />
      <WhyChooseUsSection />
    </>
  )
};

export default HomePage;
