import FindCarByTypeSection from "./Sections/FindCarByType/FindCarByType";
import FirstClassRentalSection from "./Sections/FirstClassRental/FirstClassRental";
import HappyClientsSection from "./Sections/HappyClients/HappyClients";
import IntroductionSection from "./Sections/Introduction/Introduction";
import OurExperienceSection from "./Sections/OurExperience/OurExperience";
import WhyChooseUsSection from "./Sections/WhyChooseUs/WhyChooseUs";

const HomePage = () => {
  return (
    <>
      <IntroductionSection />
      <FirstClassRentalSection />
      <WhyChooseUsSection />
      <FindCarByTypeSection />
      <OurExperienceSection />
      <HappyClientsSection />
    </>
  )
};

export default HomePage;
