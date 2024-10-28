import { motion } from "framer-motion";
import CountupSection from "./sections/countup-section";
import LandingSection from "./sections/landing-section";
import NewsAndUpdatesSection from "./sections/news&updates-section";
import ProfileSection from "./sections/profile-section";
import ServicesSection from "./sections/services-section";
import OurClientsSection from "./sections/our-clients-section";
import FeaturedProjects from "./sections/featured-projects";
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
          videoSource="/landing_video.mp4"
          footerText=""
        />

        <ServicesSection />

        <CountupSection />

        <ProfileSection />

        <FeaturedProjects />

        <WorkWithUs />

        <NewsAndUpdatesSection />

        {/* Our Clients Section */}
        <OurClientsSection />
      </motion.div>
    </>
  );
}
