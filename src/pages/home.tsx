import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "../components/header";
import Careers from "./careers";
import OnBoarding from "./onboarding";
import OurTeam from "./our-team";
import Projects from "./projects";
import ContactUs from "./contact-us";


export default function Home(){

    const usenavigate = useNavigate()

    useEffect(()=>{
        usenavigate("/onboarding")
    },[])    

    return(
        <>
        <Header/>
        
        <Routes>
            <Route path="/onboarding" index element={<OnBoarding/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/careers" element={<Careers/>}/>
            <Route path="/our-team" element={<OurTeam/>}/>
            <Route path="/contact-us" element={<ContactUs/>}/>
        </Routes>

        {/* <Footer/> */}

        </>
    )
}