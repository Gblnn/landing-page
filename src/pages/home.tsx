import Footer from "@/components/footer";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "../components/header";
import Careers from "./careers";
import Clients from "./clients";
import ContactUs from "./contact-us";
import Mission from "./mission";
import News from "./news";
import OnBoarding from "./onboarding";
import OurTeam from "./our-team";
import Projects from "./projects";
import Values from "./values";
import CivilEngineering from "./what we do/civil-engineering";
import MechanicalDept from "./what we do/mechanical-dept";
import PageNotFound from "./page-not-found";

export default function Home() {
  // const usenavigate = useNavigate();
  // const [mounted, setMounted] = useState(false);

  // useEffect(() => {
  //   usenavigate("/landing");
  //   setMounted(true);
  // }, []);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" index element={<OnBoarding />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/our-mission" element={<Mission />} />
        <Route path="/civil-engineering" element={<CivilEngineering />} />
        <Route path="/mechanical-dept" element={<MechanicalDept />} />
        <Route path="/news" element={<News />} />
        <Route path="/our-values" element={<Values />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      {<Footer />}
    </>
  );
}
