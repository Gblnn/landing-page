import Project from "@/components/project";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FeaturedProjects() {
  const usenavigate = useNavigate();
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <div
        id="projects-page"
        className="page"
        style={{
          border: "",
          height: "auto",
          paddingTop: "1.5rem",
          background: "rgba(100 100 100/ 10%)",
          display: "flex",
          justifyContent: "flex-start",
          flexFlow: "column",
        }}
      >
        <div
          style={{
            margin: "1.25rem",
            marginTop: "6rem",
            border: "",
            width: "",
            display: "flex",
            flexFlow: "column",
            alignItems: "center",
          }}
        >
          <h1
            onClick={() => usenavigate("/projects")}
            className="items-container"
            style={{
              fontSize: "1.5rem",
              fontWeight: 500,
              display: "flex",
              gap: "0.75rem",
              alignItems: "center",
              marginLeft: "1rem",
              border: "",
            }}
          >
            <p style={{ cursor: "pointer" }}>Featured Projects</p>

            <ChevronRight color="crimson" />
          </h1>

          <div
            className="items-container"
            style={{
              border: "",
              display: "flex",
              marginTop: "2rem",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "2rem",
            }}
          >
            <Project
              img="/view_1.png"
              title="MAK Sohar Chemical Industries"
              desc="Complete Construction of Warehouse facility for MAK SOHAR"
            />

            <Project
              img="/pxfuel.jpg"
              title="Project 2"
              desc="Brief description of project 2"
            />

            <Project
              img="https://st4.depositphotos.com/5797516/24306/i/450/depositphotos_243067188-stock-photo-landscape-oil-gas-refinery-manufacturing.jpg"
              title="Project 3"
              desc="Brief description of project 3"
            />

            <Project
              img="https://motionarray.imgix.net/motion-array-1096692-auDdGLclkD-high_0009.jpg?w=660&q=60&fit=max&auto=format"
              title="Project 4"
              desc="Brief description of project 4"
            />
          </div>

          <br />
          <br />
          {/* <div style={{display:"flex", width:"100%", justifyContent:"center"}}>
                <Button onClick={()=>usenavigate("/projects")} variant={"ghost"} style={{width:"32ch", display:"flex", gap:"0.5rem", alignItems:"center", alignSelf:"center", background:"rgba(100 100 100/ 10%)", boxShadow:"1px 1px 10px rgba(0 0 0/ 10%)"}}>See more Projects <ChevronRight width={"1rem"} color="crimson"/></Button>
                </div> */}

          <br />
          <br />
        </div>
      </div>
    </motion.div>
  );
}
