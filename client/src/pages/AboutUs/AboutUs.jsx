import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

import bgAboutUsImg  from "@/assets/imgs/backgrounds/bg-about-us.jpg";

import OurAdventagesSection from "./Sections/OurAdventages/OurAdventages";
import OurHistorySection from "./Sections/OurHistory/OurHistory";

const AboutUsPage = () => {
  return (
    <>
      <Breadcrumbs 
        imgSrc={bgAboutUsImg}
      />
      <OurAdventagesSection />
      <OurHistorySection />
    </>
  );
};

export default AboutUsPage;