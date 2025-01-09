import { motion } from "framer-motion";
import CountupSection from "./sections/countup-section";
import FeaturedProjects from "./sections/featured-projects";
import LandingSection from "./sections/landing-section";
import NewsAndUpdatesSection from "./sections/news&updates-section";
import OurClientsSection from "./sections/our-clients-section";
import ProfileSection from "./sections/profile-section";
import ServicesSection from "./sections/services-section";
import WorkWithUs from "./sections/work-with-us";

export default function OnBoarding() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.25 }}
      >
        <LandingSection
          title="Explore Endless Possibilities."
          subtitle="Plan | Produce | Deliver"
          videoSource="/alt1.mp4"
          footerText=""
        />

        <ServicesSection />

        <CountupSection />

        <NewsAndUpdatesSection />

        <ProfileSection />

        <OurClientsSection />

        <FeaturedProjects />

        <WorkWithUs />
      </motion.div>
    </>
  );
}
