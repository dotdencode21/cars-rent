import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

import bgAboutUsImg  from "@/assets/imgs/backgrounds/bg-about-us.jpg";

import OurAdventagesSection from "./Sections/OurAdventages/OurAdventages";

const AboutUsPage = () => {
  return (
    <>
      <Breadcrumbs 
        imgSrc={bgAboutUsImg}
      />
      <OurAdventagesSection />
    </>
  );
};

export default AboutUsPage;