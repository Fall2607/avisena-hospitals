import React from "react";
import { HeroSection } from "./components/sections/HeroSection";
import { QuickServicesSection } from "./components/sections/QuickServicesSection";
import { BranchesSection } from "./components/sections/BranchesSection";
import { AboutLeadershipSection } from "./components/sections/AboutLeadershipSection";
import { SpecialtiesSection } from "./components/sections/SpecialtiesSection";
import { FindDoctorSection } from "./components/sections/FindDoctorSection";
import { CommunitySection } from "./components/sections/CommunitySection";
import { InvestorSection } from "./components/sections/InvestorSection";
import { EducationSection } from "./components/sections/EducationSection";
import { CareersSection } from "./components/sections/CareersSection";

export default function AvisenaHomePage() {
  return (
    <>
      <HeroSection />
      <QuickServicesSection />
      <BranchesSection />
      <AboutLeadershipSection />
      <SpecialtiesSection />
      <FindDoctorSection />
      <CommunitySection />
      <InvestorSection />
      <EducationSection />
      <CareersSection />
    </>
  );
}
