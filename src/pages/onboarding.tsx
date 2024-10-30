import { db } from "@/firebase";
import { collection, getDocs, query } from "firebase/firestore";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import CountupSection from "./sections/countup-section";
import FeaturedProjects from "./sections/featured-projects";
import LandingSection from "./sections/landing-section";
import NewsAndUpdatesSection from "./sections/news&updates-section";
import OurClientsSection from "./sections/our-clients-section";
import ProfileSection from "./sections/profile-section";
import ServicesSection from "./sections/services-section";
import WorkWithUs from "./sections/work-with-us";

export default function OnBoarding() {
  const [fetchingData, setfetchingData] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setfetchingData(true);
      const RecordCollection = collection(db, "records");
      const recordQuery = query(RecordCollection);
      const querySnapshot = await getDocs(recordQuery);
      const fetchedData: any = [];

      querySnapshot.forEach((doc: any) => {
        fetchedData.push({ id: doc.id, ...doc.data() });
      });

      setfetchingData(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <AnimatePresence>
        {fetchingData ? (
          <div
            style={{
              background: "#0f172a",
              position: "fixed",
              border: "",
              width: "100%",
              height: "100svh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: "50",
            }}
          >
            <div>
              <img
                className="animate-pulse"
                style={{ width: "10rem" }}
                src="/log.png"
              />
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.25 }}
          >
            <LandingSection
              title="Explore Endless Possibilities."
              subtitle="Plan | Produce | Deliver"
              videoSource="/video.mp4"
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
        )}
      </AnimatePresence>
    </>
  );
}
