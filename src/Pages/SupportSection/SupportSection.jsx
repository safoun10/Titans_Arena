import React from "react";
import SupportBanner from "./Components/SupportBanner/SupportBanner";
import FAQSection from "./Components/FAQSection/FAQSection";
import FeedbackSection from "./Components/FeedbackSection/FeedbackSection";

const SupportSection = () => {
  return (
    <div className="bg-[url('https://themedox.com/demo/mykd/assets/img/bg/area_bg02.jpg')]">
      <SupportBanner />
      <FAQSection />
      <FeedbackSection/>
    </div>
  );
};

export default SupportSection;
