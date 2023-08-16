import React from "react";
import SupportBanner from "./Components/SupportBanner/SupportBanner";
import FAQSection from "./Components/FAQSection/FAQSection";

const SupportSection = () => {
  return (
    <div className="bg-[url('https://themedox.com/demo/mykd/assets/img/bg/area_bg02.jpg')]">
      <SupportBanner />
      <FAQSection />
    </div>
  );
};

export default SupportSection;
