import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Header from "../components/header";
import Careers from "./careers";
import OnBoarding from "./onboarding";
import OurTeam from "./our-team";
import Projects from "./projects";
import ContactUs from "./contact-us";
import Footer from "@/components/footer";
import Mission from "./mission";
import CivilEngineering from "./what we do/civil-engineering";
import News from "./news";
import Values from "./values";
import Clients from "./clients";

export default function Home() {
  const usenavigate = useNavigate();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    usenavigate("/onboarding");
    setMounted(true);
  }, []);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/onboarding" index element={<OnBoarding />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/our-mission" element={<Mission />} />
        <Route path="/civil-engineering" element={<CivilEngineering />} />
        <Route path="/news" element={<News />} />
        <Route path="/our-values" element={<Values />} />
        <Route path="/clients" element={<Clients />} />
      </Routes>

      {mounted && <Footer />}
    </>
  );
}
