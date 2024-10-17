import Back from "@/components/back";
import Project from "@/components/project";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";

export default function Projects() {
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
            <Back />

            <Select defaultValue="civil-projects">
              <SelectTrigger
                style={{
                  background: "rgba(100 100 100/ 10%)",
                  border: "none",
                  fontSize: "1.25rem",
                  outline: "none",
                  padding: "1rem",
                }}
                className="w-[200px]"
              >
                <SelectValue defaultValue={"civil-projects"} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem
                    style={{ fontSize: "1rem" }}
                    defaultChecked
                    value="civil-projects"
                  >
                    Civil Projects
                  </SelectItem>
                  <SelectItem style={{ fontSize: "1rem" }} value="mep-projects">
                    MEP Projects
                  </SelectItem>
                  <SelectItem
                    style={{ fontSize: "1rem" }}
                    value="manufacturing"
                  >
                    Manufacturing
                  </SelectItem>
                  <SelectItem style={{ fontSize: "1rem" }} value="landscaping">
                    Landscaping
                  </SelectItem>
                  <SelectItem
                    style={{ fontSize: "1rem" }}
                    value="road-and-earthworks"
                  >
                    Road & Earthwork
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
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
              img="https://static6.depositphotos.com/1000292/649/i/450/depositphotos_6490033-stock-photo-water-recycling-on-sewage-treatment.jpg"
              title="Project 1"
              desc="Brief description of project 1"
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
