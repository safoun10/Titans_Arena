import React from "react";
import SupportBanner from "./Components/SupportBanner/SupportBanner";
import FAQSection from "./Components/FAQSection/FAQSection";
import FeedbackSection from "./Components/FeedbackSection/FeedbackSection";
import { Helmet } from "react-helmet-async";


const SupportSection = () => {
  return (
    <div className="bg-[url('https://themedox.com/demo/mykd/assets/img/bg/area_bg02.jpg')]">
      <Helmet>
        <title>Titans Arena || Support</title>
      </Helmet>
      <SupportBanner />
      <FAQSection />
      <FeedbackSection />
    
    </div>
  );
};

export default SupportSection;
