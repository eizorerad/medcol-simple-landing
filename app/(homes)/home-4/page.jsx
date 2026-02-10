import Footer3 from "@/components/footers/Footer3";
import Header2 from "@/components/headers/Header2";
import Blogs from "@/components/homes/home-4/Blogs";
import Brands from "@/components/homes/home-4/Brands";
import Cta from "@/components/homes/home-4/Cta";
import Cta2 from "@/components/homes/home-4/Cta2";
import Facts from "@/components/homes/home-4/Facts";
import Faq from "@/components/homes/home-4/Faq";
import Features from "@/components/homes/home-4/Features";
import Hero from "@/components/homes/home-4/Hero";
import Team from "@/components/homes/home-4/Team";
import Testimonials from "@/components/homes/home-4/Testimonials";
import React from "react";
export const metadata = {
  title:
    "Medcol - Care Starts Before the Visit | AI-Powered Pre-Visit Preparation",
  description:
    "Medcol helps clinics start every visit prepared by turning patient stories into clear, clinician-ready summaries before the appointment.",
};
export default function HomePage4() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg dom-ready bp-xl bp-xxl">
        <Header2 />
        <div id="wrapper" className="wrap">
          <Hero />
          <Brands />
          <Facts />
          <Features />
          <Cta />
          <Testimonials />
          <Faq />
          <Team />
          <Blogs />
          <Cta2 />
        </div>
        <Footer3 />
      </div>
    </>
  );
}
